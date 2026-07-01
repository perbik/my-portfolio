import { ProjectCard } from "@/components/cards/ProjectCard";
import { ProjectFilters } from "@/components/projects/ProjectFilters";
import { PageTitle } from "@/components/ui/PageTitle";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/Pagination";
import { projects } from "@/data/projects";

const PROJECTS_PER_PAGE = 6;

type ProjectsPageProps = {
	searchParams: Promise<{
		page?: string;
		category?: "All" | "Web" | "Mobile";
	}>;
};

// lipat
export default async function ProjectsPage({
	searchParams,
}: ProjectsPageProps) {
	const { page, category } = await searchParams;

	const selectedCategory = category ?? "All";

	const currentPage = Math.max(Number(page) || 1, 1);

	const filteredProjects =
		selectedCategory === "All"
			? projects
			: projects.filter((project) => project.category === selectedCategory);

	const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);

	const paginatedProjects = filteredProjects.slice(
		(currentPage - 1) * PROJECTS_PER_PAGE,
		currentPage * PROJECTS_PER_PAGE,
	);

	return (
		<div className="mx-auto max-w-7xl px-6 pt-10 pb-16">
			<div className="mb-12">
				<PageTitle eyebrow="Works" title="Project Showcase." />
			</div>

			<div className="mb-10">
				<ProjectFilters selected={selectedCategory} />
			</div>

			<div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
				{paginatedProjects.map((project) => (
					<ProjectCard
						key={project.slug}
						title={project.title}
						image={project.image}
						imageSizes="(max-width: 767px) calc(100vw - 3rem), (max-width: 1279px) calc(50vw - 2.5rem), 389px"
						details={project.details}
						badges={project.badges}
						href={`/projects/${project.slug}`}
					/>
				))}
			</div>

			{totalPages > 1 && (
				<Pagination className="mt-16">
					<PaginationContent>
						<PaginationItem>
							<PaginationPrevious
								href={
									currentPage > 1 ? `/projects?page=${currentPage - 1}` : "#"
								}
							/>
						</PaginationItem>

						{Array.from({ length: totalPages }, (_, index) => {
							const pageNumber = index + 1;

							return (
								<PaginationItem key={pageNumber}>
									<PaginationLink
										href={`/projects?page=${pageNumber}`}
										isActive={currentPage === pageNumber}
									>
										{pageNumber}
									</PaginationLink>
								</PaginationItem>
							);
						})}

						<PaginationItem>
							<PaginationNext
								href={
									currentPage < totalPages
										? `/projects?page=${currentPage + 1}`
										: "#"
								}
							/>
						</PaginationItem>
					</PaginationContent>
				</Pagination>
			)}
		</div>
	);
}

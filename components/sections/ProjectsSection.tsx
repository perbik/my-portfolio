import Link from "next/link";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { projects } from "@/data/projects";

export function ProjectsSection() {
	return (
		<section className="mx-auto max-w-7xl px-6 py-24">
			<div className="mb-8 flex items-center justify-between">
				<h2 className="font-heading font-bold text-5xl">Projects</h2>

				<Link
					href="/projects"
					className="text-portfolio-muted text-sm transition hover:underline"
				>
					ALL PROJECTS →
				</Link>
			</div>

			<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
				{projects.slice(0, 3).map((project) => (
					<ProjectCard
						key={project.slug}
						title={project.title}
						details={project.details}
						image={project.image}
						badges={project.badges}
						href={`/projects/${project.slug}`}
					/>
				))}
			</div>
		</section>
	);
}

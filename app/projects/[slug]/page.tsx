import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/Badge";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";

import { getProjectBySlug, projects } from "@/data/projects";

interface ProjectPageProps {
	params: Promise<{
		slug: string;
	}>;
}

// Iterate over the projects and generate project pages based on the slug
export async function generateStaticParams() {
	return projects.map((project) => ({
		slug: project.slug,
	}));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
	const { slug } = await params;

	const project = getProjectBySlug(slug);

	if (!project) {
		notFound();
	}

	return (
		<div className="mx-auto max-w-7xl px-6 pt-10 pb-16">
			<Breadcrumb className="mb-8">
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink asChild>
							<Link href="/">Home</Link>
						</BreadcrumbLink>
					</BreadcrumbItem>

					<BreadcrumbSeparator />

					<BreadcrumbItem>
						<BreadcrumbLink asChild>
							<Link href="/projects">Projects</Link>
						</BreadcrumbLink>
					</BreadcrumbItem>

					<BreadcrumbSeparator />

					<BreadcrumbItem>
						<BreadcrumbPage>{project.title}</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<div className="flex flex-wrap items-center gap-4">
				<h1 className="font-heading text-5xl font-black tracking-tight md:text-7xl">
					{project.title}
				</h1>

				<Badge variant="secondary">{project.collaboration} Project</Badge>
			</div>

			<div className="relative mt-8 aspect-16/8 w-full overflow-hidden bg-muted">
				<Image
					src={project.image}
					alt={project.title}
					width={1600}
					height={800}
					sizes="100vw"
					loading="eager"
					className="size-full object-cover"
				/>
			</div>

			<div className="mt-16 grid gap-16 lg:grid-cols-[2fr_1fr]">
				<div>
					<p className="text-lg text-muted-foreground font-sans text-justify">
						{project.details}
					</p>

					<div className="mt-10 flex flex-wrap gap-4">
						{project.github ? (
							<Button asChild>
								<Link
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
								>
									GitHub
								</Link>
							</Button>
						) : null}

						{project.live ? (
							<Button variant="outline" asChild>
								<Link
									href={project.live}
									target="_blank"
									rel="noopener noreferrer"
								>
									Live Site
								</Link>
							</Button>
						) : null}
					</div>
				</div>

				<div>
					<p className="mb-4 font-mono text-sm tracking-widest text-muted-foreground">
						STACK
					</p>

					<div className="flex flex-wrap gap-3">
						{project.badges.map((badge) => (
							<Badge key={badge} variant="outline">
								{badge}
							</Badge>
						))}
					</div>

					<div className="mt-10 border-foreground border-t-2 pt-8">
						<p className="mb-4 font-mono text-sm tracking-widest text-muted-foreground">
							MY ROLES
						</p>

						<div className="flex flex-wrap gap-3">
							{project.roles.map((role) => (
								<Badge key={role} variant="outline">
									{role}
								</Badge>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

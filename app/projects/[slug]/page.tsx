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

type ProjectPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({
    params,
}: ProjectPageProps) {
    const { slug } = await params;

    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="mx-auto max-w-7xl px-6 py-24">
            <Breadcrumb className="mb-8">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/">
                                Home
                            </Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbSeparator />

                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/projects">
                                Projects
                            </Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbSeparator />

                    <BreadcrumbItem>
                        <BreadcrumbPage>
                            {project.title}
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <h1 className="font-heading text-5xl font-black tracking-tight md:text-7xl">
                {project.title}
            </h1>

            <div className="relative mt-8 aspect-16/8 w-full overflow-hidden bg-muted">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority
                    className="object-cover"
                />
            </div>

            <div className="mt-16 grid gap-16 lg:grid-cols-[2fr_1fr]">
                <div>
                    <p className="text-lg text-muted-foreground font-sans text-justify">
                        {project.details}
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <Button asChild>
                            <Link href={project.github ?? "#"} target="_blank" rel="noopener noreferrer">
                                GitHub
                            </Link>
                        </Button>

                        <Button variant="outline" asChild>
                            <Link href={project.live ?? "#"} target="_blank" rel="noopener noreferrer">
                                Live Site
                            </Link>
                        </Button>
                    </div>
                </div>

                <div>
                    <p className="mb-4 font-mono text-sm uppercase tracking-widest text-muted-foreground">
                        Stack
                    </p>

                    <div className="flex flex-wrap gap-3">
                        {project.badges.map((badge) => (
                            <Badge key={badge} variant="outline">
                                {badge}
                            </Badge>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
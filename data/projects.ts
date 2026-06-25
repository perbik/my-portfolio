export type Project = {
    slug: string;
    title: string;
    image: string;
    badges: string[];
    details: string;
};

export const projects: Project[] = [
    {
        slug: "project-one",
        title: "Project One",
        image: "/images/project1.jpg",
        badges: ["React", "Next.js", "Tailwind"],
        details:
            "A scalable front-end application built with React and Next.js, featuring a responsive user interface, reusable component architecture, and modern animation techniques. The project focuses on performance, accessibility, and maintainable code while delivering a polished user experience across desktop and mobile devices.",
    },
    {
        slug: "project-two",
        title: "Project Two",
        image: "/images/project2.jpg",
        badges: ["TypeScript", "Node.js"],
        details:
            "A full-stack TypeScript application designed to demonstrate robust API development, server-side rendering, and structured component design. The project emphasizes type safety, clean architecture, and efficient data handling while showcasing best practices for scalable web applications.",
    },
    {
        slug: "project-three",
        title: "Project Three",
        image: "/images/project3.jpg",
        badges: ["Svelte", "Vite"],
        details:
            "A modern web application built with Svelte and Vite, focused on delivering fast interactions and an intuitive user experience.",
    },
];

export function getProjectBySlug(slug: string) {
    return projects.find((project) => project.slug === slug);
}


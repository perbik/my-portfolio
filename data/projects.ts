export type ProjectCategory = "Web" | "Mobile";

export type Project = {
    slug: string;
    title: string;
    category: ProjectCategory;
    image: string;
    details: string;
    badges: string[];
    github?: string;
    live?: string;
};

export const projects: Project[] = [
    {
        slug: "project-one",
        title: "Project One",
        category: "Web",
        image: "/images/project1.jpg",
        details:
            "A scalable front-end application built with React and Next.js, featuring a responsive user interface, reusable component architecture, and modern animation techniques. The project focuses on performance, accessibility, and maintainable code while delivering a polished user experience across desktop and mobile devices.",
        badges: ["React", "Next.js", "Tailwind CSS"],
        github: "https://github.com/yourusername/project-one",
        live: "https://project-one.vercel.app",
    },
    {
        slug: "project-two",
        title: "Project Two",
        category: "Web",
        image: "/images/project2.jpg",
        details:
            "A full-stack TypeScript application designed to demonstrate robust API development, server-side rendering, and structured component design. The project emphasizes type safety, clean architecture, and efficient data handling while showcasing best practices for scalable web applications.",
        badges: ["TypeScript", "Node.js"],
        github: "https://github.com/yourusername/project-two",
        live: "https://project-two.vercel.app",
    },
    {
        slug: "project-three",
        title: "Project Three",
        category: "Mobile",
        image: "/images/project3.jpg",
        details:
            "A modern mobile application built with Svelte and Vite, focused on delivering fast interactions and an intuitive user experience.",
        badges: ["Svelte", "Vite"],
        github: "https://github.com/yourusername/project-three",
    },
    {
        slug: "project-four",
        title: "Project Four",
        category: "Web",
        image: "/images/project4.jpg",
        details:
            "An e-commerce platform featuring product browsing, shopping cart functionality, and secure authentication. Built with a component-driven architecture to ensure scalability, responsiveness, and maintainable code.",
        badges: ["Next.js", "Prisma", "PostgreSQL"],
        github: "https://github.com/yourusername/project-four",
        live: "https://project-four.vercel.app",
    },
    {
        slug: "project-five",
        title: "Project Five",
        category: "Web",
        image: "/images/project5.jpg",
        details:
            "An analytics dashboard that visualizes business metrics through interactive charts, tables, and filtering capabilities. Designed with performance optimization and accessibility in mind.",
        badges: ["React", "Chart.js", "Tailwind CSS"],
        github: "https://github.com/yourusername/project-five",
        live: "https://project-five.vercel.app",
    },
    {
        slug: "project-six",
        title: "Project Six",
        category: "Mobile",
        image: "/images/project6.jpg",
        details:
            "A cross-platform task management application with offline support, intuitive navigation, and synchronized cloud storage to improve productivity across devices.",
        badges: ["React Native", "Expo", "Firebase"],
        github: "https://github.com/yourusername/project-six",
    },
    {
        slug: "project-seven",
        title: "Project Seven",
        category: "Web",
        image: "/images/project7.jpg",
        details:
            "A portfolio website showcasing creative projects with smooth animations, responsive layouts, and optimized asset loading. The project highlights clean UI design and SEO best practices.",
        badges: ["Astro", "Tailwind CSS", "Framer Motion"],
        github: "https://github.com/yourusername/project-seven",
        live: "https://project-seven.vercel.app",
    },
    {
        slug: "project-eight",
        title: "Project Eight",
        category: "Mobile",
        image: "/images/project8.jpg",
        details:
            "An AI-powered document assistant that summarizes uploaded files, answers contextual questions, and provides semantic search capabilities using modern language models.",
        badges: ["Next.js", "OpenAI API", "Supabase"],
        github: "https://github.com/yourusername/project-eight",
        live: "https://project-eight.vercel.app",
    },
];

// lipat
export function getProjectBySlug(slug: string) {
    return projects.find((project) => project.slug === slug);
}

export function getProjectsByCategory(category: ProjectCategory | "All") {
    if (category === "All") {
        return projects;
    }

    return projects.filter((project) => project.category === category);
}
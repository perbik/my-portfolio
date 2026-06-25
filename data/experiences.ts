export interface Experience {
    readonly date: string;
    readonly title: string;
    readonly description: string;
}

export const experiences: readonly Experience[] = [
    {
        date: "Jun 2026 - Present",
        title: "Software Engineering Intern",
        description:
            "Worked across the full product lifecycle, building scalable features and collaborating with cross-functional teams.",
    },
    {
        date: "Mar 2026 - Jun 2026",
        title: "Software QA Intern",
        description:
            "Created test plans, validated releases, and ensured product quality through manual and automated testing.",
    },
    {
        date: "Oct 2025 - Dec 2025",
        title: "Project Management Intern",
        description:
            "Managed timelines, coordinated stakeholders, and tracked project deliverables.",
    },
    {
        date: "Jul 2025 - Sep 2025",
        title: "Programmer Intern",
        description:
            "Developed web applications and implemented frontend and backend features.",
    },
] as const;
export interface TechItem {
    readonly name: string;
    readonly icon: string;
}

export interface TechCategory {
    readonly category: string;
    readonly items: readonly TechItem[];
}

export const techStack: readonly TechCategory[] = [
    {
        category: "Languages",
        items: [
            { name: "JavaScript", icon: "javascript" },
            { name: "TypeScript", icon: "typescript" },
            { name: "HTML", icon: "html" },
            { name: "CSS", icon: "css" },
            { name: "PHP", icon: "php" },
            { name: "Tailwind CSS", icon: "tailwind" },
        ],
    },
    {
        category: "Tools",
        items: [
            { name: "Git", icon: "git" },
            { name: "Bitbucket", icon: "bitbucket" },
            { name: "Jira", icon: "jira" },
            { name: "Figma", icon: "figma" },
        ],
    },
] as const;

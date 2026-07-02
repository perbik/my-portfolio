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
			"Developed applications including a portfolio, blog site, and Kanban board using Next.js, React, TypeScript, Tailwind CSS, Neon, Clerk, and Vercel. Implemented features, fixed bugs, and enhanced overall application performance and user experience.",
	},
	{
		date: "Mar 2026 - Jun 2026",
		title: "Software QA Intern",
		description:
			"Performed manual functional, UI, and usability testing for web and mobile applications. Created and executed test cases, documented and tracked bugs, updated user manuals and system documentation, and collaborated with the team to resolve issues and maintain software quality.",
	},
	{
		date: "Oct 2025 - Dec 2025",
		title: "Project Management Intern",
		description:
			"Supported project management activities by coordinating with development teams, managing Jira tickets, maintaining project documentation and timelines, preparing monthly reports, and collaborating through Jira, Slack, and client meetings.",
	},
	{
		date: "Jul 2025 - Sep 2025",
		title: "Programmer Intern",
		description:
			"Worked as a backend developer mainly using Laravel-PHP and JavaScript, implementing core features for multiple projects while maintaining and improving existing systems.",
	},
] as const;

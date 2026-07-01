import type { Metadata } from "next";

import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";

export const metadata: Metadata = {
	title: "Fervicmar Lagman — Software Engineer, QA, and Project Manager",
	description:
		"Portfolio of Fervicmar Lagman, featuring software engineering, quality assurance, and project management work.",
	openGraph: {
		title: "Fervicmar Lagman — Software Engineer, QA, and Project Manager",
		description:
			"Explore Fervicmar Lagman's software engineering, quality assurance, and project management portfolio.",
		type: "website",
		locale: "en_US",
		siteName: "Fervicmar Portfolio",
	},
};

export default function Home() {
	return (
		<main>
			<HeroSection />
			<AboutSection />
			<ProjectsSection />
			<ContactSection />
		</main>
	);
}

import type { Metadata } from "next";

import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";

export const metadata: Metadata = {
	title: "Fervicmar Lagman",
	description: "Portfolio of Fervicmar Lagman",
	openGraph: {
		title: "Fervicmar Lagman",
		description: "Explore Fervicmar Lagman's projects and journey in tech.",
		type: "website",
		locale: "en_US",
		siteName: "Fervicmar Portfolio",
	},
};

export default function Home() {
	return (
		<>
			<HeroSection />
			<AboutSection />
			<ProjectsSection />
			<ContactSection />
		</>
	);
}

"use client";

import { useScroll } from "motion/react";
import { useRef } from "react";

import { AboutCopy } from "@/components/about/AboutCopy";
import { AboutPortrait } from "@/components/about/AboutPortrait";

export function AboutSection() {
	const sectionRef = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start start", "end end"],
	});

	return (
		<section
			ref={sectionRef}
			className="relative border-foreground border-y-2 bg-background md:h-[200vh]"
		>
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_50%,rgba(255,206,27,0.12),transparent_31%)]" />

			<div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl grid-cols-1 items-center gap-12 overflow-hidden px-6 py-24 md:sticky md:top-0 md:min-h-screen md:grid-cols-[1.1fr_0.9fr] md:gap-16">
				<AboutCopy progress={scrollYProgress} />
				<AboutPortrait progress={scrollYProgress} />
			</div>
		</section>
	);
}

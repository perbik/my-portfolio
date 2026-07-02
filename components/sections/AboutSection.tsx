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
			className="relative h-[180svh] border-foreground border-y-2 bg-background sm:h-[190svh] md:h-[200vh]"
		>
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_50%,rgba(255,206,27,0.12),transparent_31%)]" />

			<div className="sticky top-0 mx-auto grid h-svh max-w-7xl grid-cols-1 items-center overflow-hidden px-4 py-8 sm:px-6 sm:py-12 md:min-h-screen md:grid-cols-[1.1fr_0.9fr] md:gap-16 md:py-24">
				<AboutCopy progress={scrollYProgress} />
				<AboutPortrait progress={scrollYProgress} />
			</div>
		</section>
	);
}

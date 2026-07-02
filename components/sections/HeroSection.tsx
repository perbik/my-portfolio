"use client";

import Link from "next/link";

import { HeroDecorations } from "@/components/hero/HeroDecorations";
import { Marquee } from "@/components/hero/Marquee";
import { RotatingRole } from "@/components/hero/RotatingRole";
import { ArrowRightIcon } from "@/components/icons/ArrowRightIcon";
import { Button } from "@/components/ui/Button";
import { useHeroParallax } from "@/lib/useHeroParallax";

export function HeroSection() {
	const parallax = useHeroParallax();

	return (
		<section className="relative flex min-h-[calc(100svh-10rem)] flex-col overflow-hidden bg-background md:min-h-[calc(100svh-5rem)]">
			<HeroDecorations {...parallax} />

			<div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-12 py-12 text-center sm:px-6 sm:py-16">
				<h1 className="font-display text-5xl leading-[0.9] uppercase min-[380px]:text-6xl sm:text-8xl lg:text-9xl">
					Fervicmar Lagman
				</h1>

				<RotatingRole />

				<p className="mt-6 max-w-3xl text-balance font-sans text-base leading-relaxed sm:mt-8 sm:text-lg">
					A Computer Science student at the Polytechnic University of the
					Philippines passionate about designing, developing, and testing modern
					web applications.
				</p>

				<div className="mt-10 flex w-full flex-wrap justify-center gap-4 max-[420px]:max-w-xs max-[420px]:flex-col sm:mt-16 sm:gap-6">
					<Button asChild size="md" className="max-[420px]:w-full">
						<Link href="/projects">
							View Projects
							<ArrowRightIcon className="size-4" />
						</Link>
					</Button>

					<Button
						asChild
						size="md"
						variant="secondary"
						className="bg-portfolio-yellow max-[420px]:w-full"
					>
						<Link href="/contact">Get in Touch</Link>
					</Button>
				</div>
			</div>

			<Marquee />
		</section>
	);
}

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
		<section className="relative flex min-h-[calc(100vh-5rem)] flex-col overflow-hidden bg-background">
			<HeroDecorations {...parallax} />

			<div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-6 text-center">
				<h1 className="font-display text-6xl leading-none uppercase sm:text-8xl lg:text-9xl">
					Fervicmar Lagman
				</h1>

				<RotatingRole />

				<p className="mt-8 max-w-3xl text-balance font-sans text-lg leading-relaxed">
					A Computer Science student at the Polytechnic University of the
					Philippines passionate about designing, developing, and testing modern
					web applications.
				</p>

				<div className="mt-16 flex flex-wrap justify-center gap-6">
					<Button asChild size="md">
						<Link href="/projects">
							View Projects
							<ArrowRightIcon className="size-4" />
						</Link>
					</Button>

					<Button
						asChild
						size="md"
						variant="secondary"
						className="bg-portfolio-yellow"
					>
						<Link href="/contact">Get in Touch</Link>
					</Button>
				</div>
			</div>

			<Marquee />
		</section>
	);
}

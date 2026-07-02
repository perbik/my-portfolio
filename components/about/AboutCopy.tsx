"use client";

import {
	type MotionValue,
	motion,
	useReducedMotion,
	useTransform,
} from "motion/react";
import Link from "next/link";

import { Button } from "@/components/ui/Button";

import { ScrollRevealWords } from "./ScrollRevealWords";

const description =
	"Every project I build reflects a journey through Software Engineering, Project Management, and Software Quality Assurance—learning how great products come together.";

interface AboutCopyProps {
	progress: MotionValue<number>;
}

export function AboutCopy({ progress }: AboutCopyProps) {
	const shouldReduceMotion = useReducedMotion();
	const progressLineWidth = useTransform(
		progress,
		[0.15, 0.85],
		["0%", "100%"],
	);

	return (
		<div className="relative z-10">
			<p className="mb-4 flex items-center gap-3 font-sans text-xl font-bold uppercase sm:mb-6 sm:text-2xl lg:text-3xl">
				<span
					className="size-3 shrink-0 bg-portfolio-yellow sm:size-4"
					aria-hidden
				/>
				About
			</p>

			<div className="mb-6 h-0.5 w-full max-w-md overflow-hidden bg-foreground/20 sm:mb-10">
				<motion.div
					style={{ width: shouldReduceMotion ? "100%" : progressLineWidth }}
					className="h-full bg-foreground"
				/>
			</div>

			<h2
				aria-label="The person behind the commits."
				className="max-w-2xl font-display text-4xl leading-[0.9] uppercase min-[380px]:text-5xl sm:text-6xl lg:text-8xl"
			>
				<span aria-hidden="true">
					<span className="block">
						<ScrollRevealWords
							progress={progress}
							text="The person behind"
							start={0.05}
							end={0.2}
						/>
					</span>
					<span className="block">
						<ScrollRevealWords
							progress={progress}
							text="the commits."
							start={0.2}
							end={0.3}
						/>
					</span>
				</span>
			</h2>

			<p className="mt-5 max-w-2xl font-sans text-base font-semibold leading-relaxed sm:mt-8 sm:text-xl">
				<span className="sr-only">{description}</span>
				<span aria-hidden="true">
					<ScrollRevealWords
						progress={progress}
						text={description}
						start={0.25}
						end={0.65}
					/>
				</span>
			</p>

			<Button
				asChild
				size="md"
				variant="secondary"
				className="mt-7 bg-portfolio-yellow sm:mt-10"
			>
				<Link href="/about">Learn More</Link>
			</Button>
		</div>
	);
}

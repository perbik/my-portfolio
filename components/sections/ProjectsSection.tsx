"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";

import { ProjectCard } from "@/components/cards/ProjectCard";
import { ArrowRightIcon } from "@/components/icons/ArrowRightIcon";
import { Button } from "@/components/ui/Button";
import { projects } from "@/data/projects";

export function ProjectsSection() {
	const shouldReduceMotion = useReducedMotion();

	return (
		<section className="relative overflow-hidden border-foreground border-b-2 bg-portfolio-cream">
			<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(20,20,20,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,20,20,0.035)_1px,transparent_1px)] bg-size-32px_32px" />

			<div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-20">
				<motion.div
					initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
					className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
				>
					<div>
						<p className="mb-6 flex items-center gap-3 font-sans text-xl font-bold uppercase sm:text-2xl lg:text-3xl">
							<span
								className="size-3 shrink-0 bg-portfolio-yellow sm:size-4"
								aria-hidden
							/>
							Projects
						</p>

						<h2 className="max-w-4xl text-balance font-display text-5xl leading-[0.88] uppercase sm:text-6xl lg:text-7xl">
							Things I&apos;ve Worked On
						</h2>
					</div>

					<Button
						asChild
						size="md"
						variant="secondary"
						className="shrink-0 bg-portfolio-yellow"
					>
						<Link href="/projects">
							View All
							<ArrowRightIcon className="size-4" />
						</Link>
					</Button>
				</motion.div>

				<div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
					{projects.slice(0, 3).map((project, index) => (
						<motion.div
							key={project.slug}
							initial={
								shouldReduceMotion
									? false
									: {
											opacity: 0,
											y: 64,
											scale: 0.94,
											rotate: index % 2 === 0 ? -1.5 : 1.5,
										}
							}
							whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
							whileHover={shouldReduceMotion ? undefined : { y: -4 }}
							viewport={{
								once: true,
								amount: 0.25,
								margin: "0px 0px -8% 0px",
							}}
							transition={{
								type: "spring",
								stiffness: 90,
								damping: 18,
								delay: shouldReduceMotion ? 0 : index * 0.12,
							}}
							className="h-full origin-bottom"
						>
							<ProjectCard
								title={project.title}
								details={project.details}
								image={project.image}
								imageSizes="(max-width: 767px) calc(100vw - 3rem), (max-width: 1023px) calc(50vw - 2.5rem), 389px"
								badges={project.badges}
								collaboration={project.collaboration}
								href={`/projects/${project.slug}`}
								compact
							/>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

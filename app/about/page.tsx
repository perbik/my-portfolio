import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons/ArrowRightIcon";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { Button } from "@/components/ui/Button";
import { PageTitle } from "@/components/ui/PageTitle";

export default function AboutPage() {
	return (
		<>
			<section className="mx-auto max-w-7xl px-6 pt-10 pb-20">
				<div className="grid gap-20 lg:grid-cols-[1.2fr_0.8fr]">
					{/* Left Column */}
					<div className="space-y-8">
						<PageTitle eyebrow="About" title="PM.QA.Engineer." />

						<div className="font-sans max-w-2xl space-y-8 text-lg leading-relaxed text-portfolio-muted">
							<p>
								I&apos;m Fervicmar — a hybrid professional with hands-on
								experience as a Project Manager, Software QA, and Software
								Engineer. I&apos;ve worked across the full product lifecycle:
								defining scope and timelines, validating quality end-to-end, and
								writing the code that makes it all real.
							</p>

							<p>
								That cross-functional background gives me a rare perspective: I
								write code with testability in mind, manage projects with
								technical empathy, and approach QA with an engineer&apos;s
								understanding of root causes — not just surface symptoms.
							</p>

							<p>
								Available for project management, QA, engineering, or hybrid
								roles.
							</p>
						</div>

						<Button asChild>
							<Link href="/contact">
								LET'S WORK TOGETHER
								<ArrowRightIcon className="h-4 w-4" />
							</Link>
						</Button>

						<SkillsSection />
					</div>

					{/* Right Column */}
					<div className="lg:pt-40">
						<ExperienceSection />
					</div>
				</div>
			</section>

			<ContactSection />
		</>
	);
}

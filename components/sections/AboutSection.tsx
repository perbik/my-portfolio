import Image from "next/image";
import Link from "next/link";

import { ArrowRightIcon } from "@/components/icons/ArrowRightIcon";
import { Button } from "@/components/ui/Button";

export function AboutSection() {
	return (
		<section className="bg-black text-white">
			<div className="mx-auto max-w-6xl px-6 py-24">
				<div className="grid gap-16 lg:grid-cols-[2fr_1fr] lg:items-center">
					<div>
						<p className="text-yellow text-3xl font-heading font-semibold uppercase tracking-wider">
							About
						</p>

						<h2 className="font-heading mt-5 text-5xl font-extrabold tracking-tight">
							PROJECT MANAGEMENT. SOFTWARE QA. <br />
							SOFTWARE ENGINEERING.
						</h2>

						<div className="text-portfolio-muted font-sans mt-8 max-w-xl space-y-6 text-base leading-relaxed">
							<p>
								I'm Fervicmar, someone who has lived on all three sides of the
								product lifecycle. I've planned roadmaps as a PM, hunted
								regressions as a QA, and shipped features as an engineer.
							</p>

							<p>
								That cross-functional lens means I write code with testability
								in mind, manage projects with technical empathy, and catch bugs
								before they become incidents.
							</p>
						</div>

						<div className="mt-8">
							<Button variant="outlineLight" asChild>
								<Link href="/about">
									More About Me
									<ArrowRightIcon className="h-4 w-4" />
								</Link>
							</Button>
						</div>
					</div>

					<div className="flex justify-center">
						<div className="relative aspect-square w-full max-w-[320px] overflow-hidden lg:max-w-90">
							<Image
								src="/images/profile.jpg"
								alt="Portrait of Fervicmar"
								fill
								priority
								sizes="(max-width: 1024px) 100vw, 360px"
								className="object-cover"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

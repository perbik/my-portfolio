import Link from "next/link";

import { ArrowRightIcon } from "@/components/icons/ArrowRightIcon";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { roles } from "@/data/roles";

import { Marquee } from "../home/Marquee";

export function HeroSection() {
	return (
		<section>
			<div className="mx-auto max-w-7xl px-6 pt-24">
				<div>
					<div className="font-heading">
						<h1 className="text-5xl font-extrabold tracking-tight lg:text-7xl">
							Hi! I&apos;m
						</h1>

						<h2 className="text-yellow text-6xl font-extrabold tracking-tight lg:text-9xl">
							Fervicmar.
						</h2>
					</div>

					<div className="mt-4 flex flex-wrap gap-3">
						{roles.map((role) => (
							<Badge key={role} variant="outline">
								{role}
							</Badge>
						))}
					</div>

					<div className="mt-8 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
						<p className="max-w-3xl text-lg leading-relaxed lg:text-2xl font-sans">
							A Computer Science Student at Polytechnic University of the
							Philippines with experience in Project Management, Software
							Quality Assurance, and Website Development.
						</p>

						<div className="flex gap-4">
							<Button asChild>
								<Link href="/projects">
									View Projects
									<ArrowRightIcon className="h-4 w-4" />
								</Link>
							</Button>

							<Button variant="outline" asChild>
								<Link href="/about">About Me</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-24">
				<Marquee />
			</div>
		</section>
	);
}

import { ArrowRightIcon } from "@/components/icons/ArrowRightIcon";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { roles } from "@/data/roles";

import { Marquee } from "./Marquee";

export function HomeHero() {
	return (
		<section>
			<div className="mx-auto max-w-7xl px-6 pt-24">
				<div>
					<div className="font-heading">
						<h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight">
							Hi! I'm
						</h1>

						<h2 className="text-6xl lg:text-9xl font-extrabold tracking-tight text-yellow">
							Fervicmar.
						</h2>
					</div>

					<div className="flex flex-wrap gap-3 mt-4">
						{roles.map((role) => (
							<Tag key={role} label={role} variant="outline" />
						))}
					</div>

					<div className="mt-8 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
						<p className="max-w-3xl text-lg leading-relaxed lg:text-2xl">
							A Computer Science Student at Polytechnic University of the
							Philippines with experience in Project Management, Software
							Quality Assurance, and Website Development.
						</p>

						<div className="flex gap-4">
							<Button
								href="/projects"
								icon={<ArrowRightIcon className="h-4 w-4" />}
							>
								View Projects
							</Button>

							<Button href="/about" variant="outline">
								About Me
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

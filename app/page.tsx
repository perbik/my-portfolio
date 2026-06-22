// Hello from Fervicmar

import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";

export default function Home() {
	return (
		<div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-6xl flex-col justify-center px-6 py-12 sm:px-8">
			<div className="space-y-6">
				<div className="flex flex-wrap items-center gap-2">
					<Tag label="Portfolio" />
					<Tag label="Software Engineer" />
					<Tag label="QA & PM" />
				</div>

				<h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
					Hi, I’m Fervicmar. I build polished web experiences and ship
					dependable software.
				</h1>

				<p className="max-w-2xl text-lg text-zinc-600 sm:text-xl">
					I’m a multidisciplinary product professional with a passion for
					user-first design, quality engineering, and modern frontend
					development.
				</p>

				<div className="flex flex-col gap-3 sm:flex-row">
					<Button href="/projects">View Projects</Button>
					<Button href="/about">Learn More</Button>
				</div>
			</div>
		</div>
	);
}

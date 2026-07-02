import { techStack } from "@/data/skills";

export function SkillsSection() {
	return (
		<section className="mt-14 sm:mt-16">
			<h2 className="mb-8 text-2xl font-sans font-semibold">SKILLS & TOOLS</h2>

			<div className="grid grid-cols-1 gap-8 min-[420px]:grid-cols-2 min-[420px]:gap-8 sm:gap-12">
				{techStack.map((group) => (
					<div key={group.category}>
						<h3 className="mb-4 text-sm font-medium text-muted-foreground">
							{group.category}
						</h3>

						<ul className="space-y-3 text-lg font-sans">
							{group.items.map((item) => (
								<li key={item.name}>{item.name}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
}

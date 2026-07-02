import { techStack } from "@/data/skills";

const marqueeItems = techStack.flatMap(({ category, items }) =>
	items.map(({ name }) => ({ category, name })),
);

const marqueeCopies = ["first", "second"] as const;

export function Marquee() {
	return (
		<section
			className="relative z-20 w-full overflow-hidden border-foreground border-y-2 bg-foreground py-4 select-none sm:py-5"
			aria-label="Technologies I work with"
		>
			<div className="flex w-max animate-marquee motion-reduce:animate-none">
				{marqueeCopies.map((copy) => (
					<ul
						key={copy}
						className="flex shrink-0 items-center"
						aria-hidden={copy === "second" ? true : undefined}
					>
						{marqueeItems.map(({ category, name }) => (
							<li
								key={`${copy}-${category}-${name}`}
								className="flex items-center whitespace-nowrap"
							>
								<span className="px-6 font-display text-3xl leading-none tracking-wide text-portfolio-yellow uppercase sm:px-8 sm:text-4xl">
									{name}
								</span>
								<span
									className="size-2.5 rotate-45 bg-portfolio-yellow sm:size-3"
									aria-hidden="true"
								/>
							</li>
						))}
					</ul>
				))}
			</div>
		</section>
	);
}

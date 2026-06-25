import {
	SiBitbucket,
	SiCss,
	SiFigma,
	SiGit,
	SiHtml5,
	SiJavascript,
	SiJira,
	SiPhp,
	SiTailwindcss,
	SiTypescript,
} from "react-icons/si";
import { techStack } from "@/data/skills";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } =
	{
		javascript: SiJavascript,
		typescript: SiTypescript,
		html: SiHtml5,
		css: SiCss,
		php: SiPhp,
		tailwind: SiTailwindcss,
		git: SiGit,
		bitbucket: SiBitbucket,
		jira: SiJira,
		figma: SiFigma,
	};

export function Marquee() {
	const marqueeItems = techStack
		.filter((section) => section.category !== "Testing & QA")
		.flatMap((section) => section.items);

	const marqueeCopies = ["first", "second"] as const;

	return (
		<div className="relative overflow-hidden bg-yellow py-6 select-none">
			<div className="flex w-max">
				{marqueeCopies.map((copy) => (
					<div
						key={copy}
						className="flex shrink-0 items-center gap-14 pr-14 animate-marquee"
						aria-hidden={copy !== "first"}
					>
						{marqueeItems.map((item) => {
							const IconComponent = iconMap[item.icon.toLowerCase()];
							return (
								<div
									key={`${copy}-${item.name}`}
									className="flex items-center gap-2 whitespace-nowrap text-black"
								>
									{IconComponent && (
										<IconComponent className="h-6 w-6 shrink-0 text-black" />
									)}

									<span className="font-mono text-lg font-bold uppercase tracking-wider">
										{item.name}
									</span>
								</div>
							);
						})}
					</div>
				))}
			</div>
		</div>
	);
}

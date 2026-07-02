import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/Badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardTitle,
} from "@/components/ui/Card";
import type { ProjectCollaboration } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
	title: string;
	details: string;
	image: string;
	imageSizes: string;
	badges: string[];
	collaboration: ProjectCollaboration;
	href?: string;
	eager?: boolean;
	compact?: boolean;
}

export function ProjectCard({
	title,
	details,
	image,
	imageSizes,
	badges,
	collaboration,
	href,
	eager = false,
	compact = false,
}: ProjectCardProps) {
	const content = (
		<Card
			className={cn(
				"h-full w-full gap-0 overflow-hidden border-2 border-foreground bg-white py-0 shadow-[4px_5px_0_#111] ring-0 transition-transform duration-200 sm:shadow-[8px_10px_0_#111]",
				href && "group-hover:-translate-y-1 group-focus-visible:-translate-y-1",
			)}
		>
			<div
				data-slot="card-media"
				className={cn(
					"relative w-full overflow-hidden border-foreground border-b-2 bg-portfolio-border",
					compact ? "aspect-video" : "aspect-8/5",
				)}
			>
				<Badge
					variant="secondary"
					className="absolute top-2 right-2 z-10 h-7 px-2 text-sm shadow-[3px_3px_0_#111] sm:top-3 sm:right-3 sm:h-8 sm:px-3 sm:text-base"
				>
					{collaboration} Project
				</Badge>

				<Image
					src={image}
					alt={title}
					width={800}
					height={500}
					loading={eager ? "eager" : "lazy"}
					sizes={imageSizes}
					className="size-full object-cover transition-transform duration-500 ease-out group-hover/card:scale-[1.03]"
				/>
			</div>

			<CardContent
				className={cn(
					"flex flex-col px-4 pb-4",
					compact
						? "min-h-48 pt-5 sm:min-h-52"
						: "min-h-52 pt-5 sm:min-h-59 sm:pt-7",
				)}
			>
				<CardTitle className="wrap-break-word font-display text-[1.75rem] leading-none uppercase sm:text-[2rem]">
					{title}
				</CardTitle>

				<CardDescription
					className={cn(
						"mt-3 font-sans text-base leading-[1.2] text-foreground",
						compact ? "line-clamp-3" : "line-clamp-4",
					)}
				>
					{details}
				</CardDescription>

				<div
					className={cn(
						"mt-auto flex flex-wrap gap-1.5",
						compact ? "pt-4" : "pt-5",
					)}
				>
					{badges.slice(0, 3).map((badge) => (
						<Badge
							key={badge}
							variant="blue"
							className="h-7 min-w-19 px-2 text-sm"
						>
							{badge}
						</Badge>
					))}

					{badges.length > 3 && (
						<Badge variant="blue" className="h-7 min-w-19 px-2 text-sm">
							+{badges.length - 3}
						</Badge>
					)}
				</div>
			</CardContent>
		</Card>
	);

	if (!href) {
		return content;
	}

	return (
		<Link
			href={href}
			className="group block h-full w-full focus-visible:outline-2 focus-visible:outline-offset-4"
		>
			{content}
		</Link>
	);
}

import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/Badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardTitle,
} from "@/components/ui/Card";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
	title: string;
	details: string;
	image: string;
	badges: string[];
	href?: string;
};

export function ProjectCard({
	title,
	details,
	image,
	badges,
	href,
}: ProjectCardProps) {
	const content = (
		<Card
			className={cn(
				"overflow-hidden",
				href && "group-hover:-translate-y-1 group-hover:shadow-lg",
			)}
		>
			<div className="relative h-48 w-full overflow-hidden">
				<Image src={image} alt={title} fill className="object-cover" />
			</div>

			<CardContent>
				<CardTitle className="font-heading font-bold">{title}</CardTitle>

				<CardDescription className="mt-2 line-clamp-3 font-sans">
					{details}
				</CardDescription>

				<div className="mt-4 flex flex-wrap gap-2">
					{badges.slice(0, 3).map((badge) => (
						<Badge key={badge}>{badge}</Badge>
					))}

					{badges.length > 3 && <Badge>+{badges.length - 3}</Badge>}
				</div>
			</CardContent>
		</Card>
	);

	if (!href) {
		return content;
	}

	return (
		<Link href={href} className="group block">
			{content}
		</Link>
	);
}

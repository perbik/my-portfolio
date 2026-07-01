import type * as React from "react";

import { cn } from "@/lib/utils";

export function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			aria-hidden="true"
			className={cn(
				"relative overflow-hidden rounded-none bg-foreground/10 after:absolute after:inset-0 after:-translate-x-full after:bg-linear-to-r after:from-transparent after:via-white/70 after:to-transparent after:animate-[skeleton-shimmer_1.6s_ease-in-out_infinite] motion-reduce:after:animate-none",
				className,
			)}
			{...props}
		/>
	);
}

"use client";
import { Separator as SeparatorPrimitive } from "radix-ui";
import type * as React from "react";

import { cn } from "@/lib/utils";

interface SeparatorProps
	extends React.ComponentProps<typeof SeparatorPrimitive.Root> {
	className?: string;
}

function Separator({
	className,
	orientation = "horizontal",
	decorative = true,
	...props
}: SeparatorProps) {
	return (
		<SeparatorPrimitive.Root
			data-slot="separator"
			decorative={decorative}
			orientation={orientation}
			className={cn(
				"shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch",
				className,
			)}
			{...props}
		/>
	);
}

export { Separator };

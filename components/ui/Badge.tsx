import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import type * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
	"inline-flex h-10 min-w-fit items-center justify-center border-2 px-4 font-display text-xl leading-none whitespace-nowrap",
	{
		variants: {
			variant: {
				default: "border-[#303030] bg-[#303030] text-white",
				secondary: "border-foreground bg-[#ffe55c] text-foreground",
				outline: "border-foreground bg-background text-foreground",
				blue: "border-foreground text-white",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

interface BadgeProps
	extends React.ComponentProps<"span">,
		VariantProps<typeof badgeVariants> {
	asChild?: boolean;
}

function Badge({
	className,
	variant = "default",
	asChild = false,
	...props
}: BadgeProps) {
	const Comp = asChild ? Slot.Root : "span";

	return (
		<Comp
			data-slot="badge"
			data-variant={variant}
			className={cn(badgeVariants({ variant }), className)}
			{...props}
		/>
	);
}

export { Badge, badgeVariants };

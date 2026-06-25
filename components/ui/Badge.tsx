import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import type * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
	"inline-flex items-center px-4 py-2 text-xs font-mono uppercase transition duration-200 rounded-none",
	{
		variants: {
			variant: {
				default: "bg-tag text-black",
				outline: "border border-portfolio-border bg-white text-black",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

function Badge({
	className,
	variant,
	asChild = false,
	...props
}: React.ComponentProps<"span"> &
	VariantProps<typeof badgeVariants> & {
		asChild?: boolean;
	}) {
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

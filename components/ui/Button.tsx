import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import type * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"group/button inline-flex shrink-0 items-center justify-center font-sans rounded-none border border-transparent bg-clip-padding text-xs font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-1 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
	{
		variants: {
			variant: {
				default: "bg-black text-white hover:opacity-90",
				outline:
					"border border-black bg-transparent text-black hover:bg-black hover:text-white",
				outlineLight:
					"border border-white bg-transparent text-white hover:bg-white hover:text-black",
				secondary: "bg-secondary text-secondary-foreground",
				ghost: "hover:bg-portfolio-muted hover:text-foreground",
				destructive:
					"bg-destructive text-destructive-foreground hover:opacity-90",
				link: "text-primary underline-offset-4 hover:underline",
			},
			size: {
				default: "px-6 py-3 text-sm uppercase gap-2",
				sm: "px-4 py-2 text-xs uppercase gap-2",
				lg: "px-8 py-4 text-base uppercase gap-2",
				icon: "size-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

function Button({
	className,
	variant = "default",
	size = "default",
	asChild = false,
	...props
}: React.ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
	}) {
	const Comp = asChild ? Slot.Root : "button";

	return (
		<Comp
			data-slot="button"
			data-variant={variant}
			data-size={size}
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		/>
	);
}

export { Button, buttonVariants };

import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import type * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"group/button inline-flex shrink-0 items-center justify-center rounded-none border-2 border-foreground bg-clip-padding font-display tracking-wider font-medium whitespace-nowrap uppercase shadow-[4px_5px_0_oklch(0.14_0_0)] transition-all outline-none select-none hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_7px_0_oklch(0.14_0_0)] focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 active:translate-x-0 active:translate-y-0 active:shadow-[2px_2.5px_0_oklch(0.14_0_0)] disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-1 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
	{
		variants: {
			variant: {
				default: "bg-black text-white",
				outline:
					"border-black bg-white text-black hover:bg-black hover:text-white",
				outlineLight:
					"border-white bg-transparent text-white shadow-[4px_5px_0_#ffce1b] hover:bg-white hover:text-black hover:shadow-[6px_7px_0_#ffce1b] active:shadow-[2px_2.5px_0_#ffce1b]",
				secondary: "bg-portfolio-yellow text-secondary-foreground",
				ghost:
					"border-transparent bg-transparent text-foreground shadow-none hover:border-foreground hover:bg-secondary hover:text-foreground hover:shadow-[4px_5px_0_oklch(0.14_0_0)]",
				destructive:
					"bg-destructive text-destructive-foreground hover:bg-destructive/90",
				link: "border-transparent bg-transparent text-primary shadow-none underline-offset-4 hover:translate-x-0 hover:translate-y-0 hover:shadow-none hover:underline",
			},
			size: {
				default: "gap-2 px-6 py-3 text-2xl",
				sm: "gap-2 px-4 py-2 text-sm",
				md: "gap-2 px-6 py-3 text-lg",
				lg: "gap-2 px-8 py-4 text-2xl",
				icon: "size-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

interface ButtonProps
	extends React.ComponentProps<"button">,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

function Button({
	className,
	variant = "default",
	size = "default",
	asChild = false,
	...props
}: ButtonProps) {
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

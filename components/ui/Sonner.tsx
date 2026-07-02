"use client";

import { Toaster as Sonner, type ToasterProps } from "sonner";

interface PortfolioToasterProps extends ToasterProps {
	className?: string;
}

const toastClassNames = {
	toast:
		"group relative flex w-full items-center justify-between gap-3 border-2 border-foreground bg-white p-4 text-foreground shadow-[7px_8px_0_#000]",
	content: "flex min-w-0 flex-1 flex-col gap-1",
	title:
		"flex items-center justify-center font-display text-2xl leading-none tracking-wide uppercase",
	description: "font-sans text-sm leading-snug text-muted-foreground",
	icon: "mt-0.5 flex size-8 shrink-0 items-center justify-center border-2 border-foreground bg-portfolio-yellow font-display text-xl text-foreground",
	closeButton:
		"absolute -top-3 -right-3 flex size-7 items-center justify-center border-2 border-foreground bg-white text-foreground transition-colors hover:bg-portfolio-yellow",
	actionButton:
		"border-2 border-foreground bg-portfolio-yellow px-3 py-2 font-display text-lg leading-none text-foreground uppercase",
	cancelButton:
		"border-2 border-foreground bg-white px-3 py-2 font-display text-lg leading-none text-foreground uppercase",
} satisfies NonNullable<
	NonNullable<ToasterProps["toastOptions"]>["classNames"]
>;

function Toaster({ toastOptions, ...props }: PortfolioToasterProps) {
	return (
		<Sonner
			closeButton
			duration={3000}
			gap={14}
			position="top-right"
			theme="light"
			{...props}
			toastOptions={{
				unstyled: true,
				...toastOptions,
				classNames: {
					...toastClassNames,
					...toastOptions?.classNames,
				},
			}}
		/>
	);
}

export { Toaster };

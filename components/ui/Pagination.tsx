import type * as React from "react";

import { cn } from "@/lib/utils";

interface PaginationProps extends React.ComponentProps<"nav"> {
	className?: string;
}

interface PaginationContentProps extends React.ComponentProps<"ul"> {
	className?: string;
}

interface PaginationItemProps extends React.ComponentProps<"li"> {
	className?: string;
}

interface PaginationDirectionProps extends React.ComponentProps<"a"> {
	className?: string;
}

function Pagination({ className, ...props }: PaginationProps) {
	return (
		<nav
			aria-label="Pagination"
			data-slot="pagination"
			className={cn("flex w-full justify-center", className)}
			{...props}
		/>
	);
}

function PaginationContent({ className, ...props }: PaginationContentProps) {
	return (
		<ul
			data-slot="pagination-content"
			className={cn("flex flex-row items-center gap-1.5 sm:gap-3", className)}
			{...props}
		/>
	);
}

function PaginationItem({ ...props }: PaginationItemProps) {
	return <li data-slot="pagination-item" {...props} />;
}

interface PaginationLinkProps extends React.ComponentProps<"a"> {
	isActive?: boolean;
}

function PaginationLink({
	className,
	isActive = false,
	...props
}: PaginationLinkProps) {
	return (
		<a
			aria-current={isActive ? "page" : undefined}
			data-slot="pagination-link"
			data-active={isActive}
			className={cn(
				"inline-flex h-10 w-10 items-center justify-center border-2 border-foreground bg-white font-display text-xl leading-none text-foreground uppercase transition-[transform,box-shadow,background-color] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-portfolio-yellow hover:shadow-[4px_5px_0_#000] focus-visible:ring-2 focus-visible:ring-ring/50 sm:h-12 sm:w-12 sm:text-2xl",
				isActive && "bg-portfolio-yellow shadow-[4px_5px_0_#000]",
				className,
			)}
			{...props}
		/>
	);
}

function PaginationPrevious({
	className,
	href,
	tabIndex,
	...props
}: PaginationDirectionProps) {
	const isDisabled = href === "#";

	return (
		<PaginationLink
			aria-disabled={isDisabled || undefined}
			aria-label="Go to previous page"
			className={cn(
				"w-auto gap-2 px-4 max-[560px]:size-10 max-[560px]:px-0 sm:w-auto",
				isDisabled && "pointer-events-none opacity-40 shadow-none",
				className,
			)}
			href={href}
			tabIndex={isDisabled ? -1 : tabIndex}
			{...props}
		>
			<svg
				aria-hidden="true"
				className="size-4 shrink-0"
				fill="none"
				stroke="currentColor"
				strokeLinecap="square"
				strokeLinejoin="miter"
				strokeWidth="3"
				viewBox="0 0 24 24"
			>
				<path d="m15 19-7-7 7-7" />
			</svg>
			<span className="max-[560px]:sr-only">Previous</span>
		</PaginationLink>
	);
}

function PaginationNext({
	className,
	href,
	tabIndex,
	...props
}: PaginationDirectionProps) {
	const isDisabled = href === "#";

	return (
		<PaginationLink
			aria-disabled={isDisabled || undefined}
			aria-label="Go to next page"
			className={cn(
				"w-auto gap-2 px-4 max-[560px]:size-10 max-[560px]:px-0 sm:w-auto",
				isDisabled && "pointer-events-none opacity-40 shadow-none",
				className,
			)}
			href={href}
			tabIndex={isDisabled ? -1 : tabIndex}
			{...props}
		>
			<span className="max-[560px]:sr-only">Next</span>
			<svg
				aria-hidden="true"
				className="size-4 shrink-0"
				fill="none"
				stroke="currentColor"
				strokeLinecap="square"
				strokeLinejoin="miter"
				strokeWidth="3"
				viewBox="0 0 24 24"
			>
				<path d="m9 5 7 7-7 7" />
			</svg>
		</PaginationLink>
	);
}

export {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
};

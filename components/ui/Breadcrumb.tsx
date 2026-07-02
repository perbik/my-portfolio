"use client";

import { CaretRightIcon, DotsThreeIcon } from "@phosphor-icons/react";
import { Slot } from "radix-ui";

import type * as React from "react";

import { cn } from "@/lib/utils";

interface BreadcrumbProps extends React.ComponentProps<"nav"> {
	className?: string;
}

interface BreadcrumbListProps extends React.ComponentProps<"ol"> {
	className?: string;
}

interface BreadcrumbItemProps extends React.ComponentProps<"li"> {
	className?: string;
}

interface BreadcrumbLinkProps extends React.ComponentProps<"a"> {
	asChild?: boolean;
}

interface BreadcrumbPageProps extends React.ComponentProps<"span"> {
	className?: string;
}

interface BreadcrumbSeparatorProps extends React.ComponentProps<"li"> {
	className?: string;
}

interface BreadcrumbEllipsisProps extends React.ComponentProps<"span"> {
	className?: string;
}

function Breadcrumb({ className, ...props }: BreadcrumbProps) {
	return (
		<nav
			aria-label="breadcrumb"
			data-slot="breadcrumb"
			className={cn(className)}
			{...props}
		/>
	);
}

function BreadcrumbList({ className, ...props }: BreadcrumbListProps) {
	return (
		<ol
			data-slot="breadcrumb-list"
			className={cn(
				"flex min-w-0 flex-wrap items-center gap-1.5 font-sans text-xs font-semibold tracking-wide text-muted-foreground uppercase wrap-break-word sm:gap-2 sm:text-sm md:text-base",
				className,
			)}
			{...props}
		/>
	);
}

function BreadcrumbItem({ className, ...props }: BreadcrumbItemProps) {
	return (
		<li
			data-slot="breadcrumb-item"
			className={cn("inline-flex min-w-0 items-center gap-2", className)}
			{...props}
		/>
	);
}

function BreadcrumbLink({ asChild, className, ...props }: BreadcrumbLinkProps) {
	const Comp = asChild ? Slot.Root : "a";

	return (
		<Comp
			data-slot="breadcrumb-link"
			className={cn(
				"underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:text-foreground",
				className,
			)}
			{...props}
		/>
	);
}

function BreadcrumbPage({ className, ...props }: BreadcrumbPageProps) {
	return (
		<span
			data-slot="breadcrumb-page"
			aria-current="page"
			className={cn(
				"max-w-full wrap-break-word border-2 border-foreground bg-portfolio-yellow px-2 py-1 text-foreground",
				className,
			)}
			{...props}
		/>
	);
}

function BreadcrumbSeparator({
	children,
	className,
	...props
}: BreadcrumbSeparatorProps) {
	return (
		<li
			data-slot="breadcrumb-separator"
			role="presentation"
			aria-hidden="true"
			className={cn("text-foreground [&>svg]:size-4", className)}
			{...props}
		>
			{children ?? <CaretRightIcon weight="bold" />}
		</li>
	);
}

function BreadcrumbEllipsis({ className, ...props }: BreadcrumbEllipsisProps) {
	return (
		<span
			data-slot="breadcrumb-ellipsis"
			role="presentation"
			aria-hidden="true"
			className={cn(
				"flex size-6 items-center justify-center text-foreground [&>svg]:size-5",
				className,
			)}
			{...props}
		>
			<DotsThreeIcon weight="bold" />
			<span className="sr-only">More</span>
		</span>
	);
}

export {
	Breadcrumb,
	BreadcrumbEllipsis,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
};

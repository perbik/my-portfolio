"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/Button";

type RouteErrorProps = {
	error: Error & { digest?: string };
	reset: () => void;
};

export function RouteError({ error, reset }: RouteErrorProps) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<section className="mx-auto flex min-h-[60vh] max-w-7xl items-center px-6 py-24">
			<div className="max-w-2xl border-l-4 border-yellow pl-6 md:pl-10">
				<p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground">
					Something went wrong
				</p>
				<h1 className="font-heading text-5xl font-black tracking-tight md:text-7xl">
					This page hit a snag.
				</h1>
				<p className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-muted-foreground">
					Sorry about that. Please try again—the next attempt may be all it
					needs.
				</p>
				<Button className="mt-8" onClick={reset}>
					Try again
				</Button>
			</div>
		</section>
	);
}

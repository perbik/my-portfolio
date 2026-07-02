"use client";

import Link from "next/link";
import { useEffect, useTransition } from "react";

import { Button } from "@/components/ui/Button";

interface RouteErrorProps {
	error: Error & { digest?: string };
	reset: () => void;
}

export function RouteError({ error, reset }: RouteErrorProps) {
	const [isPending, startTransition] = useTransition();

	useEffect(() => {
		console.error(error);
	}, [error]);

	function retry() {
		startTransition(() => {
			reset();
		});
	}

	return (
		<section className="flex min-h-[70vh] items-center justify-center px-6 py-20">
			<div className="w-full max-w-3xl border-2 border-foreground bg-white shadow-[10px_12px_0_#111]">
				<div className="flex h-11 items-center gap-2 border-foreground border-b-2 px-4">
					<span className="size-3 bg-red-500" aria-hidden="true" />
					<span className="size-3 bg-portfolio-yellow" aria-hidden="true" />
					<span className="size-3 bg-green-500" aria-hidden="true" />
					<p className="ml-2 font-mono text-xs font-bold tracking-wide uppercase">
						Route error
					</p>
				</div>

				<div className="grid gap-8 p-6 sm:p-10 md:grid-cols-[auto_1fr] md:items-start">
					<div>
						<p className="mb-4 font-sans text-sm font-bold tracking-wide uppercase">
							Something went wrong
						</p>
						<h1 className="font-display text-5xl leading-[0.9] uppercase sm:text-7xl">
							This page hit a snag.
						</h1>
						<p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-muted-foreground sm:text-lg">
							Sorry about that. Try the request again, or head home and take
							another route.
						</p>

						<div className="mt-8 flex flex-wrap gap-4">
							<Button
								onClick={retry}
								disabled={isPending}
								aria-busy={isPending}
							>
								{isPending ? "Retrying..." : "Try Again"}
							</Button>
							<Button asChild variant="outline">
								<Link href="/">Go Home</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

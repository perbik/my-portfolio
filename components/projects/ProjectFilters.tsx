"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { type MouseEvent, useOptimistic, useTransition } from "react";

import { Button } from "@/components/ui/Button";
import type { ProjectCategory } from "@/data/projects";

type Filter = "All" | ProjectCategory;

interface ProjectFiltersProps {
	selected: Filter;
}

const filters: Filter[] = ["All", "Web", "Mobile", "Desktop"];

export function ProjectFilters({ selected }: ProjectFiltersProps) {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const [optimisticSelected, setOptimisticSelected] = useOptimistic(
		selected,
		(_current, next: Filter) => next,
	);

	function selectFilter(
		event: MouseEvent<HTMLAnchorElement>,
		filter: Filter,
		href: string,
	) {
		if (
			event.button !== 0 ||
			event.metaKey ||
			event.ctrlKey ||
			event.shiftKey ||
			event.altKey
		) {
			return;
		}

		event.preventDefault();
		startTransition(() => {
			setOptimisticSelected(filter);
			router.push(href);
		});
	}

	return (
		<div
			className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap"
			aria-busy={isPending}
		>
			{filters.map((filter) => {
				const href =
					filter === "All" ? "/projects" : `/projects?category=${filter}`;

				return (
					<Button
						key={filter}
						asChild
						size="md"
						className="w-full sm:w-auto"
						variant={optimisticSelected === filter ? "default" : "outline"}
					>
						<Link
							aria-current={optimisticSelected === filter ? "page" : undefined}
							href={href}
							onClick={(event) => selectFilter(event, filter, href)}
						>
							{filter}
						</Link>
					</Button>
				);
			})}
		</div>
	);
}

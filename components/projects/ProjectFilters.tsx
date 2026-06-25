import Link from "next/link";

import { Button } from "@/components/ui/Button";
import type { ProjectCategory } from "@/data/projects";

type Filter = "All" | ProjectCategory;

type ProjectFiltersProps = {
    selected: Filter;
};

const filters: Filter[] = ["All", "Web", "Mobile"];

export function ProjectFilters({
    selected,
}: ProjectFiltersProps) {
    return (
        <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
                <Button
                    key={filter}
                    asChild
                    variant={
                        selected === filter
                            ? "default"
                            : "outline"
                    }
                >
                    <Link
                        href={
                            filter === "All"
                                ? "/projects"
                                : `/projects?category=${filter}`
                        }
                    >
                        {filter}
                    </Link>
                </Button>
            ))}
        </div>
    );
}
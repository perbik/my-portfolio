"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
	{
		href: "/",
		label: "Home",
	},
	{
		href: "/about",
		label: "About",
	},
	{
		href: "/projects",
		label: "Projects",
	},
	{
		href: "/blogs",
		label: "Blogs",
	},
	{
		href: "/contact",
		label: "Contact",
	},
];

export function Navigation() {
	const pathname = usePathname();

	return (
		<nav>
			<ul className="flex gap-8">
				{links.map((link) => {
					const isActive =
						pathname === link.href ||
						(link.href !== "/" && pathname.startsWith(link.href));

					return (
						<li key={link.href}>
							<Link
								href={link.href}
								className={`text-sm font-medium uppercase tracking-wide transition-colors ${
									isActive ? "text-brand" : "text-zinc-400 hover:text-zinc-900"
								}`}
							>
								{link.label}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

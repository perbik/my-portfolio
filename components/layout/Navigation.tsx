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
		href: "/contact",
		label: "Contact",
	},
];

export function Navigation() {
	const pathname = usePathname();

	return (
		<nav className="border border-portfolio-border bg-white px-8 py-3 transition-colors duration-200">
			<ul className="flex items-center gap-8">
				{links.map((link) => {
					const isActive =
						pathname === link.href ||
						(link.href !== "/" && pathname.startsWith(link.href));

					return (
						<li key={link.href}>
							<Link
								href={link.href}
								className={[
									"font-['Onest',sans-serif] text-[13px] uppercase",
									"transition-colors duration-200",
									isActive
										? "font-semibold text-yellow"
										: "font-medium text-portfolio-muted hover:text-black",
								].join(" ")}
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

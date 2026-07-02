"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About" },
	{ href: "/projects", label: "Projects" },
	{ href: "/contact", label: "Contact" },
] as const;

export function Navigation() {
	const pathname = usePathname();

	return (
		<nav
			className="min-w-0 flex-1 overflow-x-auto"
			aria-label="Primary navigation"
		>
			<ul className="flex min-w-max items-center justify-center gap-6 px-6 py-4 md:h-full md:w-full md:min-w-0 md:justify-around md:gap-4 md:px-5 md:py-0 lg:px-10">
				{links.map(({ href, label }) => {
					const isActive =
						pathname === href || (href !== "/" && pathname.startsWith(href));

					return (
						<li className="flex justify-center" key={href}>
							<Link
								className="group inline-flex items-center gap-1.5 whitespace-nowrap py-2 font-display text-2xl leading-none tracking-wide text-foreground uppercase no-underline outline-offset-4 lg:gap-2 lg:text-3xl"
								href={href}
								aria-current={isActive ? "page" : undefined}
							>
								{isActive && (
									<Image
										className="size-6 object-contain [image-rendering:pixelated] lg:size-7"
										src="/assets/RIGHTARROW.webp"
										alt="Right Arrow"
										width={50}
										height={50}
										unoptimized
									/>
								)}
								<span
									className={`decoration-2 underline-offset-[6px] group-hover:underline group-focus-visible:underline ${
										isActive ? "underline" : ""
									}`}
								>
									{label}
								</span>
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

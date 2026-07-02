"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const links = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About" },
	{ href: "/projects", label: "Projects" },
	{ href: "/contact", label: "Contact" },
] as const;

export function Navigation() {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);
	const triggerRef = useRef<HTMLButtonElement>(null);
	const closeButtonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		if (!isOpen) {
			return;
		}

		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		closeButtonRef.current?.focus();

		function closeOnEscape(event: KeyboardEvent) {
			if (event.key === "Escape") {
				setIsOpen(false);
				triggerRef.current?.focus();
			}
		}

		window.addEventListener("keydown", closeOnEscape);

		return () => {
			document.body.style.overflow = previousOverflow;
			window.removeEventListener("keydown", closeOnEscape);
		};
	}, [isOpen]);

	function closeMenu({ restoreFocus = true } = {}) {
		setIsOpen(false);

		if (restoreFocus) {
			triggerRef.current?.focus();
		}
	}

	return (
		<nav className="min-w-0 flex-1" aria-label="Primary navigation">
			<button
				ref={triggerRef}
				type="button"
				className="absolute top-1.5 right-3 z-20 inline-flex size-11 items-center justify-center border-2 border-foreground bg-portfolio-yellow shadow-[3px_3px_0_#111] outline-offset-4 md:hidden"
				aria-controls="mobile-navigation-panel"
				aria-expanded={isOpen}
				aria-haspopup="dialog"
				aria-label="Open navigation menu"
				onClick={() => setIsOpen(true)}
			>
				<span className="relative block h-4 w-5" aria-hidden="true">
					<span className="absolute top-0 left-0 h-0.5 w-5 bg-foreground" />
					<span className="absolute top-[7px] left-0 h-0.5 w-5 bg-foreground" />
					<span className="absolute top-3.5 left-0 h-0.5 w-5 bg-foreground" />
				</span>
			</button>

			<button
				type="button"
				aria-label="Close navigation menu"
				aria-hidden={!isOpen}
				tabIndex={isOpen ? 0 : -1}
				className={`fixed inset-0 z-40 bg-black/55 transition-opacity duration-300 md:hidden ${
					isOpen ? "opacity-100" : "pointer-events-none opacity-0"
				}`}
				onClick={() => closeMenu()}
			/>

			<div
				id="mobile-navigation-panel"
				role="dialog"
				aria-modal="true"
				aria-label="Navigation menu"
				aria-hidden={!isOpen}
				inert={!isOpen}
				className={`fixed top-0 right-0 z-50 flex h-dvh w-[min(86vw,22rem)] flex-col border-foreground border-l-2 bg-white transition-transform duration-300 ease-out md:hidden ${
					isOpen ? "translate-x-0" : "pointer-events-none translate-x-full"
				}`}
			>
				<div className="flex h-20 shrink-0 items-center justify-between border-foreground border-b-2 px-5">
					<p className="font-display text-3xl tracking-wide uppercase">Menu</p>
					<button
						ref={closeButtonRef}
						type="button"
						className="relative inline-flex size-11 items-center justify-center border-2 border-foreground bg-portfolio-yellow shadow-[3px_3px_0_#111] outline-offset-4"
						aria-label="Close navigation menu"
						onClick={() => closeMenu()}
					>
						<span
							className="absolute h-0.5 w-5 rotate-45 bg-foreground"
							aria-hidden="true"
						/>
						<span
							className="absolute h-0.5 w-5 -rotate-45 bg-foreground"
							aria-hidden="true"
						/>
					</button>
				</div>

				<ul className="flex flex-1 flex-col justify-center py-6">
					{links.map(({ href, label }, index) => {
						const isActive =
							pathname === href || (href !== "/" && pathname.startsWith(href));

						return (
							<li
								className="border-foreground border-b-2 first:border-t-2"
								key={href}
							>
								<Link
									className="group flex min-h-17 items-center gap-3 px-7 font-display text-4xl leading-none tracking-wide text-foreground uppercase outline-offset-[-4px] transition-colors hover:bg-portfolio-yellow focus-visible:bg-portfolio-yellow"
									href={href}
									aria-current={isActive ? "page" : undefined}
									onClick={() => closeMenu({ restoreFocus: false })}
								>
									<span className="w-7 font-mono text-sm">
										{String(index + 1).padStart(2, "0")}
									</span>
									{isActive && (
										<Image
											className="size-7 object-contain [image-rendering:pixelated]"
											src="/assets/RIGHTARROW.webp"
											alt=""
											width={50}
											height={50}
											unoptimized
										/>
									)}
									<span
										className={
											isActive
												? "underline decoration-2 underline-offset-[6px]"
												: ""
										}
									>
										{label}
									</span>
								</Link>
							</li>
						);
					})}
				</ul>

				<p className="border-foreground border-t-2 px-5 py-4 font-mono text-xs uppercase">
					Fervicmar Portfolio
				</p>
			</div>

			<ul
				id="desktop-navigation"
				className="hidden md:flex md:h-full md:w-full md:items-center md:justify-around md:gap-4 md:px-5 md:py-0 lg:px-10"
			>
				{links.map(({ href, label }) => {
					const isActive =
						pathname === href || (href !== "/" && pathname.startsWith(href));

					return (
						<li
							className="flex border-foreground border-b-2 last:border-b-0 md:justify-center md:border-0"
							key={href}
						>
							<Link
								className="group inline-flex min-h-10 w-auto items-center gap-1.5 whitespace-nowrap py-2 font-display text-2xl leading-none tracking-wide text-foreground uppercase no-underline outline-offset-4 lg:gap-2 lg:text-3xl"
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

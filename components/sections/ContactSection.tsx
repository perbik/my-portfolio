"use client";

import Link from "next/link";
import { useState } from "react";

export function ContactSection() {
	const [isHovered, setIsHovered] = useState(false);
	const [position, setPosition] = useState({ x: 0, y: 0 });

	function handleMouseMove(event: React.MouseEvent<HTMLAnchorElement>) {
		setPosition({
			x: event.clientX,
			y: event.clientY,
		});
	}

	return (
		<>
			<section
				data-slot="contact-cta"
				className="relative flex min-h-80 items-center justify-center overflow-hidden border-foreground border-y-2 px-6 py-16 text-center sm:min-h-104"
			>
				<Link
					href="/contact"
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
					onMouseMove={handleMouseMove}
					className="group inline-flex w-fit items-center justify-center md:cursor-none"
				>
					<h2 className="font-display text-6xl leading-none text-white uppercase transition-[transform,text-shadow] duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-[1.025] group-hover:[text-shadow:4px_5px_0_#111] group-focus-visible:-translate-y-1 group-focus-visible:scale-[1.025] group-focus-visible:[text-shadow:4px_5px_0_#111] motion-reduce:transition-none sm:text-9xl sm:group-hover:[text-shadow:6px_7px_0_#111] lg:text-[10rem]">
						Say Hello
					</h2>
				</Link>
			</section>

			<div
				aria-hidden="true"
				className={`pointer-events-none fixed z-50 hidden size-28 items-center justify-center rounded-full bg-black text-center font-display text-2xl leading-none tracking-wide text-white uppercase transition-opacity duration-200 md:flex ${
					isHovered ? "opacity-100" : "opacity-0"
				}`}
				style={{
					left: position.x,
					top: position.y,
					transform: "translate(-50%, -50%)",
				}}
			>
				Contact
				<br />
				Me
			</div>
		</>
	);
}

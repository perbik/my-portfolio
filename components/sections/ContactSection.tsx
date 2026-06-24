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
		<section className="bg-yellow flex p-20 items-center justify-center overflow-hidden">
			<Link
				href="/contact"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				onMouseMove={handleMouseMove}
				className="group cursor-pointer"
			>
				<h2 className="font-heading text-[230px] font-extrabold leading-none text-black transition-colors duration-300 group-hover:text-white">
					Say Hello
				</h2>
			</Link>

			<div
				className={`pointer-events-none fixed z-50 flex h-28 w-28 items-center justify-center rounded-full bg-black text-center text-xs font-bold uppercase tracking-wider text-white transition-opacity duration-200 ${
					isHovered ? "opacity-100" : "opacity-0"
				}`}
				style={{
					left: position.x,
					top: position.y,
					transform: "translate(-50%, -50%)",
				}}
			>
				Contact Me
			</div>
		</section>
	);
}

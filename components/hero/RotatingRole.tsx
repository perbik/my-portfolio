"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

import { roles } from "@/data/roles";

export function RotatingRole() {
	const [roleIndex, setRoleIndex] = useState(0);
	const shouldReduceMotion = useReducedMotion();

	useEffect(() => {
		if (shouldReduceMotion) {
			return;
		}

		const id = window.setInterval(() => {
			setRoleIndex((current) => (current + 1) % roles.length);
		}, 2600);

		return () => window.clearInterval(id);
	}, [shouldReduceMotion]);

	return (
		<div className="mt-8 flex h-10 items-center justify-center overflow-hidden">
			<AnimatePresence mode="wait">
				<motion.p
					key={roles[roleIndex]}
					initial={shouldReduceMotion ? false : { y: 24, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={shouldReduceMotion ? undefined : { y: -24, opacity: 0 }}
					transition={{ duration: 0.3 }}
					className="font-sans text-xl font-bold uppercase"
				>
					{roles[roleIndex]}
				</motion.p>
			</AnimatePresence>
		</div>
	);
}

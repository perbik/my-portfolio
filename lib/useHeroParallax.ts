"use client";

import {
	useMotionValue,
	useReducedMotion,
	useSpring,
	useTransform,
} from "motion/react";
import { useEffect } from "react";

export function useHeroParallax() {
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);
	const shouldReduceMotion = useReducedMotion();
	const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
	const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
	const x = useTransform(springX, [-1, 1], [-12, 12]);
	const y = useTransform(springY, [-1, 1], [-16, 16]);

	useEffect(() => {
		if (shouldReduceMotion) {
			mouseX.set(0);
			mouseY.set(0);
			return;
		}

		const handleMouseMove = (event: MouseEvent) => {
			const normalizedX = (event.clientX / window.innerWidth - 0.5) * 2;
			const normalizedY = (event.clientY / window.innerHeight - 0.5) * 2;

			mouseX.set(normalizedX);
			mouseY.set(normalizedY);
		};

		window.addEventListener("mousemove", handleMouseMove, { passive: true });

		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, [mouseX, mouseY, shouldReduceMotion]);

	return { x, y };
}

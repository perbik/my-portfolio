"use client";

import {
	type MotionValue,
	motion,
	useReducedMotion,
	useTransform,
} from "motion/react";
import Image from "next/image";

type AboutPortraitProps = {
	progress: MotionValue<number>;
};

export function AboutPortrait({ progress }: AboutPortraitProps) {
	const shouldReduceMotion = useReducedMotion();
	const y = useTransform(progress, [0, 1], [70, -70]);
	const rotate = useTransform(progress, [0, 1], [-2, 2]);

	return (
		<motion.div
			initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.9 }}
			whileInView={{ opacity: 1, scale: 1 }}
			viewport={{ once: true, amount: 0.35 }}
			transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
			className="relative mx-auto aspect-square w-full max-w-[26.875rem]"
		>
			<motion.div
				style={shouldReduceMotion ? undefined : { y, rotate }}
				className="absolute inset-0 will-change-transform motion-reduce:will-change-auto"
			>
				<motion.div
					animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
					transition={{
						duration: 3,
						repeat: Number.POSITIVE_INFINITY,
						ease: "easeInOut",
					}}
					className="relative size-full"
				>
					<Image
						src="/assets/HOODIE.webp"
						alt="Animated pixel character wearing a hoodie"
						width={32}
						height={32}
						unoptimized
						sizes="(max-width: 768px) 80vw, 430px"
						className="size-full object-contain drop-shadow-[0_22px_12px_rgba(0,0,0,0.42)] [image-rendering:pixelated]"
					/>
				</motion.div>
			</motion.div>
		</motion.div>
	);
}

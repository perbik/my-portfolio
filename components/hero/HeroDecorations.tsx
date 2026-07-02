import type { MotionValue } from "motion/react";
import { motion } from "motion/react";
import Image from "next/image";

const decorations = [
	{
		src: "/assets/CALLOUT.webp",
		className: "top-[12%] left-[18%]",
	},
	{
		src: "/assets/DINO.webp",
		className: "top-[23%] right-[18%]",
	},
	{
		src: "/assets/SAVE.webp",
		className: "top-[42%] left-[11%]",
	},
	{
		src: "/assets/MONITOR.webp",
		className: "top-[39%] right-[12%]",
	},
	{
		src: "/assets/HOUR.webp",
		className: "bottom-[23%] left-[20%]",
	},
	{
		src: "/assets/MAIL.webp",
		className: "right-[20%] bottom-[27%]",
	},
] as const;

interface HeroDecorationsProps {
	x: MotionValue<number>;
	y: MotionValue<number>;
}

export function HeroDecorations({ x, y }: HeroDecorationsProps) {
	return decorations.map(({ src, className }) => (
		<motion.div
			key={src}
			style={{ x, y }}
			className={`pointer-events-none absolute hidden size-16 md:block ${className}`}
		>
			<Image
				src={src}
				alt=""
				width={96}
				height={96}
				unoptimized
				className="h-auto w-full select-none object-contain [image-rendering:pixelated]"
			/>
		</motion.div>
	));
}

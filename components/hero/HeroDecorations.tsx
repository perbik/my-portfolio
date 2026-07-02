import type { MotionValue } from "motion/react";
import { motion } from "motion/react";
import Image from "next/image";

const decorations = [
	{
		src: "/assets/CALLOUT.webp",
		className: "top-[4%] left-1 md:top-[12%] md:left-[18%]",
	},
	{
		src: "/assets/DINO.webp",
		className: "top-[5%] right-1 md:top-[23%] md:right-[18%]",
	},
	{
		src: "/assets/SAVE.webp",
		className: "top-[34%] -left-1 md:top-[42%] md:left-[11%]",
	},
	{
		src: "/assets/MONITOR.webp",
		className: "top-[38%] -right-1 md:top-[39%] md:right-[12%]",
	},
	{
		src: "/assets/HOUR.webp",
		className: "bottom-[17%] left-1 md:bottom-[23%] md:left-[20%]",
	},
	{
		src: "/assets/MAIL.webp",
		className: "right-1 bottom-[15%] md:right-[20%] md:bottom-[27%]",
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
			className={`pointer-events-none absolute z-20 size-11 opacity-90 min-[380px]:size-12 sm:size-14 md:size-16 md:opacity-100 ${className}`}
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

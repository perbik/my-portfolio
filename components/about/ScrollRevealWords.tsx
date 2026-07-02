"use client";

import {
	type MotionValue,
	motion,
	useReducedMotion,
	useTransform,
} from "motion/react";

interface ScrollRevealWordsProps {
	progress: MotionValue<number>;
	text: string;
	start: number;
	end: number;
}

interface RevealWordProps extends Omit<ScrollRevealWordsProps, "text"> {
	word: string;
	index: number;
	total: number;
}

function RevealWord({
	progress,
	word,
	index,
	total,
	start,
	end,
}: RevealWordProps) {
	const shouldReduceMotion = useReducedMotion();
	const wordStart = start + ((end - start) * index) / total;
	const wordEnd = start + ((end - start) * (index + 1)) / total;
	const opacity = useTransform(
		progress,
		[0, wordStart, wordEnd, 1],
		[0.2, 0.2, 1, 1],
		{ clamp: true },
	);

	return (
		<>
			<motion.span
				style={{ opacity: shouldReduceMotion ? 1 : opacity }}
				className="inline-block"
			>
				{word}
			</motion.span>{" "}
		</>
	);
}

export function ScrollRevealWords({
	progress,
	text,
	start,
	end,
}: ScrollRevealWordsProps) {
	const occurrences = new Map<string, number>();
	const words = text.split(" ").map((word) => {
		const occurrence = (occurrences.get(word) ?? 0) + 1;
		occurrences.set(word, occurrence);

		return { id: `${word}-${occurrence}`, word };
	});

	return (
		<>
			{words.map(({ id, word }, index) => (
				<RevealWord
					key={id}
					progress={progress}
					word={word}
					index={index}
					total={words.length}
					start={start}
					end={end}
				/>
			))}
		</>
	);
}

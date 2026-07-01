interface IconProps {
	className?: string;
}

export function ArrowRightIcon({ className }: Readonly<IconProps>) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			className={className}
		>
			<path d="M5 12h14" />
			<path d="M12 5l7 7-7 7" />
		</svg>
	);
}

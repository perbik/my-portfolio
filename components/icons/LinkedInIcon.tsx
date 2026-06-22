interface IconProps {
	className?: string;
}

export function LinkedInIcon({ className }: Readonly<IconProps>) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			aria-hidden="true"
			className={className}
		>
			<path d="M4.98 3.5A2.48 2.48 0 1 1 5 8.46a2.48 2.48 0 0 1-.02-4.96ZM2.75 9h4.5v12h-4.5V9Zm7.25 0h4.31v1.64h.06c.6-1.14 2.06-2.34 4.24-2.34 4.54 0 5.39 2.99 5.39 6.88V21h-4.5v-5.16c0-1.23-.02-2.81-1.71-2.81-1.71 0-1.97 1.34-1.97 2.72V21H10V9Z" />
		</svg>
	);
}

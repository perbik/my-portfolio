import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
	href?: string;
	children: ReactNode;
	icon?: ReactNode;
	variant?: "solid" | "outline";
	className?: string;
	target?: string;
}

export function Button({
	href,
	children,
	icon,
	variant = "solid",
	className = "",
	target,
}: ButtonProps) {
	const baseStyles =
		"inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium uppercase transition duration-200";
	const variantStyles =
		variant === "outline"
			? "border border-black bg-transparent text-black hover:bg-black hover:text-white"
			: "bg-black text-white hover:opacity-90";

	const content = (
		<>
			{children}
			{icon ? <span className="inline-flex items-center">{icon}</span> : null}
		</>
	);

	if (href) {
		return (
			<Link
				href={href}
				target={target}
				className={`${baseStyles} ${variantStyles} ${className}`}
			>
				{content}
			</Link>
		);
	}

	return (
		<button
			type="button"
			className={`${baseStyles} ${variantStyles} ${className}`}
		>
			{content}
		</button>
	);
}

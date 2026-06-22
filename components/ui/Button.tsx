import Link from "next/link";

interface ButtonProps {
	href: string;
	children: string;
}

export function Button({ href, children }: ButtonProps) {
	return (
		<Link
			href={href}
			className="inline-flex items-center bg-black px-6 py-3 text-sm font-medium uppercase text-white transition hover:opacity-90"
		>
			{children}
		</Link>
	);
}

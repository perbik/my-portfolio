import type { ReactNode } from "react";

interface ContainerProps {
	children: ReactNode;
}

export function Container({ children }: ContainerProps) {
	return (
		<div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">
			{children}
		</div>
	);
}

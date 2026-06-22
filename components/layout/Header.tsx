import { Navigation } from "./Navigation";

export function Header() {
	return (
		<header className="py-6">
			<div className="mx-auto flex max-w-3xl justify-center border border-zinc-200 bg-white px-8 py-4">
				<Navigation />
			</div>
		</header>
	);
}

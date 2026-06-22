import socialLinks from "@/lib/social-links";

export function Footer() {
	return (
		<footer className="bg-black py-10 text-white">
			<div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
				<p className="font-semibold uppercase">Fervicmar</p>

				<p className="text-sm text-zinc-400">
					Built with Next.js • React • Tailwind CSS • TypeScript
				</p>

				<div className="flex gap-2">
					{socialLinks.map((link) => (
						<a
							key={link.id}
							href={link.href}
							aria-label={link.label}
							target="_blank"
							rel="noreferrer"
							className="size-4 bg-white transition-opacity hover:opacity-70"
						>
							<span className="sr-only">{link.label}</span>
						</a>
					))}
				</div>
			</div>
		</footer>
	);
}

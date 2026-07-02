interface PageTitleProps {
	eyebrow: string;
	title: string;
}

export function PageTitle({ eyebrow, title }: PageTitleProps) {
	return (
		<div className="space-y-4 md:space-y-6">
			<p className="flex items-center gap-3 font-sans text-xl font-semibold tracking-wide text-foreground uppercase md:text-2xl">
				<span
					className="inline-block size-3 shrink-0 bg-portfolio-yellow md:size-4"
					aria-hidden="true"
				/>
				{eyebrow}
			</p>

			<h1 className="font-display text-7xl leading-[0.85] tracking-tight text-foreground uppercase md:text-8xl">
				{title}
			</h1>
		</div>
	);
}

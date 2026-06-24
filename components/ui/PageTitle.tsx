type PageTitleProps = {
	eyebrow: string;
	title: string;
	description?: string;
};

export function PageTitle({ eyebrow, title, description }: PageTitleProps) {
	return (
		<div className="space-y-6">
			<p className="text-xl uppercase">{eyebrow}</p>

			<h1 className="font-heading text-7xl font-black tracking-tight md:text-8xl">
				{title}
			</h1>

			{description && (
				<p className="max-w-2xl text-lg text-portfolio-muted">{description}</p>
			)}
		</div>
	);
}

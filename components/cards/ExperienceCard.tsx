interface ExperienceCardProps {
	date: string;
	title: string;
	description: string;
}

export function ExperienceCard({
	date,
	title,
	description,
}: ExperienceCardProps) {
	return (
		<div className="border-l-2 border-portfolio-yellow pl-6">
			<p className="text-sm text-black mb-2">{date}</p>

			<h3 className="font-bold font-sans text-xl mb-3">{title}</h3>

			<p className="text-portfolio-muted font-sans text-sm leading-relaxed">
				{description}
			</p>
		</div>
	);
}

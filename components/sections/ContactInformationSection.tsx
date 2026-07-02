import Link from "next/link";

import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { MailIcon } from "@/components/icons/MailIcon";
import socialLinks from "@/data/social-links";

const icons = {
	github: GitHubIcon,
	linkedin: LinkedInIcon,
	email: MailIcon,
} as const;

export function ContactInformationSection() {
	return (
		<section>
			<h2 className="mb-6 font-sans text-2xl font-semibold">Find Me</h2>

			<nav className="flex flex-col gap-4">
				{socialLinks.map((link) => {
					const Icon = icons[link.id];

					return (
						<Link
							key={link.id}
							href={link.href}
							target={link.id === "email" ? undefined : "_blank"}
							rel={link.id === "email" ? undefined : "noopener noreferrer"}
							className="text-portfolio-muted hover:text-foreground flex items-center gap-3 transition-colors"
						>
							<Icon className="size-5 shrink-0" />
							<span>{link.label}</span>
						</Link>
					);
				})}
			</nav>
		</section>
	);
}

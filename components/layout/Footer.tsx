import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { MailIcon } from "@/components/icons/MailIcon";
import socialLinks from "@/lib/social-links";

const icons = {
	github: GitHubIcon,
	linkedin: LinkedInIcon,
	email: MailIcon,
} as const;

export function Footer() {
	return (
		<footer className="bg-black py-10 text-muted">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-6">
				<p className="font-heading font-semibold uppercase">Fervicmar</p>

				<div className="flex items-center gap-4">
					{socialLinks.map((link) => {
						const Icon = icons[link.id];

						return (
							<a
								key={link.id}
								href={link.href}
								aria-label={link.label}
								target={link.id === "email" ? undefined : "_blank"}
								rel={link.id === "email" ? undefined : "noopener noreferrer"}
								className="text-muted transition-colors hover:text-white"
							>
								<Icon className="size-5" />
								<span className="sr-only">{link.label}</span>
							</a>
						);
					})}
				</div>
			</div>
		</footer>
	);
}

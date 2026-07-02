"use client";

import { ContactForm } from "@/components/forms/ContactForm";
import { ContactInformationSection } from "@/components/sections/ContactInformationSection";
import { PageTitle } from "@/components/ui/PageTitle";

export default function ContactPage() {
	return (
		<section className="mx-auto max-w-7xl px-6 pt-10 pb-16">
			<PageTitle eyebrow="Contact" title="Let's Connect." />

			<div className="mt-10 grid gap-16 lg:grid-cols-[minmax(0,2fr)_280px]">
				{/* Left Column - Form */}
				<div className="space-y-12">
					<div className="max-w-3xl text-lg leading-relaxed text-portfolio-muted text-justify">
						<p>
							Available for full-time roles, freelance work, and interesting
							collaborations. The best way to reach me is through the contact
							form below or by email.
						</p>
					</div>

					<ContactForm />
				</div>

				{/* Right Column - Links */}
				<aside className="space-y-6">
					<ContactInformationSection />
				</aside>
			</div>
		</section>
	);
}

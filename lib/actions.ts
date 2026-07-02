"use server";

import { Resend } from "resend";

import { EmailTemplate } from "@/components/email/Email-template";
import { type ContactFormState, contactFormSchema } from "@/lib/contact";

export async function sendContactMessage(
	_previousState: ContactFormState,
	formData: FormData,
): Promise<ContactFormState> {
	const result = contactFormSchema.safeParse({
		name: formData.get("name"),
		email: formData.get("email"),
		subject: formData.get("subject"),
		message: formData.get("message"),
	});

	if (!result.success) {
		return {
			status: "error",
			message: "Please correct the highlighted fields.",
			fieldErrors: result.error.flatten().fieldErrors,
		};
	}

	const apiKey = process.env.RESEND_API_KEY;

	if (!apiKey) {
		console.error("RESEND_API_KEY is not configured.");
		return {
			status: "error",
			message: "Email service is unavailable. Please try again later.",
		};
	}

	try {
		const resend = new Resend(apiKey);
		const { name, email, subject, message } = result.data;
		const { error } = await resend.emails.send({
			from: "Portfolio <fervicmar-portfolio@resend.dev>",
			to: ["fervicmardlagman@gmail.com"],
			replyTo: email,
			subject,
			react: EmailTemplate({
				name,
				email,
				subject,
				message,
			}),
		});

		if (error) {
			console.error("Resend error:", error);
			return {
				status: "error",
				message: "Unable to send your message. Please try again.",
			};
		}

		return {
			status: "success",
			message: "Message sent successfully!",
		};
	} catch (error) {
		console.error("Contact action error:", error);
		return {
			status: "error",
			message: "Unable to send your message. Please try again.",
		};
	}
}

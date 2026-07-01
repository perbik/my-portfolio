import * as z from "zod";

export const contactFormSchema = z.object({
	name: z
		.string()
		.min(2, "Please enter your name.")
		.max(100, "Name is too long."),
	email: z.email("Please enter a valid email address."),
	subject: z
		.string()
		.min(3, "Please enter a subject.")
		.max(150, "Subject is too long."),
	message: z
		.string()
		.min(20, "Please enter at least 20 characters.")
		.max(1000, "Message is too long."),
});

export type ContactField = keyof z.infer<typeof contactFormSchema>;

export interface ContactFormState {
	status: "idle" | "success" | "error";
	message: string;
	fieldErrors?: Partial<Record<ContactField, string[]>>;
}

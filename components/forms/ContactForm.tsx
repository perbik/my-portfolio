"use client";

import { useActionState, useEffect, useRef } from "react";

import { toast } from "sonner";

import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/Field";
import { Input } from "@/components/ui/Input";
import { InputGroup, InputGroupInput } from "@/components/ui/Input-group";
import { Textarea } from "@/components/ui/Textarea";
import { sendContactMessage } from "@/lib/actions";
import type { ContactField, ContactFormState } from "@/lib/contact";

import { SubmitButton } from "./SubmitButton";

const initialState: ContactFormState = {
	status: "idle",
	message: "",
};

const inputStyles =
	"h-15 border-2 border-foreground bg-white px-5 font-sans text-lg shadow-[4px_4px_0_rgba(0,0,0,0.08)] placeholder:text-muted-foreground focus-visible:border-foreground focus-visible:ring-2 focus-visible:ring-yellow/70 md:text-lg";

export function ContactForm() {
	const [state, formAction] = useActionState(sendContactMessage, initialState);
	const formRef = useRef<HTMLFormElement>(null);

	useEffect(() => {
		if (state.status === "success") {
			toast.success(state.message);
			formRef.current?.reset();
		} else if (state.status === "error" && !state.fieldErrors) {
			toast.error(state.message);
		}
	}, [state]);

	function getFieldErrors(field: ContactField) {
		return state.fieldErrors?.[field]?.map((message) => ({ message }));
	}

	return (
		<div className="w-full max-w-3xl border-2 border-foreground bg-background shadow-[8px_8px_0_#000]">
			<div className="flex h-10 items-center gap-3 border-foreground border-b-2 px-4">
				<div className="flex gap-2" aria-hidden="true">
					<span className="size-4 bg-red-500" />
					<span className="size-4 bg-yellow" />
					<span className="size-4 bg-green-500" />
				</div>
				<p className="ml-2 font-mono text-sm font-bold tracking-wide">
					Send me a message!
				</p>
			</div>

			<form ref={formRef} action={formAction} className="p-8 max-[600px]:p-5">
				<FieldGroup className="gap-5">
					<Field data-invalid={Boolean(state.fieldErrors?.name)}>
						<FieldLabel
							className="font-mono text-sm font-bold tracking-wide"
							htmlFor="contact-name"
						>
							Your Name
						</FieldLabel>
						<Input
							className={inputStyles}
							id="contact-name"
							name="name"
							placeholder="Enter Name"
							autoComplete="name"
							minLength={2}
							maxLength={100}
							aria-invalid={Boolean(state.fieldErrors?.name)}
							required
						/>
						<FieldError errors={getFieldErrors("name")} />
					</Field>

					<Field data-invalid={Boolean(state.fieldErrors?.email)}>
						<FieldLabel
							className="font-mono text-sm font-bold tracking-wide"
							htmlFor="contact-email"
						>
							Email Address
						</FieldLabel>
						<InputGroup className="h-15 border-2 border-foreground bg-white shadow-[4px_4px_0_rgba(0,0,0,0.08)] focus-within:border-foreground focus-within:ring-2 focus-within:ring-yellow/70">
							<InputGroupInput
								className="px-5 font-sans text-lg placeholder:text-muted-foreground md:text-lg"
								id="contact-email"
								name="email"
								type="email"
								placeholder="Enter Email Address"
								autoComplete="email"
								aria-invalid={Boolean(state.fieldErrors?.email)}
								required
							/>
						</InputGroup>
						<FieldError errors={getFieldErrors("email")} />
					</Field>

					<Field data-invalid={Boolean(state.fieldErrors?.subject)}>
						<FieldLabel
							className="font-mono text-sm font-bold tracking-wide"
							htmlFor="contact-subject"
						>
							Subject
						</FieldLabel>
						<Input
							className={inputStyles}
							id="contact-subject"
							name="subject"
							placeholder="Enter Subject"
							autoComplete="off"
							minLength={3}
							maxLength={150}
							aria-invalid={Boolean(state.fieldErrors?.subject)}
							required
						/>
						<FieldError errors={getFieldErrors("subject")} />
					</Field>

					<Field data-invalid={Boolean(state.fieldErrors?.message)}>
						<FieldLabel
							className="font-mono text-sm font-bold tracking-wide"
							htmlFor="contact-message"
						>
							Message
						</FieldLabel>
						<Textarea
							className="min-h-40 resize-y border-2 border-foreground bg-white px-5 py-4 font-sans text-lg shadow-[4px_4px_0_rgba(0,0,0,0.08)] placeholder:text-muted-foreground focus-visible:border-foreground focus-visible:ring-2 focus-visible:ring-yellow/70 md:text-lg"
							id="contact-message"
							name="message"
							placeholder="Type your message here..."
							minLength={20}
							maxLength={1000}
							aria-invalid={Boolean(state.fieldErrors?.message)}
							required
						/>
						<FieldError errors={getFieldErrors("message")} />
					</Field>
				</FieldGroup>

				<div className="mt-10 flex items-end justify-between gap-6 max-[520px]:flex-col max-[520px]:items-start">
					<SubmitButton />
				</div>
			</form>
		</div>
	);
}

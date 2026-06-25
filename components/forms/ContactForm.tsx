"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { Button } from "@/components/ui/Button";
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/Field";
import { Input } from "@/components/ui/Input";
import { InputGroup, InputGroupTextarea } from "@/components/ui/Input-group";

const formSchema = z.object({
    name: z
        .string()
        .min(2, "Please enter your name.")
        .max(100, "Name is too long."),

    email: z
        .string()
        .email("Please enter a valid email address."),

    subject: z
        .string()
        .min(3, "Please enter a subject.")
        .max(150, "Subject is too long."),

    message: z
        .string()
        .min(20, "Please enter at least 20 characters.")
        .max(1000, "Message is too long."),
});

type ContactFormValues = z.infer<typeof formSchema>;

export function ContactForm() {
    const form = useForm<ContactFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    const {
        handleSubmit,
        control,
        formState: { isSubmitting },
    } = form;

    async function onSubmit(data: ContactFormValues) {
        try {
            const response = await fetch("/api/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Failed to send.");
            }

            toast.success("Message sent successfully!");

            form.reset();
        } catch {
            toast.error("Unable to send your message.");
        }
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-3xl space-y-8"
        >
            <FieldGroup>
                <Controller
                    name="name"
                    control={control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel
                                htmlFor="contact-name"
                                className="text-xs uppercase tracking-[0.2em]"
                            >
                                Name
                            </FieldLabel>

                            <Input
                                {...field}
                                id="contact-name"
                                autoComplete="name"
                                placeholder="Enter name"
                                aria-invalid={fieldState.invalid}
                                className="h-14"
                            />

                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />

                <Controller
                    name="email"
                    control={control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel
                                htmlFor="contact-email"
                                className="text-xs uppercase tracking-[0.2em]"
                            >
                                Email
                            </FieldLabel>

                            <Input
                                {...field}
                                id="contact-email"
                                type="email"
                                autoComplete="email"
                                placeholder="Enter email address"
                                aria-invalid={fieldState.invalid}
                                className="h-14"
                            />

                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />

                <Controller
                    name="subject"
                    control={control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel
                                htmlFor="contact-subject"
                                className="text-xs uppercase tracking-[0.2em]"
                            >
                                Subject
                            </FieldLabel>

                            <Input
                                {...field}
                                id="contact-subject"
                                autoComplete="off"
                                placeholder="Enter a subject"
                                aria-invalid={fieldState.invalid}
                                className="h-14"
                            />

                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />

                <Controller
                    name="message"
                    control={control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel
                                htmlFor="contact-message"
                                className="text-xs uppercase tracking-[0.2em]"
                            >
                                Message
                            </FieldLabel>

                            <InputGroup>
                                <InputGroupTextarea
                                    {...field}
                                    id="contact-message"
                                    rows={10}
                                    placeholder="Type here your message..."
                                    aria-invalid={fieldState.invalid}
                                    className="min-h-64 resize-y"
                                />
                            </InputGroup>

                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />
            </FieldGroup>

            <Button
                type="submit"
                disabled={isSubmitting}
            >
                {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
        </form>
    );
}
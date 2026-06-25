import { Resend } from "resend";

import { EmailTemplate } from "@/components/email/Email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const { name, email, subject, message } = body;

        const { data, error } = await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",

            to: ["fervicmardlagman@gmail.com"],

            replyTo: email,

            subject: `${subject}`,

            react: EmailTemplate({
                name,
                email,
                subject,
                message,
            }),
        });

        if (error) {
            console.error("Resend error:", error);

            return Response.json(
                {
                    error,
                },
                {
                    status: 500,
                }
            );
        }

        return Response.json(data);
    } catch (error) {
        console.error("Route error:", error);

        return Response.json(
            {
                message: error instanceof Error ? error.message : "Unknown error",
            },
            {
                status: 500,
            }
        );
    }
}
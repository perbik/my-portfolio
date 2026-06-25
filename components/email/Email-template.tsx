interface EmailTemplateProps {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export function EmailTemplate({
    name,
    email,
    subject,
    message,
}: EmailTemplateProps) {
    return (
        <div
            style={{
                fontFamily: "Arial, sans-serif",
                lineHeight: 1.6,
            }}
        >
            <h2>New Contact Form Submission</h2>

            <p>
                <strong>Name:</strong> {name}
            </p>

            <p>
                <strong>Email:</strong> {email}
            </p>

            <p>
                <strong>Subject:</strong> {subject}
            </p>

            <hr />

            <p>{message}</p>
        </div>
    );
}
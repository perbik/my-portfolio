"use client";

import { useFormStatus } from "react-dom";

import { Button } from "@/components/ui/Button";

export function SubmitButton() {
	const { pending } = useFormStatus();

	return (
		<Button
			className="h-12 w-48 px-6 text-2xl shadow-[6px_7px_0_#000]"
			type="submit"
			disabled={pending}
		>
			{pending ? "Sending..." : "Send Message"}
		</Button>
	);
}

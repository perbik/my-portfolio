"use client";

import { useFormStatus } from "react-dom";

import { Button } from "@/components/ui/Button";

export function SubmitButton() {
	const { pending } = useFormStatus();

	return (
		<Button
			className="h-12 w-48 px-4 text-xl shadow-[4px_5px_0_#000] max-[520px]:w-full sm:px-6 sm:text-2xl sm:shadow-[6px_7px_0_#000]"
			type="submit"
			disabled={pending}
		>
			{pending ? "Sending..." : "Send Message"}
		</Button>
	);
}

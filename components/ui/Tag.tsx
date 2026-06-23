type TagProps = {
	label: string;
	variant?: "brand" | "outline";
};

export function Tag({ label, variant = "brand" }: TagProps) {
	const baseStyles =
		"inline-flex items-center px-4 py-2 text-xs uppercase font-mono transition duration-200";
	const variantStyles =
		variant === "outline"
			? "border border-border bg-white text-black"
			: "bg-tag text-black";

	return <span className={`${baseStyles} ${variantStyles}`}>{label}</span>;
}

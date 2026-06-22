type TagProps = {
	label: string;
};

export function Tag(props: TagProps) {
	return (
		<span className="bg-brand/15 px-3 py-1 text-[10px] font-medium uppercase tracking-widest">
			{props.label}
		</span>
	);
}

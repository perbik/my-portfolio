type PageTitleProps = {
    eyebrow: string;
    title: string;
};

export function PageTitle({ eyebrow, title }: PageTitleProps) {
    return (
        <div className="space-y-6">
            <p className="font-sans font-semibold text-2xl uppercase">{eyebrow}</p>

            <h1 className="font-heading text-7xl font-black tracking-tight md:text-8xl">
                {title}
            </h1>

        </div>
    );
}

import Image from "next/image";
import Link from "next/link";

import { Navigation } from "./Navigation";

export function Header() {
	return (
		<header className="w-full overflow-x-clip px-6 py-8 lg:px-10">
			<div className="relative mx-auto flex w-full max-w-6xl flex-col border-2 border-foreground border-b-[6px] bg-white md:min-h-20 md:flex-row">
				<Image
					className="pointer-events-none absolute -top-5 -left-10 z-10 h-auto w-32 animate-[cloud-float_4s_ease-in-out_infinite] object-contain select-none will-change-transform [image-rendering:pixelated] motion-reduce:animate-none motion-reduce:will-change-auto md:-top-14 md:-left-20 md:w-48 lg:-top-5 lg:-left-30"
					src="/assets/CLOUD1.webp"
					alt="Cloud"
					width={128}
					height={64}
					priority
				/>

				<div className="flex h-16 shrink-0 items-center justify-center border-foreground border-b-2 px-12 md:h-auto md:w-64 md:border-r-2 md:border-b-0 md:px-8">
					<Link
						className="font-display text-3xl leading-none tracking-wide text-foreground uppercase no-underline outline-offset-4 lg:text-4xl"
						href="/"
					>
						FERVICMAR
					</Link>
				</div>

				<Navigation />

				<Image
					className="pointer-events-none absolute -right-10 -bottom-10 z-10 h-auto w-32 animate-[cloud-float_4.6s_ease-in-out_-1.2s_infinite_reverse] object-contain select-none will-change-transform [image-rendering:pixelated] motion-reduce:animate-none motion-reduce:will-change-auto md:-right-20 md:-bottom-14 md:w-48 lg:-right-20 lg:-bottom-10"
					src="/assets/CLOUD2.webp"
					alt="Cloud"
					width={128}
					height={64}
					priority
				/>
			</div>
		</header>
	);
}

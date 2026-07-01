import { Skeleton } from "@/components/ui/Skeleton";

const HOME_PROJECT_SKELETONS = [
	"home-project-1",
	"home-project-2",
	"home-project-3",
];
const ABOUT_TEXT_SKELETONS = [
	"full-1",
	"full-2",
	"short-1",
	"full-3",
	"full-4",
	"short-2",
	"full-5",
];
const PROJECT_SKELETONS = [
	"project-1",
	"project-2",
	"project-3",
	"project-4",
	"project-5",
	"project-6",
];

function LoadingStatus({ label }: { label: string }) {
	return (
		<p className="sr-only" role="status">
			{label}
		</p>
	);
}

function TitleSkeleton() {
	return (
		<div className="space-y-5">
			<Skeleton className="h-4 w-24" />
			<Skeleton className="h-14 w-full max-w-xl md:h-20" />
		</div>
	);
}

function ProjectCardSkeleton() {
	return (
		<div className="overflow-hidden border border-border">
			<Skeleton className="h-48 w-full" />
			<div className="space-y-4 p-6">
				<Skeleton className="h-7 w-2/3" />
				<div className="space-y-2">
					<Skeleton className="h-4 w-full" />
					<Skeleton className="h-4 w-5/6" />
					<Skeleton className="h-4 w-3/5" />
				</div>
				<div className="flex gap-2">
					<Skeleton className="h-6 w-16" />
					<Skeleton className="h-6 w-20" />
					<Skeleton className="h-6 w-14" />
				</div>
			</div>
		</div>
	);
}

export function HomeSkeleton() {
	return (
		<>
			<LoadingStatus label="Loading home page" />
			<section className="mx-auto max-w-7xl px-6 pb-24 pt-24">
				<Skeleton className="h-14 w-52 lg:h-20" />
				<Skeleton className="mt-3 h-16 w-full max-w-2xl lg:h-28" />
				<div className="mt-5 flex gap-3">
					<Skeleton className="h-7 w-36" />
					<Skeleton className="h-7 w-28" />
					<Skeleton className="h-7 w-40" />
				</div>
				<div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto]">
					<div className="space-y-3">
						<Skeleton className="h-6 w-full max-w-3xl" />
						<Skeleton className="h-6 w-4/5 max-w-2xl" />
					</div>
					<div className="flex gap-4">
						<Skeleton className="h-12 w-40" />
						<Skeleton className="h-12 w-28" />
					</div>
				</div>
			</section>
			<section className="bg-black px-6 py-24">
				<div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[2fr_1fr]">
					<div className="space-y-5">
						<Skeleton className="h-8 w-28 bg-white/20" />
						<Skeleton className="h-16 w-full max-w-2xl bg-white/20" />
						<Skeleton className="h-4 w-4/5 bg-white/20" />
						<Skeleton className="h-4 w-3/5 bg-white/20" />
					</div>
					<Skeleton className="aspect-square w-full max-w-80 bg-white/20" />
				</div>
			</section>
			<section className="mx-auto max-w-7xl px-6 py-24">
				<Skeleton className="mb-8 h-12 w-52" />
				<div className="grid gap-8 md:grid-cols-3">
					{HOME_PROJECT_SKELETONS.map((project) => (
						<ProjectCardSkeleton key={project} />
					))}
				</div>
			</section>
		</>
	);
}

export function AboutSkeleton() {
	return (
		<section className="mx-auto max-w-7xl px-6 py-24">
			<LoadingStatus label="Loading about page" />
			<div className="grid gap-20 lg:grid-cols-[1.2fr_0.8fr]">
				<div>
					<TitleSkeleton />
					<div className="mt-10 space-y-4">
						{ABOUT_TEXT_SKELETONS.map((line, index) => (
							<Skeleton
								className={index % 3 === 2 ? "h-5 w-3/4" : "h-5 w-full"}
								key={line}
							/>
						))}
					</div>
					<Skeleton className="mt-10 h-12 w-52" />
					<Skeleton className="mt-16 h-8 w-44" />
					<div className="mt-8 grid grid-cols-2 gap-12">
						{[0, 1].map((column) => (
							<div className="space-y-4" key={column}>
								<Skeleton className="h-4 w-24" />
								<Skeleton className="h-5 w-32" />
								<Skeleton className="h-5 w-28" />
								<Skeleton className="h-5 w-36" />
							</div>
						))}
					</div>
				</div>
				<div className="space-y-10 lg:pt-40">
					<Skeleton className="h-8 w-40" />
					{[0, 1, 2].map((item) => (
						<div className="space-y-3" key={item}>
							<Skeleton className="h-5 w-2/3" />
							<Skeleton className="h-4 w-full" />
							<Skeleton className="h-4 w-4/5" />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export function ContactSkeleton() {
	return (
		<section className="mx-auto max-w-7xl px-6 py-24">
			<LoadingStatus label="Loading contact page" />
			<TitleSkeleton />
			<div className="mt-10 grid gap-16 lg:grid-cols-[minmax(0,2fr)_280px]">
				<div>
					<div className="mb-12 space-y-3">
						<Skeleton className="h-5 w-full max-w-3xl" />
						<Skeleton className="h-5 w-3/4 max-w-2xl" />
					</div>
					<div className="space-y-7">
						{[0, 1, 2].map((field) => (
							<div className="space-y-3" key={field}>
								<Skeleton className="h-3 w-20" />
								<Skeleton className="h-14 w-full max-w-3xl" />
							</div>
						))}
						<div className="space-y-3">
							<Skeleton className="h-3 w-20" />
							<Skeleton className="h-64 w-full max-w-3xl" />
						</div>
						<Skeleton className="h-12 w-40" />
					</div>
				</div>
				<aside className="space-y-6">
					<Skeleton className="h-7 w-40" />
					<Skeleton className="h-5 w-full" />
					<Skeleton className="h-5 w-4/5" />
					<Skeleton className="h-px w-full" />
					<Skeleton className="h-5 w-3/4" />
				</aside>
			</div>
		</section>
	);
}

export function ProjectsSkeleton() {
	return (
		<section className="mx-auto max-w-7xl px-6 py-24">
			<LoadingStatus label="Loading projects" />
			<TitleSkeleton />
			<div className="my-10 flex gap-3">
				<Skeleton className="h-10 w-20" />
				<Skeleton className="h-10 w-20" />
				<Skeleton className="h-10 w-24" />
			</div>
			<div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
				{PROJECT_SKELETONS.map((project) => (
					<ProjectCardSkeleton key={project} />
				))}
			</div>
		</section>
	);
}

export function ProjectDetailSkeleton() {
	return (
		<section className="mx-auto max-w-7xl px-6 py-24">
			<LoadingStatus label="Loading project details" />
			<div className="mb-8 flex gap-3">
				<Skeleton className="h-4 w-12" />
				<Skeleton className="h-4 w-3" />
				<Skeleton className="h-4 w-20" />
				<Skeleton className="h-4 w-3" />
				<Skeleton className="h-4 w-32" />
			</div>
			<Skeleton className="h-14 w-full max-w-3xl md:h-20" />
			<Skeleton className="mt-8 aspect-16/8 w-full" />
			<div className="mt-16 grid gap-16 lg:grid-cols-[2fr_1fr]">
				<div className="space-y-3">
					<Skeleton className="h-5 w-full" />
					<Skeleton className="h-5 w-full" />
					<Skeleton className="h-5 w-4/5" />
					<div className="flex gap-4 pt-7">
						<Skeleton className="h-12 w-28" />
						<Skeleton className="h-12 w-32" />
					</div>
				</div>
				<div>
					<Skeleton className="mb-4 h-4 w-16" />
					<div className="flex flex-wrap gap-3">
						<Skeleton className="h-7 w-20" />
						<Skeleton className="h-7 w-24" />
						<Skeleton className="h-7 w-16" />
					</div>
				</div>
			</div>
		</section>
	);
}

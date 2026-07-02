import { Skeleton } from "@/components/ui/Skeleton";

const HOME_PROJECTS = ["home-project-1", "home-project-2", "home-project-3"];
const PROJECTS = [
	"project-1",
	"project-2",
	"project-3",
	"project-4",
	"project-5",
	"project-6",
];
const FORM_FIELDS = ["name", "email", "subject"];
const EXPERIENCE_ITEMS = ["experience-1", "experience-2", "experience-3"];

interface LoadingStatusProps {
	label: string;
}

interface ProjectCardSkeletonProps {
	compact?: boolean;
}

function LoadingStatus({ label }: LoadingStatusProps) {
	return (
		<p className="sr-only" role="status">
			{label}
		</p>
	);
}

function PageTitleSkeleton() {
	return (
		<div className="space-y-5">
			<div className="flex items-center gap-3">
				<Skeleton className="size-4 after:hidden" />
				<Skeleton className="h-6 w-28" />
			</div>
			<Skeleton className="h-16 w-full max-w-2xl sm:h-20" />
		</div>
	);
}

function ProjectCardSkeleton({ compact = false }: ProjectCardSkeletonProps) {
	return (
		<div className="h-full overflow-hidden border-2 border-foreground bg-white shadow-[8px_10px_0_#111]">
			<Skeleton
				className={compact ? "aspect-video w-full" : "aspect-8/5 w-full"}
			/>
			<div className={compact ? "min-h-52 p-5" : "min-h-59 p-6"}>
				<Skeleton className="h-8 w-2/3" />
				<div className="mt-4 space-y-2">
					<Skeleton className="h-4 w-full" />
					<Skeleton className="h-4 w-5/6" />
					<Skeleton className="h-4 w-3/5" />
				</div>
				<div className="mt-6 flex gap-2">
					<Skeleton className="h-7 w-20 bg-portfolio-blue/40" />
					<Skeleton className="h-7 w-24 bg-portfolio-blue/40" />
					<Skeleton className="h-7 w-16 bg-portfolio-blue/40" />
				</div>
			</div>
		</div>
	);
}

function FormWindowSkeleton() {
	return (
		<div className="w-full max-w-3xl border-2 border-foreground bg-white shadow-[8px_8px_0_#111]">
			<div className="flex h-10 items-center gap-2 border-foreground border-b-2 px-4">
				<Skeleton className="size-3 bg-red-500 after:hidden" />
				<Skeleton className="size-3 bg-portfolio-yellow after:hidden" />
				<Skeleton className="size-3 bg-green-500 after:hidden" />
				<Skeleton className="ml-2 h-3 w-32" />
			</div>
			<div className="space-y-5 p-5 sm:p-8">
				{FORM_FIELDS.map((field) => (
					<div className="space-y-2" key={field}>
						<Skeleton className="h-4 w-28" />
						<Skeleton className="h-15 w-full border-2 border-foreground/20" />
					</div>
				))}
				<div className="space-y-2">
					<Skeleton className="h-4 w-24" />
					<Skeleton className="h-40 w-full border-2 border-foreground/20" />
				</div>
				<Skeleton className="h-12 w-48 border-2 border-foreground/20" />
			</div>
		</div>
	);
}

export function HomeSkeleton() {
	return (
		<>
			<LoadingStatus label="Loading home page" />
			<section className="flex min-h-[65vh] items-center justify-center px-6 py-16 text-center">
				<div className="flex w-full max-w-4xl flex-col items-center">
					<Skeleton className="h-20 w-full max-w-3xl sm:h-28" />
					<Skeleton className="mt-8 h-7 w-56" />
					<div className="mt-8 w-full max-w-2xl space-y-3">
						<Skeleton className="mx-auto h-5 w-full" />
						<Skeleton className="mx-auto h-5 w-4/5" />
					</div>
					<div className="mt-12 flex gap-5">
						<Skeleton className="h-12 w-40 border-2 border-foreground/20" />
						<Skeleton className="h-12 w-36 border-2 border-foreground/20" />
					</div>
				</div>
			</section>
			<Skeleton className="h-16 w-full bg-foreground after:via-white/20" />

			<section className="border-foreground border-y-2 px-6 py-20">
				<div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
					<div>
						<Skeleton className="h-7 w-28" />
						<Skeleton className="mt-8 h-36 w-full max-w-2xl" />
						<Skeleton className="mt-8 h-5 w-full max-w-xl" />
						<Skeleton className="mt-3 h-5 w-4/5 max-w-lg" />
						<Skeleton className="mt-8 h-12 w-40 border-2 border-foreground/20" />
					</div>
					<Skeleton className="mx-auto aspect-square w-full max-w-96" />
				</div>
			</section>

			<section className="bg-portfolio-cream px-6 py-16">
				<div className="mx-auto max-w-7xl">
					<Skeleton className="h-6 w-32" />
					<Skeleton className="mt-5 h-16 w-full max-w-2xl" />
					<div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
						{HOME_PROJECTS.map((project) => (
							<ProjectCardSkeleton compact key={project} />
						))}
					</div>
				</div>
			</section>
		</>
	);
}

export function AboutSkeleton() {
	return (
		<section className="mx-auto max-w-7xl px-6 pt-10 pb-20">
			<LoadingStatus label="Loading about page" />
			<div className="grid gap-20 lg:grid-cols-[1.2fr_0.8fr]">
				<div>
					<PageTitleSkeleton />
					<div className="mt-10 space-y-4">
						<Skeleton className="h-5 w-full" />
						<Skeleton className="h-5 w-full" />
						<Skeleton className="h-5 w-4/5" />
						<Skeleton className="h-5 w-full" />
						<Skeleton className="h-5 w-3/4" />
					</div>
					<Skeleton className="mt-10 h-12 w-52 border-2 border-foreground/20" />
					<Skeleton className="mt-16 h-8 w-44" />
					<div className="mt-8 grid grid-cols-2 gap-12">
						<Skeleton className="h-36 w-full" />
						<Skeleton className="h-36 w-full" />
					</div>
				</div>
				<div className="space-y-10 lg:pt-40">
					<Skeleton className="h-8 w-40" />
					{EXPERIENCE_ITEMS.map((item) => (
						<div className="border-l-2 pl-6" key={item}>
							<Skeleton className="h-4 w-24" />
							<Skeleton className="mt-3 h-6 w-2/3" />
							<Skeleton className="mt-3 h-4 w-full" />
							<Skeleton className="mt-2 h-4 w-4/5" />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export function ContactSkeleton() {
	return (
		<section className="mx-auto max-w-7xl px-6 pt-10 pb-16">
			<LoadingStatus label="Loading contact page" />
			<PageTitleSkeleton />
			<div className="mt-10 grid gap-16 lg:grid-cols-[minmax(0,2fr)_280px]">
				<div className="space-y-12">
					<div className="space-y-3">
						<Skeleton className="h-5 w-full max-w-3xl" />
						<Skeleton className="h-5 w-3/4 max-w-2xl" />
					</div>
					<FormWindowSkeleton />
				</div>
				<aside className="space-y-5">
					<Skeleton className="h-8 w-36" />
					<Skeleton className="h-5 w-full" />
					<Skeleton className="h-5 w-4/5" />
					<Skeleton className="h-5 w-3/4" />
				</aside>
			</div>
		</section>
	);
}

export function ProjectsSkeleton() {
	return (
		<section className="mx-auto max-w-7xl px-6 pt-10 pb-16">
			<LoadingStatus label="Loading projects" />
			<PageTitleSkeleton />
			<div className="my-10 flex gap-3">
				<Skeleton className="h-12 w-24 border-2 border-foreground/20" />
				<Skeleton className="h-12 w-24 border-2 border-foreground/20" />
				<Skeleton className="h-12 w-28 border-2 border-foreground/20" />
			</div>
			<div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
				{PROJECTS.map((project) => (
					<ProjectCardSkeleton key={project} />
				))}
			</div>
		</section>
	);
}

export function ProjectDetailSkeleton() {
	return (
		<section className="mx-auto max-w-7xl px-6 pt-10 pb-16">
			<LoadingStatus label="Loading project details" />
			<div className="mb-8 flex items-center gap-3">
				<Skeleton className="h-5 w-16" />
				<Skeleton className="size-4" />
				<Skeleton className="h-5 w-24" />
				<Skeleton className="size-4" />
				<Skeleton className="h-8 w-36" />
			</div>
			<Skeleton className="h-16 w-full max-w-3xl sm:h-20" />
			<Skeleton className="mt-8 aspect-16/8 w-full border-2 border-foreground/20" />
			<div className="mt-16 grid gap-16 lg:grid-cols-[2fr_1fr]">
				<div className="space-y-3">
					<Skeleton className="h-5 w-full" />
					<Skeleton className="h-5 w-full" />
					<Skeleton className="h-5 w-4/5" />
					<div className="flex gap-4 pt-7">
						<Skeleton className="h-12 w-28 border-2 border-foreground/20" />
						<Skeleton className="h-12 w-32 border-2 border-foreground/20" />
					</div>
				</div>
				<div>
					<Skeleton className="mb-4 h-4 w-16" />
					<div className="flex flex-wrap gap-3">
						<Skeleton className="h-10 w-24 border-2 border-foreground/20" />
						<Skeleton className="h-10 w-28 border-2 border-foreground/20" />
						<Skeleton className="h-10 w-20 border-2 border-foreground/20" />
					</div>
				</div>
			</div>
		</section>
	);
}

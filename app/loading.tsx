"use client";

import { usePathname } from "next/navigation";

import {
	AboutSkeleton,
	ContactSkeleton,
	HomeSkeleton,
	ProjectDetailSkeleton,
	ProjectsSkeleton,
} from "@/components/feedbacks/RouteSkeletons";

export default function Loading() {
	const pathname = usePathname();

	if (pathname === "/about") {
		return <AboutSkeleton />;
	}

	if (pathname === "/contact") {
		return <ContactSkeleton />;
	}

	if (pathname.startsWith("/projects/")) {
		return <ProjectDetailSkeleton />;
	}

	if (pathname === "/projects") {
		return <ProjectsSkeleton />;
	}

	return <HomeSkeleton />;
}

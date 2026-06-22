import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "@/styles/globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		default: "Fervicmar Portfolio",
		template: "%s | Fervicmar Portfolio",
	},
	description:
		"Portfolio of Fervicmar — Project Manager, Software QA, and Software Engineer.",
	openGraph: {
		title: "Fervicmar Portfolio",
		description:
			"Portfolio of Fervicmar — Project Manager, Software QA, and Software Engineer.",
		type: "website",
	},
};

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
	return (
		<html
			lang="en"
			className={`${geistSans.variable} ${geistMono.variable} h-full`}
		>
			<body className="bg-surface text-black antialiased">
				<div className="flex min-h-screen flex-col">
					<Header />

					<main className="flex-1">{children}</main>

					<Footer />
				</div>
			</body>
		</html>
	);
}

import type { Metadata } from "next";
import {
	Bricolage_Grotesque,
	Jersey_10,
	JetBrains_Mono,
	Onest,
} from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Toaster } from "@/components/ui/Sonner";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";

const onest = Onest({
	subsets: ["latin"],
	variable: "--font-onest",
});

const bricolage = Bricolage_Grotesque({
	subsets: ["latin"],
	variable: "--font-bricolage",
});

const jersey = Jersey_10({
	subsets: ["latin"],
	variable: "--font-jersey-10",
	weight: "400",
});

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-mono",
});

export const metadata: Metadata = {
	title: {
		default: "Fervicmar Portfolio",
		template: "%s | Fervicmar Portfolio",
	},
	description: "Portfolio of Fervicmar",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={cn(
				onest.variable,
				bricolage.variable,
				jersey.variable,
				jetbrainsMono.variable,
				"font-mono",
			)}
		>
			<body className=" text-black antialiased">
				<div className="flex min-h-screen flex-col">
					<Header />
					<main className="flex-1">{children}</main>
					<Footer />
					<Toaster />
				</div>
			</body>
		</html>
	);
}

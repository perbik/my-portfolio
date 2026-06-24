import type { Metadata } from "next";
import { Bricolage_Grotesque, JetBrains_Mono, Onest } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
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

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'});

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
			className={cn(onest.variable, bricolage.variable, "font-mono", jetbrainsMono.variable)}
		>
			<body className=" text-black antialiased">
				<div className="flex min-h-screen flex-col">
					<Header />
					<main className="flex-1">{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}

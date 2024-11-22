import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";
import { Roboto_Mono } from "next/font/google";

import Navbar from "./ui/navbar";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
})

const roboto_mono = Roboto_Mono({
	subsets: ["latin"],
	display: "swap",
})

export const metadata: Metadata = {
	title: "leo-drinks-coffee",
	description: "A blog about espresso reviews from coffee shops.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={inter.className}>
			<body>
				<div className="container">
					{children}
				</div>
			</body>
		</html>
	);
}

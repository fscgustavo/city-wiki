import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "City Wiki",
	description: "Know more about US Cities",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<div className="flex min-h-screen flex-col antialiased">
						<Header />
						<div className="flex flex-1 flex-col gap-4 p-8 pt-6">
							{children}
						</div>
					</div>
				</ThemeProvider>
				<Analytics />
			</body>
		</html>
	);
}

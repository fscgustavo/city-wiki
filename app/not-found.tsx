import Link from "next/link";

export default function NotFound() {
	return (
		<main className="flex h-screen flex-col items-center justify-center gap-2 text-center">
			<h1 className="text-4xl font-bold">Page not found</h1>
			<p className="text-accent-foreground">
				Return to the{" "}
				<Link href="/" className="text-sky-600 dark:text-sky-400">
					main page
				</Link>
			</p>
		</main>
	);
}

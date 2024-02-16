"use client";

import { BackButton } from "@/components/back-button";

export default function Error() {
	return (
		<main>
			<div className="flex flex-col gap-5 mx-auto max-w-5xl h-[50vh]">
				<BackButton />
				<div className="flex flex-col flex-1 items-center justify-center gap-2">
					<h1 className="text-4xl font-bold">Error :&#40;</h1>
					<p className="text-accent-foreground">
						<button
							className="text-sky-600 dark:text-sky-400 cursor-pointer"
							onClick={() => window.location.reload()}
						>
							Refresh the page
						</button>{" "}
						. If the error persists, try again later
					</p>
				</div>
			</div>
		</main>
	);
}

"use client";

import { CityTableFilters } from "@/components/city-table-filters";

export default function Error() {
	return (
		<div className="flex flex-col flex-1 gap-4">
			<h1 className="text-3xl font-bold tracking-tight">US Cities</h1>

			<CityTableFilters />
			<div className="flex flex-col flex-1 items-center justify-center gap-2 text-center">
				<h1 className="text-4xl font-bold">Error :&#40;</h1>
				<p className="text-accent-foreground">
					<button
						className="text-sky-600 dark:text-sky-400 cursor-pointer"
						onClick={() => window.location.reload()}
					>
						Refresh the page
					</button>{" "}
					or{" "}
					<a href="/" className="text-sky-600 dark:text-sky-400">
						clean the filters
					</a>
				</p>
			</div>
		</div>
	);
}

"use client";

import { BackButton } from "@/components/back-button";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
	return (
		<main>
			<div className="flex flex-col gap-5 mx-auto max-w-5xl h-[50vh]">
				<BackButton />
				<div className="flex flex-col flex-1 justify-center gap-2">
					<Skeleton className="h-8 w-[50%] my-5" />
					<Skeleton className="h-4 w-[80%]" />
					<Skeleton className="h-4 w-[80%]" />
					<Skeleton className="h-4 w-[80%]" />
					<Skeleton className="h-4 w-[80%]" />
					<Skeleton className="h-4 w-[80%]" />
					<Skeleton className="h-4 w-[80%]" />
					<Skeleton className="h-4 w-[80%]" />
					<Skeleton className="h-4 w-[80%]" />
					<Skeleton className="h-4 w-[80%]" />
					<Skeleton className="h-4 w-[80%]" />
					<Skeleton className="h-4 w-[80%]" />
					<Skeleton className="h-4 w-[80%]" />
					<Skeleton className="h-4 w-[80%] mb-5" />
					<Skeleton className="h-[600px] w-full" />
				</div>
			</div>
		</main>
	);
}

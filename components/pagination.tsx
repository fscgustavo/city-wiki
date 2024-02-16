"use client";

import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

import { Button } from "./ui/button";

export type PaginationProps = {
	pageIndex: number;
	totalCount: number;
	perPage: number;
};

export function Pagination({
	pageIndex,
	perPage,
	totalCount,
}: PaginationProps) {
	const searchParams = useSearchParams();

	const pages = Math.ceil(totalCount / perPage) || 1;

	const router = useRouter();

	function handlePageChange(page: number) {
		const params = new URLSearchParams(searchParams);

		params.set("page", page.toString());

		router.push(`/?${params.toString()}`);
	}

	return (
		<div className="flex items-center justify-between max-sm:flex-col max-sm:gap-4">
			<span className="text-sm text-muted-foreground">
				Total of {totalCount} item(s)
			</span>
			<div className="flex items-center gap-6 lg:gap-8 max-sm:flex-col max-sm:gap-2">
				<p className="text-sm font-medium">
					Page {pageIndex} of {pages}
				</p>
				<div className="flex items-center gap-2">
					<Button
						variant="outline"
						className="h-8 w-8 p-0"
						disabled={pageIndex === 1}
						onClick={() => handlePageChange(1)}
					>
						<ChevronsLeft className="h-4 w-4" />
						<span className="sr-only">First page</span>
					</Button>
					<Button
						variant="outline"
						className="h-8 w-8 p-0"
						disabled={pageIndex === 1}
						onClick={() => handlePageChange(pageIndex - 1)}
					>
						<ChevronsLeft className="h-4 w-4" />
						<span className="sr-only">Previous page</span>
					</Button>
					<Button
						variant="outline"
						className="h-8 w-8 p-0"
						disabled={pageIndex === pages}
						onClick={() => handlePageChange(pageIndex + 1)}
					>
						<ChevronsRight className="h-4 w-4" />
						<span className="sr-only">Next page</span>
					</Button>
					<Button
						variant="outline"
						className="h-8 w-8 p-0"
						disabled={pageIndex === pages}
						onClick={() => handlePageChange(pages)}
					>
						<ChevronsRight className="h-4 w-4" />
						<span className="sr-only">Last page</span>
					</Button>
				</div>
			</div>
		</div>
	);
}

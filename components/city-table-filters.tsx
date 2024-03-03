"use client";

import { Search, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function CityTableFilters() {
	const router = useRouter();
	const searchParams = useSearchParams();

	function filterAction(formData: FormData) {
		const params = new URLSearchParams();

		const filterData = {
			minPopulation: formData.get("minPopulation")?.toString(),
			maxPopulation: formData.get("maxPopulation")?.toString(),
			limit: formData.get("limit")?.toString(),
		};

		filterData.minPopulation &&
			params.set("minPopulation", filterData.minPopulation);
		filterData.maxPopulation &&
			params.set("maxPopulation", filterData.maxPopulation);
		filterData.limit && params.set("limit", filterData.limit);

		params.set("page", "1");

		router.push(`/?${params.toString()}`);
	}

	function clearFilters() {
		router.push("/");
	}

	return (
		<form className="flex items-end gap-2 flex-wrap" action={filterAction}>
			<div className="space-y-1 max-md:w-full">
				<label htmlFor="minPopulation" className="text-sm font-medium">
					Minimal Population
				</label>
				<Input
					id="minPopulation"
					name="minPopulation"
					type="number"
					className="h-8 lg:w-48"
					min={0}
					defaultValue={searchParams.get("minPopulation") ?? ""}
				/>
			</div>
			<div className="space-y-1 max-md:w-full">
				<label htmlFor="maxPopulation" className="text-sm font-medium">
					Maximum Population
				</label>
				<Input
					id="maxPopulation"
					name="maxPopulation"
					type="number"
					className="h-8 lg:w-48"
					min={0}
					defaultValue={searchParams.get("maxPopulation") ?? ""}
				/>
			</div>
			<div className="space-y-1 max-md:w-full">
				<label htmlFor="limit" className="text-sm font-medium">
					Limit
				</label>
				<Input
					id="limit"
					name="limit"
					type="number"
					className="h-8 lg:w-24"
					defaultValue={searchParams.get("limit") ?? "10"}
					max={10}
					min={1}
				/>
			</div>
			<div className="flex gap-4 wrap">
				<Button type="submit" variant="secondary" size="xs">
					<Search className="mr-2 h-4 w-4" />
					Filter results
				</Button>
				<Button type="reset" variant="outline" size="xs" onClick={clearFilters}>
					<X className="mr-2 h-4 w-4" />
					Remove filters
				</Button>
			</div>
		</form>
	);
}

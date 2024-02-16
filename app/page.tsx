import { ArrowUpRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

import { CityTableFilters } from "@/components/city-table-filters";
import { Pagination } from "@/components/pagination";
import { Button } from "@/components/ui/button";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { env } from "@/env";
import { GeoData } from "@/types/geo";
import { fetcher } from "@/utils/fetcher";

export const metadata: Metadata = {
	title: "Cities | City Wiki",
};

type CitiesPageProps = {
	searchParams: Record<string, string>;
};

const DEFAULT_LIMIT = 10;

export default async function CityPage({
	searchParams: { page = "1", ...searchParams },
}: CitiesPageProps) {
	const filterParams = new URLSearchParams({
		limit: DEFAULT_LIMIT.toString(),
		offset: String(DEFAULT_LIMIT * (Number(page) - 1)),
		...searchParams,
	});

	const { data: cities } = await fetcher<GeoData>(
		`${
			env.NEXT_PUBLIC_GEO_DOMAIN
		}/geo/cities?countryIds=US&${filterParams.toString()}`
	);

	return (
		<div className="flex flex-col gap-4">
			<h1 className="text-3xl font-bold tracking-tight">US Cities</h1>

			{cities && (
				<div className="space-y-2.5">
					<CityTableFilters />
					<div className="border rounded-md">
						<Table className="text-center overflow-x-scroll has-[th]:min-w-[52rem]">
							<TableHeader>
								<TableRow>
									<TableHead>City</TableHead>
									<TableHead>Region</TableHead>
									<TableHead>Latitude</TableHead>
									<TableHead>Longitude</TableHead>
									<TableHead>Population</TableHead>
									<TableHead className="w-[10.25rem]"></TableHead>
								</TableRow>
							</TableHeader>
							<TableBody className="min-w-[67.67rem]">
								{cities.data.map((city) => {
									return (
										<TableRow key={city.id}>
											<TableCell className="font-medium">{city.city}</TableCell>
											<TableCell className="font-medium">
												{city.region}
											</TableCell>
											<TableCell className="font-medium">
												{city.latitude}
											</TableCell>
											<TableCell className="font-medium">
												{city.longitude}
											</TableCell>
											<TableCell className="font-medium">
												{city.population}
											</TableCell>
											<TableCell>
												<Button variant="outline" size="xs" asChild>
													<Link href={`/city/${city.wikiDataId}`}>
														<ArrowUpRight className="h-3 w-3 mr-2" />
														<span aria-hidden>See more</span>
														<span className="sr-only">
															See see more about the city ${city.city}
														</span>
													</Link>
												</Button>
											</TableCell>
										</TableRow>
									);
								})}
							</TableBody>
						</Table>
					</div>

					<Pagination
						pageIndex={Number(page)}
						perPage={Number(filterParams.get("limit"))}
						totalCount={cities?.metadata.totalCount}
					/>
				</div>
			)}
		</div>
	);
}

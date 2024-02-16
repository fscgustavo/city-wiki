"use server";

import { GoogleMapsEmbed } from "@next/third-parties/google";

import { BackButton } from "@/components/back-button";
import { env } from "@/env";
import { ChatContent } from "@/types/chatgbt";
import { CityDetails } from "@/types/geo";
import { fetcher } from "@/utils/fetcher";

type CityDetailsProps = {
	params: {
		id: string;
	};
};

export default async function CityDetailsPage({ params }: CityDetailsProps) {
	const { data: city } = await fetcher<CityDetails>(
		`${env.NEXT_PUBLIC_GEO_DOMAIN}/geo/cities/${params.id}`
	);

	const { data: content } = await fetcher<ChatContent>(
		env.NEXT_PUBLIC_CHATGBT_DOMAIN,
		{
			body: [
				{
					content: `
	                Take the following object, it contains some data about a city

	                Generate a summary text with this data and complement it with insightful and missing informations about the city provided

	                ${JSON.stringify(city, null, 2)}
	            `,
					role: "user",
				},
			],
		}
	);

	return (
		<main className="mx-auto max-w-5xl grid gap-5">
			<BackButton />
			<h1 className="text-3xl font-bold tracking-tight">{city?.data.name}</h1>
			<p
				dangerouslySetInnerHTML={{
					__html: content?.text.replaceAll("\n", "<br/>") ?? "",
				}}
				className="mb-5"
			/>

			<GoogleMapsEmbed
				apiKey={env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}
				height={600}
				width="100%"
				mode="place"
				q={`${city?.data.name}, ${city?.data.region}, ${city?.data.country}`}
			/>
		</main>
	);
}

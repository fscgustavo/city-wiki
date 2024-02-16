"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "./ui/button";

export function BackButton() {
	const router = useRouter();

	return (
		<Button variant="ghost" className="w-min p-0" onClick={() => router.back()}>
			<ArrowLeft className="h-[1rem] w-[1rem] mr-2" /> Previous Page
		</Button>
	);
}

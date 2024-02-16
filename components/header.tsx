import { Building } from "lucide-react";
import Link from "next/link";

import { ModeToggle } from "./theme/mode-toggle";

export function Header() {
	return (
		<header className="border-b">
			<div className="flex h-16 items-center gap-6 px-6">
				<Link href="/" className="font-bold flex gap-2">
					<Building className="h-6 w-6" />
					City Wiki
				</Link>
				<div className="ml-auto flex items-center gap-2">
					<ModeToggle />
				</div>
			</div>
		</header>
	);
}

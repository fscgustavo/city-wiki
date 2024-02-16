import { Building } from "lucide-react";
import Link from "next/link";

import { ModeToggle } from "./theme/mode-toggle";

export function Header() {
	return (
		<header className="border-b">
			<div className="flex h-16 items-center gap-6 px-6">
				<Link href="/">
					<Building className="h-6 w-6" />
				</Link>
				<div className="ml-auto flex items-center gap-2">
					<ModeToggle />
				</div>
			</div>
		</header>
	);
}

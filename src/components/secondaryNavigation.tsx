"use client";

import { Settings } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./toggle-theme";
import { usePathname } from "next/navigation";

export default function SecondaryNavigation() {
  const pathname = usePathname();

  return (
    <ul className="grid gap-6">
      <li>
        <Link
          href="/dashboard/settings"
          className={`flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all ${
            pathname === "/dashboard/settings"
              ? "bg-primary text-primary-foreground"
              : "hover:bg-muted"
          }`}
        >
          <Settings className="h-4 w-4" />
          Settings
        </Link>
      </li>
      <li>
        <ModeToggle />
      </li>
    </ul>
  );
}

"use client";

import { CookingPot, Plus, Refrigerator } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainNavigation() {
  const pathname = usePathname();

  return (
    <div className="flex-1">
      <nav className="items-start px-3 text-sm font-medium">
        <ul className="grid gap-6">
          <li>
            <Link
              href="/dashboard/recipe"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all ${
                pathname === "/dashboard/recipe"
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              }`}
            >
              <CookingPot className="h-4 w-4" />
              Recipes
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/recipe/create"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all
                        ${
                          pathname === "/dashboard/recipe/create"
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-muted"
                        }`}
            >
              <Plus className="h-4 w-4" />
              Create Recipe
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/fridge"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all 
                        ${
                          pathname === "/dashboard/fridge"
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-muted"
                        }`}
            >
              <Refrigerator className="h-4 w-4" />
              Fridge
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

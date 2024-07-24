"use client";

import { ModeToggle } from "./toggle-theme";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { CookingPot, Plus, Refrigerator, Settings } from "lucide-react";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { SignInButton } from "./authbuttons";

export default function Navigation() {
  const { data: session } = useSession();
  const pathname = usePathname();
  return (
    <div className="flex flex-col h-screen py-5 w-56 border-r-2  ">
      <div className="flex-grow flex flex-col justify-between pb-10">
        <div>
          <div className="flex flex-row items-center px-3 text-foreground">
            <Image
              src="/android-chrome-512x512.png"
              width={50}
              height={50}
              alt={"ZeroWasteChef Logo"}
              className="rounded-md"
            />
            <span className="ml-4">ZeroWasteChef</span>
          </div>
          <Separator className="mt-6 mb-6" />
          <div className="flex-1">
            <nav className="items-start px-3 text-sm font-medium">
              <ul className="grid gap-6">
                <li>
                  <Link
                    href="/recipe"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all ${
                      pathname === "/recipe"
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
                    href="/recipe/create"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all
                        ${
                          pathname === "/recipe/create"
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
                    href="/fridge"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all 
                        ${
                          pathname === "/fridge"
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
        </div>
        <nav className="items-start px-3 text-sm font-medium">
          <ul className="grid gap-6">
            <li>
              <Link
                href="/settings"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all ${
                  pathname === "/settings"
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
        </nav>
      </div>
      <div className="flex flex-row w-full cursor-pointer text-foreground px-4 items-center">
        {session ? (
          <>
            <Avatar>
              <AvatarImage src={session?.user?.image!} />
              <AvatarFallback>{session?.user?.name!.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="ml-4 flex flex-col">
              <span className="text-sm">{session?.user?.name}</span>
            </div>
          </>
        ) : (
          <SignInButton />
        )}
      </div>
    </div>
  );
}

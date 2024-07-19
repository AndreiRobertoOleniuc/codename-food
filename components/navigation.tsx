import { ModeToggle } from "./toggle-theme";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { FaBowlRice } from "react-icons/fa6";
import { BiFridge } from "react-icons/bi";
import Image from "next/image";

export default function Navigation({ isCollapsed }: { isCollapsed: boolean }) {
  return (
    <div className="flex flex-col h-screen p-5">
      <div className="flex-grow flex flex-col justify-between pb-10">
        <div>
          <div className="flex flex-row items-center">
            <Image
              src="/android-chrome-512x512.png"
              width={50}
              height={50}
              alt={"Application Logo"}
              className="rounded-md"
            />
            {isCollapsed ? "" : <span className="ml-4">Recipe Manager</span>}
          </div>
          <Separator className="mt-6 mb-6" />
          <nav className="mb-4">
            <span
              className={`flex items-center cursor-pointer ${
                isCollapsed ? "justify-center" : ""
              }`}
            >
              <FaBowlRice className="mr-2" />
              {isCollapsed ? "" : "Recipes"}
            </span>
            <Separator className="mt-6 mb-6" />
            <span
              className={`flex items-center cursor-pointer ${
                isCollapsed ? "justify-center" : ""
              }`}
            >
              <BiFridge className="mr-2" />
              {isCollapsed ? "" : "Fridge"}
            </span>
          </nav>
        </div>
        <div>
          <div className="flex flex-row items-center">
            <ModeToggle />
            {isCollapsed ? (
              ""
            ) : (
              <span className="ml-4 text-sm text-muted-foreground">
                Toggle theme
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full cursor-pointer">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        {isCollapsed ? "" : <span className="ml-5">Shadcn</span>}
      </div>
    </div>
  );
}

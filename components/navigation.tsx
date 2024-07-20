import { ModeToggle } from "./toggle-theme";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { FaBowlRice } from "react-icons/fa6";
import { BiFridge } from "react-icons/bi";
import Image from "next/image";

export default function Navigation() {
  return (
    <div className="flex flex-col h-screen p-5 w-60 border-r-2  ">
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
            <span className="ml-4">Recipe Manager</span>
          </div>
          <Separator className="mt-6 mb-6" />
          <nav className="mb-4">
            <div className={`flex items-center cursor-pointer `}>
              <FaBowlRice />
              <span className="ml-2">Recipes</span>
            </div>
            <Separator className="mt-6 mb-6" />
            <div className={`flex items-center cursor-pointer `}>
              <BiFridge />
              <span className="ml-2">Fridge</span>
            </div>
          </nav>
        </div>
        <div>
          <div className="flex flex-row items-center">
            <ModeToggle />
            <span className="ml-4 text-sm text-muted-foreground">
              Toggle theme
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full cursor-pointer">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className="ml-5">Shadcn</span>
      </div>
    </div>
  );
}

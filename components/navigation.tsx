import { ModeToggle } from "./toggle-theme";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { FaBowlRice } from "react-icons/fa6";
import { BiFridge } from "react-icons/bi";

export default function Navigation({ isCollapsed }: { isCollapsed: boolean }) {
  return (
    <div className="flex flex-col h-screen p-5">
      <div className="flex-grow flex flex-col justify-between pb-10">
        <div>
          {isCollapsed ? "" : <h1>Codename Food</h1>}
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
            {isCollapsed ? "" : <span className="ml-4">Toggle theme</span>}
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

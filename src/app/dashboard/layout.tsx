import "@/styles/global.css";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { auth } from "@/auth";
import MainNavigation from "@/components/mainNavigation";
import SecondaryNavigation from "@/components/secondaryNavigation";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: RootLayoutProps) {
  const session = await auth();
  return (
    <>
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
            <MainNavigation />
          </div>
          <nav className="items-start px-3 text-sm font-medium">
            <SecondaryNavigation />
          </nav>
        </div>
        <div className="flex flex-row w-full cursor-pointer text-foreground px-4 items-center">
          <Avatar>
            <AvatarImage src={session?.user?.image!} />
            <AvatarFallback>{session?.user?.name!.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="ml-4 flex flex-col">
            <span className="text-sm">{session?.user?.name}</span>
          </div>
        </div>
      </div>
      {children}
    </>
  );
}

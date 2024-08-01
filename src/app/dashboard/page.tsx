import { auth } from "@/auth";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "ZeroWasteChef",
  description: `Transform your kitchen with ZeroWasteChef, the ultimate app for managing your fridge and creating delicious recipes. Our advanced AI helps you track ingredients, reduce food waste, and discover new meals with what you have on hand.`,
};

export default async function Home() {
  const session = await auth();
  if (!session?.user) {
    redirect("/auth/signin");
  }
  return <main className="flex min-h-screen flex-col items-center p-20"></main>;
}

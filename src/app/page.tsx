import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZeroWasteChef",
  description: `Transform your kitchen with ZeroWasteChef, the ultimate app for managing your fridge and creating delicious recipes. Our advanced AI helps you track ingredients, reduce food waste, and discover new meals with what you have on hand.`,
};

export default function Home() {
  return <main className="flex min-h-screen flex-col items-center p-20"></main>;
}

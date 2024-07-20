import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Codename Food",
  description: "A recipe management app",
};

export default function Home() {
  return <main className="flex min-h-screen flex-col items-center "></main>;
}

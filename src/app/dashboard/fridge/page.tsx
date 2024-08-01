import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Fridge() {
  const session = await auth();
  if (!session?.user) {
    redirect("/auth/signin");
  }
  return (
    <div>
      <h1>Fridge</h1>
    </div>
  );
}

import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Recipes() {
  const session = await auth();
  if (!session?.user) {
    redirect("/auth/signin");
  }
  return (
    <div>
      <h1>Recipes</h1>
    </div>
  );
}

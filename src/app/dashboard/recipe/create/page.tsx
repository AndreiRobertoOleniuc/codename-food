import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function CreateRecipe() {
  const session = await auth();
  if (!session?.user) {
    redirect("/auth/signin");
  }
  return (
    <div>
      <h1>Create Recipe</h1>
    </div>
  );
}

import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { generateRecipe } from "../../../action";
import { RecipeCreationForm } from "@/components/form";

export default async function CreateRecipe() {
  const session = await auth();
  if (!session?.user) {
    redirect("/auth/signin");
  }

  async function generate(formData: FormData) {
    "use server";
    const ingredients = formData.get("ingredients") as string;
    const recipe = await generateRecipe(["tomato", "onion", "garlic"]);
  }

  return (
    <div className="flex flex-col flex-grow p-10 items-center">
      <div className="mb-10 text-center">
        <h1 className="text-foreground text-4xl font-bold">Create a Recipe</h1>
        <p className="text-muted-foreground text-sm mt-5">
          Recipes will be generated based on the list of ingredients provided
        </p>
        <RecipeCreationForm />
      </div>
    </div>
  );
}

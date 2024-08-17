import { auth } from "@/auth";
import { redirect } from "next/navigation";

/*
Ideally, we would show the user a list of recipes that can apply to is case after the generation
this page would display min 5 recipes which can be clicked or hovered, when hovered a dialog appears
with a quick description of the recipe, an image, the categories and the cooking time. If the user
want's to see the actual recipe there is a view detailed button which would open the actual detailed recipe
these overview cards can be resuable across the application in order to display them in for example the recipes screen
a user can generate more recipes after the initial five but this would costs more tokens, meaning this should be clear 
first time the user needs to awsner a dialog that he is sure he wants to generate more recipes since this costs more tokens,
he has the option to not ask again -> if clicked this dialog won't appear anymore.  Make sure to include loading screens 
which are interactive since a load of the times users need to wait for generation. 
meaning loading screen for both generating the initial 5 recipes, loading icon when generating more. 
skeletons when intial load happens. 
*/

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

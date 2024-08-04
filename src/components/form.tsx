"use client";

import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

export function RecipeCreationForm() {
  return (
    <form>
      <div className="grid grid-cols-1 gap-6 mt-5">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="text" placeholder="Ingredient" className="flex-grow" />
          <Button type="submit">Add</Button>
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-background rounded-lg py-2"
        >
          Generate Recipe
        </button>
      </div>
    </form>
  );
}

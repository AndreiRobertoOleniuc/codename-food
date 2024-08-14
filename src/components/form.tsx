"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { generateRecipe } from "@/app/action";
import React, { FormEvent, useState, useTransition } from "react";

export function RecipeCreationForm() {
  let [isPending, startTransition] = useTransition();
  const [ingredients, setIngredients] = useState<string[]>([]);

  const [ingredientInput, setIngredientInput] = useState("");

  const addIngredient = (ingredient: string, e: FormEvent) => {
    e.preventDefault();
    setIngredientInput("");
    setIngredients([...ingredients, ingredient]);
  };

  const generate = async (e: FormEvent) => {
    e.preventDefault();
    startTransition(() => {
      generateRecipe(ingredients);
    });
  };

  return (
    <form className="grid grid-cols-1 gap-6 mt-5 max-w-96" onSubmit={generate}>
      <div className="flex w-full items-center space-x-2">
        <Input
          type="text"
          placeholder="Ingredient"
          className="flex-grow"
          value={ingredientInput}
          onChange={(e) => setIngredientInput(e.target.value)}
        />
        <Button onClick={(e) => addIngredient(ingredientInput, e)}>Add</Button>
      </div>
      <ul className="list-disc list-inside flex flex-row flex-wrap ">
        {ingredients.map((ingredient, index) => (
          <Badge key={index} className="py-2 my-2 mr-2">
            {ingredient}
          </Badge>
        ))}
      </ul>
      <button
        type="submit"
        className="w-full bg-primary text-background rounded-lg py-2"
      >
        Generate Recipe
      </button>
    </form>
  );
}

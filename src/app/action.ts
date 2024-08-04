"use server";

import { ChatCompletionResponse } from "@/shared/Recipe";

export async function generateRecipe(ingredients: string[]) {
  const recipe: ChatCompletionResponse = await fetch(
    "https://api.openai.com/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY!}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              'You are a Nurtition Expert, which helps create Meals from a given list of ingredients. For each meal you create, a list of ingredients will be provided. Each meal needs to have a description of how to prepare it. Make sure that each meal only uses the ingredients provided.Create atleast 5 different Recipes. Please present your findings in a structured JSON format, using the template: [{"recipeName": string, "ingredients":[{"name": string, // ingredient name,"quantity": string, // quantity of the ingredient"unit": string // unit of the ingredient } ],"categories": [list of categories this meal belongs to],"recipeDifficulty": string, // easy, medium, hard"cookingTime": string,"recipeImageDescription": string,"instruction": string}].Remove ALL whitespaces from the JSON in the response. The JSON should be minified.',
          },
          {
            role: "user",
            content: `I have the Following Ingredients at Home, what could I cook with these:  ${ingredients.join(
              ","
            )}`,
          },
        ],
      }),
    }
  ).then((res) => res.json());
}

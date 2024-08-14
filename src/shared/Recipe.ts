export interface Ingredient {
  name: string; // ingredient name
  quantity: string; // quantity of the ingredient
  unit: string; // unit of the ingredient
}

export interface Recipe {
  recipeName: string;
  ingredients: Ingredient[];
  categories: string[]; // list of categories this meal belongs to
  recipeDifficulty: string; // easy, medium, hard
  cookingTime: string;
  recipeImageDescription: string;
  instruction: string;
}

export interface ChatCompletionResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: {
    index: number;
    message: {
      role: string;
      content: string;
    };
    logprobs: null | any;
    finish_reason: string;
  }[];
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
  system_fingerprint: string;
}

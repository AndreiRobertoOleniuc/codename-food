import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZeroWasteChef: Your AI-Powered Kitchen Companion",
  description: `Transform your kitchen with ZeroWasteChef, the ultimate app for managing your fridge and creating delicious recipes. Our advanced AI helps you track ingredients, reduce food waste, and discover new meals with what you have on hand.
                Key Features:
                Smart Inventory Management: Keep track of your fridge contents and get alerts for expiring items.
                AI-Powered Recipes: Get personalized recipes based on your available ingredients.
                Food Waste Reduction: Maximize your groceries and minimize waste.
                Personalized Meal Plans: Enjoy customized meal plans to fit your dietary needs.
                Easy Shopping Lists: Create shopping lists for your favorite recipes and missing items.
                Choose ZeroWasteChef for an innovative, user-friendly, and eco-friendly cooking experience. Download now and start making delicious, sustainable meals today!
                `,
};

export default function Home() {
  return <main className="flex min-h-screen flex-col items-center p-20"></main>;
}

import recipeDataJSON from "../data/RecipeData.json";
import { NutritionSectionType } from "../types/RecipeDataTypes";

const recipeData = recipeDataJSON.data;

export const getListSections = () =>
  recipeData.filter((section) => section.heading !== "Nutrition");

export const getNutrition = (): NutritionSectionType | undefined => {
  const nutritionData = recipeData.find(
    (section) => section.heading === "Nutrition",
  );
  return nutritionData || undefined;
};

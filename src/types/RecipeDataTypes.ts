interface ListItemType {
  heading?: string;
  text: string;
}

export interface NutritionItemType {
  heading: string;
  text: string;
}

export interface RecipeListItemTypes {
  heading: string;
  body: ListItemType[];
}

export interface NutritionSectionType {
  heading?: string;
  text?: string;
  items?: NutritionItemType[];
}

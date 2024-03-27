import omeletteImg from "../assets/images/image-omelette.jpeg";
import { getListSections, getNutrition } from "../services/recipe";
import { RecipeListItemTypes } from "../types/RecipeDataTypes";
import NutritionSection from "./NutritionSection";
import RecipeSectionWithList from "./RecipeSectionWithList";

function Recipe() {
  const listSections = getListSections() as RecipeListItemTypes[];
  const nutritionSectionData = getNutrition();

  return (
    <section className="md:my-10 lg:my-28">
      <img src={omeletteImg} alt="Omelette" className="md:hidden" />
      <article className="min-h-[100dvh] bg-userWhite px-8 py-10 md:min-h-min md:max-w-[738px] md:rounded-2xl md:p-10 md:shadow-sm">
        <img
          src={omeletteImg}
          alt="Omelette"
          className="hidden rounded-xl md:block"
        />
        <div className="flex flex-col gap-y-0 pt-0 md:pt-10">
          <article>
            <h1 className="font-userHeaderFont text-4xl text-userDarkCharcoal">
              Simple Omelette Recipe
            </h1>
            <p className="mt-6 text-userWengeBrown">
              An easy and quick dish, perfect for any meal. This classic
              omelette combines beaten eggs cooked to perfection, optionally
              filled with your choice of cheese, vegetables, or meats.
            </p>
          </article>
          {listSections.map((x) => (
            <RecipeSectionWithList
              key={x.heading}
              data={x}
              markerVariant={
                x.heading === "Instructions" ? "decimal" : "bullet"
              }
              preparationVariant={x.heading === "Preparation time"}
            />
          ))}
          <NutritionSection
            heading={nutritionSectionData?.heading || ""}
            text={nutritionSectionData?.text || ""}
            items={nutritionSectionData?.items || []}
          />
        </div>
      </article>
    </section>
  );
}

export default Recipe;

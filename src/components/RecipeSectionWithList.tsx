import { v4 as uuidv4 } from "uuid";
import { RecipeListItemTypes } from "../types/RecipeDataTypes";

interface RecipeListItemProps {
  heading?: string;
  text: string;
}

interface RecipeSectionWithListProps {
  data: RecipeListItemTypes;
  markerVariant: "bullet" | "decimal";
  preparationVariant?: boolean;
}

function RecipeListItem({ heading, text }: RecipeListItemProps) {
  return (
    <li className="[&:not(:last-child)]:mb-2">
      <p className="ml-4">
        {heading && (
          <b className="font-semibold text-userDarkCharcoal">{heading}: </b>
        )}
        {text}
      </p>
    </li>
  );
}

function RecipeSectionWithList({
  data,
  markerVariant,
  preparationVariant,
}: RecipeSectionWithListProps) {
  const preparationVariantListStyles = `
    bg-userRoseWhite border-b-0 !pl-6 mt-8
    [&>ul]:px-7
    first:[&>h2]:text-userDarkRaspberry first:[&>h2]:text-[20px] first:[&>h2]:font-sans
  `;

  const listVariantStyles =
    markerVariant === "bullet" ? "list-disc" : "list-decimal";

  return (
    <>
      <article
        className={`rounded-xl p-6 pl-0 md:p-7 md:pl-0 ${preparationVariant && preparationVariantListStyles}`}
      >
        <h2 className="font-serif text-[26px] font-bold text-userNutmeg">
          {data.heading}
        </h2>
        <ul
          className={`ml-4 mt-4 px-2 marker:text-userDarkRaspberry ${listVariantStyles} ${preparationVariant && "ml-0"}`}
        >
          {data.body.map((x) => (
            <RecipeListItem key={uuidv4()} heading={x.heading} text={x.text} />
          ))}
        </ul>
      </article>
      {!preparationVariant && <hr />}
    </>
  );
}

RecipeListItem.defaultProps = {
  heading: "",
};

RecipeSectionWithList.defaultProps = {
  preparationVariant: false,
};

export default RecipeSectionWithList;

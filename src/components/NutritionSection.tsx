import { NutritionItemType } from "../types/RecipeDataTypes";

interface NutritionSectionProps {
  heading: string;
  text: string;
  items: NutritionItemType[] | [];
}

function NutritionSection({ heading, text, items }: NutritionSectionProps) {
  return (
    <article className="mt-6">
      <h2 className="font-serif text-[26px] font-bold text-userNutmeg">
        {heading}
      </h2>
      <p className="mt-4">{text}</p>
      <table className="mt-4 w-full table-fixed text-left">
        <tbody className="">
          {items.map((x) => (
            <tr className="[&:not(:last-child)]:border-b">
              <th className="py-2 pl-6 font-normal">{x.heading}</th>
              <td className="font-bold text-userNutmeg">{x.text}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
}

export default NutritionSection;

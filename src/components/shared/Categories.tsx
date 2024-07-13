// React Router Dom
import { Link } from "react-router-dom";

// Components
import { Badge } from "../ui/badge";

const categories = [
  { name: "Home Decor", value: 6 },
  { name: "Kitchen", value: 3 },
  { name: "Apparel", value: 1 },
  { name: "Outdoor", value: 2 },
  { name: "Gifts", value: 4 },
  { name: "Seasonal", value: 5 },
];

function Categories() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-semibold text-lg">Categories</h2>
      <ul className="flex flex-col gap-3">
        {categories.map((category) => (
          <li key={category.name} className="flex justify-between">
            <Link to={"#"} className="text-zinc-500 hover:text-zinc-800">
              {category.name}
            </Link>
            <Badge variant={"outline"}>{category.value}</Badge>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Categories;

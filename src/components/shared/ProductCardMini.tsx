// Components
import { Product } from "@/types/Products";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import Rate from "./Rate";

// React Router Dom
import { Link } from "react-router-dom";

type ProductCardMiniProps = Omit<Product, "id">;

function ProductCardMini({ title, price, rating }: ProductCardMiniProps) {
  return (
    <Link
      to={"#"}
      className="flex gap-4 items-center hover:bg-zinc-100 transition duration-300 rounded"
    >
      <div className="aspect-square bg-zinc-200 w-16 rounded"></div>
      <div className="text-sm">
        <div className="truncate font-semibold">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <span>{title}</span>
              </TooltipTrigger>
              <TooltipContent>
                <p>{title}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <Rate rating={rating} />
        <span className="text-zinc-500">₱{price}</span>
      </div>
    </Link>
  );
}
export default ProductCardMini;

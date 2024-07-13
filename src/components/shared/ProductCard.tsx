// Components
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import AddToCartButton from "./AddToCartButton";
import Rate from "./Rate";
import { Button } from "../ui/button";

// Icons
import { HeartIcon } from "@heroicons/react/24/outline";
import { Product } from "@/types/Products";

type ProductCardProps = Product;

function ProductCard({ title, id, price, rating }: ProductCardProps) {
  return (
    <Card className="shadow-sm overflow-hidden">
      <div className="bg-zinc-200 w-full aspect-square"></div>
      <CardHeader>
        <CardTitle className="truncate">
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
        </CardTitle>
        <CardDescription>
          <Rate rating={rating} />
          <span>₱{price}</span>
        </CardDescription>
      </CardHeader>
      <CardFooter className="gap-4">
        <AddToCartButton id={id} price={price} title={title} rating={rating} />
        <Button variant={"ghost"} size={"icon"} className="p-1">
          <HeartIcon className="w-7 h-7" />
        </Button>
      </CardFooter>
    </Card>
  );
}
export default ProductCard;

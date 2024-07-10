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

// Icons
import { Button } from "../ui/button";
import { HeartIcon } from "@heroicons/react/24/outline";
import Rate from "./Rate";
import { Product } from "@/types/Products";

type ProductCardProps = Product;

function ProductCard({ title, price, rating }: ProductCardProps) {
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
        <Button className="w-full">Add to Cart</Button>
        <Button variant={"ghost"} size={"icon"} className="p-1">
          <HeartIcon className="w-7 h-7" />
        </Button>
      </CardFooter>
    </Card>
  );
}
export default ProductCard;

import { Product } from "@/types/Products";
import ProductCardMini from "./ProductCardMini";
import { Button } from "../ui/button";
import { TrashIcon } from "@heroicons/react/24/outline";

type WishlistProductCardProps = Product;

function WishlistProductCard({
  price,
  rating,
  title,
}: WishlistProductCardProps) {
  return (
    <div className="relative">
      <ProductCardMini price={price} rating={rating} title={title} />
      <div className="absolute right-0 bottom-0 flex gap-2">
        <Button className="w-full">Add to Cart</Button>
        <Button variant={"ghost"} size={"icon"} className="border px-2">
          <TrashIcon className="w-4 h-4 text-red-500" />
        </Button>
      </div>
    </div>
  );
}
export default WishlistProductCard;

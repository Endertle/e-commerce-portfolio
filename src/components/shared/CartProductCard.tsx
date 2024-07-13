// Components
import { Product } from "@/types/Products";
import ProductCardMini from "./ProductCardMini";
import { Button } from "../ui/button";

// Icons
import { MinusIcon, PlusIcon } from "@heroicons/react/16/solid";
import { TrashIcon } from "@heroicons/react/24/outline";

type CartProductCardProps = Product;

function CartProductCard({ price, rating, title }: CartProductCardProps) {
  return (
    <div className="flex flex-col gap-2">
      <ProductCardMini price={price} rating={rating} title={title} />
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <div className="w-28 flex items-center justify-between">
            <Button variant={"ghost"} size={"icon"} className="border">
              <MinusIcon className="w-3 h-3" />
            </Button>
            <span className="text-sm">2</span>
            <Button variant={"ghost"} size={"icon"} className="border">
              <PlusIcon className="w-3 h-3" />
            </Button>
          </div>
          <Button variant={"ghost"} size={"icon"} className="border">
            <TrashIcon className="w-4 h-4 text-red-500" />
          </Button>
        </div>
        <span className="font-medium">₱200.00</span>
      </div>
    </div>
  );
}
export default CartProductCard;

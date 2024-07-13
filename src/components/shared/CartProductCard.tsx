// Components
import ProductCardMini from "./ProductCardMini";
import { Button } from "../ui/button";
import CartProductCardQuantity from "./CartProductCardQuantity";

// Icons
import { TrashIcon } from "@heroicons/react/24/outline";

// Utils
import { formatter } from "@/utils/formatter";
import { CartItem } from "@/types/Cart";

// Redux
import { useDispatch } from "react-redux";
import { removeFromCart } from "@/slices/cartSlice";

type CartProductCardProps = CartItem;

function CartProductCard({
  product: { id, price, rating, title },
  quantity,
  totalAmount,
}: CartProductCardProps) {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-2">
      <ProductCardMini price={price} rating={rating} title={title} />
      <div className="flex flex-col-reverse sm:flex-row sm:justify-between justify-end sm:items-center">
        <div className="flex gap-2">
          <CartProductCardQuantity productId={id} quantity={quantity} />
          <Button
            onClick={() => dispatch(removeFromCart(id))}
            variant={"ghost"}
            size={"icon"}
            className="border"
          >
            <TrashIcon className="w-4 h-4 text-red-500" />
          </Button>
        </div>
        <span className="font-medium">
          Total: {formatter.format(totalAmount)}
        </span>
      </div>
    </div>
  );
}
export default CartProductCard;

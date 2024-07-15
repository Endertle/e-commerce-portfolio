// Icons
import { MinusIcon, PlusIcon } from "@heroicons/react/16/solid";

// Components
import { Button } from "../../ui/button";

// Redux
import { decreaseQuantity, increaseQuantity } from "@/slices/cartSlice";
import { useDispatch } from "react-redux";

type CartProductCardQuantityProps = {
  productId: number;
  quantity: number;
};

function CartProductCardQuantity({
  productId,
  quantity,
}: CartProductCardQuantityProps) {
  const dispatch = useDispatch();
  return (
    <div className="w-28 flex items-center justify-between">
      <Button
        onClick={() => dispatch(decreaseQuantity(productId))}
        variant={"ghost"}
        size={"icon"}
        className="border"
      >
        <MinusIcon className="w-3 h-3" />
      </Button>
      <span className="text-sm">{quantity}</span>
      <Button
        onClick={() => dispatch(increaseQuantity(productId))}
        variant={"ghost"}
        size={"icon"}
        className="border"
      >
        <PlusIcon className="w-3 h-3" />
      </Button>
    </div>
  );
}
export default CartProductCardQuantity;

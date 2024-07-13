// Components
import { Separator } from "../ui/separator";
import CartProductCard from "./CartProductCard";

// Redux
import { useSelector } from "react-redux";
import { RootState } from "@/store";

function CartProductList() {
  const cart = useSelector((state: RootState) => state.cart);
  return (
    <div className="flex flex-col gap-4 my-2">
      {cart.items.map((item) => (
        <div key={item.product.id}>
          <CartProductCard
            product={item.product}
            quantity={item.quantity}
            totalAmount={item.totalAmount}
          />
          <Separator className="my-5" />
        </div>
      ))}
    </div>
  );
}
export default CartProductList;

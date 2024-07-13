// Icons
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

// Components
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CartProductList from "./CartProductList";
import { ScrollArea } from "../ui/scroll-area";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "@/slices/cartSlice";
import { RootState } from "@/store";

function Cart() {
  const cartItemCount = useSelector((state: RootState) => state.cart.count);
  const dispatch = useDispatch();

  return (
    <Sheet>
      {/* Trigger for the sheet */}
      <SheetTrigger asChild>
        <Button variant={"ghost"} size={"icon"} className="relative">
          <ShoppingCartIcon className="w-6 h-6" />
          {!!cartItemCount && (
            <span className="absolute -top-1 -right-1 py-1 px-2 rounded-full bg-red-600 text-white text-xs">
              {cartItemCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      {/* Content of the sheet component */}
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
          <SheetDescription>
            This are the products in your cart.
          </SheetDescription>
        </SheetHeader>
        <ScrollArea className="w-full h-[calc(100svh_-200px)] sm:h-[calc(100svh_-148px)] pr-4">
          <CartProductList />
        </ScrollArea>
        <SheetFooter className="gap-2 w-full py-4">
          <Button
            onClick={() => dispatch(clearCart())}
            variant={"ghost"}
            className="border"
          >
            Clear Cart
          </Button>
          <Button>Checkout</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
export default Cart;

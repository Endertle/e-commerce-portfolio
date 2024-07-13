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

function Cart() {
  return (
    <Sheet>
      {/* Trigger for the sheet */}
      <SheetTrigger asChild>
        <Button variant={"ghost"} size={"icon"}>
          <ShoppingCartIcon className="w-6 h-6" />
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
        <ScrollArea className="w-full h-[calc(100svh_-_190px)] sm:h-[calc(100svh_-148px)] pr-4">
          <CartProductList />
        </ScrollArea>
        <SheetFooter className="gap-2 w-full py-4">
          <Button variant={"ghost"} className="border">
            Clear Cart
          </Button>
          <Button>Checkout</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
export default Cart;

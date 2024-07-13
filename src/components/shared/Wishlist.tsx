import { HeartIcon } from "@heroicons/react/24/outline";
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
import WishlistProductList from "./WishlistProductList";
import { ScrollArea } from "../ui/scroll-area";

function Wishlist() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"ghost"} size={"icon"}>
          <HeartIcon className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Wishlists</SheetTitle>
          <SheetDescription>
            This are the products in your cart.
          </SheetDescription>
        </SheetHeader>
        <ScrollArea className="w-full h-[calc(100svh_-_190px)] sm:h-[calc(100svh_-148px)] pr-4">
          <WishlistProductList />
        </ScrollArea>
        <SheetFooter className="gap-2 w-full py-4">
          <Button variant={"ghost"} className="border">
            Clear Wishlist
          </Button>
          <Button>Add All to Cart</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
export default Wishlist;

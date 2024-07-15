// Icons
import { HeartIcon } from "@heroicons/react/24/outline";

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
import WishlistProductList from "./WishlistProductList";
import { ScrollArea } from "../ui/scroll-area";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { addAllToCart, clearWishlist } from "@/slices/wishlistSlice";

function Wishlist() {
  const wishlistCount = useSelector((state: RootState) => state.wishlist.count);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"ghost"} size={"icon"} className="relative">
          <HeartIcon className="w-6 h-6" />{" "}
          {!!wishlistCount && (
            <span className="absolute -top-1 -right-1 py-1 px-2 rounded-full bg-red-600 text-white text-xs">
              {wishlistCount}
            </span>
          )}
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
          <Button
            onClick={() => dispatch(clearWishlist())}
            variant={"ghost"}
            className="border"
          >
            Clear Wishlist
          </Button>
          <Button onClick={() => dispatch(addAllToCart())}>
            Add All to Cart
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
export default Wishlist;

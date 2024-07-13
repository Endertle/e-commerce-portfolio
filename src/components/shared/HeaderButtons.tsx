// Icons
import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

// Components
import { Button } from "../ui/button";
import Cart from "./Cart";
import Wishlist from "./Wishlist";

function HeaderButtons() {
  return (
    <div className="flex gap-1 items-center sm:gap-5">
      {/* Search button shows in small devices */}
      <Button variant={"ghost"} size={"icon"} className="sm:hidden">
        <MagnifyingGlassIcon className="w-6 h-6" />
      </Button>

      {/* Shows in every deveices */}
      <Wishlist />
      <Cart />
    </div>
  );
}
export default HeaderButtons;

// Types
import { Product } from "@/types/Products";

// Components
import ProductCardMini from "./ProductCardMini";
import { Button } from "../ui/button";
import AddToCartButton from "./AddToCartButton";

// Icons
import { TrashIcon } from "@heroicons/react/24/outline";

// Redux
import { useDispatch } from "react-redux";
import { removeFromWishlist } from "@/slices/wishlistSlice";

type WishlistProductCardProps = Product;

function WishlistProductCard({
  price,
  rating,
  title,
  id,
}: WishlistProductCardProps) {
  const dispatch = useDispatch();

  return (
    <div className="relative space-y-2">
      <ProductCardMini price={price} rating={rating} title={title} />
      <div className="sm:absolute right-0 bottom-0 flex gap-2">
        <AddToCartButton id={id} price={price} rating={rating} title={title} />
        <Button
          onClick={() => dispatch(removeFromWishlist(id))}
          variant={"ghost"}
          size={"icon"}
          className="border"
        >
          <TrashIcon className="w-4 h-4 text-red-500" />
        </Button>
      </div>
    </div>
  );
}
export default WishlistProductCard;

// Icons
import { HeartIcon } from "@heroicons/react/24/outline";

// Components
import { Button } from "../ui/button";

// Redux
import { useDispatch } from "react-redux";
import { addToWishlist } from "@/slices/wishlistSlice";

// Utils
import { Product } from "@/types/Products";

type AddToWishlistButtonProps = Product;

function AddToWishlistButton({
  id,
  price,
  rating,
  title,
}: AddToWishlistButtonProps) {
  const dispatch = useDispatch();

  return (
    <Button
      onClick={() => dispatch(addToWishlist({ id, price, rating, title }))}
      variant={"ghost"}
      size={"icon"}
      className="p-1"
    >
      <HeartIcon className="w-7 h-7" />
    </Button>
  );
}
export default AddToWishlistButton;

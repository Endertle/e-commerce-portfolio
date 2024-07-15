// Redux
import { useDispatch } from "react-redux";

// Components
import { Button } from "../ui/button";

// Types
import { Product } from "@/types/Products";
import { addToCartWishlist } from "@/slices/wishlistSlice";
import { AppDispatch } from "@/store";

// Props
type AddToCartButtonProps = Product;

function AddToCartButton({
  id,
  price,
  rating,
  title,
  image,
}: AddToCartButtonProps) {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Button
      onClick={() =>
        dispatch(addToCartWishlist({ id, price, rating, title, image }))
      }
      className="w-full"
    >
      Add to Cart
    </Button>
  );
}
export default AddToCartButton;

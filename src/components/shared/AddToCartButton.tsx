// Redux
import { useDispatch } from "react-redux";
import { addToCart } from "@/slices/cartSlice";
// Components
import { Button } from "../ui/button";

// Types
import { Product } from "@/types/Products";

// Props
type AddToCartButtonProps = Product;

function AddToCartButton({
  id,
  price,
  rating,
  title,
  image,
}: AddToCartButtonProps) {
  const dispatch = useDispatch();

  return (
    <Button
      onClick={() => dispatch(addToCart({ id, price, rating, title, image }))}
      className="w-full"
    >
      Add to Cart
    </Button>
  );
}
export default AddToCartButton;

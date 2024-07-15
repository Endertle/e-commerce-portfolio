// Components
import { useSelector } from "react-redux";
import { Separator } from "../ui/separator";
import WishlistProductCard from "./WishlistProductCard";
import { RootState } from "@/store";

function WishlistProductList() {
  const wishlist = useSelector((state: RootState) => state.wishlist.products);
  return (
    <div className="flex flex-col gap-4 my-2">
      {wishlist.map((product) => (
        <div key={product.id}>
          <WishlistProductCard
            id={product.id}
            price={product.price}
            rating={product.rating}
            title={product.title}
          />
          <Separator className="my-5" />
        </div>
      ))}
    </div>
  );
}
export default WishlistProductList;

import { Product } from "@/types/Products";
import ProductCardMini from "./ProductCardMini";

type ProductListProps = {
  products: Product[];
};
function ProductList({ products }: ProductListProps) {
  return (
    <ul className="flex flex-col gap-5">
      {products.map((product) => (
        <li key={product.id}>
          <ProductCardMini
            price={product.price}
            rating={product.rating}
            title={product.title}
          />
        </li>
      ))}
    </ul>
  );
}

export default ProductList;

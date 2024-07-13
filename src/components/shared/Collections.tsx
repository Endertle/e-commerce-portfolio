// Components
import ProductCard from "./ProductCard";

// Utils
import { products } from "@/utils/products";

function Collections() {
  return (
    <div className="w-full space-y-6">
      <h2 className="text-2xl font-semibold">Fall Collections</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            price={product.price}
            rating={product.rating}
            title={product.title}
          />
        ))}
      </div>
    </div>
  );
}
export default Collections;

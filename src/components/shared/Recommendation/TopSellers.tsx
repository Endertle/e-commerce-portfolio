// Components
import ProductList from "../Product/ProductList";

const products = [
  {
    id: 1,
    image: "/placeholder.svg",
    title: "Cozy Blanket",
    price: 29.99,
    category: "Home Decor",
    rating: 4.5,
  },
  {
    id: 2,
    image: "/placeholder.svg",
    title: "Autumn Mug",
    price: 12.99,
    category: "Kitchen",
    rating: 4.2,
  },
  {
    id: 3,
    image: "/placeholder.svg",
    title: "Fall Fragrance Candle",
    price: 16.99,
    category: "Home Decor",
    rating: 4.8,
  },
  {
    id: 4,
    image: "/placeholder.svg",
    title: "Autumn Leaves Wall Art",
    price: 39.99,
    category: "Home Decor",
    rating: 4.3,
  },
  {
    id: 5,
    image: "/placeholder.svg",
    title: "Fall Harvest Wreath",
    price: 49.99,
    category: "Home Decor",
    rating: 4.6,
  },
];

function TopSellers() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-semibold text-lg">Top Sellers</h2>
      <ProductList products={products} />
    </div>
  );
}
export default TopSellers;

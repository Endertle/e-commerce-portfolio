// Components
import ProductCard from "./ProductCard";

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
  {
    id: 6,
    image: "/placeholder.svg",
    title: "Spiced Apple Cider Syrup",
    price: 12.99,
    category: "Kitchen",
    rating: 4.1,
  },
  {
    id: 7,
    image: "/placeholder.svg",
    title: "Fall Foliage Table Runner",
    price: 19.99,
    category: "Home Decor",
    rating: 4.4,
  },
  {
    id: 8,
    image: "/placeholder.svg",
    title: "Fall Fashion Hat",
    price: 24.99,
    category: "Apparel",
    rating: 4.7,
  },
  {
    id: 9,
    image: "/placeholder.svg",
    title: "Pumpkin Spice Latte Syrup",
    price: 14.99,
    category: "Kitchen",
    rating: 4.2,
  },
  {
    id: 10,
    image: "/placeholder.svg",
    title: "Autumn Leaves Garland",
    price: 29.99,
    category: "Home Decor",
    rating: 4.5,
  },
  {
    id: 11,
    image: "/placeholder.svg",
    title: "Cozy Flannel Throw Blanket",
    price: 39.99,
    category: "Home Decor",
    rating: 4.6,
  },
  {
    id: 12,
    image: "/placeholder.svg",
    title: "Pumpkin Spice Scented Candle",
    price: 18.99,
    category: "Home Decor",
    rating: 4.4,
  },
];

function Collections() {
  return (
    <div className="w-full space-y-6">
      <h2 className="text-2xl font-semibold">Fall Collections</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            price={product.price}
            rating={product.rating}
            title={product.title}
          />
        ))}{" "}
      </div>
    </div>
  );
}
export default Collections;

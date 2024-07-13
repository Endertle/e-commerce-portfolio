import { Product } from "./Products";

export type CartItem = {
  product: Product;
  quantity: number;
  totalAmount: number;
};

export type Cart = {
  items: CartItem[];
  count: number;
};

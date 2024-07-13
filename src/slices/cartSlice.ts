import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/types/Products";
import { Cart } from "@/types/Cart";
import { toast } from "sonner";

const initialState: Cart = {
  items: [],
  count: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      // Check if the item exist in the cart
      const productExist = state.items.find(
        (item) => item.product.id === action.payload.id
      );

      // Send error message if the item exits
      if (productExist) {
        toast.error("Product already in the cart.");
        return;
      }

      // Push new item in the cart
      state.items.push({
        product: action.payload,
        quantity: 1,
        totalAmount: action.payload.price,
      });

      // Increament cart count
      state.count += 1;

      // Show success toast
      toast.success("Product is added to the cart.");
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      // Remove the item in the cart:
      state.items = state.items.filter(
        (item) => item.product.id !== action.payload
      );

      // Decreament cart count
      state.count -= 1;
    },
    clearCart: (state) => {
      // Clear the cart items
      state.items = [];

      // Set count to 0
      state.count = 0;
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      state.items = state.items.map((item) => {
        if (item.product.id === action.payload) {
          const updatedQuantity = item.quantity + 1;

          return {
            ...item,
            quantity: updatedQuantity,
            totalAmount: item.product.price * updatedQuantity,
          };
        }
        return item;
      });
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      state.items = state.items.map((item) => {
        if (item.product.id === action.payload) {
          const updatedQuantity = item.quantity - 1;

          if (!updatedQuantity) return item;

          return {
            ...item,
            quantity: updatedQuantity,
            totalAmount: item.product.price * updatedQuantity,
          };
        }
        return item;
      });
    },
  },
});

export const {
  clearCart,
  addToCart,
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;

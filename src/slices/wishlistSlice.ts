import { Product } from "@/types/Products";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { addToCart } from "./cartSlice";
import { AppThunk } from "@/store";

export type Wishlist = {
  products: Product[];
  count: number;
};

const initialState: Wishlist = {
  products: [],
  count: 0,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<Product>) => {
      const productExist = state.products.find(
        (product) => product.id === action.payload.id
      );

      if (productExist) {
        toast.error("Product already in the wishlist.");
        return;
      }

      // Add new wishlist
      state.products.push(action.payload);

      // Increase wishlist count
      state.count += 1;

      // Show success toast
      toast.success("Product is added to the wishlist.");
    },

    removeFromWishlist: (state, action: PayloadAction<number>) => {
      // Check if the wishlist is empty before deleting item.
      if (state.count == 0) return;

      // Remove wishlist
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );

      // Decreaase wishlist count
      state.count -= 1;
    },

    clearWishlist: (state) => {
      // Reset count to 0
      state.count = 0;

      // Clear the wishlist
      state.products = [];
    },
  },
});

export const addAllToCart = (): AppThunk => (dispatch, getState) => {
  const { wishlist } = getState();

  if (wishlist.count === 0) {
    toast.error("There is no product to add.");
    return;
  }

  wishlist.products.forEach((product) => {
    dispatch(addToCart(product));
  });

  dispatch(clearWishlist());
};

export const addToCartWishlist =
  (item: Product): AppThunk =>
  (dispatch) => {
    dispatch(addToCart(item));
    dispatch(removeFromWishlist(item.id));
  };

export const { addToWishlist, clearWishlist, removeFromWishlist } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;

import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

// Slice
import cartSlice from "./slices/cartSlice";
import wishlistSlice from "./slices/wishlistSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    wishlist: wishlistSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; // Define the AppThunk type
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

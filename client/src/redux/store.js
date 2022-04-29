import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./reducer/products";
import userSlice from "./reducer/userPost";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    user: userSlice,
  },
});

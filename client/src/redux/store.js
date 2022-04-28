import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./reducer/products";

export const store = configureStore({
  reducer: { products: productsSlice },
});

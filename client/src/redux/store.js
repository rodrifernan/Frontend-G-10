import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./reducer/products";
import categorieSlice from "./reducer/categoriesSlice";

export const store = configureStore({
  reducer: { products: productsSlice, categories: categorieSlice },
});

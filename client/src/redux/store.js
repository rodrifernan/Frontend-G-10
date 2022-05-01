import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./reducer/products";
import userSlice from "./reducer/userPost";
import categoriesSlice from "./reducer/getCategorie";

export const store = configureStore({
	reducer: {
		products: productsSlice,
		user: userSlice,
		categories: categoriesSlice,
	},
});

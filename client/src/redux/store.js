import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import productsSlice from "./reducer/products";
import userSlice from "./reducer/userPost";
import categoriesSlice from "./reducer/getCategorie";
import carritoReducer from "./reducer/carrito";
import LoginSlice from "./reducer/Login";

const persistConfig = { key: "root", version: 1, storage };
const persistedReducer = persistReducer(persistConfig, carritoReducer);
export const store = configureStore({
  reducer: {
    products: productsSlice,
    user: userSlice,
    categories: categoriesSlice,
    carrito: persistedReducer,
    login: LoginSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

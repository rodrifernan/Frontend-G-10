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
import login from "./reducer/login";
import perfilSlice from "./reducer/perfil";

const persistConfig = { key: "root", version: 1, storage };
const persistedReducer = persistReducer(persistConfig, carritoReducer);
export const store = configureStore({
  reducer: {
    products: productsSlice,
    user: userSlice,
    categories: categoriesSlice,
    carrito: persistedReducer,
    login: login,
    perfil: perfilSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

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
import userPost from "./reducer/userPost";
import perfilSlice from "./reducer/perfil";
import wishSlice from "./reducer/getWishilist";
import allUserSlice from "./reducer/getAllUsers";
import genresSlice from "./reducer/getGenre";
import newPassSlice from "./reducer/newPassword";
import checkoutMP from "./reducer/checkoutMP";
//import paymentPM  from './reducer/getResponseMP'
import paymentOrderPM from "./reducer/getResponseMP";

const persistConfig = { key: "root", version: 1, storage };
const persistedReducer = persistReducer(persistConfig, carritoReducer);
export const store = configureStore({
  reducer: {
    genres: genresSlice,
    products: productsSlice,
    user: userSlice,
    categories: categoriesSlice,
    carrito: persistedReducer,
    login,
    userPost,
    perfil: perfilSlice,
    wish: wishSlice,
    AllUsers: allUserSlice,
    //paymentId : paymentPM,
    paymentOrderEG: paymentOrderPM,
    checkout: checkoutMP,
    newPass: newPassSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

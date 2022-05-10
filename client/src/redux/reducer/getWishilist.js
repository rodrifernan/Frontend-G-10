import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem("userCredentials");
const parseToken = JSON.parse(token);
export const deleteWish = createAsyncThunk(
  "wish/deleteWish",
  async (payload) => {
    console.log(parseToken);
    console.log(parseToken.token);
    const response = await axios.delete(
      "/api/wishlist",
      { data: { id: payload } },
      {
        headers: { "auth-token": parseToken.token },
      }
    );
    return response.data;
  }
);
export const getList = createAsyncThunk("wish/getList", async (token) => {
  console.log(token);
  const response = await axios.get(
    "/api/wishlist",

    {
      headers: { "auth-token": parseToken.token },
    }
  );
  return response.data;
});

export const postWish = createAsyncThunk("wish/postwish", async (payload) => {
  const response = await axios.post(
    "/api/wishlist",
    { productId: payload },
    {
      headers: { "auth-token": parseToken.token },
    }
  );
  return response.data;
});

const initialState = {
  wish: [],
};

const wishSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {},
  extraReducers: {
    [getList.pending]: () => {
      console.log("Trayendo wishes");
    },
    [getList.fulfilled]: (state, action) => {
      return { ...state, wish: action.payload };
    },
    [postWish.pending]: () => {
      console.log("Enviando datos");
    },
    [postWish.fulfilled]: (payload) => {
      console.log("Listo bro");
    },
    [deleteWish.pending]: () => {
      console.log("verificando datos");
    },
    [deleteWish.fulfilled]: (payload) => {
      console.log("deleteado bro");
    },
  },
});
export default wishSlice.reducer;
export const allWishes = (state) => state.wish.wish;

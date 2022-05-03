import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const getList = createAsyncThunk("wish/getList", async (payload) => {
  const response = await axios.get("http://localhost:3001/api/wishlist", {
    headers: { "auth-token": payload },
  });
  return response.data;
});

const initialState = {
  wishlist: [],
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
      return { ...state, login: action.payload };
    },
  },
});
export default wishSlice.reducer;
export const allWishes = (state) => state.wish.wishlist;

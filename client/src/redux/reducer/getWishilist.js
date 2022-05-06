import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem("userCredentials");
const parseToken = JSON.parse(token);
export const getList = createAsyncThunk("wish/getList", async (token) => {
  console.log(token);
  const response = await axios.get(
    "http://localhost:3001/api/wishlist",

    {
      headers: { "auth-token": token },
    }
  );
  return response.data;
});

export const postWish = createAsyncThunk("wish/postwish", async (payload) => {
  console.log(payload);
  const response = await axios.post(
    "http://localhost:3001/api/wishlist",
    { productId: payload },
    {
      headers: { "auth-token": parseToken.token },
    }
  );
  return response.data;
});

export const makeAWish = createAsyncThunk(
  "wish/makeAWish",
  async (payload, token) => {
    const response = await axios
      .post(
        `http://localhost:3001/api/wishlist`,
        {
          headers: { "auth-token": token },
        },
        payload
      )
      .catch((err) => {
        console.log(err);
      });
    return response.data;
  }
);

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
      return payload;
    },
  },
});
export default wishSlice.reducer;
export const allWishes = (state) => state.wish.wish;

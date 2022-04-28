import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios
      .get("http://localhost:3001/api/products")
      .catch((err) => {
        console.log(err);
      });
    return response.data;
  }
);

const initialState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: () => {
      console.log("pending");
    },
    [fetchProducts.fulfilled]: (state, action) => {
      return { ...state, products: action.payload };
    },
  },
});

export const { pushProducts } = productsSlice.actions;

export default productsSlice.reducer;

export const getAllProducts = (state) => state.products.products;

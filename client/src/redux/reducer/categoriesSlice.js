import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllCategories = createAsyncThunk(
  "categories/getAllCategories",
  async () => {
    const response = await axios
      .get("http://localhost:3001/api/categories")
      .catch((err) => {
        console.log(err);
      });
    return response.data;
  }
);

const initialState = {
  categories: [],
};

export const categorieSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
  extraReducers: {
    [getAllCategories.pending]: () => {
      console.log("pending");
    },
    [getAllCategories.fulfilled]: (state, action) => {
      return { ...state, categories: action.payload };
    },
  },
});

export const { setCategories } = categorieSlice.actions;

export default categorieSlice.reducer;

export const allCategories = (state) => state.categories.categories;

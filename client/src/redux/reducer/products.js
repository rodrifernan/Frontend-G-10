import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(//Trae los productos para mostrtar (Solo los activos)
  "products/fetchProducts",
  async () => {
    const response = await axios.get("/api/products").catch((err) => {
      console.log(err);
    });
    const data=[]
    for (const producto in response.data) {
      //console.log(response.data[producto])
      if (response.data[producto].active) {
        data.push(response.data[producto])
      }
      //console.log(data)
    }
    return data;
  }
);

export const fetchProductsAdmin = createAsyncThunk(//Para que le traiga todos al admin(activos/desactivos)
  "products/fetchProductsAdmin",
  async () => {
    const response = await axios.get("/api/productsAdmin").catch((err) => {
      console.log(err);
    });
    
    return response.data;//cambiar acá al final
  }
);

export const getByCategories = createAsyncThunk(
  "products/getByCategories",
  async (payload) => {
    const response = await axios
      .get(`/api/filterCategory?name=${payload}`)
      .catch((err) => {
        console.log(err);
      });
    return response.data;
  }
);
export const getByName = createAsyncThunk(
  "search/getByName",
  async (payload) => {
    const response = await axios
      .get(`/api/products?name=${payload}`)
      .catch((err) => {
        console.log(err);
      });
    return response.data;
  }
);

const initialState = {
  products: [],
  productsAdmin: []
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    sortByName: (state) => {
      state.products = state.products.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    },
    sortByNameInversa: (state) => {
      state.products = state.products.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
    },
    sortByPrice: (state) => {
      state.products = state.products.sort((a, b) => a.price - b.price);
    },
    sortByPriceInversa: (state) => {
      state.products = state.products.sort((a, b) => b.price - a.price);
    },
  },
  extraReducers: {
    [fetchProducts.pending]: () => {
      console.log("pending");
    },
    [fetchProducts.fulfilled]: (state, action) => {
      return { productsAdmin: action.payload };
    },
    [fetchProductsAdmin.pending]: () => {
      console.log("pending");
    },
    [fetchProductsAdmin.fulfilled]: (state, action) => {
      return { productsAdmin: action.payload };
    },
    [getByName.pending]: () => {
      console.log("Pendinente");
    },
    [getByName.fulfilled]: (state, action) => {
      return { ...state, products: action.payload };
    },
    [getByCategories.pending]: () => {
      console.log("Trayendo por categoria");
    },
    [getByCategories.fulfilled]: (state, action) => {
      return { ...state, products: action.payload };
    },
  },
});

export const {
  sortByName,
  sortByNameInversa,
  sortByPrice,
  sortByPriceInversa,
} = productsSlice.actions;

export default productsSlice.reducer;

export const getAllProducts = (state) => state.products.products;

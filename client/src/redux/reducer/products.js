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
export const getByCategories = createAsyncThunk(
  "products/getByCategories",
  async (payload) => {
    const response = await axios
      .get(`http://localhost:3001/api/filterCategory?name=${payload}`)
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
      .get(`http://localhost:3001/api/products?name=${payload}`)
      .catch((err) => {
        console.log(err);
      });
    return response.data;
  }
);
export const order = createAsyncThunk("products/order", async () => {
  const response = await axios
    .get("http://localhost:3001/api/products")
    .catch((err) => {
      console.log(err);
    });
  let ordenado = response.data
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name));
  return ordenado;
});
export const inversa = createAsyncThunk("products/order", async () => {
  const response = await axios
    .get("http://localhost:3001/api/products")
    .catch((err) => {
      console.log(err);
    });
  let ordenado = response.data
    .slice()
    .sort((a, b) => b.name.localeCompare(a.name));
  return ordenado;
});
export const precioOrder = createAsyncThunk("products/order", async () => {
  const response = await axios
    .get("http://localhost:3001/api/products")
    .catch((err) => {
      console.log(err);
    });
  let ordenado = response.data.slice().sort((a, b) => a.price - b.price);
  return ordenado;
});
export const precioInvers = createAsyncThunk("products/order", async () => {
  const response = await axios
    .get("http://localhost:3001/api/products")
    .catch((err) => {
      console.log(err);
    });
  let ordenado = response.data.slice().sort((a, b) => b.price - a.price);

  return ordenado;
});
const initialState = {
  products: [],
};

const productsSlice = createSlice({
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
    [order.pending]: () => {
      console.log("ordenando");
    },
    [order.fulfilled]: (state, action) => {
      return { ...state, products: action.payload };
    },
    [inversa.pending]: () => {
      console.log("ordenando");
    },
    [inversa.fulfilled]: (state, action) => {
      return { ...state, products: action.payload };
    },
    [precioOrder.pending]: () => {
      console.log("ordenando");
    },
    [inversa.fulfilled]: (state, action) => {
      return { ...state, products: action.payload };
    },
    [precioInvers.pending]: () => {
      console.log("ordenando");
    },
    [precioInvers.fulfilled]: (state, action) => {
      return { ...state, products: action.payload };
    },
  },
});

export const { pushProducts } = productsSlice.actions;

export default productsSlice.reducer;

export const getAllProducts = (state) => state.products.products;

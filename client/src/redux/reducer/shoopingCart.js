import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getShoppingCart = createAsyncThunk(
  'shoppingCart/get',
  async () => {
    const token = JSON.parse(localStorage.getItem('userCredentials')).token;
    const response = await axios
      .get(`http://localhost:3001/api/shoppingCart`, {
        headers: { 'auth-token': token },
      })
      .then(response => response.data);
    return response;
  }
);

export const postShoppingCart = createAsyncThunk(
  'shoppingCart/post',
  async productId => {
    const token = JSON.parse(localStorage.getItem('userCredentials')).token;

    const response = await axios
      .post(
        `http://localhost:3001/api/shoppingCart`,
        { productId },
        {
          headers: { 'auth-token': token },
        }
      )
      .then(response => response.data)
      .catch(({ response }) => ({ ...response.data, error: true }));
    return response;
  }
);

const initialState = {
  shoppingList: localStorage.getItem('shoppingCart')
    ? localStorage.getItem('shoppingCart')
    : [],
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    addShoppingList: ({ shoppingList }, { payload }) => {
      const product = shoppingList.find(item => item.productId === payload);
      product
        ? (product.quantity = product.quantity + 1)
        : shoppingList.push({ productId: payload, quantity: 1 });

      localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
    },

    deleteShoppingList: ({ shoppingList }, { payload }) => {
      // localStorage.removeItem('userCredentials');
      shoppingList = {};
    },
  },
  extraReducers: {
    [getShoppingCart.fulfilled]: (state, action) => {
      localStorage.setItem('shoppingCart', JSON.stringify(action.payload));
      return { shoppingList: action.payload };
    },

    [getShoppingCart.rejected]: (state, action) => {
      localStorage.removeItem('shoppingCart');
      return { shoppingList: [] };
    },

    [postShoppingCart.fulfilled]: (state, action) => {},
  },
});

export const { addShoppingList } = loginSlice.actions;

export default loginSlice.reducer;

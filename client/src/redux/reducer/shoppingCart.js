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

export const getShoppingCartGuest = createAsyncThunk(
  'shoppingCart/get/guest',
  async payload => {
    const response = await axios
      .post(`http://localhost:3001/api/shoppingCart/guest`, payload)
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

export const putShoppingCart = createAsyncThunk(
  'shoppingCart/put',
  async payload => {
    const token = JSON.parse(localStorage.getItem('userCredentials')).token;

    const response = await axios
      .put(`http://localhost:3001/api/shoppingCart`, payload, {
        headers: { 'auth-token': token },
      })
      .then(response => response.data)
      .catch(({ response }) => ({ ...response.data, error: true }));
    return response;
  }
);

export const deleteShoppingCart = createAsyncThunk(
  'shoppingCart/delete',
  async id => {
    const token = JSON.parse(localStorage.getItem('userCredentials')).token;

    const response = await axios
      .delete(`http://localhost:3001/api/shoppingCart`, {
        headers: { 'auth-token': token },
        data: { id },
      })
      .then(response => response.data)
      .catch(({ response }) => ({ ...response.data, error: true }));
    return response;
  }
);

export const cleanShoppingCart = createAsyncThunk(
  'shoppingCart/clean',
  async id => {
    const token = JSON.parse(localStorage.getItem('userCredentials')).token;

    const response = await axios
      .delete(`http://localhost:3001/api/shoppingCart/clean`, {
        headers: { 'auth-token': token },
      })
      .then(response => response.data)
      .catch(({ response }) => ({ ...response.data, error: true }));
    return response;
  }
);

export const addGuestShoppingCart = createAsyncThunk(
  'shoppingCart/addGuest',
  async payload => {
    const token = JSON.parse(localStorage.getItem('userCredentials')).token;
    const response = await axios
      .post(`http://localhost:3001/api/shoppingCart/addGuest`, payload, {
        headers: { 'auth-token': token },
      })
      .then(response => response.data)
      .catch(({ response }) => ({ ...response.data, error: true }));

    return response;
  }
);

const initialState = {
  shoppingList: localStorage.getItem('shoppingCart')
    ? JSON.parse(localStorage.getItem('shoppingCart'))
    : [],
};

const loginSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addShoppingList: ({ shoppingList }, { payload }) => {
      const product = shoppingList.find(item => item.productId === payload);
      product
        ? ++product.quantity
        : shoppingList.push({ productId: payload, quantity: 1 });

      localStorage.setItem('shoppingCart', JSON.stringify(shoppingList));
    },

    deleteShoppingList: (state, { payload }) => {
      state.shoppingList = [...state.shoppingList].filter(
        item => item.id !== payload
      );
    },

    updateShoppingList: ({ shoppingList }, { payload: { quantity, id } }) => {
      const product = shoppingList.find(item => item.id === id);

      product.quantity = quantity;

      localStorage.setItem('shoppingCart', JSON.stringify(shoppingList));
    },

    cleanShoppingList: state => {
      localStorage.removeItem('shoppingCart');
      state.shoppingList = [];
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

    [getShoppingCartGuest.fulfilled]: (state, { payload }) => {
      return { shoppingList: payload };
    },

    [addGuestShoppingCart.fulfilled]: (state, { payload }) => {
    },
  },
});

export const {
  addShoppingList,
  deleteShoppingList,
  updateShoppingList,
  cleanShoppingList,
} = loginSlice.actions;

export default loginSlice.reducer;

import { createSlice, createAction } from "@reduxjs/toolkit";

export const addCarrito = createAction("addCarrito");
const initialState = {
  carrito: [],
};

const carritoSlice = createSlice({
  name: "carrito",
  initialState,
  reducers: {
    addPush: (state, action) =>
      action.payload.title !== ""
        ? void state.carrito.push(action.payload)
        : void null,
    emptycarrito: (state) => (state = initialState),
  },
  extraReducers: (builder) => {
    builder.addCase(addCarrito, (state, action) => {
      return state.carrito.push(action.payload);
    });
  },
});

export const { addPush, emptycarrito } = carritoSlice.actions;
export default carritoSlice.reducer;
export const myKart = (state) => state.carrito.carrito;

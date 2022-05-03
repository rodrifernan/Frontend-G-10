import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const Login = createAsyncThunk("login/Login", async (payload) => {
  const response = await axios.post("http://localhost:3001/api/login", payload);
  console.log(response.data);
  return response.data;
});

const initialState = {
  login: [],
};

const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: { Logout: (state) => (state = initialState) },
  extraReducers: {
    [Login.pending]: () => {
      console.log("Iniciando Sesion");
    },
    [Login.fulfilled]: (state, action) => {
      return { ...state, login: action.payload };
    },
  },
});

export const { Logout } = LoginSlice.actions;
export default LoginSlice.reducer;
export const LoginAll = (state) => state.login.login;

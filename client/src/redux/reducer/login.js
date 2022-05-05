import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const apiLogin = createAsyncThunk("login/local", async (payload) => {
  const response = await axios
    .post(`http://localhost:3001/api/login`, payload)
    .then((response) => response.data)
    .catch(({ response }) => ({ ...response.data, error: true }));
  return response;
});

export const apiLoginGoogle = createAsyncThunk(
  "login/google",
  async (payload) => {
    const response = await axios
      .post(`http://localhost:3001/api/login/google`, payload)
      .then((response) => response.data)
      .catch(({ response }) => ({ ...response.data, error: true }));
    return response;
  }
);

const initialState = {
  userCredentials: localStorage.getItem("userCredentials")
    ? localStorage.getItem("userCredentials")
    : [],
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logIn: (state) => {
      localStorage.setItem(
        "userCredentials",
        JSON.stringify(state.userCredentials)
      );
      state.userCredentials = state;
    },
    logOut: (state) => {
      localStorage.removeItem("userCredentials");
      state.userCredentials = {};
    },
  },
  extraReducers: {
    [apiLogin.pending]: () => {
      return { userCredentials: { loading: true } };
    },
    [apiLogin.fulfilled]: (state, action) => {
      if (!action.payload.error) {
        localStorage.setItem("userCredentials", JSON.stringify(action.payload));
      } else localStorage.removeItem("userCredentials");
      return { userCredentials: action.payload };
    },
    [apiLogin.rejected]: (state, action) => {
      return { userCredentials: action.payload };
    },

    [apiLoginGoogle.pending]: () => {
      return { userCredentials: { loading: true } };
    },
    [apiLoginGoogle.fulfilled]: (state, action) => {
      if (!action.payload.error) {
        localStorage.setItem("userCredentials", JSON.stringify(action.payload));
      } else localStorage.removeItem("userCredentials");
      return { userCredentials: action.payload };
    },
    [apiLoginGoogle.rejected]: (state, action) => {
      return { userCredentials: action.payload };
    },
  },
});

export const { logIn, logOut } = loginSlice.actions;

export default loginSlice.reducer;

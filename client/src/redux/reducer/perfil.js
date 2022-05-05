import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPerfil = createAsyncThunk(
  "perfil/getPerfil",
  async (payload) => {
    console.log(payload);
    const response = await axios
      .get("http://localhost:3001/api/user", {
        headers: { "auth-token": payload },
      })
      .catch((err) => console.log(err));
    return response.data;
  }
);

const initialState = {
  perfil: [],
};

const perfilSlice = createSlice({
  name: "perfil",
  initialState,
  reducer: {},
  extraReducers: {
    [getPerfil.pending]: () => {
      console.log("pending");
    },
    [getPerfil.fulfilled]: (state, action) => {
      return { perfil: action.payload };
    },
  },
});

export default perfilSlice.reducer;
export const getAllInfo = (state) => state.perfil.perfil;

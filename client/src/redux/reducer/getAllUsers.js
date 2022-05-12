import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllUsers = createAsyncThunk("userAll/getAllUsers", async () => {
  const response = await axios
    .get("/api/user/all", {
      headers: {
        "auth-token": JSON.parse(localStorage.getItem("userCredentials")).token,
      },
    })

    .catch((err) => {
      console.log(err);
    });
  return response.data;
});

const initialState = {
  userAll: [],
};

const allUserSlice = createSlice({
  name: "userAll",
  initialState,
  reducers: {
    
  },
  extraReducers: {
    // [getAllUsers.pending]: () => {
    //   console.log("Trayendo usuarios");
    // },
    [getAllUsers.fulfilled]: (state, action) => {
      return { ...state, userAll: action.payload };
    },
    
  },
});

export default allUserSlice.reducer;
export const allUserRegisters = (state) => state.userAll.userAll;

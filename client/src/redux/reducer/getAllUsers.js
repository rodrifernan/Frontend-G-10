import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllUsers = createAsyncThunk(
	"users/getAllUsers",
	async () => {
		const response = await axios
			.get("http://localhost:3001/api/user/all",{
                headers:  { "auth-token": JSON.parse(localStorage.getItem("userCredentials")).token } ,
              })
            
			.catch((err) => {
				console.log(err);
			});
		return response.data;
	}
);

const initialState = {
	getAllUsers: [],
};

const allUserSlice = createSlice({
	name: "getAllUsers",
	initialState,
	reducers: {},
	extraReducers: {
		[getAllUsers.pending]: () => {
			console.log("Trayendo usuarios");
		},
		[getAllUsers.fulfilled]: (state, action) => {
			return { ...state, getAllUsers: action.payload };
		},
	},
});

export default allUserSlice.reducer;
// export const categoriesAll = (state) => state.categories.categories;

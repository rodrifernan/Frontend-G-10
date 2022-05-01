import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userPost = createAsyncThunk("user/userPost", async (payload) => {
	const inputUser = await axios
		.post("http://localhost:3001/api/user", payload)
		.catch((err) => {
			console.log(err);
		});
	return inputUser.data;
});

const initialState = {
	user: [],
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		pushUser: (state, action) => {
			state.user = action.payload;
		},
	},
	extraReducers: {
		[userPost.pending]: () => {
			console.log("pending");
		},
		[userPost.fulfilled]: (state, action) => {
			return { ...state, user: action.payload };
		},
	},
});

export const { pushUser } = userSlice.actions;

export default userSlice.reducer;

export const getUser = (state) => state.user.user;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPaymentIdMP = createAsyncThunk(
	"getResponseMp/getPaymentIdMP",
	async (payload) => {
		
		const response = await axios
			.get(`/api/paymentIdPM?payment_id=${payload}`)
			.catch((err) => {
			console.log(err);
		});
		console.log('estoy accion getPaymentIdM->', payload)
		return response.data;
	}
);

export const getOrderMP = createAsyncThunk(
	"getResponseMp/getOrderMP",
	async (payload) => {
		
		const userToken = JSON.parse(localStorage.getItem('userCredentials')).token
		const response = await axios
			.get(`http://localhost:3001/api/orders/checkout`,{ headers: { "auth-token": userToken },})
			.catch((err) => {
			console.log(err);
		});
		console.log('estoy accion getOrderMP->', payload)
		return response.data;

	}
);

export const postOrderMP = createAsyncThunk(
	"postResponseMp/postOrderMP",
	async (payload) => {
		
		const response = await axios
			.post(`http://localhost:3001/api/invoice`,{},{
                headers:  { "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5Y2FjYjNjLTRlZjMtNGQ3Mi1iYmYzLWQ2NjE4ZTQ1YTQ1YyIsImlhdCI6MTY1MjIyNDExNywiZXhwIjoxNjUyMzEwNTE3fQ.9Rk3vKbe04M-KDbCpTwcl8Bv2vgCj4jg6Xjju3XHE10" } ,
            })
			.catch((err) => {
			console.log(err);
		});
		console.log('estoy accion postOrderMP->', payload)
		return response.data;

	}
);

const initialState = {
	paymentId: [],
	paymentOrder: [],
	paymentPostOrder: [],
};

const paymentIdSlice = createSlice({
	name: "getResponseMp",
	initialState,
	reducers: {},
	extraReducers: {

		[getOrderMP.pending]: () => {
			//console.log("Trayendo Datos MercadoPago Compra");
		},
		[getOrderMP.fulfilled]: (state, action) => {
            //console.log("Trayendo Datos MercadoPago Compra", action.payload)
			return {...state,  paymentOrder: action.payload};
		},

		[getPaymentIdMP.pending]: () => {
			//console.log("Trayendo Datos MercadoPago Compra");
		},
		[getPaymentIdMP.fulfilled]: (state, action) => {
            //console.log("Trayendo Datos MercadoPago Compra", action.payload)
			return {...state, paymentId: action.payload};
		},
		[postOrderMP.pending]: () => {
			//console.log("Trayendo Datos MercadoPago Compra");
		},
		[postOrderMP.fulfilled]: (state, action) => {
            //console.log("Trayendo Datos MercadoPago Compra", action.payload)
			return {...state,  paymentPostOrder: action.payload};
		},		
	},
});

export default paymentIdSlice.reducer;

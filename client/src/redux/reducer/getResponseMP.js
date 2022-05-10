import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPaymentIdMP = createAsyncThunk(
	"getResponseMp/getPaymentIdMP",
	async (payload) => {
		console.log('estoy accion getPaymentIdM->', payload)
		const response = await axios
			.get(`/api/paymentIdPM?payment_id=${payload}`)
			.catch((err) => {
			console.log(err);
		});
		return response.data;
	}
);

export const getOrderMP = createAsyncThunk(
	"getResponseMp/getOrderMP",
	async (payload) => {
		console.log('estoy accion getOrderMP->', payload)
		const userToken = JSON.parse(localStorage.getItem('userCredentials')).token
		const response = await axios
			.get(`http://localhost:3001/api/orders/checkout`,{ headers: { "auth-token": userToken },})
			.catch((err) => {
			console.log(err);
		});
		
		return response.data;

	}
);


const initialState = {
	paymentId: [],
	paymentOrder: [],
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
	},
});

export default paymentIdSlice.reducer;

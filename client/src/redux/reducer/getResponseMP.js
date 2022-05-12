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
	"getResponseMp/postOrderMP",
	async () => {
		
		const response = await axios
			.post(`http://localhost:3001/api/invoice`,{},{
                headers:  { "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5Y2FjYjNjLTRlZjMtNGQ3Mi1iYmYzLWQ2NjE4ZTQ1YTQ1ZCIsImlhdCI6MTY1MjMxMjYwNSwiZXhwIjoxNjUyMzk5MDA1fQ.BxDAs2VCRMoOARBQvO9qbzQq22m_6qY7uQDRcwHls98" },
            })
			.catch((err) => {
			console.log(err);
		});
		console.log('estoy accion postOrderMP->',response.data)
		return response.data;

	}
);

const initialState = {
	paymentId: [],
	paymentOrder : [],
	nroOdenCompra: {},
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
			return {...state, nroOrdenCompra: action.payload };
		},		
	},
});

export default paymentIdSlice.reducer;

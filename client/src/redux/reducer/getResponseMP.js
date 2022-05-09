import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPaymentIdMP = createAsyncThunk(
	"paymentId/getPaymentIdMP",
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

const initialState = {
	paymentId: [],
};

const paymentIdSlice = createSlice({
	name: "paymentId",
	initialState,
	reducers: {},
	extraReducers: {
		[getPaymentIdMP.pending]: () => {
			console.log("Trayendo Datos MercadoPago Compra");
		},
		[getPaymentIdMP.fulfilled]: (state, action) => {
            console.log("Trayendo Datos MercadoPago Compra", action.payload)
			return {paymentId: action.payload};
		},
	},
});

export default paymentIdSlice.reducer;
export const paymentIdOrden = (state) => state.paymentId.paymentId;

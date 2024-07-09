// // paymentSlice.js

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   atmNumber: '',
//   expiryDate: '',
//   cvc: '',
//   country: '',
//   paymentSubmitted: false,
//   errors: {},
// };

// const paymentSlice = createSlice({
//   name: 'payment',
//   initialState,
//   reducers: {
//     updateAtmNumber: (state, action) => {
//       state.atmNumber = action.payload;
//     },
//     updateExpiryDate: (state, action) => {
//       state.expiryDate = action.payload;
//     },
//     updateCvc: (state, action) => {
//       state.cvc = action.payload;
//     },
//     updateCountry: (state, action) => {
//       state.country = action.payload;
//     },
//     submitPaymentSuccess: (state) => {
//       state.paymentSubmitted = true;
//     },
//   },
// });

// export const {
//   updateAtmNumber,
//   updateExpiryDate,
//   updateCvc,
//   updateCountry,
//   submitPaymentSuccess,
// } = paymentSlice.actions;

// export default paymentSlice.reducer;


// src/redux/slices/paymentSlice.js

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   atmNumber: '',
//   expiryDate: '',
//   cvc: '',
//   country: '',
// };

// const paymentSlice = createSlice({
//   name: 'payment',
//   initialState,
//   reducers: {
//     setPaymentData: (state, action) => {
//       return {
//         ...state,
//         ...action.payload,
//       };
//     },
//     clearPaymentData: (state) => {
//       return initialState;
//     },
//   },
// });

// export const { setPaymentData, clearPaymentData } = paymentSlice.actions;
// export default paymentSlice.reducer;

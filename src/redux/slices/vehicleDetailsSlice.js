// // vehicleDetailsSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   vin: '',
//   model: '',
//   make: '',
//   year: '',
//   color: '',
//   licensePlate: '',
// };

// const vehicleDetailsSlice = createSlice({
//   name: 'vehicleDetails',
//   initialState,
//   reducers: {
//     setVehicleDetails(state, action) {
//       state.vin = action.payload.vin;
//       state.model = action.payload.model;
//       state.make = action.payload.make;
//       state.year = action.payload.year;
//       state.color = action.payload.color;
//       state.licensePlate = action.payload.licensePlate;
//       localStorage.setItem('vehicleDetails', JSON.stringify(action.payload));
//     },
//     clearVehicleDetails(state) {
//       state.vin = '';
//       state.model = '';
//       state.make = '';
//       state.year = '';
//       state.color = '';
//       state.licensePlate = '';
//       localStorage.removeItem('vehicleDetails');
//     },
//   },
// });

// export const { setVehicleDetails, clearVehicleDetails } = vehicleDetailsSlice.actions;

// export default vehicleDetailsSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  vin: "",
  model: "",
  make: "",
  year: "",
  color: "",
  licensePlate: "",
};

const vehicleDetailsSlice = createSlice({
  name: "vehicleDetails",
  initialState,
  reducers: {
    setVehicleDetails(state, action) {
      const { vin, model, make, year, color, licensePlate } = action.payload;
      state.vin = vin;
      state.model = model;
      state.make = make;
      state.year = year;
      state.color = color;
      state.licensePlate = licensePlate;
      localStorage.setItem("vehicleDetails", JSON.stringify(action.payload));
    },
    clearVehicleDetails(state) {
      state.vin = "";
      state.model = "";
      state.make = "";
      state.year = "";
      state.color = "";
      state.licensePlate = "";
      localStorage.removeItem("vehicleDetails");
    },
  },
});

export const { setVehicleDetails, clearVehicleDetails } = vehicleDetailsSlice.actions;

export default vehicleDetailsSlice.reducer;

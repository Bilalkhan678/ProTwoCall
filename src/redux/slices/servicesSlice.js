// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   selectedServices: [],
// };

// const servicesSlice = createSlice({
//   name: 'services',
//   initialState,
//   reducers: {
//     setSelectedServices: (state, action) => {
//       state.selectedServices = action.payload; // Direct mutation, not recommended
//     },
//     updateSelectedServices: (state, action) => {
//       state.selectedServices = action.payload; // Immutably update state
//     },
//     // Other reducer logic...
//   },
// });

// export const { setSelectedServices, updateSelectedServices } = servicesSlice.actions;
// export default servicesSlice.reducer;



import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // selectedServices: JSON.parse(localStorage.getItem('selectedServices')) || []
  selectedServices: []
};

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    setSelectedServices: (state, action) => {
      state.selectedServices = action.payload;
      localStorage.setItem('selectedServices', JSON.stringify(action.payload));
    }
  }
});

export const { setSelectedServices } = servicesSlice.actions;
export default servicesSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   selectedServices: [],
// };

// const servicesSlice = createSlice({
//   name: "services",
//   initialState,
//   reducers: {
//     setSelectedServices(state, action) {
//       state.selectedServices = action.payload;
//       localStorage.setItem("selectedServices", JSON.stringify(state.selectedServices));
//     },
//   },
// });

// export const { setSelectedServices } = servicesSlice.actions;

// export default servicesSlice.reducer;

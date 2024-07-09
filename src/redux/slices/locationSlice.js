// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   currentLocation: null,
//   pickupAddress: '',
//   dropoffAddress: '',
//   state: 'pickup',
// };

// const locationSlice = createSlice({
//   name: 'location',
//   initialState,
//   reducers: {
//     setCurrentLocation: (state, action) => {
//       state.currentLocation = action.payload;
//     },
//     setPickupAddress: (state, action) => {
//       state.pickupAddress = action.payload;
//     },
//     setDropoffAddress: (state, action) => {
//       state.dropoffAddress = action.payload;
//     },
//     setState: (state, action) => {
//       state.state = action.payload;
//     },
//   },
// });

// //export the action and reducers
// export const { setCurrentLocation, setPickupAddress, setDropoffAddress, setState } = locationSlice.actions;
// export default locationSlice.reducer;




// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   pickupLocation: null,
//   currentLocation: {
//     name: null,
//     lat: null,
//     lng: null,
//   },
// };

// const locationSlice = createSlice({
//   name: 'location',
//   initialState,
//   reducers: {
//     setCurrentLocation(state, action) {
//       const { name, lat, lng } = action.payload;
//       console.log('Setting current location:', action.payload); // Debugging
//       state.currentLocation.name = name;
//       state.currentLocation.lat = lat;
//       state.currentLocation.lng = lng;
//       localStorage.setItem("currentLocation", JSON.stringify(state.currentLocation));
//     },
//     setPickupLocation(state, action) {
//       state.pickupLocation = action.payload;
//       // Update pickup location
//     },
//     clearCurrentLocation(state) {
//       state.currentLocation = {
//         name: null,
//         lat: null,
//         lng: null,
//       };
//       localStorage.removeItem("currentLocation");
//     },
//   },
// });

// export const { setPickupLocation, setCurrentLocation, clearCurrentLocation } = locationSlice.actions;

// export default locationSlice.reducer;



// locationSlice.js



// import { createSlice } from '@reduxjs/toolkit';


// //initial state
// const initialState = {
//   pickupLocation: null,
//   currentLocation: null,
// };

// const locationSlice = createSlice({
//   name: 'location', // name of slice
//   initialState,
//   reducers: { // handle action and update the state
//     setCurrentLocation(state, action) {
//       const { lat, lng, locationName } = action.payload;
//       state.currentLocation = { lat, lng, locationName };
//       // Updates the pickupLocation with the action's payload.
//       // Local storage update handled in component, so no need here
//     },

//     setPickupLocation(state, action) {
//       state.pickupLocation = action.payload;
//        // Update pickup location
//     },

//     clearCurrentLocation: (state) => {
//       state.currentLocation = null;
//       localStorage.removeItem("currentLocation");
//     },
//   },
// });
// // Export actions from the location slice

// export const { setPickupLocation , setCurrentLocation, clearCurrentLocation } = locationSlice.actions;

// export default locationSlice.reducer;

// import { combineReducers } from "@reduxjs/toolkit";

// // reducers
// import authUserReducer from "./authUser";


// const rootReducer = combineReducers({
//   authUser: authUserReducer,
// });

// export default rootReducer;


// // src/redux/slices/index.js
// //Define Root Reducer
// import { combineReducers } from '@reduxjs/toolkit';
// import authUserReducer from './authUser'; // Example import
// import locationReducer from './locationSlice'; // Import locationSlice
// import servicesReducer from './servicesSlice';
// import paymentReducer from './paymentSlice';
// import currentPageReducer from './currentPage'; // Import currentPageSlice

// // Combine all slice reducers into a single root reducer
// const rootReducer = combineReducers({
//   authUser: authUserReducer,
//   location: locationReducer, // Add location slice reducer
//   services : servicesReducer,
//   payment : paymentReducer,
//   currentPage: currentPageReducer, // Add currentPage reducer
// });

// export default rootReducer;




// src/redux/slices/index.js

import { combineReducers } from '@reduxjs/toolkit';
import userSelectionReducer from './userSelection'; // Import combined appSlice
import authUserReducer from './authUser'; // Example import


// Combine all slice reducers into a single root reducer
const rootReducer = combineReducers({
  authUser: authUserReducer,
  userSelection: userSelectionReducer, // Use appSlice as the root reducer
});

export default rootReducer;


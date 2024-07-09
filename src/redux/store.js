


// import { thunk } from "redux-thunk";
// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./slices/index.js";
// import locationSlice from "./slices/locationSlice.js";
// import dropoffLocationSlice from "./slices/dropoffLocationSlice.js";
// import vehicleDetailsReducer from './slices/vehicleDetailsSlice';
// import servicesReducer from "./slices/servicesSlice.js";
// import paymentReducer from "./slices/paymentSlice.js";
// import currentPageReducer from './slices/currentPage'; // Import currentPageSlice


// export const store = configureStore({
//   location :locationSlice,
//   dropoffLocationSlice : dropoffLocationSlice,
//   vehicleDetails: vehicleDetailsReducer,
//   payment : paymentReducer,
//   services: servicesReducer, // Add the services
//   reducer: rootReducer,
//   currentPage: currentPageReducer, // Add currentPage reducer
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
//   devTools: process.env.NODE_ENV !== "production",
// });















import { thunk } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./slices/index.js";
import userSelectionReducer from "@/redux/slices/userSelection"; // Import combined appSlice


export const store = configureStore({
  reducer: rootReducer,
  userSelection: userSelectionReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV !== "production",
});































// src/redux/store.js
// src/redux/store.js

// import { createStore } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// import rootReducer from '@/redux/slices/index'; // Adjust the path based on your actual structure

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = createStore(persistedReducer);
// const persistor = persistStore(store);

// export { store, persistor };






// ./src/redux/store.js
// ./src/redux/store.js

// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk'; // Import redux-thunk if needed
// import rootReducer from '../redux/slices/index'; // Adjust the path based on your project structure
// import locationReducer from './slices/locationSlice'; // Adjust the path based on your project structure

// // Combine reducers
// const combinedReducer = {
//   ...rootReducer,
//   location: locationReducer,
// };

// // Configure store with middleware
// const store = configureStore({
//   reducer: combinedReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
//   devTools: process.env.NODE_ENV !== 'production',
// });

// export default store;




// import { createStore } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// import rootReducer from '@/redux/slices/index'; // Adjust the path based on your actual structure

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage, // Use AsyncStorage from @react-native-async-storage/async-storage
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = createStore(persistedReducer);
// const persistor = persistStore(store);

// export { store, persistor };




// import { createStore } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// import rootReducer from '@/redux/slices/index'; // Adjust the path based on your actual structure

// const persistConfig = {
//   key: 'root',
//   storage, // Use createWebStorage for web
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = createStore(persistedReducer);
// const persistor = persistStore(store);

// export { store, persistor };

// import { createSlice } from '@reduxjs/toolkit';

// // Initial state
// const initialState = {
//   location: {
//     pickupLocation: null,
//     currentLocation: null,
//     dropoffLocation: null,
//   },
//   vehicleDetails: {
//     vin: "",
//     model: "",
//     make: "",
//     year: "",
//     color: "",
//     licensePlate: "",
//   },
//   selectedServices: []
// };

// const appSlice = createSlice({
//   name: 'app',
//   initialState,
//   reducers: {
//     // Location reducers
//     setCurrentLocation(state, action) {
//       const { lat, lng, locationName } = action.payload;
//       state.location.currentLocation = { lat, lng, locationName };
//       // Local storage update handled in component, so no need here
//     },
//     setPickupLocation(state, action) {
//       state.location.pickupLocation = action.payload;
//       localStorage.setItem('pickupLocation', JSON.stringify(action.payload));
//     },
//     setDropoffLocation(state, action) {
//       state.location.dropoffLocation = action.payload;
//       localStorage.setItem('dropoffLocation', JSON.stringify(action.payload));
//     },
//     clearCurrentLocation(state) {
//       state.location.currentLocation = null;
//       localStorage.removeItem("currentLocation");
//     },
//     clearDropoffLocation(state) {
//       state.location.dropoffLocation = null;
//       localStorage.removeItem("dropoffLocation");
//     },
    
//     // Vehicle details reducers
//     setVehicleDetails(state, action) {
//       const { vin, model, make, year, color, licensePlate } = action.payload;
//       state.vehicleDetails = { vin, model, make, year, color, licensePlate };
//       localStorage.setItem("vehicleDetails", JSON.stringify(action.payload));
//     },
//     clearVehicleDetails(state) {
//       state.vehicleDetails = {
//         vin: "",
//         model: "",
//         make: "",
//         year: "",
//         color: "",
//         licensePlate: "",
//       };
//       localStorage.removeItem("vehicleDetails");
//     },

//     // Services reducers
//     setSelectedServices(state, action) {
//       state.selectedServices = action.payload;
//       localStorage.setItem('selectedServices', JSON.stringify(action.payload));
//     },

//     // Load state from localStorage
//     loadStateFromLocalStorage(state) {
//       const pickupLocation = JSON.parse(localStorage.getItem('pickupLocation'));
//       const dropoffLocation = JSON.parse(localStorage.getItem('dropoffLocation'));
//       const vehicleDetails = JSON.parse(localStorage.getItem('vehicleDetails'));
//       const selectedServices = JSON.parse(localStorage.getItem('selectedServices'));
      
//       if (pickupLocation) state.location.pickupLocation = pickupLocation;
//       if (dropoffLocation) state.location.dropoffLocation = dropoffLocation;
//       if (vehicleDetails) state.vehicleDetails = vehicleDetails;
//       if (selectedServices) state.selectedServices = selectedServices;
//     },
//     clearState(state) {
//       state.location = { pickupLocation: null, currentLocation: null, dropoffLocation: null };
//       state.vehicleDetails = { vin: "", model: "", make: "", year: "", color: "", licensePlate: "" };
//       state.selectedServices = [];
//       localStorage.removeItem('pickupLocation');
//       localStorage.removeItem('dropoffLocation');
//       localStorage.removeItem('vehicleDetails');
//       localStorage.removeItem('selectedServices');
//     }
//   },
// });

// export const {
//   setPickupLocation,
//   setDropoffLocation,
//   setCurrentLocation,
//   clearCurrentLocation,
//   clearDropoffLocation,
//   setVehicleDetails,
//   clearVehicleDetails,
//   setSelectedServices,
//   loadStateFromLocalStorage,
//   clearState,
// } = appSlice.actions;

// export default appSlice.reducer;



// // redux/slices/userSelection.js

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   location: {
//     pickupLocation: null,
//     currentLocation: null,
//     dropoffLocation: null,
//   },
//   vehicleDetails: {
//     vin: "",
//     model: "",
//     make: "",
//     year: "",
//     color: "",
//     licensePlate: "",
//   },
//   selectedServices: [],
//   paymentData: null,
//   currentState: "initial", // add this state indicator
// };

// const userSelectionSlice = createSlice({
//   name: 'userSelection',
//   initialState,
//   reducers: {
//     setCurrentLocation(state, action) {
//       state.location.currentLocation = action.payload;
//       localStorage.setItem('currentLocation', JSON.stringify(action.payload));
//       localStorage.setItem('currentState', "currentLocation");
      
//     },
//     setPickupLocation(state, action) {
//       state.location.pickupLocation = action.payload;
//       localStorage.setItem('pickupLocation', JSON.stringify(action.payload));
//       localStorage.setItem('currentState', "pickupLocation");

//     },
//     setDropoffLocation(state, action) {
//       state.location.dropoffLocation = action.payload;
//       state.currentState = "dropoff"; // set state indicator
//       localStorage.setItem('dropoffLocation', JSON.stringify(action.payload));
//       localStorage.setItem('currentState', "dropoff");
//     },
//     setVehicleDetails(state, action) {
//       state.vehicleDetails = action.payload;
//       state.currentState = "vehicleDetails"; // set state indicator
//       localStorage.setItem('vehicleDetails', JSON.stringify(action.payload));
//       localStorage.setItem('currentState', "vehicleDetails");
//     },
//     setSelectedServices(state, action) {
//       state.selectedServices = action.payload;
//       localStorage.setItem('selectedServices', JSON.stringify(action.payload));
//     },
//     setPaymentData(state, action) {
//       state.paymentData = action.payload;
//       state.currentState = "payment"; // set state indicator
//       localStorage.setItem('paymentData', JSON.stringify(action.payload));
//       localStorage.setItem('currentState', "payment");
//     },
//     loadStateFromLocalStorage(state) {
//       const pickupLocation = JSON.parse(localStorage.getItem('pickupLocation'));
//       const dropoffLocation = JSON.parse(localStorage.getItem('dropoffLocation'));
//       const vehicleDetails = JSON.parse(localStorage.getItem('vehicleDetails'));
//       const selectedServices = JSON.parse(localStorage.getItem('selectedServices'));
//       const paymentData = JSON.parse(localStorage.getItem('paymentData'));
//       const currentState = localStorage.getItem('currentState');

//       if (pickupLocation) state.location.pickupLocation = pickupLocation;
//       if (dropoffLocation) state.location.dropoffLocation = dropoffLocation;
//       if (vehicleDetails) state.vehicleDetails = vehicleDetails;
//       if (selectedServices) state.selectedServices = selectedServices;
//       if (paymentData) state.paymentData = paymentData;
//       if (currentState) state.currentState = currentState;
//     },
//     clearState(state) {
//       state.location = { pickupLocation: null, currentLocation: null, dropoffLocation: null };
//       state.vehicleDetails = { vin: "", model: "", make: "", year: "", color: "", licensePlate: "" };
//       state.selectedServices = [];
//       state.paymentData = null;
//       state.currentState = "initial";
//       localStorage.removeItem('pickupLocation');
//       localStorage.removeItem('dropoffLocation');
//       localStorage.removeItem('vehicleDetails');
//       localStorage.removeItem('selectedServices');
//       localStorage.removeItem('paymentData');
//       localStorage.removeItem('currentState');
//     }
//   },
// });

// export const {
//   setPickupLocation,
//   setDropoffLocation,
//   setCurrentLocation,
//   setVehicleDetails,
//   setSelectedServices,
//   setPaymentData,
//   loadStateFromLocalStorage,
//   clearState,
// } = userSelectionSlice.actions;

// export default userSelectionSlice.reducer;








import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: {
    pickupLocation: null,
    currentLocation: null,
    dropoffLocation: null,
  },
  vehicleDetails: {
    vin: "",
    model: "",
    make: "",
    year: "",
    color: "",
    licensePlate: "",
  },
  selectedServices: [],
  paymentData: null,
  currentState: "initial", // Initial state indicator
};

const userSelectionSlice = createSlice({
  name: 'userSelection',
  initialState,
  reducers: {
    setCurrentLocation(state, action) {
        console.log('setCurrentLocation action:', action);
      state.location.currentLocation = action.payload;
      state.address = action.payload.address;
      localStorage.setItem('currentLocation', JSON.stringify(action.payload));
      state.currentState = "currentLocation"; // Update currentState
    //   localStorage.setItem('currentState', "currentLocation");
    },
    setPickupLocation(state, action) {
        console.log('setPickUpLocation action:', action);
      state.location.pickupLocation = action.payload;
      state.pickupAddress = action.payload.address;
      localStorage.setItem('pickupLocation', JSON.stringify(action.payload));
      state.currentState = "pickupLocation"; // Update currentState
      localStorage.setItem('currentState', "pickupLocation");
    },
    setDropoffLocation(state, action) {
        console.log('dropoffLocation action:', action);
      state.location.dropoffLocation = action.payload;
      state.currentState = "dropoff"; // Update currentState
      localStorage.setItem('dropoffLocation', JSON.stringify(action.payload));
      localStorage.setItem('currentState', "dropoffLocation");
    },
    setVehicleDetails(state, action) {
        console.log('setVehicalDetails action:', action);
      state.vehicleDetails = action.payload;
      state.currentState = "vehicleDetails"; // Update currentState
      localStorage.setItem('vehicleDetails', JSON.stringify(action.payload));
      localStorage.setItem('currentState', "vehicleDetails");
    },
    setSelectedServices(state, action) {

        console.log('setSelectServices action:', action);
      state.selectedServices = action.payload;
      localStorage.setItem('selectedServices', JSON.stringify(action.payload));
      state.currentState = "selectedServices"; // Update currentState
      localStorage.setItem('currentState', "selectedServices");
    },
    // setPaymentData(state, action) {
    //     console.log('setPickUpLocation action:', action);
    //   state.paymentData = action.payload;
    //   state.currentState = "payment"; // Update currentState
    //   localStorage.setItem('paymentData', JSON.stringify(action.payload));
    //   localStorage.setItem('currentState', "payment");
    // },
    loadStateFromLocalStorage(state) {
        // console.log('Loading state from localStorage');
        // const currentState = localStorage.getItem('currentState');
        // console.log('Loaded currentState from localStorage:', currentState);
        // if (currentState) {
        //   state.currentState = currentState;
        // }
        console.log('Loading state from localStorage');
        const currentState = localStorage.getItem('currentState');
        console.log('Loaded currentState from localStorage:', currentState);


      // Load other state values from localStorage


      const pickupLocation = JSON.parse(localStorage.getItem('pickupLocation'));
      const dropoffLocation = JSON.parse(localStorage.getItem('dropoffLocation'));
      const vehicleDetails = JSON.parse(localStorage.getItem('vehicleDetails'));
      const selectedServices = JSON.parse(localStorage.getItem('selectedServices'));
      const paymentData = JSON.parse(localStorage.getItem('paymentData'));
    //   const currentState = localStorage.getItem('currentState');


      // Dispatch actions with the retrieved data if needed

    console.log('Loaded pickupLocation from localStorage:', pickupLocation);
    console.log('Loaded dropoffLocation from localStorage:', dropoffLocation);
    console.log('Loaded vehicleDetails from localStorage:', vehicleDetails);
    console.log('Loaded selectedServices from localStorage:', selectedServices);
    console.log('Loaded paymentData from localStorage:', paymentData);



    // Update state with loaded values from localStorage

      if (pickupLocation) state.location.pickupLocation = pickupLocation;
      if (dropoffLocation) state.location.dropoffLocation = dropoffLocation;
      if (vehicleDetails) state.vehicleDetails = vehicleDetails;
      if (selectedServices) state.selectedServices = selectedServices;
      if (paymentData) state.paymentData = paymentData;
      if (currentState) state.currentState = currentState;
    },
    clearState(state) {
      state.location = { pickupLocation: null, dropoffLocation: null };
      state.vehicleDetails = { vin: "", model: "", make: "", year: "", color: "", licensePlate: "" };
      state.selectedServices = [];
      state.paymentData = null;
      state.currentState = "initial";
      localStorage.removeItem('pickupLocation');
      localStorage.removeItem('dropoffLocation');
      localStorage.removeItem('vehicleDetails');
      localStorage.removeItem('selectedServices');
      localStorage.removeItem('paymentData');
      localStorage.removeItem('currentState');
    }
  },
});

export const {
  setPickupLocation,
  setDropoffLocation,
  setCurrentLocation,
  setVehicleDetails,
  setSelectedServices,
  setPaymentData,
  loadStateFromLocalStorage,
  clearState,
} = userSelectionSlice.actions;

export default userSelectionSlice.reducer;





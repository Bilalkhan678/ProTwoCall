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
//   // paymentData: null,
//   currentState: "initial", // Initial state indicator
// };

// const userSelectionSlice = createSlice({
//   name: 'userSelection',
//   initialState,
//   reducers: {
//     setCurrentLocation(state, action) {
//         console.log('setCurrentLocation action:', action);
//       state.location.currentLocation = action.payload;
//       state.address = action.payload.address;
//       localStorage.setItem('currentLocation', JSON.stringify(action.payload));
//       state.currentState = "currentLocation"; // Update currentState
//       localStorage.setItem('currentState', "currentLocation");
//     },
//     setPickupLocation(state, action) {
//         console.log('setPickUpLocation action:', action);
//       state.location.pickupLocation = action.payload;
//       state.pickupAddress = action.payload.address;
//       localStorage.setItem('pickupLocation', JSON.stringify(action.payload));
//       state.currentState = "pickupLocation"; // Update currentState
//       localStorage.setItem('currentState', "dropoffLocation");
//     },
//     setDropoffLocation(state, action) {
//         console.log('dropoffLocation action:', action);
//       state.location.dropoffLocation = action.payload;
//       state.currentState = "dropoff"; // Update currentState
//       localStorage.setItem('dropoffLocation', JSON.stringify(action.payload));
//       localStorage.setItem('currentState', "vehicleDetails");
//     },
//     setVehicleDetails(state, action) {
//         console.log('setVehicalDetails action:', action);
//       state.vehicleDetails = action.payload;
//       state.currentState = "vehicleDetails"; // Update currentState
//       localStorage.setItem('vehicleDetails', JSON.stringify(action.payload));
//       localStorage.setItem('currentState', "selectedServices");
//     },
//     setSelectedServices(state, action) {

//         console.log('setSelectServices action:', action);
//       state.selectedServices = action.payload;
//       localStorage.setItem('selectedServices', JSON.stringify(action.payload));
//       state.currentState = "selectedServices"; // Update currentState
//       localStorage.setItem('currentState', "ReviewselectedServices");
//     },
//     // setPaymentData(state, action) {
//     //     console.log('setPickUpLocation action:', action);
//     //   state.paymentData = action.payload;
//     //   state.currentState = "payment"; // Update currentState
//     //   localStorage.setItem('paymentData', JSON.stringify(action.payload));
//     //   localStorage.setItem('currentState', "payment");
//     // },
//     loadStateFromLocalStorage(state) {
//         console.log('Loading state from localStorage');
//         const currentState = localStorage.getItem('currentState');
//         console.log('Loaded currentState from localStorage:', currentState);
//         if (currentState) {
//           state.currentState = currentState;
//         }
//         console.log('Loading state from localStorage');
//         // const currentState = localStorage.getItem('currentState');
//         console.log('Loaded currentState from localStorage:', currentState);

//       // Load other state values from localStorage

//       const pickupLocation = JSON.parse(localStorage.getItem('pickupLocation'));
//       const dropoffLocation = JSON.parse(localStorage.getItem('dropoffLocation'));
//       const vehicleDetails = JSON.parse(localStorage.getItem('vehicleDetails'));
//       const selectedServices = JSON.parse(localStorage.getItem('selectedServices'));
//       // const paymentData = JSON.parse(localStorage.getItem('paymentData'));
//     //   const currentState = localStorage.getItem('currentState');

//       // Dispatch actions with the retrieved data if needed

//     console.log('Loaded pickupLocation from localStorage:', pickupLocation);
//     console.log('Loaded dropoffLocation from localStorage:', dropoffLocation);
//     console.log('Loaded vehicleDetails from localStorage:', vehicleDetails);
//     console.log('Loaded selectedServices from localStorage:', selectedServices);
//     // console.log('Loaded paymentData from localStorage:', paymentData);

//     // Update state with loaded values from localStorage

//       if (pickupLocation) state.location.pickupLocation = pickupLocation;
//       if (dropoffLocation) state.location.dropoffLocation = dropoffLocation;
//       if (vehicleDetails) state.vehicleDetails = vehicleDetails;
//       if (selectedServices) state.selectedServices = selectedServices;
//       // if (paymentData) state.paymentData = paymentData;
//       if (currentState) state.currentState = currentState;
//     },
//     clearState(state) {
//       state.location = { pickupLocation: null, dropoffLocation: null };
//       state.vehicleDetails = { vin: "", model: "", make: "", year: "", color: "", licensePlate: "" };
//       state.selectedServices = [];
//       state.paymentData = null;
//       state.currentState = "initial";
//       localStorage.removeItem('pickupLocation');
//       localStorage.removeItem('dropoffLocation');
//       localStorage.removeItem('vehicleDetails');
//       localStorage.removeItem('selectedServices');
//       // localStorage.removeItem('paymentData');
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
//   // setPaymentData,
//   loadStateFromLocalStorage,
//   clearState,
// } = userSelectionSlice.actions;

// export default userSelectionSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const updateUserSelectionInLocalStorage = (data) => {
  console.log("Saving data to localStorage:", data);
  localStorage.setItem("userSelection", JSON.stringify(data));
};

const USER_DRAWER_OPTIONS = {
  0: "service-location",
  1: "drop-off-location",
  2: "add-vehicle-details",
  3: "choose-service",
  4: "service-preview",
  // 4: "choose-company",
  // 5: "choose-zone",
  // 6: "service-preview",
};

const initialState = {
  location: {
    pickupLocation: null,
    // currentLocation: null,
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
  currentState: "service-location", // Initial state indicator
  isStateUpdating: false, // Flag to indicate state update process
};

export const userSelectionSlice = createSlice({
  name: "userSelection",
  initialState,
  reducers: {
    updateUserServicesFromLocalStorage: (state, action) => {
      console.log(state, action, "======----------------------------");
      const newState = {
        ...state,
        ...action.payload,
      };
      return newState;
    },
    setPickupLocation(state, action) {
      state.location.pickupLocation = action.payload;
      if (!state.isStateUpdating) {
        state.currentState = USER_DRAWER_OPTIONS[1];
        updateUserSelectionInLocalStorage(state);
      }
    },
    setDropoffLocation(state, action) {
      state.location.dropoffLocation = action.payload;
      if (!state.isStateUpdating) {
        state.currentState = USER_DRAWER_OPTIONS[2];
        updateUserSelectionInLocalStorage(state);
      }
    },
    setVehicleDetails(state, action) {
      state.vehicleDetails = action.payload;
      if (!state.isStateUpdating) {
        state.currentState = USER_DRAWER_OPTIONS[3];
        updateUserSelectionInLocalStorage(state);
      }
    },
    setSelectedServices(state, action) {
      state.selectedServices = action.payload;
      if (!state.isStateUpdating) {
        state.currentState = USER_DRAWER_OPTIONS[4];
        updateUserSelectionInLocalStorage(state);
      }
    },
    startStateUpdate(state) {
      state.isStateUpdating = true;
    },
    completeStateUpdate(state) {
      state.isStateUpdating = false;
      updateUserSelectionInLocalStorage(state); // Update localStorage after state change
    },

    setStateEmpty: () => {
      const newState = {
        ...initialState,
      };
      updateUserSelectionInLocalStorage(newState);
      return newState;
    },

    
    loadStateFromLocalStorage(state) {
      const savedState = JSON.parse(localStorage.getItem("userSelection"));
      console.log("Loaded data from localStorage:", savedState);
      if (savedState) {
        Object.keys(savedState).forEach((key) => {
          state[key] = savedState[key];
        });
      } else {
        console.log('No data found in localStorage for key "userSelection"');
      }
    },
    setPreviousSelectionComponent: (state) => {
      console.log(state, "state");
      switch (state.currentState) {
        case USER_DRAWER_OPTIONS[0]: {
          state.currentState = USER_DRAWER_OPTIONS[0];
          break;
        }
        case USER_DRAWER_OPTIONS[1]: {
          state.currentState = USER_DRAWER_OPTIONS[0];
          break;
        }
        case USER_DRAWER_OPTIONS[2]: {
          state.currentState = USER_DRAWER_OPTIONS[1];
          break;
        }
        case USER_DRAWER_OPTIONS[3]: {
          state.currentState = USER_DRAWER_OPTIONS[2];
          break;
        }
        case USER_DRAWER_OPTIONS[4]: {
          state.currentState = USER_DRAWER_OPTIONS[3];
          break;
        }
        
        // case USER_DRAWER_OPTIONS[2]: {
        //   let previousComponent = 1;
        //   const userData = JSON.parse(localStorage.getItem("userData"));
        //   if (userData?.type === "opp_operator") {
        //     previousComponent = 0;
        //   }

        //   state.currentState = USER_DRAWER_OPTIONS[previousComponent];
        //   break;
        // }
        // case USER_DRAWER_OPTIONS[3]: {
        //   state.currentState = USER_DRAWER_OPTIONS[2];
        //   break;
        // }
        // case USER_DRAWER_OPTIONS[4]: {
        //   state.currentState = USER_DRAWER_OPTIONS[3];
        //   break;
        // }
        // case USER_DRAWER_OPTIONS[5]: {
        //   let previousComponent = 4;
        //   const userData = JSON.parse(localStorage.getItem("userData"));

        //   if (!userData?.organization?.showInsuranceCompany) {
        //     previousComponent = 3;
        //   }

        //   state.currentState = USER_DRAWER_OPTIONS[previousComponent];
        //   break;
        // }
        // case USER_DRAWER_OPTIONS[6]: {
        //   let previousComponent = 5;
        //   const userData = JSON.parse(localStorage.getItem("userData"));
        //   console.log(userData);
        //   if (
        //     userData?.type !== "opp_operator" &&
        //     userData?.organization?.showInsuranceCompany
        //   ) {
        //     previousComponent = 4;
        //   } else if (
        //     userData?.type !== "opp_operator" &&
        //     !userData?.organization?.showInsuranceCompany
        //   ) {
        //     previousComponent = 3;
        //   }

        //   state.currentState = USER_DRAWER_OPTIONS[previousComponent];
        //   break;
        // }
      }
      updateUserSelectionInLocalStorage({ ...state });
    },
    clearState(state) {
      state.location = { pickupLocation: null, dropoffLocation: null };
      // state.location = {};

      state.vehicleDetails = {
        vin: "",
        model: "",
        make: "",
        year: "",
        color: "",
        licensePlate: "",
      };
      state.selectedServices = [];
      state.currentState = "service-location";
      state.isStateUpdating = false; // Reset state update flag
      localStorage.removeItem("userSelection");
    },

  },
});

export const {
  setCurrentLocation,
  setPickupLocation,
  setDropoffLocation,
  setVehicleDetails,
  setSelectedServices,
  startStateUpdate,
  setStateEmpty,
  completeStateUpdate,
  loadStateFromLocalStorage,
  clearState,
  setPreviousSelectionComponent,
  updateUserServicesFromLocalStorage,
} = userSelectionSlice.actions;

export default userSelectionSlice.reducer;



















// import { createSlice } from "@reduxjs/toolkit";

// const updateUserSelectionInLocalStorage = (data) => {
//   localStorage.setItem("userSelection", JSON.stringify(data));
// };

// const initialState = {
//   location: {
//     pickupLocation: null,
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
//   currentState: "initial",
// };

// export const userSelectionSlice = createSlice({
//   name: 'userSelection',
//   initialState,
//   reducers: {
//     setPickupLocation(state, action) {
//       state.location.pickupLocation = action.payload;
//       state.currentState = "pickup";
//       updateUserSelectionInLocalStorage(state);
//     },
//     setDropoffLocation(state, action) {
//       state.location.dropoffLocation = action.payload;
//       state.currentState = "dropoff";
//       updateUserSelectionInLocalStorage(state);
//     },
//     setVehicleDetails(state, action) {
//       state.vehicleDetails = action.payload;
//       state.currentState = "vehicleDetails";
//       updateUserSelectionInLocalStorage(state);
//     },
//     setSelectedServices(state, action) {
//       state.selectedServices = action.payload;
//       state.currentState = "selectedServices";
//       updateUserSelectionInLocalStorage(state);
//     },
//     loadStateFromLocalStorage(state) {
//       console.log("Attempting to load state from localStorage...");
//       const savedState = JSON.parse(localStorage.getItem("userSelection"));
//       console.log("Loaded data from localStorage:", savedState);

//       if (savedState) {
//         console.log("Updating state with loaded data...");
//         state.location.pickupLocation = savedState.location.pickupLocation;
//         state.location.dropoffLocation = savedState.location.dropoffLocation;
//         state.vehicleDetails = savedState.vehicleDetails;
//         state.selectedServices = savedState.selectedServices;
//         state.currentState = savedState.currentState;
//       } else {
//         console.log('No data found in localStorage for key "userSelection"');
//       }
//     },
//     clearState(state) {
//       state.location.pickupLocation = null;
//       state.location.dropoffLocation = null;
//       state.vehicleDetails = {
//         vin: "",
//         model: "",
//         make: "",
//         year: "",
//         color: "",
//         licensePlate: "",
//       };
//       state.selectedServices = [];
//       state.currentState = "initial";
//       localStorage.removeItem("userSelection");
//     },
//   },
// });

// export const {
//   setPickupLocation,
//   setDropoffLocation,
//   setVehicleDetails,
//   setSelectedServices,
//   loadStateFromLocalStorage,
//   clearState,
// } = userSelectionSlice.actions;

// export const updateUserSelection = (data) => (dispatch) => {
//   dispatch(setPickupLocation(data.pickupLocation));
//   dispatch(setDropoffLocation(data.dropoffLocation));
//   dispatch(setVehicleDetails(data.vehicleDetails));
//   dispatch(setSelectedServices(data.selectedServices));
// };

// export const selectUserSelection = (state) => state.userSelection;

// export default userSelectionSlice.reducer;

// "use client";

// import Cookies from "js-cookie";
// import { usePathname } from "next/navigation";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { setAuthUser } from "@/redux/slices/authUser";
// import { setCurrentLocation } from '@/redux/slices/locationSlice'; // import the action
// import { setDropoffLocation } from '@/redux/slices/dropoffLocationSlice'; // import the action for dropoff location
// import { setVehicleDetails } from '@/redux/slices/vehicleDetailsSlice'; // Import the vehicle details slice actions
// import { setSelectedServices } from "@/redux/slices/servicesSlice";
// import { setPaymentData } from "@/redux/slices/paymentSlice";

// const LOCAL_STORAGE = [
//   {
//     key: "userData",
//     reducer: (data) => setAuthUser(data),
//   },
//   {
//     key: 'currentLocation', // add the key
//     reducer: (data) => setCurrentLocation(data), // add the corresponding reducer
//   },
//   {
//     key: 'dropoffLocation', // add the key for dropoff location
//     reducer: (data) => setDropoffLocation(data), // add the corresponding reducer for dropoff location
//   },
//   {
//     key: 'vehicleDetails', // Add the key for vehicle details
//     reducer: (data) => setVehicleDetails(data), // Add the corresponding reducer for vehicle details
//   },
//   {
//     key: 'selectedServices', // Add the key for selected services
//     reducer: (data) => setSelectedServices(data), // Add the corresponding reducer for selected services
//   },
//   {
//     key: 'paymentData',
//     reducer: (data) => setPaymentData(data),
//   },

// ];

// const RootLayoutWrapper = ({ children }) => {
//   // router
//   const pathname = usePathname();

//   // redux
//   const dispatch = useDispatch();

//   useEffect(() => {
//     rehydrateRedux();

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [pathname]);

//   const rehydrateRedux = () => {
//     try {
//       LOCAL_STORAGE.forEach((item) => {
//         const { key, reducer } = item;
//         const localData = JSON.parse(localStorage.getItem(key));
//         if (localData) {
//           let data = {};
//           if (key === "userData") {
//             data.userData = localData;
//             const token = Cookies.get("token");
//             if (token) {
//               data.token = token;
//             }
//           }

//           else {
//             data = localData;
//           }
//           // send to redux
//           dispatch(reducer(data));
//         }
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return children;
// };

// export default RootLayoutWrapper;

// "use client";

// import Cookies from "js-cookie";
// import { usePathname } from "next/navigation";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setAuthUser } from "@/redux/slices/authUser";
// import {
//   setCurrentLocation,
//   setDropoffLocation,
//   setVehicleDetails,
//   setSelectedServices,
//   setPaymentData,
// } from "@/redux/slices/userSelection";

// const LOCAL_STORAGE = [
//   {
//     key: "userData",
//     reducer: (data) => setAuthUser(data),
//   },
//   {
//     key: "currentLocation",
//     reducer: (data) => setCurrentLocation(data),
//   },
//   {
//     key: "dropoffLocation",
//     reducer: (data) => setDropoffLocation(data),
//   },
//   {
//     key: "vehicleDetails",
//     reducer: (data) => setVehicleDetails(data),
//   },
//   {
//     key: "selectedServices",
//     reducer: (data) => setSelectedServices(data),
//   },
//   {
//     key: "paymentData",
//     reducer: (data) => setPaymentData(data),
//   },
//   {
//     key: "currentState",
//     reducer: (data) => ({ type: "userSelection/setCurrentState", payload: data }),
//   },
// ];

// const RootLayoutWrapper = ({ children }) => {
//   const pathname = usePathname();
//   const dispatch = useDispatch();
//   const currentState = useSelector((state) => state.userSelection.currentState);

//   useEffect(() => {
//     loadStateFromLocalStorage(dispatch);
//   }, [pathname, dispatch]);

//   const loadStateFromLocalStorage = (dispatch) => {
//     LOCAL_STORAGE.forEach((item) => {
//       const { key, reducer } = item;
//       const localData = localStorage.getItem(key);
//       if (localData) {
//         let parsedData = {};
//         try {
//           parsedData = JSON.parse(localData);
//         } catch (error) {
//           console.error(`Error parsing localStorage key "${key}":`, error);
//           return;
//         }

//         dispatch(reducer(parsedData));
//       }
//     });

//     const storedCurrentState = localStorage.getItem("currentState");
//     if (storedCurrentState) {
//       dispatch({ type: "userSelection/setCurrentState", payload: storedCurrentState });
//     }
//   };

//   const saveCurrentStateToLocalStorage = (currentState) => {
//     localStorage.setItem("currentState", currentState);
//     dispatch({ type: "userSelection/setCurrentState", payload: currentState });
//   };

//   return children;
// };

// export default RootLayoutWrapper;

import ErrorFallback from "components/ErrorFallback/ErrorFallback";
import { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useDispatch } from "react-redux";
import { setAuthUser } from "@/redux/slices/authUser";
import { updateUserServicesFromLocalStorage } from "@/redux/slices/userSelection";
import Cookies from "js-cookie";
// Import other necessary actions for rehydration

const REHYDRATE_KEYS = [
  {
    key: "userData",
    // dispatcher: (data) => (dispatch) => dispatch(setAuthUser(data)),
  },
  {
    key: "userSelection",
    // dispatcher: (data) => (dispatch) =>
    //   dispatch(updateUserServicesFromLocalStorage(data)),
  },
];

const RootLayoutWrapper = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      rehydrateRedux();
    }
  }, []);

  const rehydrateRedux = () => {
    let userData = JSON.parse(localStorage.getItem("userData"));
    let userSelection = JSON.parse(localStorage.getItem("userSelection"));

    const token = Cookies.get("token");
    console.log("Rehydrated token:", token); // Debugging line

    if (!token) {
      console.error("Token not found during rehydration");
      return;
    }

    const reduxState = {
      userData,
      token,
    };
    // const token = "some-dummy-token";
    // const reduxState = {
    //   userData: userData,
    //   token,
    // };
    // console.log(userData,userSelection);
    try {
      REHYDRATE_KEYS.forEach((item) => {
        if (item?.key === "userData" && userData !== null) {
          dispatch(setAuthUser(reduxState));
        } else if (item?.key === "userSelection") {
          dispatch(updateUserServicesFromLocalStorage(userSelection));
        }
      });
    } catch (error) {
      console.log(
        error,
        "error///////////////////////////////////////////////////////"
      );
    }
  };

  return (
    <>
      {/* Body */}
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <main>{children}</main>
      </ErrorBoundary>
    </>
  );
};

export default RootLayoutWrapper;

// "use client";

// import Cookies from "js-cookie";
// import { usePathname } from "next/navigation";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setAuthUser } from "@/redux/slices/authUser";
// import {
//   setCurrentLocation,
//   setPickupLocation,
//   setDropoffLocation,
//   setVehicleDetails,
//   setSelectedServices,
//   // setPaymentData,
//   loadStateFromLocalStorage,
// } from "@/redux/slices/userSelection";

// const LOCAL_STORAGE = [
//   {
//     key: "userData",
//     reducer: (data) => setAuthUser(data),
//   },
//   {
//     key: "pickuplocation",
//     reducer: (data) => setPickupLocation(data),
//   },
//   {
//     key: "currentLocation",
//     reducer: (data) => setCurrentLocation(data),
//   },
//   {
//     key: "dropoffLocation",
//     reducer: (data) => setDropoffLocation(data),
//   },
//   {
//     key: "vehicleDetails",
//     reducer: (data) => setVehicleDetails(data),
//   },
//   {
//     key: "selectedServices",
//     reducer: (data) => setSelectedServices(data),
//   },
//   // {
//   //   key: "paymentData",
//   //   reducer: (data) => setPaymentData(data),
//   // },
// ];

// const RootLayoutWrapper = ({ children }) => {
//   const pathname = usePathname();
//   const dispatch = useDispatch();
//   const currentState = useSelector((state) => state.userSelection.currentState);

//   useEffect(() => {
//     console.log('Dispatching loadStateFromLocalStorage');
//     loadStateFromLocalStorage(dispatch);// Call the action creator to load state
//   }, [pathname, dispatch]);

//   const loadStateFromLocalStorage = (dispatch) => {
//     LOCAL_STORAGE.forEach((item) => {
//       const { key, reducer } = item;
//       const localData = localStorage.getItem(key);
//       if (localData) {
//         let parsedData = {};
//         try {
//           parsedData = JSON.parse(localData);
//         } catch (error) {
//           console.error(`Error parsing localStorage key "${key}":`, error);
//           return;
//         }

//         let data = {};
//         if (key === "userData") {
//           data.userData = parsedData;
//           const token = Cookies.get("token");
//           if (token) {
//             data.token = token;
//           }
//         } else {
//           data = parsedData;
//         }
//         dispatch(reducer(data));
//       }
//     });

//     const currentState = localStorage.getItem("currentState");
//     if (currentState) {
//       console.log('Dispatching loadStateFromLocalStorage');
//         // Ensure currentState is set correctly after reloading
//       dispatch({ type: "userSelection/loadStateFromLocalStorage" });
//     }
//   };

//   // const renderContentBasedOnState = () => {
//   //   switch (currentState) {
//   //     case "pickuplocation":
//   //       return <DropoffComponent />;
//   //     case "dropofflocation":
//   //       return <VehicleDetailsComponent />;
//   //     case "vehicalDetails":
//   //       return <PaymentComponent />;
//   //     default:
//   //       return <DefaultComponent />;
//   //   }
//   // };

//   const renderContentBasedOnState = () => {
//     console.log('Current state:', currentState);
//     switch (currentState) {
//       case "pickup":
//         // return <div>Pickup Location Component</div>;
//       case "dropoffLocation":
//         // return <div>Dropoff Location Component</div>;
//       case "vehicleDetails":
//         // return <div>Vehicle Details Component</div>;
//       case "selectedServices":
//         // return <div>Selected Services Component</div>;
//       default:
//         // return <div>Default Component</div>;
//     }
//   };

//   return (
//     <>
//       {renderContentBasedOnState()}
//       {children}
//     </>
//   );
// };

// export default RootLayoutWrapper;

// const rehydrateRedux = () => {
//   try {
//     Object.keys(LOCAL_STORAGE_KEYS).forEach((key) => {
//       const localStorageKey = LOCAL_STORAGE_KEYS[key];
//       const reducer = LOCAL_STORAGE_REDUCERS[key];
//       const localData = localStorage.getItem(localStorageKey);

//       if (localData) {
//         if (key === 'userData') {
//           const { token, ...userData } = JSON.parse(localData);
//           dispatch(setAuthUser({ userData, token }));
//           if (token) {
//             Cookies.set('token', token);
//           }
//         } else {
//           dispatch(reducer(JSON.parse(localData)));
//         }
//         console.log(`Redux state updated with ${key} from localStorage:`, localData);
//       }
//     });

//     const storedPage = localStorage.getItem(LOCAL_STORAGE_KEYS.currentPage);
//     let currentPage = 'home'; // Default value

//     try {
//       if (storedPage) {
//         currentPage = JSON.parse(storedPage);
//       }
//     } catch (error) {
//       console.error('Error parsing currentPage from localStorage:', error);
//     }

//     dispatch(setCurrentPage(currentPage));
//     console.log('Current page set from localStorage:', currentPage);

//   } catch (error) {
//     console.error('Error rehydrating Redux state:', error);
//   }
// };

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import Cookies from 'js-cookie';
// import { usePathname } from 'next/navigation';
// import { setAuthUser } from '@/redux/slices/authUser';
// import { setCurrentLocation } from '@/redux/slices/locationSlice';
// import { setDropoffLocation } from '@/redux/slices/dropoffLocationSlice';
// import { setVehicleDetails } from '@/redux/slices/vehicleDetailsSlice';
// import { setSelectedServices } from '@/redux/slices/servicesSlice';
// // import { setPaymentData } from '@/redux/slices/paymentSlice';
// import { setCurrentPage } from '@/redux/slices/currentPage';

// const LOCAL_STORAGE_KEYS = {
//   userData: 'userData',
//   currentLocation: 'currentLocation', // Change to 'pickupLocation' if needed
//   dropoffLocation: 'dropoffLocation',
//   vehicleDetails: 'vehicleDetails',
//   selectedServices: 'selectedServices',
//   // paymentData: 'paymentData',
//   currentPage: 'currentPage',
// };

// const LOCAL_STORAGE_REDUCERS = {
//   userData: (data) => setAuthUser(data),
//   currentLocation: (data) => setCurrentLocation(data),
//   dropoffLocation: (data) => setDropoffLocation(data),
//   vehicleDetails: (data) => setVehicleDetails(data),
//   selectedServices: (data) => setSelectedServices(data),
//   // paymentData: (data) => setPaymentData(data),
// };

// const RootLayoutWrapper = ({ children }) => {
//   const dispatch = useDispatch();
//   const pathname = usePathname();
//   const currentPage = useSelector((state) => state.currentPage.currentPage);

//   useEffect(() => {
//     rehydrateRedux();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [pathname]);

//   const rehydrateRedux = () => {
//     try {
//       Object.keys(LOCAL_STORAGE_KEYS).forEach((key) => {
//         const localStorageKey = LOCAL_STORAGE_KEYS[key];
//         const reducer = LOCAL_STORAGE_REDUCERS[key];
//         const localData = JSON.parse(localStorage.getItem(localStorageKey));
//         if (localData) {
//           if (key === 'userData') {
//             const { token, ...userData } = localData;
//             dispatch(setAuthUser({ userData, token }));
//             if (token) {
//               Cookies.set('token', token);
//             }
//           } else {
//             dispatch(reducer(localData));
//           }
//           console.log(`Redux state updated with ${key} from localStorage:`, localData);
//         }
//       });

//       const storedPage = localStorage.getItem(LOCAL_STORAGE_KEYS.currentPage);
//       console.log("store pages",storedPage);
//       if (storedPage) {
//         dispatch(setCurrentPage(storedPage));
//         console.log('Current page set from localStorage:', storedPage);
//       } else {
//         dispatch(setCurrentPage('home'));
//         console.log('Setting default page to "home"');
//       }
//     } catch (error) {
//       console.error('Error rehydrating Redux state:', error);
//     }
//   };

//   return <>{children}</>;
// };

// export default RootLayoutWrapper;

// "use client";

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import Cookies from 'js-cookie';
// import { usePathname } from 'next/navigation';
// import { setAuthUser } from '@/redux/slices/authUser';
// import { setCurrentLocation } from '@/redux/slices/locationSlice';
// import { setDropoffLocation } from '@/redux/slices/dropoffLocationSlice';
// import { setVehicleDetails } from '@/redux/slices/vehicleDetailsSlice';
// import { setSelectedServices } from '@/redux/slices/servicesSlice';
// import { setPaymentData } from '@/redux/slices/paymentSlice';
// import { setCurrentPage } from '@/redux/slices/currentPage'; // Import new slice

// const LOCAL_STORAGE = [
//   {
//     key: 'userData',
//     reducer: (data) => setAuthUser(data),
//   },
//   {
//     key: 'currentLocation', // Change to 'pickupLocation' instead of 'currentLocation'
//     reducer: (data) => setCurrentLocation(data),
//   },
//   {
//     key: 'dropoffLocation',
//     reducer: (data) => setDropoffLocation(data),
//   },
//   {
//     key: 'vehicleDetails',
//     reducer: (data) => setVehicleDetails(data),
//   },
//   {
//     key: 'selectedServices',
//     reducer: (data) => setSelectedServices(data),
//   },
//   {
//     key: 'paymentData',
//     reducer: (data) => setPaymentData(data),
//   },
// ];

// const RootLayoutWrapper = ({ children }) => {
//   const dispatch = useDispatch();
//   const pathname = usePathname(); // Next.js hook to get current pathname
//   const currentPage = useSelector((state) => state.currentPage.currentPage); // Accessing currentPage from Redux state

//   useEffect(() => {
//     rehydrateRedux();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [pathname]);

//   const rehydrateRedux = () => {
//     try {
//       LOCAL_STORAGE.forEach((item) => {
//         const { key, reducer } = item;
//         const localData = JSON.parse(localStorage.getItem(key));
//         if (localData) {
//           let data = {};
//           if (key === 'userData') {
//             data.userData = localData;
//             const token = Cookies.get('token');
//             if (token) {
//               data.token = token;
//             }
//           } else {
//             data = localData;
//           }
//           dispatch(reducer(data));
//         }
//       });

//       // Check localStorage for currentPage on initial load
//       const storedPage = localStorage.getItem('currentPage');
//       if (storedPage) {
//         dispatch(setCurrentPage(storedPage));
//       } else {
//         // If no currentPage in localStorage, set default page (e.g., 'home')
//         dispatch(setCurrentPage('home'));
//       }
//     } catch (error) {
//       console.error('Error rehydrating Redux state:', error);
//     }
//   };

//   return <>{children}</>; // Render children components
// };

// export default RootLayoutWrapper;

// "use client"

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import Cookies from 'js-cookie';
// import { usePathname } from 'next/navigation';
// import { setAuthUser } from '@/redux/slices/authUser';
// import { setCurrentLocation } from '@/redux/slices/locationSlice';
// import { setDropoffLocation } from '@/redux/slices/dropoffLocationSlice';
// import { setVehicleDetails } from '@/redux/slices/vehicleDetailsSlice';
// import { setSelectedServices } from '@/redux/slices/servicesSlice';
// import { setPaymentData } from '@/redux/slices/paymentSlice';
// import { setCurrentPage } from '@/redux/slices/currentPage'; // Import new slice

// const LOCAL_STORAGE = [
//   {
//     key: 'userData',
//     reducer: (data) => setAuthUser(data),
//   },
//   {
//     key: 'pick',
//     reducer: (data) => setCurrentLocation(data),
//   },
//   {
//     key: 'dropoffLocation',
//     reducer: (data) => setDropoffLocation(data),
//   },
//   {
//     key: 'vehicleDetails',
//     reducer: (data) => setVehicleDetails(data),
//   },
//   {
//     key: 'selectedServices',
//     reducer: (data) => setSelectedServices(data),
//   },
//   {
//     key: 'paymentData',
//     reducer: (data) => setPaymentData(data),
//   },
// ];

// const RootLayoutWrapper = ({ children }) => {
//   const dispatch = useDispatch();
//   const pathname = usePathname(); // Next.js hook to get current pathname
//   const currentPage = useSelector((state) => state.currentPage.currentPage); // Accessing currentPage from Redux state

//   // Selectors for each slice of the state
//   const userData = useSelector((state) => state.authUser.userData);
//   const currentLocation = useSelector((state) => state.locationSlice.currentLocation);
//   const dropoffLocation = useSelector((state) => state.dropoffLocationSlice.dropoffLocation);
//   const vehicleDetails = useSelector((state) => state.vehicleDetailsSlice.vehicleDetails);
//   const selectedServices = useSelector((state) => state.servicesSlice.selectedServices);
//   const paymentData = useSelector((state) => state.paymentSlice.paymentData);

//   useEffect(() => {
//     rehydrateRedux();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [pathname]);

//   const rehydrateRedux = () => {
//     try {
//       LOCAL_STORAGE.forEach((item) => {
//         const { key, reducer } = item;
//         const localData = JSON.parse(localStorage.getItem(key));
//         if (localData) {
//           let data = {};
//           if (key === 'userData') {
//             data.userData = localData;
//             const token = Cookies.get('token');
//             if (token) {
//               data.token = token;
//             }
//           } else {
//             data = localData;
//           }
//           dispatch(reducer(data));
//         }
//       });

//       // Check localStorage for currentPage on initial load
//       const storedPage = localStorage.getItem('currentPage');
//       if (storedPage) {
//         dispatch(setCurrentPage(storedPage));
//       } else {
//         // If no currentPage in localStorage, set default page (e.g., 'home')
//         dispatch(setCurrentPage('home'));
//       }
//     } catch (error) {
//       console.error('Error rehydrating Redux state:', error);
//     }
//   };

// useEffect(() => {
//   rehydrateRedux();
// }, [dispatch, pathname, userData, currentLocation, dropoffLocation, vehicleDetails, selectedServices, paymentData]);

//   // useEffect(() => {
//   //   const saveToLocalStorage = (key, data) => {
//   //     localStorage.setItem(key, JSON.stringify(data));
//   //   };

//   //   saveToLocalStorage('userData', userData);
//   //   saveToLocalStorage('currentLocation', currentLocation);
//   //   saveToLocalStorage('pickupLocation', pickupLocation);
//   //   saveToLocalStorage('dropoffLocation', dropoffLocation);
//   //   saveToLocalStorage('vehicleDetails', vehicleDetails);
//   //   saveToLocalStorage('selectedServices', selectedServices);
//   //   localStorage.setItem('currentPage', currentPage);
//   // }, [userData, currentLocation, pickupLocation, dropoffLocation, vehicleDetails, selectedServices, currentPage]);

//   // Save state to localStorage whenever it changes
//   // useEffect(() => {
//   //   localStorage.setItem('userData', JSON.stringify(userData));
//   // }, [userData]);

//   // useEffect(() => {
//   //   localStorage.setItem('currentLocation', JSON.stringify(currentLocation));
//   // }, [currentLocation]);

//   // useEffect(() => {
//   //   localStorage.setItem('dropoffLocation', JSON.stringify(dropoffLocation));
//   // }, [dropoffLocation]);

//   // useEffect(() => {
//   //   localStorage.setItem('vehicleDetails', JSON.stringify(vehicleDetails));
//   // }, [vehicleDetails]);

//   // useEffect(() => {
//   //   localStorage.setItem('selectedServices', JSON.stringify(selectedServices));
//   // }, [selectedServices]);

//   // useEffect(() => {
//   //   localStorage.setItem('paymentData', JSON.stringify(paymentData));
//   // }, [paymentData]);

//   // useEffect(() => {
//   //   localStorage.setItem('currentPage', currentPage);
//   // }, [currentPage]);

//   return <>{children}</>;
// };

// export default RootLayoutWrapper;

// RootLayoutWrapper.js
// src/components/LayoutWrappers/Root/LayoutWrapper.jsx

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import Cookies from 'js-cookie';
// import { usePathname } from 'next/navigation';
// import { setAuthUser } from '@/redux/slices/authUser';
// import { setCurrentLocation } from '@/redux/slices/locationSlice';
// import { setDropoffLocation } from '@/redux/slices/dropoffLocationSlice';
// import { setVehicleDetails } from '@/redux/slices/vehicleDetailsSlice';
// import { setSelectedServices } from '@/redux/slices/servicesSlice';
// import { setPaymentData } from '@/redux/slices/paymentSlice';
// import { setCurrentPage } from '@/redux/slices/currentPage'; // Import new slice

// const LOCAL_STORAGE = [
//   {
//     key: 'userData',
//     reducer: (data) => setAuthUser(data),
//   },
//   {
//     key: 'currentLocation',
//     reducer: (data) => setCurrentLocation(data),
//   },
//   {
//     key: 'dropoffLocation',
//     reducer: (data) => setDropoffLocation(data),
//   },
//   {
//     key: 'vehicleDetails',
//     reducer: (data) => setVehicleDetails(data),
//   },
//   {
//     key: 'selectedServices',
//     reducer: (data) => setSelectedServices(data),
//   },
//   {
//     key: 'paymentData',
//     reducer: (data) => setPaymentData(data),
//   },
// ];

// const RootLayoutWrapper = ({ children }) => {
//   const dispatch = useDispatch();
//   const pathname = usePathname(); // Next.js hook to get current pathname
//   const currentPage = useSelector(state => state.currentPage.currentPage); // Accessing currentPage from Redux state

//   useEffect(() => {
//     rehydrateRedux();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [pathname]);

//   const rehydrateRedux = () => {
//     try {
//       LOCAL_STORAGE.forEach((item) => {
//         const { key, reducer } = item;
//         const localData = JSON.parse(localStorage.getItem(key));
//         if (localData) {
//           let data = {};
//           if (key === 'userData') {
//             data.userData = localData;
//             const token = Cookies.get('token');
//             if (token) {
//               data.token = token;
//             }
//           } else {
//             data = localData;
//           }
//           dispatch(reducer(data));
//         }
//       });

//       // Check localStorage for currentPage on initial load
//       const storedPage = localStorage.getItem('currentPage');
//       if (storedPage) {
//         dispatch(setCurrentPage(storedPage));
//       } else {
//         // If no currentPage in localStorage, set default page (e.g., 'home')
//         dispatch(setCurrentPage('home'));
//       }
//     } catch (error) {
//       console.error('Error rehydrating Redux state:', error);
//     }
//   };
//     // Save state to localStorage whenever it changes

//   useEffect(() => {
//     LOCAL_STORAGE.forEach((item) => {
//       const { key } = item;
//       const stateData = JSON.stringify(localStorage.getItem(key));
//       localStorage.setItem(key, stateData);
//     });
//     localStorage.setItem('currentPage', currentPage);
//   }, [currentPage]);

//   return <>{children}</>; // Render children components
// };

// export default RootLayoutWrapper;

// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { setAuthUser } from "@/redux/slices/authUser";
// import { setCurrentLocation } from "@/redux/slices/locationSlice";
// import { setDropoffLocation } from "@/redux/slices/dropoffLocationSlice";
// import { setVehicleDetails } from "@/redux/slices/vehicleDetailsSlice";
// import { setSelectedServices } from "@/redux/slices/servicesSlice";
// import { setPaymentData } from "@/redux/slices/paymentSlice";

// const LOCAL_STORAGE_ITEMS = [
//   {
//     key: "userData",
//     action: setAuthUser,
//     reducer: (data) => setAuthUser(data),
//   },
//   {
//     key: "currentLocation",
//     action: setCurrentLocation,
//   },
//   {
//     key: "dropoffLocation",
//     action: setDropoffLocation,
//   },
//   {
//     key: "vehicleDetails",
//     action: setVehicleDetails,
//   },
//   {
//     key: "selectedServices",
//     action: setSelectedServices,
//   },
//   {
//     key: "paymentData",
//     action: setPaymentData,
//   },
// ];

// const RootLayoutWrapper = ({ children }) => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     // Rehydrate Redux state from localStorage on component mount
//     rehydrateReduxState();
//   }, []);

//   const rehydrateReduxState = () => {
//     try {
//       LOCAL_STORAGE_ITEMS.forEach(({ key, action }) => {
//         const storedItem = localStorage.getItem(key);
//         if (storedItem) {
//           dispatch(action(JSON.parse(storedItem)));
//         }
//       });
//     } catch (error) {
//       console.error("Error rehydrating Redux state:", error);
//     }
//   };

//   return children;
// };

// export default RootLayoutWrapper;

// "use client";

// import Cookies from "js-cookie";
// import { usePathname, useRouter } from "next/navigation";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { setAuthUser } from "@/redux/slices/authUser";
// import { setCurrentLocation } from '@/redux/slices/locationSlice';
// import { setDropoffLocation } from '@/redux/slices/dropoffLocationSlice';
// import { setVehicleDetails } from '@/redux/slices/vehicleDetailsSlice';
// import { setSelectedServices } from "@/redux/slices/servicesSlice";
// import { setPaymentData } from "@/redux/slices/paymentSlice";

// const LOCAL_STORAGE_KEYS = [
//   "userData",
//   "currentLocation",
//   "dropoffLocation",
//   "vehicleDetails",
//   "selectedServices",
//   "paymentData",
// ];

// const RootLayoutWrapper = ({ children }) => {
//   const pathname = usePathname();
//   const dispatch = useDispatch();
//   const router = useRouter();

//   useEffect(() => {
//     // Store the current path in localStorage
//     localStorage.setItem('currentPath', pathname);
//     rehydrateRedux();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [pathname]);

//   useEffect(() => {
//     // Rehydrate the saved path and navigate to it
//     const savedPath = localStorage.getItem('currentPath');
//     if (savedPath && savedPath !== pathname) {
//       router.push(savedPath);
//     }
//   }, [pathname, router]);

//   const rehydrateRedux = () => {
//     try {
//       LOCAL_STORAGE_KEYS.forEach((key) => {
//         if (shouldLoadFromLocalStorage(pathname, key)) {
//           const localData = localStorage.getItem(key);
//           if (localData !== null && localData !== 'undefined') {
//             try {
//               const parsedData = JSON.parse(localData);
//               if (key === "userData") {
//                 const token = Cookies.get("token");
//                 if (token) {
//                   parsedData.token = token;
//                 }
//               }
//               dispatch(rehydrateStateAction(key, parsedData));
//             } catch (parseError) {
//               console.log(`Error parsing localStorage key "${key}":`, parseError);
//             }
//           }
//         }
//       });
//     } catch (error) {
//       console.log("Error rehydrating Redux state:", error);
//     }
//   };

//   const shouldLoadFromLocalStorage = (currentPath, key) => {
//     // Return true to load the state from localStorage
//     return true;
//   };

//   const rehydrateStateAction = (key, data) => {
//     switch (key) {
//       case "userData":
//         return setAuthUser(data);
//       case "currentLocation":
//         return setCurrentLocation(data);
//       case "dropoffLocation":
//         return setDropoffLocation(data);
//       case "selectedServices":
//         return setSelectedServices(data);
//       case "paymentData":
//         return setPaymentData(data);
//       case "vehicleDetails":
//         return setVehicleDetails(data);
//       default:
//         return { type: "UNKNOWN_ACTION" };
//     }
//   };

//   return children;
// };

// export default RootLayoutWrapper;

// import Cookies from "js-cookie";
// import { usePathname } from "next/navigation";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { setAuthUser } from "@/redux/slices/authUser";
// import { setCurrentLocation } from "@/redux/slices/locationSlice";
// import { setDropoffLocation } from "@/redux/slices/dropoffLocationSlice";
// import { setVehicleDetails } from "@/redux/slices/vehicleDetailsSlice";
// import { setSelectedServices } from "@/redux/slices/servicesSlice";
// import { setPaymentData } from "@/redux/slices/paymentSlice";

// const LOCAL_STORAGE_KEYS = [
//   "userData",
//   "currentLocation",
//   "dropoffLocation",
//   "selectedServices",
//   "paymentData",
// ];

// const RootLayoutWrapper = ({ children }) => {
//   const pathname = usePathname();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     rehydrateRedux();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [pathname]);

//   const rehydrateRedux = () => {
//     try {
//       LOCAL_STORAGE_KEYS.forEach((key) => {
//         if (shouldLoadFromLocalStorage(pathname, key)) {
//           const localData = JSON.parse(localStorage.getItem(key));
//           if (localData) {
//             if (key === "userData") {
//               const token = Cookies.get("token");
//               if (token) {
//                 localData.token = token;
//               }
//             }
//             dispatch(rehydrateStateAction(key, localData));
//           }
//         }
//       });
//     } catch (error) {
//       console.log("Error rehydrating Redux state:", error);
//     }
//   };

//   const shouldLoadFromLocalStorage = (currentPath, key) => {
//     // Check if the current path is 'vehicleDetails'
//     return !(currentPath === '/vehicleDetails' && key === 'vehicleDetails');
//   };

//   const rehydrateStateAction = (key, data) => {
//     switch (key) {
//       case "userData":
//         return setAuthUser(data);
//       case "currentLocation":
//         return setCurrentLocation(data);
//       case "dropoffLocation":
//         return setDropoffLocation(data);
//       case "selectedServices":
//         return setSelectedServices(data);
//       case "paymentData":
//         return setPaymentData(data);
//       case "vehicleDetails":
//         return setVehicleDetails(data);
//       default:
//         return { type: "UNKNOWN_ACTION" };
//     }
//   };

//   return children;
// };

// export default RootLayoutWrapper;

// import Cookies from "js-cookie";
// import { usePathname } from "next/navigation";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { setAuthUser } from "@/redux/slices/authUser";
// import { setCurrentLocation, setPickupLocation, setDropoffLocation } from '@/redux/slices/locationSlice';
// import { setVehicleDetails } from '@/redux/slices/vehicleDetailsSlice';
// import { setSelectedServices } from "@/redux/slices/servicesSlice";
// import { setPaymentData } from "@/redux/slices/paymentSlice";

// const LOCAL_STORAGE_KEYS = [
//   'userData',
//   'currentLocation',
//   'dropoffLocation',
//   'vehicleDetails',
//   'selectedServices',
//   'paymentData',
// ];

// const RootLayoutWrapper = ({ children }) => {
//   const pathname = usePathname();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     rehydrateRedux();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [pathname]);

//   const rehydrateRedux = () => {
//     try {
//       LOCAL_STORAGE_KEYS.forEach(key => {
//         const localData = localStorage.getItem(key);
//         console.log(`Retrieved ${key} from localStorage:`, localData);

//         if (localData) {
//           let parsedData;
//           try {
//             parsedData = JSON.parse(localData);
//             console.log(`Parsed ${key} data:`, parsedData);

//             // Dispatch based on key
//             switch (key) {
//               case "userData":
//                 const token = Cookies.get("token");
//                 if (token) {
//                   parsedData.token = token;
//                 }
//                 dispatch(setAuthUser(parsedData));
//                 break;
//               case "currentLocation":
//                 dispatch(setCurrentLocation(parsedData));
//                 break;
//               case "dropoffLocation":
//                 dispatch(setDropoffLocation(parsedData));
//                 break;
//               case "vehicleDetails":
//                 dispatch(setVehicleDetails(parsedData));
//                 break;
//               case "selectedServices":
//                 dispatch(setSelectedServices(parsedData));
//                 break;
//               case "paymentData":
//                 dispatch(setPaymentData(parsedData));
//                 break;
//               default:
//                 break;
//             }
//           } catch (error) {
//             console.error(`Error parsing ${key} data:`, error);
//           }
//         } else {
//           console.warn(`No data found for ${key} in localStorage.`);
//         }
//       });
//     } catch (error) {
//       console.error("Error rehydrating Redux state:", error);
//     }
//   };

//   return children;
// };

// export default RootLayoutWrapper;

// import Cookies from "js-cookie";
// import { usePathname } from "next/navigation";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { setAuthUser } from "@/redux/slices/authUser";
// import { setCurrentLocation , setPickupLocation} from '@/redux/slices/locationSlice';
// import { setDropoffLocation } from "@/redux/slices/dropoffLocationSlice";
// import { setVehicleDetails } from '@/redux/slices/vehicleDetailsSlice';
// import { setSelectedServices } from "@/redux/slices/servicesSlice";
// import { setPaymentData } from "@/redux/slices/paymentSlice";

// const LOCAL_STORAGE_KEYS = [
//   'userData',
//   'currentLocation',
//   'dropoffLocation',
//   'vehicleDetails',
//   'selectedServices',
//   'paymentData',
// ];

// const RootLayoutWrapper = ({ children }) => {
//   const pathname = usePathname();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     rehydrateRedux();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [pathname]);

//   const rehydrateRedux = () => {
//     try {
//       LOCAL_STORAGE_KEYS.forEach(key => {
//         const localData = localStorage.getItem(key);
//         if (localData) {
//           if (key === "userData") {
//             const userData = JSON.parse(localData);
//             const token = Cookies.get("token");
//             if (token) {
//               userData.token = token;
//             }
//             dispatch(setAuthUser(userData));

//           } else if (key === "currentLocation") {
//             const currentLocation = JSON.parse(localData);
//             dispatch(setCurrentLocation(currentLocation));
//           } else if (key === "dropoffLocation") {
//             const dropoffLocationData = JSON.parse(localData);
//             dispatch(setDropoffLocation(dropoffLocationData));
//           } else if (key === "vehicleDetails") {
//             const vehicleDetailsData = JSON.parse(localData);
//             dispatch(setVehicleDetails(vehicleDetailsData));
//           } else if (key === "selectedServices") {
//             const selectedServicesData = JSON.parse(localData);
//             dispatch(setSelectedServices(selectedServicesData));
//           } else if (key === "paymentData") {
//             const paymentData = JSON.parse(localData);
//             dispatch(setPaymentData(paymentData));
//           }
//         }
//       });
//     } catch (error) {
//       console.error("Error rehydrating Redux state:", error);
//     }
//   };

//   return children;
// };

// export default RootLayoutWrapper;

// import Cookies from "js-cookie";
// import { usePathname } from "next/navigation";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { setAuthUser } from "@/redux/slices/authUser";
// import { setCurrentLocation,setPickupLocation, setDropoffLocation } from '@/redux/slices/locationSlice';
// import { setVehicleDetails } from '@/redux/slices/vehicleDetailsSlice';
// import { setSelectedServices } from "@/redux/slices/servicesSlice";
// import { setPaymentData } from "@/redux/slices/paymentSlice";

// const LOCAL_STORAGE_KEYS = [
//   'userData',
//   'pickupLocation',
//   'dropoffLocation',
//   'vehicleDetails',
//   'selectedServices',
//   'paymentData',
// ];

// const RootLayoutWrapper = ({ children }) => {
//   const pathname = usePathname();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     rehydrateRedux();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [pathname]);

//   const rehydrateRedux = () => {
//     try {
//       LOCAL_STORAGE_KEYS.forEach(key => {
//         const localData = localStorage.getItem(key);
//         console.log(`Retrieved ${key} from localStorage:`, localData);

//         if (localData) { // Check if localData is truthy (not null or undefined)
//           let parsedData;
//           try {
//             parsedData = JSON.parse(localData);
//             console.log(`Parsed ${key} data:`, parsedData);

//             // Example dispatching
//             switch (key) {
//               case "userData":
//                 dispatch(setAuthUser(parsedData));
//                 break;
//               case "pickupLocation":
//                 dispatch(setCurrentLocation(parsedData));
//                 break;
//               case "dropoffLocation":
//                 dispatch(setDropoffLocation(parsedData));
//                 break;
//               case "vehicleDetails":
//                 dispatch(setVehicleDetails(parsedData));
//                 break;
//               case "selectedServices":
//                 dispatch(setSelectedServices(parsedData));
//                 break;
//               case "paymentData":
//                 dispatch(setPaymentData(parsedData));
//                 break;
//               default:
//                 break;
//             }
//           } catch (error) {
//             console.error(`Error parsing ${key} data:`, error);
//             // Handle parsing error (e.g., dispatch an action to clear Redux state for that key)
//           }
//         } else {
//           console.warn(`No data found for ${key} in localStorage.`);
//           // Handle missing data scenario (e.g., dispatch an action to set default state)
//         }
//       });
//     } catch (error) {
//       console.error("Error rehydrating Redux state:", error);
//       // Handle general rehydration error (e.g., show a user-friendly message)
//     }
//   };

//   return children;
// };

// export default RootLayoutWrapper;

// // components/RootLayoutWrapper.js
// import Cookies from 'js-cookie';
// import { usePathname } from 'next/navigation';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { persistor } from '@/redux/store'; // Import persistor from your store
// import { setAuthUser } from "@/redux/slices/authUser";
// import { setCurrentLocation } from '@/redux/slices/locationSlice'; // import the action
// import { setDropoffLocation } from '@/redux/slices/dropoffLocationSlice'; // import the action for dropoff location
// import { setVehicleDetails } from '@/redux/slices/vehicleDetailsSlice'; // Import the vehicle details slice actions
// import { setSelectedServices } from "@/redux/slices/servicesSlice";
// import { setPaymentData } from "@/redux/slices/paymentSlice";

// const LOCAL_STORAGE_KEYS = [
//   'userData',
//   'currentLocation',
//   'dropoffLocation',
//   'vehicleDetails',
//   'selectedServices',
//   'paymentData',
// ];

// const RootLayoutWrapper = ({ children }) => {
//   const pathname = usePathname();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     rehydrateRedux();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [pathname]);

//   const rehydrateRedux = () => {
//     try {
//       LOCAL_STORAGE_KEYS.forEach(key => {
//         const localData = JSON.parse(localStorage.getItem(key));
//         if (localData) {
//           let data = {};
//           if (key === 'userData') {
//             data.userData = localData;
//             const token = Cookies.get('token');
//             if (token) {
//               data.token = token;
//             }
//           } else {
//             data = localData;
//           }
//           // Send to redux
//           switch (key) {
//             case 'userData':
//               dispatch(setAuthUser(data));
//               break;
//             case 'currentLocation':
//               dispatch(setCurrentLocation(data));
//               break;
//             case 'dropoffLocation':
//               dispatch(setDropoffLocation(data));
//               break;
//             case 'vehicleDetails':
//               dispatch(setVehicleDetails(data));
//               break;
//             case 'selectedServices':
//               dispatch(setSelectedServices(data));
//               break;
//             case 'paymentData':
//               dispatch(setPaymentData(data));
//               break;
//             default:
//               break;
//           }
//         }
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <PersistGate loading={null} persistor={persistor}>
//       {children}
//     </PersistGate>
//   );
// };

// export default RootLayoutWrapper;

// "use client"

// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   setAuthUser,
//   selectAuthUser,
// } from "@/redux/slices/authUser";
// import {
//   setCurrentLocation,
//   selectCurrentLocation,
// } from "@/redux/slices/locationSlice";
// import {
//   setDropoffLocation,
//   selectDropoffLocation,
// } from "@/redux/slices/dropoffLocationSlice";
// import {
//   setVehicleDetails,
//   selectVehicleDetails,
// } from "@/redux/slices/vehicleDetailsSlice";
// import {
//   setSelectedServices,
//   selectSelectedServices,
// } from "@/redux/slices/servicesSlice";
// import {
//   setPaymentData,
//   selectPaymentData,
// } from "@/redux/slices/paymentSlice";
// import Cookies from "js-cookie";
// import { usePathname } from "next/navigation";

// const LOCAL_STORAGE_KEYS = [
//   {
//     key: "authUser",
//     reducer: setAuthUser,
//     selector: selectAuthUser,
//   },
//   {
//     key: "currentLocation",
//     reducer: setCurrentLocation,
//     selector: selectCurrentLocation,
//   },
//   {
//     key: "dropoffLocation",
//     reducer: setDropoffLocation,
//     selector: selectDropoffLocation,
//   },
//   {
//     key: "vehicleDetails",
//     reducer: setVehicleDetails,
//     selector: selectVehicleDetails,
//   },
//   {
//     key: "selectedServices",
//     reducer: setSelectedServices,
//     selector: selectSelectedServices,
//   },
//   {
//     key: "paymentData",
//     reducer: setPaymentData,
//     selector: selectPaymentData,
//   },
// ];

// const RootLayoutWrapper = ({ children }) => {
//   const pathname = usePathname();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     rehydrateReduxStates();
//   }, [pathname]);

//   const rehydrateReduxStates = () => {
//     try {
//       LOCAL_STORAGE_KEYS.forEach(({ key, reducer, selector }) => {
//         const localData = JSON.parse(localStorage.getItem(key));
//         if (localData) {
//           dispatch(reducer(localData));
//         }
//       });

//       // Additional logic to rehydrate authUser token from cookies if necessary
//       const token = Cookies.get("token");
//       if (token) {
//         const authUser = { token };
//         dispatch(setAuthUser(authUser));
//       }
//     } catch (error) {
//       console.error("Error rehydrating Redux states:", error);
//     }
//   };

//   // Optional: Save Redux state to localStorage on state changes
//   useSelector((state) => {
//     try {
//       LOCAL_STORAGE_KEYS.forEach(({ key, selector }) => {
//         const stateSlice = selector(state);
//         localStorage.setItem(key, JSON.stringify(stateSlice));
//       });
//     } catch (error) {
//       console.error("Error saving Redux state to localStorage:", error);
//     }
//   });

//   return children;
// };

// export default RootLayoutWrapper;

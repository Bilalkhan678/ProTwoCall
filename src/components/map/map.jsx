/* eslint-disable @next/next/no-img-element */


// // import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
// // import { useMemo } from "react";
// // import 'leaflet/dist/leaflet.css';
// // import styles from './styles.module.scss';

// // const mapContainerStyle = {
// //   width: "100%",
// //   height: "100vh", // Ensure it takes up full viewport height
// //   position: 'relative',
// //   padding: '10px' // Add padding if necessary to ensure controls are not cut off

// // // display: 'flex',
// // // justifyContent: "center",
// // // alignItems: "center",

// // };

// // // const center = useMemo(() => ({ lat: 44.9778, lng: -93.2650 }), []);

// // const center = {
// //   lat: 44.9778,
// //   lng: -93.2650,
// // };

// // // const options = useMemo(() => ({
// // //     fullscreenControl: false,
// // //     mapTypeControl: false,
// // //     streetViewControl: false,
// // //     zoomControl: true,
// // //     zoomControlOptions: {
// // //       position: window.google.maps.ControlPosition.RIGHT_CENTER,
// // //     },
// // //   }), []);

// // // const options = {
// // //     fullscreenControl: false,  // Disable the fullscreen control if you don't need it
// // //     zoomControlOptions: {
// // //       position: window.google.maps.ControlPosition.CENTER, // Position the zoom control on the right
// // //     },
// // //   };

// // // const options = useMemo(() => {
// // //     if (typeof window !== 'undefined' && window.google) {
// // //       return {
// // //         fullscreenControl: false,
// // //         zoomControlOptions: {
// // //           position: window.google.maps.ControlPosition.CENTER,
// // //         },
// // //       };
// // //     }
// // //     return {};
// // //   }, []);

// // const Map = () => {
// //   const { isLoaded, loadError } = useLoadScript({
// //     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
// //   });

// //   if (loadError) return <div>Error loading maps</div>;
// //   if (!isLoaded) return <div>Loading...</div>;

// //   return (
// //     <GoogleMap
// //       mapContainerStyle={mapContainerStyle}
// //       center={center}
// //       zoom={8}
// //     //   options={options}
// //     >
// //       <Marker position={center} />
// //     </GoogleMap>
// //   );
// // };

// // export default Map;



// // // import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
// // // import L from 'leaflet';
// // // import 'leaflet/dist/leaflet.css';

// // // const customIcon = new L.Icon({
// // //   iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-red.png',
// // //   iconSize: [38, 95],
// // //   iconAnchor: [22, 94],
// // //   popupAnchor: [-3, -76],
// // // });

// // // const CustomMarker = ({ position, text }) => (
// // //   <Marker position={position} icon={customIcon}>
// // //     <Popup>{text}</Popup>
// // //   </Marker>
// // // );

// // // const SatelliteButton = () => {
// // //   const map = useMap();

// // //   const handleSatelliteClick = () => {
// // //     map.setView(map.getCenter(), map.getZoom());
// // //     map.removeLayer(map.getPanes().tilePane);
// // //     map.addLayer(
// // //       new L.TileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
// // //         attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
// // //       })
// // //     );
// // //   };

// // //   return (
// // //     <button className="satellite-button" onClick={handleSatelliteClick}>
// // //       Satellite
// // //     </button>
// // //   );
// // // };

// // // const Map = () => {
// // //   return (
// // //     <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100vh', width: '100%' }}>
// // //       <TileLayer
// // //         attribution='&copy; OpenStreetMap contributors'
// // //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// // //       />
// // //       <SatelliteButton />
// // //       <CustomMarker position={[51.505, -0.09]} text="Custom Marker"/>
// // //     </MapContainer>
// // //   );
// // // };

// // // export default Map;


// // import React, { useState, useEffect } from 'react';

// // const Map = () => {
// //   const [position, setPosition] = useState({ lat: 0, lng: 0 });

// //   useEffect(() => {
// //     const getLocation = () => {
// //       if (navigator.geolocation) {
// //         navigator.geolocation.watchPosition(
// //           (position) => {
// //             setPosition({
// //               lat: position.coords.latitude,
// //               lng: position.coords.longitude,
// //             });
// //           },
// //           (error) => {
// //             console.error('Error getting location:', error);
// //           }
// //         );
// //       } else {
// //         console.error('Geolocation is not supported by this browser.');
// //       }
// //     };

// //     getLocation();
// //   }, []);

// //   return (
// //     <div style={{ height: '400px', width: '100%' }}>
// //       <iframe
// //         width="100%"
// //         height="100%"
// //         frameBorder="0"
// //         scrolling="no"
// //         marginHeight="0"
// //         marginWidth="0"
// //         src={`https://www.google.com/maps/embed/v1/view?key=YOUR_GOOGLE_MAPS_API_KEY&center=${position.lat},${position.lng}&zoom=15`}
// //       />
// //     </div>
// //   );
// // };

// // export default Map;
// // src/components/map/Map.jsx


// import { GoogleMap, useLoadScript, Marker, StandaloneSearchBox , Autocomplete  } from "@react-google-maps/api";
// import { useState, useEffect, useCallback, useRef } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLocationArrow, faChevronDown  } from '@fortawesome/free-solid-svg-icons';
// import styles from './styles.module.scss';

// const mapContainerStyle = {
//   width: "100%",
//   height: "90vh",
//   position: 'relative'
// };

// const defaultCenter = {
//   lat: 44.9778,
//   lng: -93.2650,
// };

// const libraries = ['places'];

// const Map = () => {
//   const { isLoaded, loadError } = useLoadScript({
//     id:"320c3cf314c6a3f1",
//     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
//     libraries,
//   });

//   const [center, setCenter] = useState(defaultCenter);
//   const [mapType, setMapType] = useState("roadmap");
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [labelsEnabled, setLabelsEnabled] = useState(false);
//   const [currentLocation, setCurrentLocation] = useState(null);
//   const [inputValue, setInputValue] = useState("");
//   const autocompleteRef = useRef(null);
//   const mapRef = useRef(null);


//   const onLoad = useCallback((map) => {
//     mapRef.current = map;
//   }, []);
  
//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const newCenter = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           };
//           setCenter(newCenter);
//           setCurrentLocation(newCenter);
//           mapRef.current.panTo(newCenter);
//         },
//         () => {
//           console.error("Error getting user location");
//         }
//       );
//     }
//   }, []);

//   const handleMapTypeChange = useCallback((type) => {
//     setMapType(type);
//     setShowDropdown(false); // Hide the dropdown when a map type is selected
//   }, []);

 

 



//   const handleCurrentLocationClick = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const newCenter = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           };
//           setCenter(newCenter);
//           setCurrentLocation(newCenter);
//           mapRef.current.panTo(newCenter);
//         },
//         () => {
//           console.error("Error getting user location");
//         }
//       );
//     }
//   };


// const handlePlaceChanged = () => {
//     if (autocompleteRef.current) {
//       const place = autocompleteRef.current.getPlace();
//       if (place.geometry) {
//         const newCenter = {
//           lat: place.geometry.location.lat(),
//           lng: place.geometry.location.lng(),
//         };
//         setCenter(newCenter);
//         mapRef.current.panTo(newCenter);
//       } else {
//         console.error("No geometry data available for the selected place.");
//       }
//     } else {
//       console.error("Autocomplete ref is not set.");
//     }
//   };
  
//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };


//   if (loadError) return <div>Error loading maps</div>;
//   if (!isLoaded) return <div>Loading...</div>;

//  return (
//     <div className={styles.mapContainer}>
//       <GoogleMap
//         mapContainerStyle={mapContainerStyle}
//         center={center}
//         zoom={8}
//         mapTypeId={mapType}
//         onLoad={onLoad}
//         options={{
//           minZoom: 5, // Set the minimum zoom level
//           maxZoom: 17, // Set the maximum zoom level
//         }}
//       >
//         <Marker position={center} />
//         {currentLocation && (
//           <Marker
//             position={currentLocation}
//             icon={{
//               url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png', // Custom icon for current location
//               scaledSize: new window.google.maps.Size(40, 40)
//             }}
//           />
//         )}
//       </GoogleMap>

   

//       <div className={styles.searchBoxContainer}>
//         <h3>Pickup Location</h3>
//         <Autocomplete
//           onLoad={ref => (autocompleteRef.current = ref)}
//           onPlaceChanged={handlePlaceChanged }
//           fields={["geometry", "name"]}
//         >
//           <div className={styles.searchBox}>
//             <input
//               type="text"
//               placeholder="Search location"
//               className={styles.searchBoxInput}
//               value={inputValue}
//               onChange={handleInputChange}
//             />
//             <FontAwesomeIcon icon={faChevronDown} className={styles.searchBoxIcon} />
//             <button
//           className={styles.currentLocationButton}
//           onClick={handleCurrentLocationClick}
//         >
//           <FontAwesomeIcon icon={faLocationArrow} className={styles.currentLocationIcon} />
//           Current Location
//         </button>
//           </div>
//         </Autocomplete>
//       </div>
//     </div>
//   );
// };

// export default Map;





// import { GoogleMap, useLoadScript, Marker, Autocomplete } from "@react-google-maps/api";
// import { useState, useEffect, useCallback, useRef } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLocationArrow, faChevronDown, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// // import { useHistory } from 'react-router-dom'; // Import useHistory for navigation
// import styles from './styles.module.scss';

// const mapContainerStyle = {
//   width: "100%",
//   height: "90vh",
//   position: 'relative'
// };

// const defaultCenter = {
//   lat: 44.9778,
//   lng: -93.2650,
// };

// const libraries = ['places'];

// const Map = () => {
//   const { isLoaded, loadError } = useLoadScript({
//     id: "320c3cf314c6a3f1",
//     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
//     libraries,
//   });

//   const [center, setCenter] = useState(defaultCenter);
//   const [mapType, setMapType] = useState("roadmap");
//   const [currentLocation, setCurrentLocation] = useState(null);
//   const [pickupInputValue, setPickupInputValue] = useState("");
//   const [dropoffInputValue, setDropoffInputValue] = useState("");
//   const [vinInputValue, setVinInputValue] = useState("");
//   const [state, setState] = useState("pickup");
//   const autocompleteRef = useRef(null);
//   const mapRef = useRef(null);

//   const onLoad = useCallback((map) => {
//     mapRef.current = map;
//   }, []);

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const newCenter = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           };
//           setCenter(newCenter);
//           setCurrentLocation(newCenter);
//           mapRef.current.panTo(newCenter);
//         },
//         () => {
//           console.error("Error getting user location");
//         }
//       );
//     }
//   }, []);

//   const handleCurrentLocationClick = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const newCenter = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           };
//           setCenter(newCenter);
//           setCurrentLocation(newCenter);
//           mapRef.current.panTo(newCenter);
//           setState("dropoff");
//           setDropoffInputValue("");
//         },
//         () => {
//           console.error("Error getting user location");
//         }
//       );
//     }
//   };

//   const handlePlaceChanged = () => {
//     if (autocompleteRef.current) {
//       const place = autocompleteRef.current.getPlace();
//       if (place.geometry) {
//         const newCenter = {
//           lat: place.geometry.location.lat(),
//           lng: place.geometry.location.lng(),
//         };
//         setCenter(newCenter);
//         mapRef.current.panTo(newCenter);
//         setDropoffInputValue(place.name || "");
//         setState("vehicleDetails"); // Automatically change to vehicle details after dropoff location is selected
//       } else {
//         console.error("No geometry data available for the selected place.");
//       }
//     } else {
//       console.error("Autocomplete ref is not set.");
//     }
//   };

//   const handlePickupInputChange = (e) => {
//     setPickupInputValue(e.target.value);
//   };

//   const handleDropoffInputChange = (e) => {
//     setDropoffInputValue(e.target.value);
//   };

//   const handleVinInputChange = (e) => {
//     setVinInputValue(e.target.value);
//   };
  


//   const handleBackClick = () => {
//     if (state === "dropoff") {
//       setState("pickup");
//     } else if (state === "vehicleDetails") {
//       setState("dropoff");
//     }
//   };

//   const handleCheckDetail = () => {
//     if (vinInputValue.trim() !== "") {
//       console.log("Checking details for VIN:", vinInputValue);
//       // Implement your logic here
//     }
//   };

//   if (loadError) return <div>Error loading maps</div>;
//   if (!isLoaded) return <div>Loading...</div>;

//   return (
//     <div className={styles.mapContainer}>
//       <GoogleMap
//         mapContainerStyle={mapContainerStyle}
//         center={center}
//         zoom={8}
//         mapTypeId={mapType}
//         onLoad={onLoad}
//         options={{
//           minZoom: 5,
//           maxZoom: 17,
//         }}
//       >
//         <Marker
//           position={center}
//         />
//         {currentLocation && (
//           <Marker
//             position={currentLocation}
//             icon={{
//               url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
//               scaledSize: new window.google.maps.Size(40, 40)
//             }}
//           />
//         )}
//       </GoogleMap>

//       {state === "pickup" && (
//         <div className={styles.searchBoxContainer}>
//           <h3>Pickup Location</h3>
//           <Autocomplete
//             onLoad={ref => (autocompleteRef.current = ref)}
//             onPlaceChanged={handlePlaceChanged}
//             fields={["geometry", "name"]}
//           >
//             <div className={styles.searchBox}>
//               <input
//                 type="text"
//                 placeholder="Search location"
//                 className={styles.searchBoxInput}
//                 value={pickupInputValue}
//                 onChange={handlePickupInputChange}
//               />
//               <FontAwesomeIcon icon={faChevronDown} className={styles.searchBoxIcon} />
//               <button
//                 className={styles.currentLocationButton}
//                 onClick={handleCurrentLocationClick}
//               >
//                 <FontAwesomeIcon icon={faLocationArrow} className={styles.currentLocationIcon} />
//                 Current Location
//               </button>
//             </div>
//           </Autocomplete>
//         </div>
//       )}

//       {state === "dropoff" && (
//         <div className={styles.dropoffContainer}>
//           <div className={styles.dropoffHeader}>
//             <FontAwesomeIcon 
//               icon={faArrowLeft} 
//               className={styles.backIcon} 
//               onClick={handleBackClick} 
//             />
//             <h3>Dropoff Location</h3>
//           </div>
//           <Autocomplete
//             onLoad={ref => (autocompleteRef.current = ref)}
//             onPlaceChanged={handlePlaceChanged}
//             fields={["geometry", "name"]}
//           >
//             <div className={styles.searchBox}>
//               <input
//                 type="text"
//                 placeholder="Search location"
//                 className={styles.searchBoxInput}
//                 value={dropoffInputValue}
//                 onChange={handleDropoffInputChange}
//               />
//               <FontAwesomeIcon icon={faChevronDown} className={styles.searchBoxIcon} />
//             </div>
//           </Autocomplete>
//         </div>
//       )}

//       {state === "vehicleDetails" && (
//         <div className={styles.vehicleDetailsContainer}>
//           <div className={styles.vehicleDetailsHeader}>
//             <FontAwesomeIcon 
//               icon={faArrowLeft} 
//               className={styles.backIcon} 
//               onClick={handleBackClick} 
//             />
//             <h3>Vehicle Details</h3>
//           </div>
//           <div className={styles.vinInputContainer}>
//             <input
//               type="text"
//               placeholder="Enter VIN number"
//               className={styles.vinInput}
//               value={vinInputValue}
//               onChange={handleVinInputChange}
//             />
//             <button
//               className={styles.checkDetailButton}
//               onClick={handleCheckDetail}
//               disabled={vinInputValue.trim() === ""}
//             >
//               Check Detail
//             </button>
//             <p class="text-gray-600">Manually enter details. <span class="text-blue-500 underline cursor-pointer">Click</span></p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Map;





// components/map/map.jsx

// import { GoogleMap, useLoadScript, Marker, Autocomplete } from "@react-google-maps/api";
// import { useState, useEffect, useCallback, useRef } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLocationArrow, faChevronDown, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// import styles from './styles.module.scss';

// const mapContainerStyle = {
//   width: "100%",
//   height: "90vh",
//   position: 'relative'
// };

// const defaultCenter = {
//   lat: 44.9778,
//   lng: -93.2650,
// };

// const libraries = ['places'];

// const Map = () => {
//   const { isLoaded, loadError } = useLoadScript({
//     id: "320c3cf314c6a3f1",
//     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
//     libraries,
//   });

//   const [center, setCenter] = useState(defaultCenter);
//   const [mapType, setMapType] = useState("roadmap");
//   const [currentLocation, setCurrentLocation] = useState(null);
//   const [pickupInputValue, setPickupInputValue] = useState("");
//   const [dropoffInputValue, setDropoffInputValue] = useState("");
//   const [vinInputValue, setVinInputValue] = useState("");
//   const [state, setState] = useState("pickup");
//   const autocompleteRef = useRef(null);
//   const mapRef = useRef(null);

//   const onLoad = useCallback((map) => {
//     mapRef.current = map;
//   }, []);

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const newCenter = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           };
//           setCenter(newCenter);
//           setCurrentLocation(newCenter);
//           mapRef.current.panTo(newCenter);
//         },
//         () => {
//           console.error("Error getting user location");
//         }
//       );
//     }
//   }, []);

//   const handleCurrentLocationClick = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const newCenter = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           };
//           setCenter(newCenter);
//           setCurrentLocation(newCenter);
//           mapRef.current.panTo(newCenter);

//           if (state === "pickup") {
//             setPickupInputValue("Current Location");
//             setState("dropoff"); // Move to dropoff after setting pickup location
//           } else if (state === "dropoff") {
//             setDropoffInputValue("Current Location");
//             setState("vehicleDetails"); // Move to vehicle details after setting dropoff location
//           }
//         },
//         () => {
//           console.error("Error getting user location");
//         }
//       );
//     }
//   };

//   const handlePlaceChanged = () => {
//     if (autocompleteRef.current) {
//       const place = autocompleteRef.current.getPlace();
//       if (place.geometry) {
//         const newCenter = {
//           lat: place.geometry.location.lat(),
//           lng: place.geometry.location.lng(),
//         };
//         setCenter(newCenter);
//         mapRef.current.panTo(newCenter);

//         if (state === "pickup") {
//           setPickupInputValue(place.name || "");
//           setState("dropoff"); // Move to dropoff after setting pickup location
//         } else if (state === "dropoff") {
//           setDropoffInputValue(place.name || "");
//           setState("vehicleDetails"); // Move to vehicle details after setting dropoff location
//         }
//       } else {
//         console.error("No geometry data available for the selected place.");
//       }
//     } else {
//       console.error("Autocomplete ref is not set.");
//   }
// };

//   const handlePickupInputChange = (e) => {
//     setPickupInputValue(e.target.value);
//   };

//   const handleDropoffInputChange = (e) => {
//     setDropoffInputValue(e.target.value);
//   };

//   const handleVinInputChange = (e) => {
//     setVinInputValue(e.target.value);
//   };

//   const handleBackClick = () => {
//     if (state === "dropoff") {
//       setState("pickup");
//     } else if (state === "vehicleDetails") {
//       setState("dropoff");
//     }
//   };

//   const handleCheckDetail = () => {
//     if (vinInputValue.trim() !== "") {
//       console.log("Checking details for VIN:", vinInputValue);
//       // Implement your logic here
//     }
//   };

//   if (loadError) return <div>Error loading maps</div>;
//   if (!isLoaded) return <div>Loading...</div>;

//   return (
//     <div className={styles.mapContainer}>
//       <GoogleMap
//         mapContainerStyle={mapContainerStyle}
//         center={center}
//         zoom={8}
//         mapTypeId={mapType}
//         onLoad={onLoad}
//         options={{
//           minZoom: 5,
//           maxZoom: 17,
//         }}
//       >
//         <Marker
//           position={center}
//         />
//         {currentLocation && (
//           <Marker
//             position={currentLocation}
//             icon={{
//               url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
//               scaledSize: new window.google.maps.Size(40, 40)
//             }}
//           />
//         )}
//       </GoogleMap>

//       {state === "pickup" && (
//         <div className={styles.searchBoxContainer}>
//           <h3>Pickup Location</h3>
//           <Autocomplete
//             onLoad={ref => (autocompleteRef.current = ref)}
//             onPlaceChanged={handlePlaceChanged}
//             fields={["geometry", "name"]}
//           >
//             <div className={styles.searchBox}>
//               <input
//                 type="text"
//                 placeholder="Search location"
//                 className={styles.searchBoxInput}
//                 value={pickupInputValue}
//                 onChange={handlePickupInputChange}
//               />
//               <FontAwesomeIcon icon={faChevronDown} className={styles.searchBoxIcon} />
//               <button
//                 className={styles.currentLocationButton}
//                 onClick={handleCurrentLocationClick}
//               >
//                 <FontAwesomeIcon icon={faLocationArrow} className={styles.currentLocationIcon} />
//                 Current Location
//               </button>
//             </div>
//           </Autocomplete>
//         </div>
//       )}

//       {state === "dropoff" && (
//         <div className={styles.dropoffContainer}>
//           <div className={styles.dropoffHeader}>
//             <FontAwesomeIcon 
//               icon={faArrowLeft} 
//               className={styles.backIcon} 
//               onClick={handleBackClick} 
//             />
//             <h3>Dropoff Location</h3>
//           </div>
//           <Autocomplete
//             onLoad={ref => (autocompleteRef.current = ref)}
//             onPlaceChanged={handlePlaceChanged}
//             fields={["geometry", "name"]}
//           >
//             <div className={styles.searchBox}>
//               <input
//                 type="text"
//                 placeholder="Search location"
//                 className={styles.searchBoxInput}
//                 value={dropoffInputValue}
//                 onChange={handleDropoffInputChange}
//               />
//               <FontAwesomeIcon icon={faChevronDown} className={styles.searchBoxIcon} />
//             </div>
//           </Autocomplete>
//         </div>
//       )}

//       {state === "vehicleDetails" && (
//         <div className={styles.vehicleDetailsContainer}>
//           <div className={styles.vehicleDetailsHeader}>
//             <FontAwesomeIcon 
//               icon={faArrowLeft} 
//               className={styles.backIcon} 
//               onClick={handleBackClick} 
//             />
//             <h3>Vehicle Details</h3>
//           </div>
//           <div className={styles.vinInputContainer}>
//             <input
//               type="text"
//               placeholder="Enter VIN number"
//               className={styles.vinInput}
//               value={vinInputValue}
//               onChange={handleVinInputChange}
              
//             />

//             <input
//               type="text"
//               placeholder="Model"
//               className={styles.vinInput}
//               // value={vinInputValue}
//               // onChange={handleVinInputChange}
//             />
//             <input
//               type="text"
//               placeholder="Make"
//               className={styles.vinInput}
//               // value={vinInputValue}
//               // onChange={handleVinInputChange}
//             />
//             <input
//               type="text"
//               placeholder="Year"
//               className={styles.vinInput}
//               // value={vinInputValue}
//               // onChange={handleVinInputChange}
//             />
//             <input
//               type="text"
//               placeholder="Car Color"
//               className={styles.vinInput}
//               // value={vinInputValue}
//               // onChange={handleVinInputChange}
//             />
//             <input
//               type="text"
//               placeholder="License Plate Number"
//               className={styles.vinInput}
//               // value={vinInputValue}
//               // onChange={handleVinInputChange}
//             />
//             <button
//               className={styles.checkDetailButton}
//               onClick={handleCheckDetail}
//               disabled={vinInputValue.trim() === ""}
//             >
//               Add Detail
//             </button>
//            {/* <p class="text-gray-600">Manually enter details. <span class="text-blue-500 underline cursor-pointer">Click</span></p> */}

//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Map;








import { GoogleMap, useLoadScript, Marker, Autocomplete } from "@react-google-maps/api";
import { useState, useEffect, useCallback, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faChevronDown,faCrosshairs, faArrowLeft, faCreditCard, faKey,faChevronUp  } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';
import ReCAPTCHA from 'react-google-recaptcha';
import style from '../../app/(web-layout)/service.module.scss'


const mapContainerStyle = {
  width: "100%",
  height: "90vh",
  position: 'relative'
};

const defaultCenter = {
  lat: 44.9778,
  lng: -93.2650,
};

const libraries = ['places'];

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    id: "320c3cf314c6a3f1",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [center, setCenter] = useState(defaultCenter);
  const [mapType, setMapType] = useState("roadmap");
  const [currentLocation, setCurrentLocation] = useState(null);
  const [pickupInputValue, setPickupInputValue] = useState("");
  const [dropoffInputValue, setDropoffInputValue] = useState("");
  const [vinInputValue, setVinInputValue] = useState("");
  const [state, setState] = useState("pickup");
  const [servicePreview, setServicePreview] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const [isVerified, setIsVerified] = useState(false);
  const [address, setAddress] = useState(""); // State to store address
  const [pickupAddress, setPickupAddress] = useState(""); // New state variable
  const [dropoffAddress, setDropoffAddress] = useState(""); // New state variable
  const [showSidebar, setShowSidebar] = useState(false);
  const [atmNumber, setAtmNumber] = useState('');
  const [currentView, setCurrentView] = useState('servicePreview');
  const [blurBackground, setBlurBackground] = useState(false);
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [country, setCountry] = useState('');
  const [errors, setErrors] = useState({});
  const [paymentSubmitted, setPaymentSubmitted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false); // State for expanding/collapsing the search box
  const [isMobile, setIsMobile] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); // State to manage dropdown visibility


    const [vin, setVin] = useState("");
const [model, setModel] = useState("");
const [make, setMake] = useState("");
const [year, setYear] = useState("");
const [color, setColor] = useState("");
const [licensePlate, setLicensePlate] = useState("");

  const autocompleteRef = useRef(null);
  const mapRef = useRef(null);

  const onLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Check screen size on initial render
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newCenter = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setCenter(newCenter);
          setCurrentLocation(newCenter);
          mapRef.current.panTo(newCenter);
        },
        () => {
          console.error("Error getting user location");
        }
      );
    }
  }, []);

  const handleCurrentLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newCenter = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setCenter(newCenter);
          setCurrentLocation(newCenter);
          mapRef.current.panTo(newCenter);

          if (state === "pickup") {
            setPickupInputValue("Current Location");
            setPickupAddress("Current Location"); // Update pickup address
            setState("dropoff"); // Move to dropoff after setting pickup location
          } else if (state === "dropoff") {
            setDropoffInputValue("Current Location");
            setDropoffAddress("Current Location"); // Update dropoff address
            setState("vehicleDetails"); // Move to vehicle details after setting dropoff location
          }
        },
        (error) => {
          // Error callback
          console.error("Error getting user location:", error);
          // Handle error, possibly notify the user
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      // Handle unsupported geolocation scenario
    }
  };

  const handlePlaceChanged = () => {
    if (autocompleteRef.current) {
      const place = autocompleteRef.current.getPlace();
      if (place.geometry) {
        const newCenter = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        };
        setCenter(newCenter);
        mapRef.current.panTo(newCenter);

        if (state === "pickup") {
          setPickupInputValue(place.name || "");
          setPickupAddress(place.name || ""); // Update pickup address
          setState("dropoff"); // Move to dropoff after setting pickup location
        } else if (state === "dropoff") {
          setDropoffInputValue(place.name || "");
          setDropoffAddress(place.name || ""); // Update dropoff address
          setState("vehicleDetails"); // Move to vehicle details after setting dropoff location
        }
      } else {
        console.error("No geometry data available for the selected place.");
      }
    } else {
      console.error("Autocomplete ref is not set.");
    }
  };

  const handleDropdownToggle = () => {
    // Toggle dropdown visibility on icon click
    setShowDropdown(!showDropdown);
  };

  const handlePickupInputChange = (e) => {
    setPickupInputValue(e.target.value);
  };

  const handleDropoffInputChange = (e) => {
    setDropoffInputValue(e.target.value);
  };

  const handleVinInputChange = (e) => {
    setVinInputValue(e.target.value);
  };

  // const handleVinInputChange = (e) => {
  //   setVin(e.target.value);
  // };
  
  const handleModelInputChange = (e) => {
    setModel(e.target.value);
  };
  
  const handleMakeInputChange = (e) => {
    setMake(e.target.value);
  };
  
  const handleYearInputChange = (e) => {
    setYear(e.target.value);
  };
  
  const handleColorInputChange = (e) => {
    setColor(e.target.value);
  };
  
  const handleLicensePlateInputChange = (e) => {
    setLicensePlate(e.target.value);
  };

  // const handleRecaptchaChange = async (value) => {
  //   try {
  //     const response = await fetch('/verify-recaptcha', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ token: value }),
  //     });

  //     const data = await response.json();

  //     if (data.success) {
  //       setIsVerified(true);
  //     } else {
  //       setIsVerified(false);
  //       alert('reCAPTCHA verification failed. Please try again.');
  //     }
  //   } catch (error) {
  //     console.error('Error verifying reCAPTCHA:', error);
  //     setIsVerified(false);
  //   }
  // };


  // const handleSubmit = () => {
  //   if (isVerified) {
  //     // Handle the submit action
  //     console.log('Form submitted');
  //   } else {
  //     alert('Please verify you are not a robot.');
  //   }
  // };

  const handleBackClick = () => {
    if (currentView === 'payment') {
      setCurrentView('servicePreview');
      setShowSidebar(false);
    } else if (servicePreview) {
      setServicePreview(false);
      setState("services");
    } else if (state === "services") {
      setState("vehicleDetails");
    } else if (state === "vehicleDetails") {
      setState("dropoff");
    } else if (state === "dropoff") {
      setState("pickup");
    } else {
      setShowSidebar(false);
    }
  };

  const handleCheckDetail = () => {
    if (vinInputValue.trim() !== "") {
      console.log("Checking details for VIN:", vinInputValue);
      setState("services"); // Move to services after entering vehicle details
    }
  };


  const handleCancelClick = () => {
    setShowSidebar(false);
  };

  const handlePayOrderClick = () => {
    setShowSidebar(true);
    setCurrentView('payment');
  };

  

  const handleAtmNumberChange = (event) => {
    // Remove non-digit characters and limit to 16 characters
    const formattedValue = event.target.value
      .replace(/[^\d]/g, '') // Remove any non-digit characters
      .slice(0, 16); // Limit to 16 characters

    // Insert space after every 4 digits
    let formattedNumber = formattedValue.replace(/(\d{4})(?=\d)/g, '$1 ');

    setAtmNumber(formattedNumber); 
  if (errors.atmNumber) {
    setErrors({ ...errors, atmNumber: '' });
  }
  };


//   const handlePaymentSubmit = () => {
//   if (validateForm()) {
//     // Simulate payment submission logic
//     console.log("Payment details submitted:", { atmNumber, expiryDate, cvc, country });
    
//     // Assuming submission is successful, set state accordingly
//     setTimeout(() => {
//       setPaymentSubmitted(true);
//       // Automatically close sidebar after payment submission
//       setShowSidebar(false);
//     }, 2000); // Simulating a 2 second delay
//   }
// };

const handlePaymentSubmit = () => {
  // Payment submission logic, validation, etc.
  // Example validation:
  if (!atmNumber.trim()) {
    setErrors({ atmNumber: 'ATM Number is required' });
    return;
  }
  if (!expiryDate.trim()) {
    setErrors({ expiryDate: 'Expiry Date is required' });
    return;
  }
  if (!cvc.trim()) {
    setErrors({ cvc: 'CVC is required' });
    return;
  }
  if (!country) {
    setErrors({ country: 'Country is required' });
    return;
  }

  // Simulate successful payment submission
  setTimeout(() => {
    setPaymentSubmitted(true);
    setShowSidebar(false);
    setAtmNumber('');
    setExpiryDate('');
    setCvc('');
    setCountry('');
    setErrors({});
  }, 2000); // Simulating a 2 second delay for API response
};


  // const handlePaymentSubmit = () => {
  //   // Handle payment submission logic here
  //   alert(`ATM Number entered: ${atmNumber}`);
  // };

  const handleConfirmService = () => {
    setServicePreview(true); // Move to service preview state after confirming service
  };


  const handleExpiryDateChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    if (value.length <= 4) {
      const formattedValue = value.length > 2 ? `${value.slice(0, 2)}/${value.slice(2)}` : value;
      setExpiryDate(formattedValue);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!atmNumber) newErrors.atmNumber = 'Required';
    if (!expiryDate) newErrors.expiryDate = 'Required';
    if (!cvc) newErrors.cvc = 'Required';
    if (!country) newErrors.country = 'Required';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  
  const handleCvcChange = (e) => {
    setCvc(e.target.value);
    if (errors.cvc) {
      setErrors({ ...errors, cvc: '' });
    }
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    if (errors.country) {
      setErrors({ ...errors, country: '' });
    }
  };

  
  // const handleServiceSelect = (service) => {
  //   if (selectedServices.includes(service.id)) {
  //     setSelectedServices(selectedServices.filter(item => item !== service.id));
  //   } else {
  //     setSelectedServices([...selectedServices, service.id]);
  //   }
  // };

  const handleServiceSelect = (service) => {
    let updatedServices;
  
    if (selectedServices.includes(service.id)) {
      // If the service is already selected, deselect it
      updatedServices = selectedServices.filter(item => item !== service.id);
    } else {
      // If the service is not selected, select it
      updatedServices = [...selectedServices, service.id];
  
      // Deselect Service A if Service B is selected
      if (service.id === "ServiceB") {
        updatedServices = updatedServices.filter(item => item !== "ServiceA");
      }
  
      // Deselect Service B if any other service is selected
      if (service.id !== "ServiceB" && selectedServices.includes("ServiceB")) {
        updatedServices = updatedServices.filter(item => item !== "ServiceB");
      }
  
      // Deselect Service C if Service A is selected
      if (service.id === "ServiceA" && selectedServices.includes("ServiceC")) {
        updatedServices = updatedServices.filter(item => item !== "ServiceC");
      }
      // Deselect Service C if Service B is selected
      if (service.id === "ServiceB" && selectedServices.includes("ServiceC")) {
        updatedServices = updatedServices.filter(item => item !== "ServiceC");
      }
  
      // Deselect Service A if Service C is selected
      if (service.id === "ServiceC" && selectedServices.includes("ServiceA")) {
        updatedServices = updatedServices.filter(item => item !== "ServiceA");
      }
    }
  
    setSelectedServices(updatedServices);
  };
  
  

  const serviceImages = [
    { id: "ServiceA", src: "/images/TowRequired.png", name: "Tow Required" },
    { id: "ServiceB", src: "/images/Trailer.png", name: "Trailer Transport" },
    { id: "ServiceC", src: "/images/Vehical.png", name: "Vehical Transport" },
    // Add more services as needed
  ];

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className={styles.mapContainer}>
    <div className={`mapContainer ${showSidebar ? styles.blur : ""}`}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={8}
        mapTypeId={mapType}
        onLoad={onLoad}
        options={{
          minZoom: 5,
          maxZoom: 17,
        }}
      >
        <Marker position={center} />
        {currentLocation && (
          <Marker
            position={currentLocation}
            icon={{
              url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
              scaledSize: new window.google.maps.Size(40, 40)
            }}
          />
        )}
      </GoogleMap>

      {state === "pickup" && (
  <div className={`${styles.searchBoxContainer} ${isExpanded ? styles.expanded : ''}`}>
    <div className={styles.searchBoxHeader}>
      {isMobile && (
        <FontAwesomeIcon
          icon={isExpanded ? faChevronDown : faChevronUp}
          className={styles.expandIcon}
          onClick={toggleExpand} // Ensure this only handles expand/collapse action
        />
      )}
      <h3 onClick={toggleExpand}>Pick Up Location</h3>
    </div>
    <div className={styles.searchBox}>
      <Autocomplete
        onLoad={(ref) => (autocompleteRef.current = ref)}
        onPlaceChanged={handlePlaceChanged}
        fields={['geometry', 'name']}
      >
        <div className={styles.InputBox}>
          <input
            type="text"
            placeholder="Search Location"
            className={styles.searchBoxInput}
            value={pickupInputValue}
            onChange={handlePickupInputChange}
            onFocus={handleDropdownToggle} // Show dropdown on input focus
          />
          <div className={styles.iconContainer}>
            <div className={styles.separator}></div>
            <FontAwesomeIcon
              icon={showDropdown ? faChevronUp : faChevronDown}
              className={styles.searchBoxIcon}
              onClick={handleDropdownToggle} // Toggle dropdown on icon click
            />
          </div>
        </div>
      </Autocomplete>
      {showDropdown && (
        <div className={styles.dropdown}>
          <p>No options available</p> {/* Replace with actual dropdown options */}
        </div>
      )}
      <button className={styles.currentLocationButton} onClick={handleCurrentLocationClick}>
        <FontAwesomeIcon icon={faCrosshairs} className={styles.currentLocationIcon} />
        <div className={styles.currentLocationText}>
          <p className={styles.locationName}>Location Name</p>
          <p className={styles.currentLocation}>Current Location</p>
        </div>
      </button>
    </div>
  </div>
)}

{state === "dropoff" && (
  <div className={`${styles.dropoffContainer} ${isExpanded ? styles.expanded : ''}`}>
    <div className={styles.dropoffHeader}>
    {isMobile && (
        <FontAwesomeIcon
          icon={isExpanded ? faChevronDown : faChevronUp}
          className={styles.expandIcon}
          onClick={toggleExpand} // Ensure this only handles expand/collapse action
        />
      )}
      <h3>Dropoff Location</h3>

      <FontAwesomeIcon 
        icon={faArrowLeft} 
        className={styles.backIcon} 
        onClick={(e) => {
          e.stopPropagation(); // Prevent click event from bubbling up
          handleBackClick();
        }} 
      />

    </div>
    <div className={styles.searchBox}>
      <Autocomplete
        onLoad={ref => (autocompleteRef.current = ref)}
        onPlaceChanged={handlePlaceChanged}
        fields={["geometry", "name"]}
      >
        <div className={styles.InputBox}>
          <input
            type="text"
            placeholder="Search location"
            className={styles.searchBoxInput}
            value={dropoffInputValue}
            onChange={handleDropoffInputChange}
          />
          <div className={styles.iconContainer}>
            <div className={styles.separator}></div>
            <FontAwesomeIcon
              icon={faChevronDown}
              className={styles.searchBoxIcon}
              onClick={handleDropdownToggle} // Toggle dropdown on icon click
            />
          </div>
        </div>
      </Autocomplete>
    </div>
  </div>
)}

{state === "vehicleDetails" && (

<div className={`${styles.vehicleDetailsContainer} ${isExpanded ? styles.expanded : ''}`}>
         <div className={styles.vehicleDetailsHeader} onClick={toggleExpand}>
         {isMobile && (
             <FontAwesomeIcon icon={isExpanded ? faChevronDown : faChevronUp} className={styles.expandIcon} />
           )}    
        
          <h3>Vehicle Details</h3>
          <FontAwesomeIcon 
        icon={faArrowLeft} 
        className={styles.backIcon} 
        onClick={(e) => {
          e.stopPropagation(); // Prevent click event from bubbling up
          handleBackClick();
        }} 
      />
            </div>
        <div className={styles.vinInputContainer}>
          <div className={styles.floatingLabelContainer}>
            <input
              type="text"
              id="vin"
              className={styles.vinInput}
              value={vinInputValue}
              onChange={handleVinInputChange}
              placeholder=" " // Add placeholder with a space
            />
            <label htmlFor="vin">Vin Number*</label>
          </div>
          <div className={styles.floatingLabelContainer}>
            <input
              type="text"
              id="model"
              className={styles.vinInput}
              value={model}
              onChange={handleModelInputChange}
              placeholder=" "
            />
            <label htmlFor="model">Model*</label>
          </div>
          <div className={styles.floatingLabelContainer}>
            <input
              type="text"
              id="make"
              className={styles.vinInput}
              value={make}
              onChange={handleMakeInputChange}
              placeholder=" "
            />
            <label htmlFor="make">Make*</label>
          </div>
          <div className={styles.floatingLabelContainer}>
            <input
              type="text"
              id="year"
              className={styles.vinInput}
              value={year}
              onChange={handleYearInputChange}
              placeholder=" "
            />
            <label htmlFor="year">Year*</label>
          </div>
          <div className={styles.floatingLabelContainer}>
            <input
              type="text"
              id="color"
              className={styles.vinInput}
              value={color}
              onChange={handleColorInputChange}
              placeholder=" "
            />
            <label htmlFor="color">Car Color*</label>
          </div>
          <div className={styles.floatingLabelContainer}>
            <input
              type="text"
              id="licensePlate"
              className={styles.vinInput}
              value={licensePlate}
              onChange={handleLicensePlateInputChange}
              placeholder=" "
            />
            <label htmlFor="licensePlate">License Plate Number</label>
          </div>
          <button
            className={styles.checkDetailButton}
            onClick={handleCheckDetail}
            disabled={vinInputValue.trim() === ""}
          >
            Add Detail
          </button>
        </div>
      </div>
    )}

{/* const handleSubmit = (event) => {
        event.preventDefault();
        if (!color.trim()) {
            setError('This field is required');
        } else {
            // Handle form submission
            console.log('Form submitted with color:', color);
        }
    }; */}
     {/* <label htmlFor="color">Car Color</label>
     {error && <div className={styles.error}>{error}</div>} */}

{state === "services" && (

<div className={`${styles.vehicleDetailsContainer} ${isExpanded ? styles.expanded : ''}`}>
         <div className={styles.vehicleDetailsHeader} onClick={toggleExpand}>
         {isMobile && (
             <FontAwesomeIcon icon={isExpanded ? faChevronDown : faChevronUp} className={styles.expandIcon} />
           )}     
           
      <h3>Select Services</h3>
      <FontAwesomeIcon 
        icon={faArrowLeft} 
        className={styles.backIcon} 
        onClick={(e) => {
          e.stopPropagation(); // Prevent click event from bubbling up
          handleBackClick();
        }} 
      />
      </div>
    <div className={styles.servicesContent}>
      <div className={styles.servicesList}>
        {serviceImages.map(service => (
          <div key={service.id} className={styles.serviceContainer} onClick={() => handleServiceSelect(service)}>
            <img
              src={service.src}
              alt={service.name}
              className={`${styles.serviceImage} ${selectedServices.includes(service.id) ? styles.selected : ''}`}
            />
            <div className={styles.serviceName}>{service.name}</div>
          </div>
        ))}
      </div>
      <button
        className={styles.checkDetailButton}
        onClick={handleConfirmService} // Use the new handler here
        disabled={selectedServices.length === 0} // Disable button if no service is selected
      >
        Confirm Service
      </button>
    </div>
  </div>
)}


{servicePreview && (

<div className={`${styles.vehicleDetailsContainer} ${isExpanded ? styles.expanded : ''}`}>
         <div className={styles.vehicleDetailsHeader} onClick={toggleExpand}>
         {isMobile && (
             <FontAwesomeIcon icon={isExpanded ? faChevronDown : faChevronUp} className={styles.expandIcon} />
           )}     
           {/* <FontAwesomeIcon 
              icon={faArrowLeft} 
              className={styles.backIcon} 
              onClick={handleBackClick} 
            /> */}
      <h3>Service Preview</h3>
      <FontAwesomeIcon 
        icon={faArrowLeft} 
        className={styles.backIcon} 
        onClick={(e) => {
          e.stopPropagation(); // Prevent click event from bubbling up
          handleBackClick();
        }} 
      />
      </div>
    <div className={styles.servicesContent}>
      <div className={styles.serviceList}>
        {selectedServices.map(serviceId => {
          const service = serviceImages.find(s => s.id === serviceId);
          return (
            <div key={serviceId} className={styles.servicePreviewItem}>
              <img src={service.src} alt={service.name} className={styles.servicePreviewImage} />
              <div className={styles.Previewservicename}>{service.name}</div>
            </div>
          );
        })}
      </div>
    <div className={styles.locationDetails}>
    <h5 style={{ fontSize: '13px', marginLeft:'17px', fontWeight:'600' }}>Location:</h5>
        <div className={styles.locationInfo}>
          <p className={styles.addressItem}>
            <span className={styles.addressLabel}> Address:</span>
            <span className={styles.servicedropoffAddress}>{dropoffAddress}</span>
          </p>
          <p className={styles.addressItem}>
            {/* <span className={styles.addressLabel}>Pickup Address:</span> {pickupAddress} */}
            <span className={styles.addressLabel}>Lat, Lng</span>
            <span className={styles.servicedropoffAddress}>    24.9167872, 67.0171136   </span>
          </p>
        </div>
      </div>
      <div className={styles.vehicleDetails}>
      <h5 style={{ fontSize: '13px', marginLeft:'17px', fontWeight:'600' }}>Vehicle Details:</h5>

        <div className={styles.detailsContainer}>
          
            <p className={styles.detailsItem}>
            <span className={styles.detailsLabel}>Make:</span>
            <span className={styles.servicedropoffAddress}>{make}</span>
            </p>
            <p className={styles.detailsItem}>
              <span className={styles.detailsLabel}>Model:</span> 
              <span className={styles.servicedropoffAddress}>{model}</span>
            </p>
            <p className={styles.detailsItem}>
              <span className={styles.detailsLabel}>Year:</span> 
              <span className={styles.servicedropoffAddress}>{year}</span>
              </p>
            <p className={styles.detailsItem}>
              <span className={styles.detailsLabel}>VIN:</span> 
              <span className={styles.servicedropoffAddress}>{vin}</span>
            </p>
            <p className={styles.detailsItem}>
              <span className={styles.detailsLabel}>Color:</span> 
              <span className={styles.servicedropoffAddress}>{color}</span>
            </p>
            <p className={styles.detailsItem}>
              <span className={styles.detailsLabel}>License Plate Number:</span>
            <span className={styles.servicedropoffAddress}>{licensePlate}</span>
              </p>
        </div>
      </div>
      <div className={styles.priceDetails}>
      <h5 style={{ fontSize: '15px', marginLeft:'17px', fontWeight:'600' }}>Price Details:</h5>
        <div className={styles.priceContainer}>
            <p className={styles.priceItem}>
              <span className={styles.PriceLabel}>Service charges: </span>
              <span className={styles.servicedropoffAddress}>20.00</span>
             </p>
            <p className={styles.priceItem}>
              <span className={styles.PriceLabel}>TAX: </span>
            <span className={styles.servicedropoffAddress}>20.00</span>
            </p>
            <p className={styles.priceItem}>
              <span className={styles.PriceLabel}>Additional charges: </span>
            <span className={styles.servicedropoffAddress}>20.00</span>
            </p>
            <p className={styles.priceItem}><span className={styles.PriceLabel}>Transaction fees: </span> 
            <span className={styles.servicedropoffAddress}>20.00</span>
            </p>
            <p className={styles.priceItem}>
              <span className={styles.PriceLabel}>Total: </span> 
            <span className={styles.servicedropoffAddress}>20.00</span>
            </p>
        </div>
      </div>
       {/* <ReCAPTCHA
        sitekey="YOUR_SITE_KEY"
        onChange={handleRecaptchaChange}
      /> */}



       <div className={styles.orderContainer}>
        <div className={styles.orderDetails}>
          {/* <h3>Order Details</h3> */}
          {/* Display order details here */}
          <button onClick={handlePayOrderClick} className={styles.submitButton}>
            Pay Order
          </button>
        </div>
      </div>
    </div>
  </div>
)}
</div>

{showSidebar && (
      <div className={`${styles.sidebar} ${showSidebar ? styles.sidebarOpen : ''}`}>
          {/* <div className={styles.backButton} onClick={handleBackClick}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </div> */}
          {currentView === 'payment' && (
            <div className={styles.paymentContainer}>
            {/* <h3>Payment Details</h3> */}
            <div className={styles.inputGroup}>
                <label htmlFor="atmNumber">ATM Number</label>
                <div className={styles.inputWithIcon}>
                  <input type="text" id="atmNumber" value={atmNumber} onChange={handleAtmNumberChange} placeholder="1234 1234 1234 1234" className={styles.expiryDateInput} />
                  <FontAwesomeIcon icon={faCreditCard} className={styles.icon} />
                  {errors.atmNumber && <span className={styles.errorMessage}>{errors.atmNumber}</span>}
                </div>
              </div>
              <div className={styles.yeardate}>
            <div className={styles.inputGroups}>
              <label htmlFor="expiryDate">Expiry Date</label>
              <input type="text" id="expiryDate" value={expiryDate} onChange={handleExpiryDateChange} placeholder="MM/YY" />
              {errors.expiryDate && <span className={styles.errorMessage}>{errors.expiryDate}</span>}
            </div>
            <div className={styles.inputGroups}>
                <label htmlFor="cvc">CVC</label>
                <div className={styles.inputWithIcon}>
                  <input type="text" id="cvc" value={cvc} onChange={handleCvcChange} placeholder="CVC"/>
                  <FontAwesomeIcon icon={faKey} className={styles.icon} />
                
                </div>
                {errors.cvc && <span className={styles.errorMessage}>{errors.cvc}</span>}
              </div>
              </div>
            <div className={styles.inputGroup}>
              <label htmlFor="country">Country</label>
              <select id="country" value={country} onChange={handleCountryChange}>
                <option value="">Select Country</option>
                <option value="us">United States</option>
                <option value="ca">Canada</option>
                <option value="uk">United Kingdom</option>
                {/* Add more country options as needed */}
              </select>
              {errors.country && <span className={styles.errorMessage}>{errors.country}</span>}
            </div>
            <p>By providing your card information, you allow Protowcall Inc. 
              to charge your card for future payments in accordance with their terms.</p>
              <div className={styles.buttonGroup}>
              <button onClick={handleCancelClick} className={styles.cancelButton}>CANCEL</button>
              <button onClick={handlePaymentSubmit} className={styles.paybutton}>
                PAY
                </button>
              </div>
          

          </div>
        )}
        {paymentSubmitted && (
        <div className={styles.successMessage}>
          <p>Payment submitted successfully!</p>
          {/* Add additional content or navigation options */}
        </div>
      )}
        </div>
      )}
       
    </div>
  );
};

export default Map;






































































// import { GoogleMap, useLoadScript, Marker, Autocomplete } from "@react-google-maps/api";
// import { useState, useEffect, useCallback, useRef } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLocationArrow, faChevronDown, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// import styles from './styles.module.scss';

// const mapContainerStyle = {
//   width: "100%",
//   height: "90vh",
//   position: 'relative'
// };

// const defaultCenter = {
//   lat: 44.9778,
//   lng: -93.2650,
// };

// const libraries = ['places'];

// const Map = () => {
//   const { isLoaded, loadError } = useLoadScript({
//     id: "320c3cf314c6a3f1",
//     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
//     libraries,
//   });

//   const [center, setCenter] = useState(defaultCenter);
//   const [mapType, setMapType] = useState("roadmap");
//   const [currentLocation, setCurrentLocation] = useState(null);
//   const [pickupInputValue, setPickupInputValue] = useState("");
//   const [dropoffInputValue, setDropoffInputValue] = useState("");
//   const [vinInputValue, setVinInputValue] = useState("");
//   const [state, setState] = useState("pickup");
//   const [selectedServices, setSelectedServices] = useState([]);
//   const autocompleteRef = useRef(null);
//   const mapRef = useRef(null);

//   const onLoad = useCallback((map) => {
//     mapRef.current = map;
//   }, []);

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const newCenter = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           };
//           setCenter(newCenter);
//           setCurrentLocation(newCenter);
//           mapRef.current.panTo(newCenter);
//         },
//         () => {
//           console.error("Error getting user location");
//         }
//       );
//     }
//   }, []);

//   const handleCurrentLocationClick = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const newCenter = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           };
//           setCenter(newCenter);
//           setCurrentLocation(newCenter);
//           mapRef.current.panTo(newCenter);

//           if (state === "pickup") {
//             setPickupInputValue("Current Location");
//             setState("dropoff"); // Move to dropoff after setting pickup location
//           } else if (state === "dropoff") {
//             setDropoffInputValue("Current Location");
//             setState("vehicleDetails"); // Move to vehicle details after setting dropoff location
//           }
//         },
//         () => {
//           console.error("Error getting user location");
//         }
//       );
//     }
//   };

//   const handlePlaceChanged = () => {
//     if (autocompleteRef.current) {
//       const place = autocompleteRef.current.getPlace();
//       if (place.geometry) {
//         const newCenter = {
//           lat: place.geometry.location.lat(),
//           lng: place.geometry.location.lng(),
//         };
//         setCenter(newCenter);
//         mapRef.current.panTo(newCenter);

//         if (state === "pickup") {
//           setPickupInputValue(place.name || "");
//           setState("dropoff"); // Move to dropoff after setting pickup location
//         } else if (state === "dropoff") {
//           setDropoffInputValue(place.name || "");
//           setState("vehicleDetails"); // Move to vehicle details after setting dropoff location
//         }
//       } else {
//         console.error("No geometry data available for the selected place.");
//       }
//     } else {
//       console.error("Autocomplete ref is not set.");
//     }
//   };

//   const handlePickupInputChange = (e) => {
//     setPickupInputValue(e.target.value);
//   };

//   const handleDropoffInputChange = (e) => {
//     setDropoffInputValue(e.target.value);
//   };

//   const handleVinInputChange = (e) => {
//     setVinInputValue(e.target.value);
//   };

//   const handleBackClick = () => {
//     if (state === "dropoff") {
//       setState("pickup");
//     } else if (state === "vehicleDetails") {
//       setState("dropoff");
//     } else if (state === "services") {
//       setState("vehicleDetails");
//     } else if (state === "servicePreview") {
//       setState("services");
//     }
//   };

//   const handleCheckDetail = () => {
//     if (vinInputValue.trim() !== "") {
//       setState("services"); // Move to services after entering vehicle details
//     }
//   };

//   // const handleServiceSelect = (service) => {
//   //   if (selectedServices.includes(service.id)) {
//   //     setSelectedServices(selectedServices.filter(item => item !== service.id));
//   //   } else {
//   //     setSelectedServices([...selectedServices, service.id]);
//   //   }
//   // };

//   const handleServiceSelect = (service) => {
//   if (selectedServices.includes(service.id)) {
//     setSelectedServices(selectedServices.filter(item => item !== service.id));
//   } else {
//     setSelectedServices([...selectedServices, service.id]);
//   }
// };

//   const handleConfirmServices = () => {
//     setState("servicePreview");
//   };

//   if (loadError) return <div>Error loading maps</div>;
//   if (!isLoaded) return <div>Loading...</div>;

//   const serviceImages = [
//     { id: 'serviceA', name: 'Service A', src: '/images/logo.png' },
//     { id: 'serviceB', name: 'Service B', src: '/images/logo.png' },
//     // Add more services as needed
//   ];

//   return (
//     <div className={styles.mapContainer}>
//       <GoogleMap
//         mapContainerStyle={mapContainerStyle}
//         center={center}
//         zoom={8}
//         mapTypeId={mapType}
//         onLoad={onLoad}
//         options={{
//           minZoom: 5,
//           maxZoom: 17,
//         }}
//       >
//         <Marker
//           position={center}
//         />
//         {currentLocation && (
//           <Marker
//             position={currentLocation}
//             icon={{
//               url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
//               scaledSize: new window.google.maps.Size(40, 40)
//             }}
//           />
//         )}
//       </GoogleMap>

//       {state === "pickup" && (
//         <div className={styles.searchBoxContainer}>
//           <h3>Pickup Location</h3>
//           <Autocomplete
//             onLoad={ref => (autocompleteRef.current = ref)}
//             onPlaceChanged={handlePlaceChanged}
//             fields={["geometry", "name"]}
//           >
//             <div className={styles.searchBox}>
//               <input
//                 type="text"
//                 placeholder="Search location"
//                 className={styles.searchBoxInput}
//                 value={pickupInputValue}
//                 onChange={handlePickupInputChange}
//               />
//               <FontAwesomeIcon icon={faChevronDown} className={styles.searchBoxIcon} />
//               <button
//                 className={styles.currentLocationButton}
//                 onClick={handleCurrentLocationClick}
//               >
//                 <FontAwesomeIcon icon={faLocationArrow} className={styles.currentLocationIcon} />
//                 Current Location
//               </button>
//             </div>
//           </Autocomplete>
//         </div>
//       )}

//       {state === "dropoff" && (
//         <div className={styles.dropoffContainer}>
//           <div className={styles.dropoffHeader}>
//             <FontAwesomeIcon 
//               icon={faArrowLeft} 
//               className={styles.backIcon} 
//               onClick={handleBackClick} 
//             />
//             <h3>Dropoff Location</h3>
//           </div>
//           <Autocomplete
//             onLoad={ref => (autocompleteRef.current = ref)}
//             onPlaceChanged={handlePlaceChanged}
//             fields={["geometry", "name"]}
//           >
//             <div className={styles.searchBox}>
//               <input
//                 type="text"
//                 placeholder="Search location"
//                 className={styles.searchBoxInput}
//                 value={dropoffInputValue}
//                 onChange={handleDropoffInputChange}
//               />
//               <FontAwesomeIcon icon={faChevronDown} className={styles.searchBoxIcon} />
//             </div>
//           </Autocomplete>
//         </div>
//       )}

//       {state === "vehicleDetails" && (
//         <div className={styles.vehicleDetailsContainer}>
//           <div className={styles.vehicleDetailsHeader}>
//             <FontAwesomeIcon 
//               icon={faArrowLeft} 
//               className={styles.backIcon} 
//               onClick={handleBackClick} 
//             />
//             <h3>Vehicle Details</h3>
//           </div>
//           <div className={styles.vinInputContainer}>
//             <input
//               type="text"
//               placeholder="Enter VIN number"
//               className={styles.vinInput}
//               value={vinInputValue}
//               onChange={handleVinInputChange}
//             />
//             <input
//               type="text"
//               placeholder="Model"
//               className={styles.vinInput}
//             />
//             <input
//               type="text"
//               placeholder="Make"
//               className={styles.vinInput}
//             />
//             <input
//               type="text"
//               placeholder="Year"
//               className={styles.vinInput}
//             />
//             <input
//               type="text"
//               placeholder="Car Color"
//               className={styles.vinInput}
//             />
//             <input
//               type="text"
//               placeholder="License Plate Number"
//               className={styles.vinInput}
//             />
//             <button
//               className={styles.checkDetailButton}
//               onClick={handleCheckDetail}
//               disabled={vinInputValue.trim() === ""}
//             >
//               Add Detail
//             </button>
//           </div>
//         </div>
//       )}
// {state === "services" && (
//   <div className={styles.vehicleDetailsContainer}>
//     <div className={styles.vehicleDetailsHeader}>
//       <FontAwesomeIcon 
//         icon={faArrowLeft} 
//         className={styles.backIcon} 
//         onClick={handleBackClick} 
//       />
//       <h3>Select Services</h3>
//     </div>
//     <div className={styles.servicesList}>
//       {serviceImages.map(service => (
//         <div 
//           key={service.id} 
//           className={`${styles.serviceContainer} ${selectedServices.includes(service.id) ? styles.selected : ''}`} 
//           onClick={() => handleServiceSelect(service)}
//         >
//           <img
//             src={service.src}
//             alt={service.name}
//             className={styles.serviceImage}
//           />
//           <div className={styles.serviceName}>{service.name}</div>
//         </div>
//       ))}
//     </div>
//     <button
//       className={styles.checkDetailButton}
//       onClick={handleCheckDetail}
//       disabled={vinInputValue.trim() === ""}
//     >
//       Confirm Service
//     </button>
//   </div>
// )}


//       {state === "servicePreview" && (
//         <div className={styles.vehicleDetailsContainer}>
//           <div className={styles.vehicleDetailsHeader}>
//             <FontAwesomeIcon 
//               icon={faArrowLeft} 
//               className={styles.backIcon} 
//               onClick={handleBackClick} 
//             />
//             <h3>Service Preview</h3>
//           </div>
//           <div className={styles.servicesList}>
//             {serviceImages.filter(service => selectedServices.includes(service.id)).map(service => (
//               <div key={service.id} className={styles.serviceContainer}>
//                 <img
//                   src={service.src}
//                   alt={service.name}
//                   className={styles.serviceImage}
//                 />
//                 <div className={styles.serviceName}>{service.name}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Map;





// import { GoogleMap, useLoadScript, Marker, Autocomplete } from "@react-google-maps/api";
// import { useState, useEffect, useCallback, useRef } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLocationArrow, faChevronDown, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// import styles from './styles.module.scss';

// const mapContainerStyle = {
//   width: "100%",
//   height: "90vh",
//   position: 'relative'
// };

// const defaultCenter = {
//   lat: 44.9778,
//   lng: -93.2650,
// };

// const libraries = ['places'];

// const Map = () => {
//   const { isLoaded, loadError } = useLoadScript({
//     id: "320c3cf314c6a3f1",
//     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
//     libraries,
//   });

//   const [center, setCenter] = useState(defaultCenter);
//   const [mapType, setMapType] = useState("roadmap");
//   const [currentLocation, setCurrentLocation] = useState(null);
//   const [pickupInputValue, setPickupInputValue] = useState("");
//   const [dropoffInputValue, setDropoffInputValue] = useState("");
//   const [vinInputValue, setVinInputValue] = useState("");
//   const [state, setState] = useState("pickup");
//   const [selectedServices, setSelectedServices] = useState([]);
//   const autocompleteRef = useRef(null);
//   const mapRef = useRef(null);
//     // const [selectedServices, setSelectedServices] = useState([]);


//   const onLoad = useCallback((map) => {
//     mapRef.current = map;
//   }, []);

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const newCenter = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           };
//           setCenter(newCenter);
//           setCurrentLocation(newCenter);
//           mapRef.current.panTo(newCenter);
//         },
//         () => {
//           console.error("Error getting user location");
//         }
//       );
//     }
//   }, []);

//   const handleCurrentLocationClick = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const newCenter = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           };
//           setCenter(newCenter);
//           setCurrentLocation(newCenter);
//           mapRef.current.panTo(newCenter);

//           if (state === "pickup") {
//             setPickupInputValue("Current Location");
//             setState("dropoff"); // Move to dropoff after setting pickup location
//           } else if (state === "dropoff") {
//             setDropoffInputValue("Current Location");
//             setState("vehicleDetails"); // Move to vehicle details after setting dropoff location
//           }
//         },
//         () => {
//           console.error("Error getting user location");
//         }
//       );
//     }
//   };

//   const handlePlaceChanged = () => {
//     if (autocompleteRef.current) {
//       const place = autocompleteRef.current.getPlace();
//       if (place.geometry) {
//         const newCenter = {
//           lat: place.geometry.location.lat(),
//           lng: place.geometry.location.lng(),
//         };
//         setCenter(newCenter);
//         mapRef.current.panTo(newCenter);

//         if (state === "pickup") {
//           setPickupInputValue(place.name || "");
//           setState("dropoff"); // Move to dropoff after setting pickup location
//         } else if (state === "dropoff") {
//           setDropoffInputValue(place.name || "");
//           setState("vehicleDetails"); // Move to vehicle details after setting dropoff location
//         }
//       } else {
//         console.error("No geometry data available for the selected place.");
//       }
//     } else {
//       console.error("Autocomplete ref is not set.");
//     }
//   };

//   const handlePickupInputChange = (e) => {
//     setPickupInputValue(e.target.value);
//   };

//   const handleDropoffInputChange = (e) => {
//     setDropoffInputValue(e.target.value);
//   };

//   const handleVinInputChange = (e) => {
//     setVinInputValue(e.target.value);
//   };

//   const handleBackClick = () => {
//     if (state === "dropoff") {
//       setState("pickup");
//     } else if (state === "vehicleDetails") {
//       setState("dropoff");
//     } else if (state === "services" || state === "servicePreview") {
//       setState("services");
//     }
//   };

//   const handleCheckDetail = () => {
//     if (vinInputValue.trim() !== "") {
//       setState("services"); // Move to services after entering vehicle details
//     }
//   };

//   // const handleServiceSelect = (service) => {
//   //   setSelectedServices(prevSelectedServices => {
//   //     if (prevSelectedServices.includes(service.id)) {
//   //       // Remove the service if it is already selected
//   //       return prevSelectedServices.filter(item => item !== service.id);
//   //     } else {
//   //       // Add the service if it is not selected
//   //       return [...prevSelectedServices, service.id];
//   //     }
//   //   });
//   // };

 
  
//     const handleServiceSelect = (service) => {
//       if (selectedServices.some(s => s.id === service.id)) {
//         setSelectedServices(selectedServices.filter(s => s.id !== service.id));
//       } else {
//         setSelectedServices([...selectedServices, service]);
//       }
//     };
  


    
//   const handleConfirmServices = () => {
//     setState("servicePreview");
//   };

//   useEffect(() => {
//     console.log('Selected Services (after update):', selectedServices);
//   }, [selectedServices]);


//   if (loadError) return <div>Error loading maps</div>;
//   if (!isLoaded) return <div>Loading...</div>;

//   // const serviceImages = [
//     // { id: 'serviceA', name: 'Service A', src: '/images/logo.jpg' },
//     // { id: 'serviceB', name: 'Service B', src: '/images/logo.jpg' },
//     // { id: 'serviceC', name: 'Service C', src: '/images/logo.jpg' },
//     // { id: 'serviceD', name: 'Service D', src: '/images/logo.jpg' },
//     // Add more services as needed
//     const serviceImages = [
//       { id: 'serviceA', name: 'Service A', src: '/images/logo.jpg' },
//       { id: 'serviceB', name: 'Service B', src: '/images/logo.jpg' },
//       // Add more services as needed
//     ];
//   // ];

//   return (
//     <div className={styles.mapContainer}>
//       <GoogleMap
//         mapContainerStyle={mapContainerStyle}
//         center={center}
//         zoom={8}
//         mapTypeId={mapType}
//         onLoad={onLoad}
//         options={{
//           minZoom: 5,
//           maxZoom: 17,
//         }}
//       >
//         <Marker
//           position={center}
//         />
//         {currentLocation && (
//           <Marker
//             position={currentLocation}
//             icon={{
//               url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
//               scaledSize: new window.google.maps.Size(40, 40)
//             }}
//           />
//         )}
//       </GoogleMap>

//       {state === "pickup" && (
//         <div className={styles.searchBoxContainer}>
//           <h3>Pickup Location</h3>
//           <Autocomplete
//             onLoad={ref => (autocompleteRef.current = ref)}
//             onPlaceChanged={handlePlaceChanged}
//             fields={["geometry", "name"]}
//           >
//             <div className={styles.searchBox}>
//               <input
//                 type="text"
//                 placeholder="Search location"
//                 className={styles.searchBoxInput}
//                 value={pickupInputValue}
//                 onChange={handlePickupInputChange}
//               />
//               <FontAwesomeIcon icon={faChevronDown} className={styles.searchBoxIcon} />
//               <button
//                 className={styles.currentLocationButton}
//                 onClick={handleCurrentLocationClick}
//               >
//                 <FontAwesomeIcon icon={faLocationArrow} className={styles.currentLocationIcon} />
//                 Current Location
//               </button>
//             </div>
//           </Autocomplete>
//         </div>
//       )}

//       {state === "dropoff" && (
//         <div className={styles.dropoffContainer}>
//           <div className={styles.dropoffHeader}>
//             <FontAwesomeIcon 
//               icon={faArrowLeft} 
//               className={styles.backIcon} 
//               onClick={handleBackClick} 
//             />
//             <h3>Dropoff Location</h3>
//           </div>
//           <Autocomplete
//             onLoad={ref => (autocompleteRef.current = ref)}
//             onPlaceChanged={handlePlaceChanged}
//             fields={["geometry", "name"]}
//           >
//             <div className={styles.searchBox}>
//               <input
//                 type="text"
//                 placeholder="Search location"
//                 className={styles.searchBoxInput}
//                 value={dropoffInputValue}
//                 onChange={handleDropoffInputChange}
//               />
//               <FontAwesomeIcon icon={faChevronDown} className={styles.searchBoxIcon} />
//             </div>
//           </Autocomplete>
//         </div>
//       )}

//       {state === "vehicleDetails" && (
//         <div className={styles.vehicleDetailsContainer}>
//           <div className={styles.vehicleDetailsHeader}>
//             <FontAwesomeIcon 
//               icon={faArrowLeft} 
//               className={styles.backIcon} 
//               onClick={handleBackClick} 
//             />
//             <h3>Vehicle Details</h3>
//           </div>
//           <div className={styles.vinInputContainer}>
//             <input
//               type="text"
//               placeholder="Enter VIN number"
//               className={styles.vinInput}
//               value={vinInputValue}
//               onChange={handleVinInputChange}
//             />
//             <input
//               type="text"
//               placeholder="Model"
//               className={styles.vinInput}
//               value={vinInputValue}
//               onChange={handleVinInputChange}
//             />
//               <input
//                 type="text"
//                 placeholder="Make"
//                 className={styles.vinInput}
//               />
//               <input
//                 type="text"
//                 placeholder="Year"
//                 className={styles.vinInput}
//               />
//               <input
//                 type="text"
//                 placeholder="Car Color"
//                 className={styles.vinInput}
//               />
//               <input
//                 type="text"
//                 placeholder="License Plate Number"
//                 className={styles.vinInput}
//               />
//               <button
//                 className={styles.checkDetailButton}
//                 onClick={handleCheckDetail}
//                 disabled={vinInputValue.trim() === ""}
//               >
//                 Add Detail
//               </button>
//             </div>
//           </div>
//         )}
  
//         {state === "services" && (
//           <div className={styles.vehicleDetailsContainer}>
//             <div className={styles.vehicleDetailsHeader}>
//               <FontAwesomeIcon
//                 icon={faArrowLeft}
//                 className={styles.backIcon}
//                 onClick={handleBackClick}
//               />
//               <h3>Select Services</h3>
//             </div>
//             <div className={styles.servicesList}>
//               {serviceImages.map(service => (
//                 <div
//                   key={service.id}
//                   className={`${styles.serviceContainer} ${selectedServices.includes(service.id) ? styles.selected : ''}`}
//                   onClick={() => handleServiceSelect(service)}
//                 >
//                   <img
//                     src={service.src}
//                     alt={service.name}
//                     className={styles.serviceImage}
//                   />
//                   <div className={styles.serviceName}>{service.name}</div>
//                 </div>
//               ))}
//             </div>
//             <button
//               className={styles.confirmButton}
//               onClick={handleConfirmServices}
//               disabled={selectedServices.length === 0}
//             >
//               Confirm Service
//             </button>
//           </div>
//         )}
        
//         {state === "servicePreview" && (
//   <div className={styles.vehicleDetailsContainer}>
//     <div className={styles.vehicleDetailsHeader}>
//       <FontAwesomeIcon 
//         icon={faArrowLeft} 
//         className={styles.backIcon} 
//         onClick={handleBackClick} 
//       />
//       <h3>Service Preview</h3>
//     </div>
//     <div className={styles.servicesList}>
//       {selectedServices.map(service => (
//         <div key={service.id} className={styles.serviceContainer}>
//           <img
//             src={service.src}
//             alt={service.name}
//             className={styles.serviceImage}
//           />
//           <div className={styles.serviceName}>{service.name}</div>
//         </div>
//       ))}
//     </div>
//   </div>
// )}
//       </div>
//     );
//   };
  
//   export default Map;
  





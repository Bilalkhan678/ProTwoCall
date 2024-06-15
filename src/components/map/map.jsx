

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





import { GoogleMap, useLoadScript, Marker, Autocomplete } from "@react-google-maps/api";
import { useState, useEffect, useCallback, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faChevronDown, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';

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
  const autocompleteRef = useRef(null);
  const mapRef = useRef(null);

  const onLoad = useCallback((map) => {
    mapRef.current = map;
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
          setState("dropoff");
          setDropoffInputValue("");
        },
        () => {
          console.error("Error getting user location");
        }
      );
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
        setDropoffInputValue(place.name || "");
        setState("vehicleDetails"); // Automatically change to vehicle details after dropoff location is selected
      } else {
        console.error("No geometry data available for the selected place.");
      }
    } else {
      console.error("Autocomplete ref is not set.");
    }
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

  const handleBackClick = () => {
    if (state === "dropoff") {
      setState("pickup");
    } else if (state === "vehicleDetails") {
      setState("dropoff");
    }
  };

  const handleCheckDetail = () => {
    if (vinInputValue.trim() !== "") {
      console.log("Checking details for VIN:", vinInputValue);
      // Implement your logic here
    }
  };

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className={styles.mapContainer}>
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
        <Marker
          position={center}
        />
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
        <div className={styles.searchBoxContainer}>
          <h3>Pickup Location</h3>
          <Autocomplete
            onLoad={ref => (autocompleteRef.current = ref)}
            onPlaceChanged={handlePlaceChanged}
            fields={["geometry", "name"]}
          >
            <div className={styles.searchBox}>
              <input
                type="text"
                placeholder="Search location"
                className={styles.searchBoxInput}
                value={pickupInputValue}
                onChange={handlePickupInputChange}
              />
              <FontAwesomeIcon icon={faChevronDown} className={styles.searchBoxIcon} />
              <button
                className={styles.currentLocationButton}
                onClick={handleCurrentLocationClick}
              >
                <FontAwesomeIcon icon={faLocationArrow} className={styles.currentLocationIcon} />
                Current Location
              </button>
            </div>
          </Autocomplete>
        </div>
      )}

      {state === "dropoff" && (
        <div className={styles.dropoffContainer}>
          <div className={styles.dropoffHeader}>
            <FontAwesomeIcon 
              icon={faArrowLeft} 
              className={styles.backIcon} 
              onClick={handleBackClick} 
            />
            <h3>Dropoff Location</h3>
          </div>
          <Autocomplete
            onLoad={ref => (autocompleteRef.current = ref)}
            onPlaceChanged={handlePlaceChanged}
            fields={["geometry", "name"]}
          >
            <div className={styles.searchBox}>
              <input
                type="text"
                placeholder="Search location"
                className={styles.searchBoxInput}
                value={dropoffInputValue}
                onChange={handleDropoffInputChange}
              />
              <FontAwesomeIcon icon={faChevronDown} className={styles.searchBoxIcon} />
            </div>
          </Autocomplete>
        </div>
      )}

      {state === "vehicleDetails" && (
        <div className={styles.vehicleDetailsContainer}>
          <div className={styles.vehicleDetailsHeader}>
            <FontAwesomeIcon 
              icon={faArrowLeft} 
              className={styles.backIcon} 
              onClick={handleBackClick} 
            />
            <h3>Vehicle Details</h3>
          </div>
          <div className={styles.vinInputContainer}>
            <input
              type="text"
              placeholder="Enter VIN number"
              className={styles.vinInput}
              value={vinInputValue}
              onChange={handleVinInputChange}
            />
            <button
              className={styles.checkDetailButton}
              onClick={handleCheckDetail}
              disabled={vinInputValue.trim() === ""}
            >
              Check Detail
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Map;

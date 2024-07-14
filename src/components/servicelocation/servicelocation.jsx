import {
  faChevronDown,
  faChevronUp,
  faCrosshairs,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Autocomplete,
    GoogleMap,
    Marker,
    useLoadScript,
  } from "@react-google-maps/api";
// import { Autocomplete } from "@react-google-maps/api";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "@/components/map/styles.module.scss";
import {
  setDropoffLocation,
  setPickupLocation,
} from "@/redux/slices/userSelection"; // Adjust the path as needed
//   import { toast, ToastContainer } from "react-toastify";
//   import "react-toastify/dist/ReactToastify.css";

const defaultCenter = {
  lat: 44.9778,
  lng: -93.265,
};

const libraries = ["places"];



const Servicelocation = () => {



    const { isLoaded, loadError } = useLoadScript({
        id: "320c3cf314c6a3f1",
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        libraries,
      });


  const [pickupInputValue, setPickupInputValue] = useState("");
  const [dropoffInputValue, setDropoffInputValue] = useState("");
  const [state, setState] = useState("pickup");
  const [address, setAddress] = useState(""); // State to store address
  const [pickupAddress, setPickupAddress] = useState(""); // New state variable
  const [dropoffAddress, setDropoffAddress] = useState(""); // New state variable
  const [errors, setErrors] = useState({});
  const [isExpanded, setIsExpanded] = useState(false); // State for expanding/collapsing the search box
  const [isMobile, setIsMobile] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); // State to manage dropdown visibility
  const [center, setCenter] = useState(defaultCenter);

  const autocompleteRef = useRef(null);
  const mapRef = useRef(null);

  const dispatch = useDispatch();

  const currentLocation = useSelector(
    (state) => state.userSelection.location.currentLocation
  );

  const handleSetPickupLocation = (newCenter) => {
    dispatch(setPickupLocation(newCenter)); // ensure setPickupLocation is imported correctly
    // other logic related to setting pickup location
  };

  const currentState = useSelector((state) => state.userSelection.currentState);
  console.log(currentState, "currentState");

  const geocoder = new window.google.maps.Geocoder();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newLocation = {
            // locationName: place.name || "Unknown Location",
            name: "Current Location Name", // Replace with actual location name logic if needed
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          // Dispatching the action to update Redux state

          // dispatch(setCurrentLocation(newLocation));

          // Save to localStorage
          localStorage.setItem("currentLocation", JSON.stringify(newLocation));

          // Other logic if needed
          // setCenter(newLocation);
          // mapRef.current.panTo(newLocation);
        },
        (error) => {
          console.error("Error getting user location", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, [dispatch]);

  const handleCurrentLocationClick = () => {
    console.log("Current Location button clicked");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newCenter = {
            locationName: address,
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          console.log("Current Location:", newCenter);
          console.log("Address:", address);

          // Use Geocoder object to fetch address
          geocoder.geocode({ location: newCenter }, (results, status) => {
            if (status === "OK") {
              if (results[0]) {
                const address =
                  results[0].formatted_address || "Unknown Location";
                console.log("Address:", address);
                const locationData = {
                  locationName: results[0].name || "Unknown Location",
                  lat: newCenter.lat,
                  lng: newCenter.lng,
                  address: address,
                };
                // Dispatch action to set current location in Redux
                dispatch(setPickupLocation(locationData));

                // Save current location to localStorage
                localStorage.setItem(
                  "currentLocation",
                  JSON.stringify(newCenter)
                );

                if (currentState === "service-location") {
                  // Dispatch action to set pickup location in Redux
                  dispatch(setPickupLocation({ location: newCenter, address }));

                  // Save pickup location to localStorage
                  localStorage.setItem(
                    "pickupLocation",
                    JSON.stringify(newCenter)
                  );

                  setPickupInputValue(address); // Set the address in the input box
                  setState("drop-off-location");
                }

                // Center map on new location (if map is valid)
                if (mapRef.current) {
                  // Ensure mapRef.current is not null
                  mapRef.current.panTo(newCenter);
                } else {
                  console.error("Map reference is not set.");
                }
              } else {
                console.error("No results found");
              }
            } else {
              console.error("Geocoder failed due to:", status);
            }
          });
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
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

        const locationData = {
          locationName: place.name || "Unknown Location",
          lat: newCenter.lat,
          lng: newCenter.lng,
        };

        console.log("Selected Place:", place); // Add console log here
        console.log("New Center:", newCenter); // Add console log here

        // Save to local storage and dispatch to Redux store
        if (currentState === "initial") {
          dispatch(setPickupLocation(locationData));
        } else if (currentState === "drop-off-location") {
          dispatch(setDropoffLocation(locationData));
        }

        

        setCenter(newCenter);

        if (mapRef.current) {
          // Ensure mapRef.current is not null
          mapRef.current.panTo(newCenter);
        } else {
          console.error("Map reference is not set.");
        }

        if (currentState === "service-location") {
          setPickupInputValue(place.name || "");
          setPickupAddress(place.name || ""); // Update pickup address
          setState("drop-off-location"); // Move to dropoff after setting pickup location
        } else if (currentState === "drop-off-location") {
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

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    
    <div
      className={`${styles.searchBoxContainer} ${
        isExpanded ? styles.expanded : ""
      }`}
    >
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
          fields={["geometry", "name"]}
        >
          <div className={styles.InputBox}>
            <input
              type="text"
              placeholder="Search Location"
              className={styles.searchBoxInput}
              value={
                state === "service-location"
                  ? pickupInputValue
                  : dropoffInputValue
              }
              onChange={
                state === "service-location"
                  ? (e) => setPickupInputValue(e.target.value)
                  : (e) => setDropoffInputValue(e.target.value)
              }
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
            <p>No options available</p>{" "}
            {/* Replace with actual dropdown options */}
          </div>
        )}
        <button
          className={styles.currentLocationButton}
          onClick={handleCurrentLocationClick}
        >
          <FontAwesomeIcon
            icon={faCrosshairs}
            className={styles.currentLocationIcon}
          />
          <div className={styles.currentLocationText}>
            <p className={styles.locationName}>Location Name</p>
            <p className={styles.currentLocation}>Current Location</p>
          </div>
        </button>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default Servicelocation;

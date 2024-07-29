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
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "@/components/map/styles.module.scss";
import {
  setDropoffLocation,
  setPickupLocation,
} from "@/redux/slices/userSelection";

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Check screen size on initial render
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [pickupInputValue, setPickupInputValue] = useState("");
  const [dropoffInputValue, setDropoffInputValue] = useState("");
  const [state, setState] = useState("pickup");
  const [address, setAddress] = useState("");
  const [pickupAddress, setPickupAddress] = useState("");
  const [dropoffAddress, setDropoffAddress] = useState("");
  const [errors, setErrors] = useState({});
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [center, setCenter] = useState(defaultCenter);

  const autocompleteRef = useRef(null);
  const mapRef = useRef(null);
  const onLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const dispatch = useDispatch();

  const currentLocation = useSelector(
    (state) => state.userSelection.location.currentLocation
  );

  const handleSetPickupLocation = (newCenter) => {
    dispatch(setPickupLocation(newCenter));
  };

  const currentState = useSelector((state) => state.userSelection.currentState);
  console.log(currentState, "currentState");

  const geocoder = new window.google.maps.Geocoder();

  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         const newLocation = {
  //           name: "Current Location Name",
  //           lat: position.coords.latitude,
  //           lng: position.coords.longitude,
  //         };

  //         localStorage.setItem("currentLocation", JSON.stringify(newLocation));
  //       },
  //       (error) => {
  //         console.error("Error getting user location", error);
  //       }
  //     );
  //   } else {
  //     console.error("Geolocation is not supported by this browser.");
  //   }
  // }, [dispatch]);

  const handleCurrentLocationClick = () => {
    console.log("Current Location button clicked");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newCenter = {
            locationName: position.name|| "Unknown Location",
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          console.log("Current Location:", newCenter);
          // console.log("Address:", address);

          geocoder.geocode({ location: newCenter }, (results, status) => {
            if (status === "OK") {
              if (results[0]) {
                const addressComponents = results[0].address_components;
                let city = "";
                let address = results[0].formatted_address || "Unknown Location";
  
                for (let component of addressComponents) {
                  if (component.types.includes("locality")) {
                    city = component.long_name;
                    break;
                  }
                }
  
                if (!city) {
                  for (let component of addressComponents) {
                    if (component.types.includes("administrative_area_level_1")) {
                      city = component.long_name;
                      break;
                    }
                  }
                }


                console.log("City:", city);
                console.log("Address:", address);


  
                const locationData = {
                  City: city || "Unknown City",
                  lat: newCenter.lat,
                  lng: newCenter.lng,
                  address: address,
                };
  


          // geocoder.geocode({ location: newCenter }, (results, status) => {
          //   if (status === "OK") {
          //     if (results[0]) {
          //       const address =
          //         results[0].formatted_address || "Unknown Location";
          //       console.log("Geocoded Address:", address);

          //       const locationData = {
          //         locationName:
          //           results[0].formatted_address || "Unknown Location",
          //         lat: newCenter.lat,
          //         lng: newCenter.lng,
          //         address: address,
          //       };
                console.log("locationData",locationData);
                dispatch(setPickupLocation(locationData));
                localStorage.setItem("currentLocation",JSON.stringify(locationData)
                );

                if (currentState === "service-location") {
                  dispatch(setPickupLocation(locationData));
                  // dispatch(setPickupLocation({ location: newCenter, address }));
                  localStorage.setItem("pickupLocation",JSON.stringify(newCenter)
                  );
                  setPickupInputValue(address);
                  setState("drop-off-location");
                }

                if (mapRef.current) {
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

  if (!isLoaded) return <div>Loading....</div>;

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


        
        console.log("locationdata", locationData);
        console.log("Selected Place:", place);
        console.log("New Center:", newCenter);

        if (currentState === "service-location") {
          dispatch(setPickupLocation(locationData));
        } else if (currentState === "drop-off-location") {
          dispatch(setDropoffLocation(locationData));
        }


        setCenter(newCenter);

        if (mapRef.current) {
          mapRef.current.panTo(newCenter);
        } else {
          console.error("Map reference is not set.");
        }

        if (currentState === "service-location") {
          setPickupInputValue(place.name || "");
          setPickupAddress(place.name || "");
          setState("drop-off-location");
        } else if (currentState === "drop-off-location") {
          setDropoffInputValue(place.name || "");
          setDropoffAddress(place.name || "");
          setState("vehicleDetails");
        }
      } else {
        console.error("No geometry data available for the selected place.");
      }
    } else {
      console.error("Autocomplete ref is not set.");
    }
  };

  const toggleExpand = () => {
    console.log("Toggle Expand Clicked");
    setIsExpanded(!isExpanded);
  };

  const handleDropdownToggle = () => {
    console.log("Dropdown Toggle Clicked");
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
            onClick={toggleExpand}
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
                currentState === "service-location"
                  ? pickupInputValue
                  : dropoffInputValue
              }
              onChange={
                currentState === "service-location"
                  ? (e) => setPickupInputValue(e.target.value)
                  : (e) => setDropoffInputValue(e.target.value)
              }
            />

            <div className={styles.iconContainer}>
              <div className={styles.separator}></div>
              <FontAwesomeIcon
                icon={showDropdown ? faChevronUp : faChevronDown}
                className={styles.searchBoxIcon}
                onClick={handleDropdownToggle}
              />
            </div>
          </div>
        </Autocomplete>
        {showDropdown && (
          <div className={styles.dropdown}>
            <p>No options available</p>
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
    </div>
  );
};

export default Servicelocation;

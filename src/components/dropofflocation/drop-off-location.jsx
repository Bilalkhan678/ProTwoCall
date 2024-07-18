import {
    faChevronDown,
    faArrowLeft,
    faChevronUp,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { Autocomplete } from "@react-google-maps/api";
  import { useRef, useState, useEffect } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import styles from "@/components/map/styles.module.scss";
  
  import {
    setDropoffLocation,
    setPickupLocation,
    setPreviousSelectionComponent,
  } from "@/redux/slices/userSelection"; // Adjust the path as needed
  // import { toast, ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
  
  const defaultCenter = {
    lat: 44.9778,
    lng: -93.265,
  };


const DropoffLocation=()=>{

    const [pickupInputValue, setPickupInputValue] = useState("");
    const [dropoffInputValue, setDropoffInputValue] = useState("");
    const [state, setState] = useState("pickup");
    const [pickupAddress, setPickupAddress] = useState(""); // New state variable
    const [dropoffAddress, setDropoffAddress] = useState(""); // New state variable
    const [isExpanded, setIsExpanded] = useState(false); // State for expanding/collapsing the search box
    const [isMobile, setIsMobile] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false); // State to manage dropdown visibility
    const [center, setCenter] = useState(defaultCenter);
  
    const autocompleteRef = useRef(null);
    const mapRef = useRef(null);
  
    const dispatch = useDispatch();
    
    const currentState = useSelector((state) => state.userSelection.currentState);
    console.log(currentState, "currentState");



  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900); // Updated to 900 pixels
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Check screen size on initial render
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        if (currentState === "service-location") {
          // localStorage.setItem("pickupLocation", JSON.stringify(locationData));
          dispatch(setPickupLocation(locationData));
        } else if (currentState === "drop-off-location") {
          // localStorage.setItem("dropoffLocation", JSON.stringify(locationData));
          dispatch(setDropoffLocation(locationData));
        }

       setCenter(newCenter); // Update map center
      mapRef.current.panTo(newCenter); // Pan map to new center

        if (currentState === "service-location") {
          setPickupInputValue(place.name || "");
          setPickupAddress(place.name || ""); // Update pickup address
          setState("drop-off-location"); // Move to dropoff after setting pickup location
        } else if (currentState === "drop-off-location") {
          setDropoffInputValue(place.name || "");
          setDropoffAddress(place.name || ""); // Update dropoff address
          setState("add-vehicle-details"); // Move to vehicle details after setting dropoff location
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

  const handleBackClick = () => {
    dispatch(setPreviousSelectionComponent());
    
  };
  const handleDropdownToggle = () => {
    // Toggle dropdown visibility on icon click
    setShowDropdown(!showDropdown);
  };



    return(
        <div
            className={`${styles.dropoffContainer} ${
              isExpanded ? styles.expanded : ""
            }`}
          >
            <div className={styles.dropoffHeader}>
              {isMobile && (
                <FontAwesomeIcon
                  icon={isExpanded ? faChevronDown : faChevronUp}
                  className={styles.expandIcon}
                  onClick={toggleExpand} // Ensure this only handles expand/collapse action
                />
              )}
              {/* <h3>Dropoff Location</h3> */}
              <h3 onClick={toggleExpand}>Dropoff Location</h3>


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
                onLoad={(ref) => (autocompleteRef.current = ref)}
                onPlaceChanged={handlePlaceChanged}
                fields={["geometry", "name"]}
              >
                <div className={styles.InputBox}>
                  <input
                    type="text"
                    placeholder="Search location"
                    className={styles.searchBoxInput}
                    value={dropoffInputValue}
                    onChange={(e) => setDropoffInputValue(e.target.value)}
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
    )
}


export default DropoffLocation;
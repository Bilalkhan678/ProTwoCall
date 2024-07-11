/* eslint-disable @next/next/no-img-element */
import {
  faArrowLeft,
  faChevronDown,
  faChevronUp,
  faCreditCard,
  faCrosshairs,
  faKey,
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
import styles from "./styles.module.scss";

import {
  setCurrentLocation,
  setDropoffLocation,
  setPickupLocation,
  setPreviousSelectionComponent,
  setSelectedServices,
  setVehicleDetails,
} from "@/redux/slices/userSelection"; // Adjust the path as needed
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const mapContainerStyle = {
  width: "100%",
  height: "90vh",
  position: "relative",
};

const defaultCenter = {
  lat: 44.9778,
  lng: -93.265,
};

const libraries = ["places"];

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    id: "320c3cf314c6a3f1",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [center, setCenter] = useState(defaultCenter);
  const [mapType, setMapType] = useState("roadmap");

  const [pickupInputValue, setPickupInputValue] = useState("");
  const [dropoffInputValue, setDropoffInputValue] = useState("");
  const [vinInputValue, setVinInputValue] = useState("");
  const [state, setState] = useState("pickup");
  const [servicePreview, setServicePreview] = useState(false);
  // const [selectedServices, setSelectedServices] = useState([]);
  const [isVerified, setIsVerified] = useState(false);
  const [address, setAddress] = useState(""); // State to store address
  const [pickupAddress, setPickupAddress] = useState(""); // New state variable
  const [dropoffAddress, setDropoffAddress] = useState(""); // New state variable
  const [showSidebar, setShowSidebar] = useState(false);
  const [currentView, setCurrentView] = useState("servicePreview");
  const [blurBackground, setBlurBackground] = useState(false);

  const [atmNumber, setAtmNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [country, setCountry] = useState("");
  const [paymentSubmitted, setPaymentSubmitted] = useState(false);
  const [isAlertVisible, setAlertVisible] = useState(false);
  // const [showSidebar, setShowSidebar] = useState(true); // State for sidebar visibility

  const [errors, setErrors] = useState({});
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

  const dispatch = useDispatch();

  // const selectedServices = useSelector((state) => state.app.selectedServices);
  const selectedServices = useSelector(
    (state) => state.userSelection.selectedServices || []
  );

  // console.log(selectedServices, "selectedServices");

  const currentLocation = useSelector(
    (state) => state.userSelection.location.currentLocation
  );

  const { vehicleDetails } = JSON.parse(localStorage.getItem("userSelection"));

  const currentState = useSelector((state) => state.userSelection.currentState);

  console.log(currentState, "currentState");

  const [formData, setFormData] = useState({
    atmNumber: "",
    expiryDate: "",
    cvc: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

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
    window.addEventListener("resize", handleResize);
    handleResize(); // Check screen size on initial render
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSetPickupLocation = (newCenter) => {
    dispatch(setPickupLocation(newCenter)); // ensure setPickupLocation is imported correctly
    // other logic related to setting pickup location
  };

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

  const geocoder = new window.google.maps.Geocoder();
  const [marker, setMarker] = useState(null);
  const [map, setMap] = useState(null);

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

          console.log("Current Location:", newCenter);

          // Use Geocoder object to fetch address
          geocoder.geocode({ location: newCenter }, (results, status) => {
            // console.log('Geocoder Results:', results);
            // console.log('Geocoder Status:', status);
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
                // localStorage.setItem('currentAddress', address);

                if (state === "pickup") {
                  // Dispatch action to set pickup location in Redux
                  dispatch(setPickupLocation({ location: newCenter, address }));

                  // Save pickup location to localStorage
                  localStorage.setItem(
                    "pickupLocation",
                    JSON.stringify(newCenter)
                  );
                  // localStorage.setItem('pickupAddress', address);

                  setPickupInputValue(address); // Set the address in the input box
                  setState("dropoff");
                }

                // Center map on new location (if map is valid)
                if (map) {
                  map.panTo(newCenter);
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
          // localStorage.setItem("pickupLocation", JSON.stringify(locationData));
          dispatch(setPickupLocation(locationData));
        } else if (currentState === "drop-off-location") {
          // localStorage.setItem("dropoffLocation", JSON.stringify(locationData));
          dispatch(setDropoffLocation(locationData));
        }

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

  const handleBackClick = () => {
    // Move back to previous state
    dispatch(setPreviousSelectionComponent());
    // if (currentView === "payment") {
    //   setCurrentView("servicePreview");
    //   setShowSidebar(false);
    // } else if (servicePreview) {
    //   setServicePreview(false);
    //   setState("services");
    // } else if (state === "services") {
    //   setState("vehicleDetails");
    // } else if (state === "vehicleDetails") {
    //   setState("dropoff");
    // } else if (state === "dropoff") {
    //   setState("pickup");
    // } else {
    //   setShowSidebar(false);
    // }
  };

  const handleCheckDetail = () => {
    const vehicleData = {
      vin: vinInputValue,
      model,
      make,
      year,
      color,
      licensePlate,
    };
    // localStorage.setItem("vehicleDetails", JSON.stringify(vehicleData));
    dispatch(setVehicleDetails(vehicleData));
    // Move to next state if needed
    setState("services");
  };

  const handleCancelClick = () => {
    setShowSidebar(false);
  };

  const handlePayOrderClick = () => {
    setShowSidebar(true);
    setCurrentView("payment");
  };

  const handleAtmNumberChange = (event) => {
    // Remove non-digit characters and limit to 16 characters
    const formattedValue = event.target.value
      .replace(/[^\d]/g, "") // Remove any non-digit characters
      .slice(0, 16); // Limit to 16 characters

    // Insert space after every 4 digits
    let formattedNumber = formattedValue.replace(/(\d{4})(?=\d)/g, "$1 ");

    setAtmNumber(formattedNumber);
    if (errors.atmNumber) {
      setErrors({ ...errors, atmNumber: "" });
    }
  };

  const resetState = () => {
    setAtmNumber("");
    setExpiryDate("");
    setCvc("");
    setCountry("");
    setErrors({});
    setPaymentSubmitted(false);
    // setCurrentLocation('');
    setDropoffAddress("");
    setMake("");
    setModel("");
    setYear("");
    setVin("");
    setColor("");
    setLicensePlate("");
    setSelectedServices([]);
    setServicePreview(false);
    setIsExpanded(false);
    setShowSidebar(false);
    setState("pickup"); // Go to pickup location state
  };

  const handlePaymentSubmit = () => {
    if (!atmNumber.trim()) {
      setErrors({ atmNumber: "ATM Number is required" });
      return;
    }
    if (!expiryDate.trim()) {
      setErrors({ expiryDate: "Expiry Date is required" });
      return;
    }
    if (!cvc.trim()) {
      setErrors({ cvc: "CVC is required" });
      return;
    }
    if (!country) {
      setErrors({ country: "Country is required" });
      return;
    }

    // Simulate successful payment submission
    setTimeout(() => {
      setPaymentSubmitted(true);
      toast.success("Payment submitted successfully!", {
        position: "top-right",
        autoClose: 4000, // Close the toast after 4 seconds
        onClose: () => {
          resetState(); // Reset the state after the toast is closed
        },
      });
    }, 1000); // Simulating a 2-second delay for API response
  };

  const handleConfirmService = () => {
    setServicePreview(true); // Move to service preview state after confirming service
  };

  const handleExpiryDateChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    if (value.length <= 4) {
      const formattedValue =
        value.length > 2 ? `${value.slice(0, 2)}/${value.slice(2)}` : value;
      setExpiryDate(formattedValue);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!atmNumber) newErrors.atmNumber = "Required";
    if (!expiryDate) newErrors.expiryDate = "Required";
    if (!cvc) newErrors.cvc = "Required";
    if (!country) newErrors.country = "Required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleCvcChange = (e) => {
    setCvc(e.target.value);
    if (errors.cvc) {
      setErrors({ ...errors, cvc: "" });
    }
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    if (errors.country) {
      setErrors({ ...errors, country: "" });
    }
  };

  useEffect(() => {
    // localStorage.removeItem('selectedServices');

    // Fetch stored services from localStorage when component mounts
    const storedServices = JSON.parse(localStorage.getItem("selectedServices"));

    if (Array.isArray(storedServices)) {
      // Update Redux state with stored services
      dispatch(setSelectedServices(storedServices));
    }
  }, [dispatch]);

  const handleServiceSelect = (service) => {
    let updatedServices;

    if (selectedServices.some((selected) => selected.id === service.id)) {
      updatedServices = selectedServices.filter(
        (item) => item.id !== service.id
      );
    } else {
      updatedServices = [...selectedServices, service];

      if (service.id === "ServiceB") {
        updatedServices = updatedServices.filter(
          (item) => item.id !== "ServiceA"
        );
      }

      if (
        service.id !== "ServiceB" &&
        selectedServices.some((selected) => selected.id === "ServiceB")
      ) {
        updatedServices = updatedServices.filter(
          (item) => item.id !== "ServiceB"
        );
      }

      if (
        service.id === "ServiceA" &&
        selectedServices.some((selected) => selected.id === "ServiceC")
      ) {
        updatedServices = updatedServices.filter(
          (item) => item.id !== "ServiceC"
        );
      }

      if (
        service.id === "ServiceB" &&
        selectedServices.some((selected) => selected.id === "ServiceC")
      ) {
        updatedServices = updatedServices.filter(
          (item) => item.id !== "ServiceC"
        );
      }

      if (
        service.id === "ServiceC" &&
        selectedServices.some((selected) => selected.id === "ServiceA")
      ) {
        updatedServices = updatedServices.filter(
          (item) => item.id !== "ServiceA"
        );
      }
    }

    dispatch(setSelectedServices(updatedServices));
    // localStorage.setItem("selectedServices",JSON.stringify(updatedServices));
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
                url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                scaledSize: new window.google.maps.Size(40, 40),
              }}
            />
          )}
        </GoogleMap>

        {currentState === "service-location" && (
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
                      state === "pickup" ? pickupInputValue : dropoffInputValue
                    }
                    onChange={
                      state === "pickup"
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
              {/* <p>Location Name: {currentLocation.name}</p>
      <p>Latitude: {currentLocation.lat}</p>
      <p>Longitude: {currentLocation.lng}</p> */}
            </div>
          </div>
        )}

        {currentState === "drop-off-location" && (
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
        )}

        {currentState === "add-vehicle-details" && (
          <div
            className={`${styles.vehicleDetailsContainer} ${
              isExpanded ? styles.expanded : ""
            }`}
          >
            <div className={styles.vehicleDetailsHeader} onClick={toggleExpand}>
              {isMobile && (
                <FontAwesomeIcon
                  icon={isExpanded ? faChevronDown : faChevronUp}
                  className={styles.expandIcon}
                />
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

        {currentState === "choose-service" && (
          <div
            className={`${styles.vehicleDetailsContainer} ${
              isExpanded ? styles.expanded : ""
            }`}
          >
            <div className={styles.vehicleDetailsHeader} onClick={toggleExpand}>
              {isMobile && (
                <FontAwesomeIcon
                  icon={isExpanded ? faChevronDown : faChevronUp}
                  className={styles.expandIcon}
                />
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
                {serviceImages.map((service) => (
                  <div
                    key={service.id}
                    className={styles.serviceContainer}
                    onClick={() => handleServiceSelect(service)}
                  >
                    <img
                      src={service.src}
                      alt={service.name}
                      className={`${styles.serviceImage} ${
                        selectedServices.includes(service.id)
                          ? styles.selected
                          : ""
                      }`}
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

        {currentState === "service-preview" && (
          <div
            className={`${styles.vehicleDetailsContainer} ${
              isExpanded ? styles.expanded : ""
            }`}
          >
            <div className={styles.vehicleDetailsHeader} onClick={toggleExpand}>
              {isMobile && (
                <FontAwesomeIcon
                  icon={isExpanded ? faChevronDown : faChevronUp}
                  className={styles.expandIcon}
                />
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
                {selectedServices.map((service) => (
                  <div key={service.id} className={styles.servicePreviewItem}>
                    <img
                      src={service.src}
                      alt={service.name}
                      className={styles.servicePreviewImage}
                    />
                    <div className={styles.Previewservicename}>
                      {service.name}
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.locationDetails}>
                <h5
                  style={{
                    fontSize: "13px",
                    marginLeft: "17px",
                    fontWeight: "600",
                  }}
                >
                  Location:
                </h5>
                <div className={styles.locationInfo}>
                  <p className={styles.addressItem}>
                    <span className={styles.addressLabel}> Address:</span>
                    <span className={styles.servicedropoffAddress}>
                      {dropoffAddress}
                    </span>
                  </p>
                  <p className={styles.addressItem}>
                    {/* <span className={styles.addressLabel}>Pickup Address:</span> {pickupAddress} */}
                    <span className={styles.addressLabel}>Lat, Lng</span>
                    <span className={styles.servicedropoffAddress}>
                      {" "}
                      28.9167872, 78.0171136{" "}
                    </span>
                  </p>
                </div>
              </div>
              <div className={styles.vehicleDetails}>
                <h5
                  style={{
                    fontSize: "13px",
                    marginLeft: "17px",
                    fontWeight: "600",
                  }}
                >
                  Vehicle Details:
                </h5>

                <div className={styles.detailsContainer}>
                  <p className={styles.detailsItem}>
                    <span className={styles.detailsLabel}>Make:</span>
                    <span className={styles.servicedropoffAddress}>
                      {vehicleDetails?.make}
                    </span>
                  </p>
                  <p className={styles.detailsItem}>
                    <span className={styles.detailsLabel}>Model:</span>
                    <span className={styles.servicedropoffAddress}>
                      {vehicleDetails?.model}
                    </span>
                  </p>
                  <p className={styles.detailsItem}>
                    <span className={styles.detailsLabel}>Year:</span>
                    <span className={styles.servicedropoffAddress}>
                      {vehicleDetails?.year}
                    </span>
                  </p>
                  <p className={styles.detailsItem}>
                    <span className={styles.detailsLabel}>VIN:</span>
                    <span className={styles.servicedropoffAddress}>
                      {vehicleDetails?.vin}
                    </span>
                  </p>
                  <p className={styles.detailsItem}>
                    <span className={styles.detailsLabel}>Color:</span>
                    <span className={styles.servicedropoffAddress}>
                      {vehicleDetails?.color}
                    </span>
                  </p>
                  <p className={styles.detailsItem}>
                    <span className={styles.detailsLabel}>
                      License Plate Number:
                    </span>
                    <span className={styles.servicedropoffAddress}>
                      {vehicleDetails?.licensePlate}
                    </span>
                  </p>
                </div>
              </div>
              <div className={styles.priceDetails}>
                <h5
                  style={{
                    fontSize: "15px",
                    marginLeft: "17px",
                    fontWeight: "600",
                  }}
                >
                  Price Details:
                </h5>
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
                    <span className={styles.PriceLabel}>
                      Additional charges:{" "}
                    </span>
                    <span className={styles.servicedropoffAddress}>20.00</span>
                  </p>
                  <p className={styles.priceItem}>
                    <span className={styles.PriceLabel}>
                      Transaction fees:{" "}
                    </span>
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
                  <button
                    onClick={handlePayOrderClick}
                    className={styles.submitButton}
                  >
                    Pay Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {showSidebar && (
        <div
          className={`${styles.sidebar} ${
            showSidebar ? styles.sidebarOpen : ""
          }`}
        >
          {currentView === "payment" && (
            <div className={styles.paymentContainer}>
              <div className={styles.inputGroup}>
                <label htmlFor="atmNumber">ATM Number</label>
                <div className={styles.inputWithIcon}>
                  <input
                    type="text"
                    id="atmNumber"
                    value={atmNumber}
                    onChange={handleAtmNumberChange}
                    placeholder="1234 1234 1234 1234"
                    className={styles.expiryDateInput}
                  />
                  <FontAwesomeIcon
                    icon={faCreditCard}
                    className={styles.icon}
                  />
                  {errors.atmNumber && (
                    <span className={styles.errorMessage}>
                      {errors.atmNumber}
                    </span>
                  )}
                </div>
              </div>
              <div className={styles.yeardate}>
                <div className={styles.inputGroups}>
                  <label htmlFor="expiryDate">Expiry Date</label>
                  <input
                    type="text"
                    id="expiryDate"
                    value={expiryDate}
                    onChange={handleExpiryDateChange}
                    placeholder="MM/YY"
                  />
                  {errors.expiryDate && (
                    <span className={styles.errorMessage}>
                      {errors.expiryDate}
                    </span>
                  )}
                </div>
                <div className={styles.inputGroups}>
                  <label htmlFor="cvc">CVC</label>
                  <div className={styles.inputWithIcon}>
                    <input
                      type="text"
                      id="cvc"
                      value={cvc}
                      onChange={handleCvcChange}
                      placeholder="CVC"
                    />
                    <FontAwesomeIcon icon={faKey} className={styles.icon} />
                  </div>
                  {errors.cvc && (
                    <span className={styles.errorMessage}>{errors.cvc}</span>
                  )}
                </div>
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="country">Country</label>
                <select
                  id="country"
                  value={country}
                  onChange={handleCountryChange}
                >
                  <option value="">Select Country</option>
                  <option value="us">United States</option>
                  <option value="ca">Canada</option>
                  <option value="uk">United Kingdom</option>
                  {/* Add more country options as needed */}
                </select>
                {errors.country && (
                  <span className={styles.errorMessage}>{errors.country}</span>
                )}
              </div>
              <p>
                By providing your card information, you allow Protowcall Inc. to
                charge your card for future payments in accordance with their
                terms.
              </p>
              <div className={styles.buttonGroup}>
                <button
                  onClick={handleCancelClick}
                  className={styles.cancelButton}
                >
                  CANCEL
                </button>
                <button
                  onClick={handlePaymentSubmit}
                  className={styles.paybutton}
                >
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
          <ToastContainer />
        </div>
      )}
    </div>
  );
};

export default Map;

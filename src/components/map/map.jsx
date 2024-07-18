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
  clearState,
  setCurrentLocation,
  setDropoffLocation,
  setPickupLocation,
  setPreviousSelectionComponent,
  setSelectedServices,
  setVehicleDetails,
} from "@/redux/slices/userSelection"; // Adjust the path as needed
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Servicelocation from "../servicelocation/servicelocation";
import DropoffLocation from "../dropofflocation/drop-off-location";
import VehicalDetail from "../vehicaldetail/vehicaldetail";
import ChooseServices from "../serviceSelector/serviceSelector";
import ServicePreview from "../servicePreviewandPaymentcard/servicePreview";
import ServicePreviewAndPaymendCard from "../servicePreviewandPaymentcard/servicePreview";



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

  // const [pickupInputValue, setPickupInputValue] = useState("");
  // const [dropoffInputValue, setDropoffInputValue] = useState("");
  const [vinInputValue, setVinInputValue] = useState("");
  const [state, setState] = useState("pickup");
  const [servicePreview, setServicePreview] = useState(false);
  // const [selectedServices, setSelectedServices] = useState([]);
  // const [isVerified, setIsVerified] = useState(false);
  // const [address, setAddress] = useState(""); // State to store address
  // const [pickupAddress, setPickupAddress] = useState(""); // New state variable
  const [dropoffAddress, setDropoffAddress] = useState(""); // New state variable
  const [showSidebar, setShowSidebar] = useState(false);
  const [currentView, setCurrentView] = useState("servicePreview");
  // const [blurBackground, setBlurBackground] = useState(false);

  // const [isAlertVisible, setAlertVisible] = useState(false);
  // const [showSidebar, setShowSidebar] = useState(true); // State for sidebar visibility

  const autocompleteRef = useRef(null);
  const mapRef = useRef(null);

  const dispatch = useDispatch();

  // const selectedServices = useSelector((state) => state.app.selectedServices);
  // const selectedServices = useSelector(
  //   (state) => state.userSelection.selectedServices || []
  // );

  // console.log(selectedServices, "selectedServices");

  const currentLocation = useSelector(
    (state) => state.userSelection.location.currentLocation
  );

  // const { vehicleDetails } = JSON.parse(localStorage.getItem("userSelection"));
  const userSelection = JSON.parse(localStorage.getItem("userSelection")) || {};
  const { vehicleDetails } = userSelection;

  const currentState = useSelector((state) => state.userSelection.currentState);

  console.log(currentState, "currentState");



  const onLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);



  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 768);
  //   };
  //   window.addEventListener("resize", handleResize);
  //   handleResize(); // Check screen size on initial render
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // const handleVinInputChange = (e) => {
  //   setVin(e.target.value);
  // };

  const resetState = () => {
    // setPickupLocation("");
    // setDropoffLocation()
    setState("service-location"); // Go to pickup location state

    dispatch(clearState());

  };
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
          // conditional rendering
          //1. Ternary Operator
          //2. Switch Case
          //3. IIFE (Immediately Invoked Function Expression)
          //4. Separate Render Function
          //5. Conditional Component
          <Servicelocation/>
        )}

        {currentState === "drop-off-location" && (
          <DropoffLocation/>
        )}

        {currentState === "add-vehicle-details" && (
          <VehicalDetail/>
        )}

        {currentState === "choose-service" && (
          <ChooseServices/>
        )}

        {currentState === "service-preview" && (
          <ServicePreviewAndPaymendCard/>    
        )}
      </div>

      
    </div>
  );
};

export default Map;

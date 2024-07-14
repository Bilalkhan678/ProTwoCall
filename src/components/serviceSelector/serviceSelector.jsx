// const { useDispatch } = require("react-redux");
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
  import styles from "@/components/map/styles.module.scss";
  
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


const ChooseServices =()=>{
    const [isExpanded, setIsExpanded] = useState(false); // State for expanding/collapsing the search box
    const [isMobile, setIsMobile] = useState(false);
    const selectedServices = useSelector(
        (state) => state.userSelection.selectedServices || []
      );

  const handleConfirmService = () => {
    // setServicePreview(true); // Move to service preview state after confirming service
  };
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };


      const dispatch = useDispatch();

  const handleBackClick = () => {
    // Move back to previous state
    dispatch(setPreviousSelectionComponent());
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
    return(
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
    )
}


export default ChooseServices;
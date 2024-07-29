import {
  faArrowLeft,
  faChevronDown,
  faChevronUp
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "@/components/map/styles.module.scss";
import axios from "axios";
import {
  setPreviousSelectionComponent,
  setSelectedServices
} from "@/redux/slices/userSelection";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const baseImgURL = "https://dewnj7prds854.cloudfront.net/";

const ChooseServices = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [services, setServices] = useState([]);

  const selectedServices = useSelector(
      (state) => state.userSelection.selectedServices || []
  );

  const dispatch = useDispatch();

  const handleConfirmService = () => {
      // Move to service preview state after confirming service
  };

  const toggleExpand = () => {
      setIsExpanded(!isExpanded);
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

  const handleBackClick = () => {
      dispatch(setPreviousSelectionComponent());
  };

//   useEffect(() => {
//       // Fetch stored services from localStorage when component mounts
//       const storedServices = JSON.parse(localStorage.getItem("selectedServices"));
//       if (Array.isArray(storedServices)) {
//           dispatch(setSelectedServices(storedServices));
//       }
//   }, [dispatch]);


  useEffect(() => {
    // localStorage.removeItem('selectedServices');

    // Fetch stored services from localStorage when component mounts
    const storedServices = JSON.parse(localStorage.getItem("selectedServices"));

    if (Array.isArray(storedServices)) {
      // Update Redux state with stored services
      dispatch(setSelectedServices(storedServices));
    }
  }, [dispatch]);

  useEffect(() => {
    const fetchServices = async () => {
        try {
            // Fetch services from the API
            const response = await axios.get("https://api.dev.protowcall.ca/api/v1/services/customer?page=1&limit=10");
            console.log("API Response:", response.data); 
            setServices(response.data);
        } catch (error) {
            // Handle errors
            toast.error("Failed to fetch services");
        }
    };

    // Call the fetchServices function
    fetchServices();
}, []);


console.log("data",services);

  const handleServiceSelect = (service) => {
            //   console.log("service",service);
    //   dispatch(setSelectedServices(service?._id));
    dispatch(setSelectedServices(service));
    //   localStorage.setItem("selectedServices", JSON.stringify(service));
  };

  return (
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
                      e.stopPropagation();
                      handleBackClick();
                  }}
              />
          </div>
          <div className={styles.servicesContent}>
              <div className={styles.servicesList}>
                  {services?.data?.map((service) => (
                      <div
                          key={service.id}
                          className={styles.serviceContainer}
                          onClick={() => handleServiceSelect(service)}
                      >
                          <img
                              src={baseImgURL+service.image} // Using the image URL from the API response
                              alt={service.title}
                              className={`${styles.serviceImage} ${
                                  selectedServices.some(selected => selected.id === service.id)
                                      ? styles.selected
                                      : ""
                              }`}
                          />
                          <div className={styles.serviceName}>{service.title}</div>
                      </div>
                  ))}
              </div>
              <button
                  className={styles.checkDetailButton}
                  onClick={handleConfirmService}
                  disabled={selectedServices.length === 0}
              >
                  Confirm Service
              </button>
          </div>
      </div>
  );
};

export default ChooseServices;












// // const { useDispatch } = require("react-redux");
// import {
//     faArrowLeft,
//     faChevronDown,
//     faChevronUp,
//     faCreditCard,
//     faCrosshairs,
//     faKey,
//   } from "@fortawesome/free-solid-svg-icons";
//   import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//   import {
//     Autocomplete,
//     GoogleMap,
//     Marker,
//     useLoadScript,
//   } from "@react-google-maps/api";
//   import { useCallback, useEffect, useRef, useState } from "react";
//   import { useDispatch, useSelector } from "react-redux";
//   import styles from "@/components/map/styles.module.scss";
  
//   import {
//     setPreviousSelectionComponent,
//     setSelectedServices,
//     setVehicleDetails,
//   } from "@/redux/slices/userSelection"; // Adjust the path as needed
//   import { toast, ToastContainer } from "react-toastify";
//   import "react-toastify/dist/ReactToastify.css";


// const ChooseServices =()=>{
//     const [isExpanded, setIsExpanded] = useState(false); // State for expanding/collapsing the search box
//     const [isMobile, setIsMobile] = useState(false);
//     const selectedServices = useSelector(
//         (state) => state.userSelection.selectedServices || []
//       );

//   const handleConfirmService = () => {
//     // setServicePreview(true); // Move to service preview state after confirming service
//   };
//   const toggleExpand = () => {
//     setIsExpanded(!isExpanded);
//   };


//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };
//     window.addEventListener("resize", handleResize);
//     handleResize(); // Check screen size on initial render
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);



//       const dispatch = useDispatch();

//   const handleBackClick = () => {
//     // Move back to previous state
//     dispatch(setPreviousSelectionComponent());
//   };
      
//   useEffect(() => {
//     // localStorage.removeItem('selectedServices');

//     // Fetch stored services from localStorage when component mounts
//     const storedServices = JSON.parse(localStorage.getItem("selectedServices"));

//     if (Array.isArray(storedServices)) {
//       // Update Redux state with stored services
//       dispatch(setSelectedServices(storedServices));
//     }
//   }, [dispatch]);

//   const handleServiceSelect = (service) => {
//     let updatedServices;

//     if (selectedServices.some((selected) => selected.id === service.id)) {
//       updatedServices = selectedServices.filter(
//         (item) => item.id !== service.id
//       );
//     } else {
//       updatedServices = [...selectedServices, service];

//       if (service.id === "ServiceB") {
//         updatedServices = updatedServices.filter(
//           (item) => item.id !== "ServiceA"
//         );
//       }

//       if (
//         service.id !== "ServiceB" &&
//         selectedServices.some((selected) => selected.id === "ServiceB")
//       ) {
//         updatedServices = updatedServices.filter(
//           (item) => item.id !== "ServiceB"
//         );
//       }

//       if (
//         service.id === "ServiceA" &&
//         selectedServices.some((selected) => selected.id === "ServiceC")
//       ) {
//         updatedServices = updatedServices.filter(
//           (item) => item.id !== "ServiceC"
//         );
//       }

//       if (
//         service.id === "ServiceB" &&
//         selectedServices.some((selected) => selected.id === "ServiceC")
//       ) {
//         updatedServices = updatedServices.filter(
//           (item) => item.id !== "ServiceC"
//         );
//       }

//       if (
//         service.id === "ServiceC" &&
//         selectedServices.some((selected) => selected.id === "ServiceA")
//       ) {
//         updatedServices = updatedServices.filter(
//           (item) => item.id !== "ServiceA"
//         );
//       }
//     }

//     dispatch(setSelectedServices(updatedServices));
//     // localStorage.setItem("selectedServices",JSON.stringify(updatedServices));
//   };

//   const serviceImages = [
//     { id: "ServiceA", src: "/images/TowRequired.png", name: "Tow Required" },
//     { id: "ServiceB", src: "/images/Trailer.png", name: "Trailer Transport" },
//     { id: "ServiceC", src: "/images/Vehical.png", name: "Vehical Transport" },
//     // Add more services as needed
//   ];
//     return(
//         <div
//             className={`${styles.vehicleDetailsContainer} ${
//               isExpanded ? styles.expanded : ""
//             }`}
//           >
//             <div className={styles.vehicleDetailsHeader} onClick={toggleExpand}>
//               {isMobile && (
//                 <FontAwesomeIcon
//                   icon={isExpanded ? faChevronDown : faChevronUp}
//                   className={styles.expandIcon}
//                 />
//               )}

//               <h3>Select Services</h3>
//               <FontAwesomeIcon
//                 icon={faArrowLeft}
//                 className={styles.backIcon}
//                 onClick={(e) => {
//                   e.stopPropagation(); // Prevent click event from bubbling up
//                   handleBackClick();
//                 }}
//               />
//             </div>
//             <div className={styles.servicesContent}>
//               <div className={styles.servicesList}>
//                 {serviceImages.map((service) => (
//                   <div
//                     key={service.id}
//                     className={styles.serviceContainer}
//                     onClick={() => handleServiceSelect(service)}
//                   >
//                     <img
//                       src={service.src}
//                       alt={service.name}
//                       className={`${styles.serviceImage} ${
//                         selectedServices.includes(service.id)
//                           ? styles.selected
//                           : ""
//                       }`}
//                     />
//                     <div className={styles.serviceName}>{service.name}</div>
//                   </div>
//                 ))}
//               </div>
//               <button
//                 className={styles.checkDetailButton}
//                 onClick={handleConfirmService} // Use the new handler here
//                 disabled={selectedServices.length === 0} // Disable button if no service is selected
//               >
//                 Confirm Service
//               </button>
//             </div>
//           </div>
//     )
// }


// export default ChooseServices;


import {
  faArrowLeft,
  faChevronDown,
  faChevronUp,
  faKey,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState , useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "@/components/map/styles.module.scss";
import axios from 'axios';
import {
  setPickupLocation,
  setPreviousSelectionComponent,
  clearState,
} from "@/redux/slices/userSelection"; // Adjust the path as needed
// import PaymentCard from "../showSideBarPaymentCard/sideBarPaymentCard";
  import { toast, ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
// import VehicalDetail from "../vehicaldetail/vehicaldetail";
// import DropoffLocation from "../dropofflocation/drop-off-location";
// import ChooseServices from "../serviceSelector/serviceSelector";
// import {useSelector} from "react-redux";

const baseImgURL = "https://dewnj7prds854.cloudfront.net/";


const ServicePreviewAndPaymendCard = () => {


  const [vinInputValue, setVinInputValue] = useState("");
  const [isExpanded, setIsExpanded] = useState(false); // State for expanding/collapsing the search box
  const [isMobile, setIsMobile] = useState(false);
  const [dropoffAddress, setDropoffAddress] = useState(""); // New state variable
  const [showSidebar, setShowSidebar] = useState(false);
  const [currentView, setCurrentView] = useState("servicePreview");


  const dispatch = useDispatch();

  // const selectedServices = useSelector(
  //   (state) => state.userSelection.selectedServices || []
  // );


  const selectedServicesString = useSelector(
    (state) => state.userSelection.selectedService
  );


 
  // Convert the string to an array
  let selectedServices = [];
  if (typeof selectedServicesString === 'string') {
    try {
      selectedServices = JSON.parse(selectedServicesString);
      if (!Array.isArray(selectedServices)) {
        selectedServices = [];
      }
    } catch (error) {
      console.error('Failed to parse selectedServices:', error);
    }
  } else if (Array.isArray(selectedServicesString)) {
    selectedServices = selectedServicesString;
  } else {
    console.error('selectedServices is not a string or array:', selectedServicesString);
  }
  console.log('Parsed selectedServices:', selectedServices);

  console.log('Type of selectedServices:', typeof selectedServices);
  // const servicesArray = Array.isArray(selectedServices) ? selectedServices : [];



  const userSelection = JSON.parse(localStorage.getItem("userSelection")) || {};
  const { vehicleDetails } = userSelection;

  const currentState = useSelector((state) => state.userSelection.currentState);
  console.log(currentState, "currentState");

  // const location = useSelector((state) => state.location.pickupLocation); // Redux se location fetch karna


//   const dropoffLocation = useSelector(state => state.userSelection.dropoffLocation);
//   console.log('Drop-off Location:', dropoffLocation);

//   // Check if dropoffLocation is defined before accessing its properties
// const dropoffAddress = dropoffLocation ? dropoffLocation.locationName : "";
// const dropoffLatitude = dropoffLocation ? dropoffLocation.lat : "";
// const dropoffLongitude = dropoffLocation ? dropoffLocation.lng : "";



  const [atmNumber, setAtmNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [country, setCountry] = useState("");
  const [paymentSubmitted, setPaymentSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
//   const [isExpanded, setIsExpanded] = useState(false); // State for expanding/collapsing the search box
  const [state, setState] = useState("pickup");

  





  const resetState = () => {
    setAtmNumber("");
    setExpiryDate("");
    setCvc("");
    setCountry("");
    setErrors({});
    setPaymentSubmitted(false);
    setIsExpanded(false);
    setShowSidebar(false);
    setState("service-location"); // Go to pickup location state
    dispatch(clearState());
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };


  const handleCancelClick = () => {
    setShowSidebar(false);
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


  

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    console.log("Current state in useEffect:", currentState);
    // Handle any logic based on currentState here
  }, [currentState]); // This ensures the effect runs whenever currentState changes



  const handleBackClick = () => {
    console.log("button cliked");
    dispatch(setPreviousSelectionComponent());
  };

  // useEffect(() => {
  //   console.log(currentState, "currentState after update");
  //   // Handle any navigation or state-dependent logic here
  // }, [currentState]);

  // const handlePayOrderClick = () => {
  //   setShowSidebar(true);
  //   setCurrentView("payment");
  // };

  // useEffect(() => {
  //   const storedDropoffAddress = localStorage.getItem("dropoffAddress");
  //   if (storedDropoffAddress) {
  //     setDropoffAddress(storedDropoffAddress);
  //   }
  // }, []);




  const handlePayOrderClick = async () => {
    try {

      const token = localStorage.getItem("token");
      console.log("Preview Token", token);
      if (!token) {
        throw new Error("Token not found");
      }

      const storedServices = JSON.parse(localStorage.getItem("selectedService"));
      console.log("Stored Services from localStorage:", storedServices);

       // Local storage se userSelection object fetch karna
      const userSelection = JSON.parse(localStorage.getItem("userSelection"));
  



  // Pickup location se lat aur lng nikalna
  const pickupLocation = userSelection?.location?.pickupLocation || { lat: null, lng: null };
  console.log("Pickup Location:", pickupLocation);


  //pickuplocation address
  const pickupLocationaddress = userSelection?.location?.pickupLocation || { address:"" };
  console.log("Pickupaddress Location:", pickupLocationaddress);
    
  //pictuplocation city
  const pickupCity = userSelection?.location?.pickupLocation || { City:"" };
  console.log("PickupCity:", pickupCity);
  
  

    // dropoffCoordinates location se lat aur lng nikalna
    const dropoffCoordinates = userSelection?.location?.dropoffLocation || { lat: null, lng: null };
    console.log("dropoffCoordinates:", dropoffCoordinates);


      //dropoff address
  const dropoffLocationaddress = userSelection?.location?.dropoffLocation || { locationName:"" };
  console.log("dropodaddress Location:", dropoffLocationaddress);

  

  // const customerAddress : pickupLocationaddress.LocationName;

//  // Pickup location se lat aur lng extract karna
//  const pickupLocation = userSelection.location.pickupLocation;
//  const lat = pickupLocation.lat;
//  const lng = pickupLocation.lng;


const serviceIDs = selectedServices.map(service => service._id);
console.log("serviceId ",serviceIDs);


      const orderData = {

        // services: selectedServices.map(service => ({
        //   id: service._id,
        //   // name: service.title,     
        //   // img: service.image       
        // })),
        service:serviceIDs, 
        customerCoordinates: [
          pickupLocation.lat,
          pickupLocation.lng,
        ],
        "customerAddress": pickupLocationaddress.address,
        "customercity": pickupCity.City,                
        dropOffCoordinates: [
           dropoffCoordinates.lat,
           dropoffCoordinates.lng,
        ],
        dropoffAddress:dropoffLocationaddress.locationName,
        dropoffCity:dropoffLocationaddress.locationName,
        
        vehicle: {
          make: vehicleDetails.make,
          model: vehicleDetails.model,
          year: vehicleDetails.year,
          vin: vehicleDetails.vin,
          color: vehicleDetails.color,
          licensePlate: vehicleDetails.licensePlate,
        },
        // address: dropoffAddress,
       
      };

      // JSON string with double quotes around keys
        // Check the payload in JSON format
    const jsonString = JSON.stringify(orderData, null, 2);
    console.log('JSON Payload:', jsonString);

      const dropoffAddressFromLocalStorage = localStorage.getItem("dropoffAddress");
      console.log("Drop-off Address from Local Storage:", dropoffAddressFromLocalStorage);

      console.log("Drop-off Address:", dropoffAddress);
  
      console.log('Order Data:', orderData); // Log order data for debugging
  
      const response = await axios.post('https://api.dev.protowcall.ca/api/v1/orders/place', orderData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      });
  
      if (response.status === 200) {
        console.log('Order placed successfully:', response.data);
        toast.success('Order placed successfully!', {
          position: 'top-right',
          autoClose: 2000,
        });
        setShowSidebar(true);
        setCurrentView('payment');
      } else {
        console.error('Failed to place order', response.statusText);
        toast.error('Failed to place order. Please try again.', {
          position: 'top-right',
          autoClose: 2000,
        });
      }
    } catch (error) {
      console.error('Error placing order:', error);
      toast.error(`Error placing order: ${error.message}`, {
        position: 'top-right',
        autoClose: 2000,
      });
    }
  };
  






  // const handlePayOrderClick = async () => {
  //   // API request data, adjust the payload as per your API requirements


  // //   const vehicleDetails = useSelector(state => state.vehicleDetails);
  // // const selectedServices = useSelector(state => state.selectedServices); // Assuming you have this state
  // // const dropoffAddress = useSelector(state => state.dropoffLocation); // Assuming you have this state

  // const orderData = {
  //   services: selectedServices.map(service => ({
  //     id: service.id,
  //     name: service.name,
  //     // Add other necessary service details here
  //   })),
  //   vehicle: {
  //     make: vehicleDetails.make,
  //     model: vehicleDetails.model,
  //     year: vehicleDetails.year,
  //     vin: vehicleDetails.vin,
  //     color: vehicleDetails.color,
  //     licensePlate: vehicleDetails.licensePlate,
  //   },
  //   address: dropoffAddress,
  //   additionalInfo: {
  //     // Add any other necessary information here
  //   },
  // };

  // console.log('Order Data:', orderData); // Log order data for debugging

  
  //   try {

  //     const token = localStorage.getItem("token");
  //     console.log("Token", token); // Debug token

  //     const response = await axios.post('https://api.dev.protowcall.ca/api/v1/orders/place', orderData, {

  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${token}`, // if your API requires authentication
  //       }
  //     });
  
  //     if (response.status === 200) {
  //       console.log('Order placed successfully:', response.data);
  //       // Show success message or handle success scenario
  //       toast.success('Order placed successfully!', {
  //         position: 'top-right',
  //         autoClose: 2000,
  //       });
  //       setShowSidebar(true);
  //       setCurrentView('payment');
  //     } else {
  //       console.error('Failed to place order', response.statusText);
  //       toast.error('Failed to place order. Please try again.', {
  //         position: 'top-right',
  //         autoClose: 2000,
  //       });
  //     }
  //   } catch (error) {
  //     console.error('Error placing order:', error);
  //     toast.error('Error placing order. Please try again.', {
  //       position: 'top-right',
  //       autoClose: 2000,
  //     });
  //   }
  // };















  
  

//   const toggleSidebar = () => {
//     setShowSidebar(!showSidebar);
//   };


 

  const handleAtmNumberChange = (event) => {
    const formattedValue = event.target.value.replace(/[^\d]/g, "").slice(0, 16);
    let formattedNumber = formattedValue.replace(/(\d{4})(?=\d)/g, "$1 ");
    setAtmNumber(formattedNumber);
    if (errors.atmNumber) {
      setErrors({ ...errors, atmNumber: "" });
    }
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
    setTimeout(() => {
      setPaymentSubmitted(true);
      toast.success("Payment submitted successfully!", {
        position: "top-right",
        autoClose: 2000,
        onClose: () => {
          resetState();
        },
      });
    }, 500);
  };

  const handleExpiryDateChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 4) {
      const formattedValue = value.length > 2 ? `${value.slice(0, 2)}/${value.slice(2)}` : value;
      setExpiryDate(formattedValue);
    }
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
                src={baseImgURL+service.image}
                alt={service.name}
                className={styles.servicePreviewImage}
              />
              <div className={styles.Previewservicename}>{service.title}</div>
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
                {setDropoffAddress?.dropoffAddress}
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
              <span className={styles.detailsLabel}>License Plate Number:</span>
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
              <span className={styles.PriceLabel}>Additional charges: </span>
              <span className={styles.servicedropoffAddress}>20.00</span>
            </p>
            <p className={styles.priceItem}>
              <span className={styles.PriceLabel}>Transaction fees: </span>
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
            {/* console.log("place order",button); */}
          </div>
        </div>
      </div>
      {/* {showSidebar && (
        <PaymentCard showSidebar={showSidebar} setShowSidebar={setShowSidebar} currentView={currentView} setCurrentView={setCurrentView} />
      )} */}

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

export default ServicePreviewAndPaymendCard;

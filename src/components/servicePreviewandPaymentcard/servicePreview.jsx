import {
  faArrowLeft,
  faChevronDown,
  faChevronUp,
  faKey,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "@/components/map/styles.module.scss";

import {
  setPreviousSelectionComponent,
  clearState,
} from "@/redux/slices/userSelection"; // Adjust the path as needed
// import PaymentCard from "../showSideBarPaymentCard/sideBarPaymentCard";
  import { toast, ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

const ServicePreviewAndPaymendCard = () => {
  const dispatch = useDispatch();
  const [vinInputValue, setVinInputValue] = useState("");
  const [isExpanded, setIsExpanded] = useState(false); // State for expanding/collapsing the search box
  const [isMobile, setIsMobile] = useState(false);
  const [dropoffAddress, setDropoffAddress] = useState(""); // New state variable
  const [showSidebar, setShowSidebar] = useState(false);
  const [currentView, setCurrentView] = useState("servicePreview");
  const selectedServices = useSelector(
    (state) => state.userSelection.selectedServices || []
  );
  const userSelection = JSON.parse(localStorage.getItem("userSelection")) || {};
  const { vehicleDetails } = userSelection;

  const currentState = useSelector((state) => state.userSelection.currentState);
  console.log(currentState, "currentState");

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleBackClick = () => {
    dispatch(setPreviousSelectionComponent());
  };


  const handlePayOrderClick = () => {
    setShowSidebar(true);
    setCurrentView("payment");
  };

//   const toggleSidebar = () => {
//     setShowSidebar(!showSidebar);
//   };


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
                src={service.src}
                alt={service.name}
                className={styles.servicePreviewImage}
              />
              <div className={styles.Previewservicename}>{service.name}</div>
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

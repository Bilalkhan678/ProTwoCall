// /* eslint-disable @next/next/no-img-element */



// import { faCreditCard, faKey } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import styles from "@/components/map/styles.module.scss";
// import { clearState } from "@/redux/slices/userSelection"; // Adjust the path as needed
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const PaymentCard = ({ showSidebar, setShowSidebar, currentView, setCurrentView }) => {
//   const dispatch = useDispatch();
//   const [atmNumber, setAtmNumber] = useState("");
//   const [expiryDate, setExpiryDate] = useState("");
//   const [cvc, setCvc] = useState("");
//   const [country, setCountry] = useState("");
//   const [paymentSubmitted, setPaymentSubmitted] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [isExpanded, setIsExpanded] = useState(false); // State for expanding/collapsing the search box
//   const [state, setState] = useState("pickup");

//   const resetState = () => {
//     setAtmNumber("");
//     setExpiryDate("");
//     setCvc("");
//     setCountry("");
//     setErrors({});
//     setPaymentSubmitted(false);
//     setIsExpanded(false);
//     setShowSidebar(false);
//     setState("service-location"); // Go to pickup location state
//     dispatch(clearState());
//   };

//   const toggleSidebar = () => {
//     setShowSidebar(!showSidebar);
//   };


//   const handleCancelClick = () => {
//     setShowSidebar(false);
//   };

//   const handleAtmNumberChange = (event) => {
//     const formattedValue = event.target.value.replace(/[^\d]/g, "").slice(0, 16);
//     let formattedNumber = formattedValue.replace(/(\d{4})(?=\d)/g, "$1 ");
//     setAtmNumber(formattedNumber);
//     if (errors.atmNumber) {
//       setErrors({ ...errors, atmNumber: "" });
//     }
//   };

//   const handlePaymentSubmit = () => {
//     if (!atmNumber.trim()) {
//       setErrors({ atmNumber: "ATM Number is required" });
//       return;
//     }
//     if (!expiryDate.trim()) {
//       setErrors({ expiryDate: "Expiry Date is required" });
//       return;
//     }
//     if (!cvc.trim()) {
//       setErrors({ cvc: "CVC is required" });
//       return;
//     }
//     if (!country) {
//       setErrors({ country: "Country is required" });
//       return;
//     }
//     setTimeout(() => {
//       setPaymentSubmitted(true);
//       toast.success("Payment submitted successfully!", {
//         position: "top-right",
//         autoClose: 2000,
//         onClose: () => {
//           resetState();
//         },
//       });
//     }, 500);
//   };

//   const handleExpiryDateChange = (e) => {
//     const value = e.target.value.replace(/\D/g, "");
//     if (value.length <= 4) {
//       const formattedValue = value.length > 2 ? `${value.slice(0, 2)}/${value.slice(2)}` : value;
//       setExpiryDate(formattedValue);
//     }
//   };

//   const handleCvcChange = (e) => {
//     setCvc(e.target.value);
//     if (errors.cvc) {
//       setErrors({ ...errors, cvc: "" });
//     }
//   };

//   const handleCountryChange = (e) => {
//     setCountry(e.target.value);
//     if (errors.country) {
//       setErrors({ ...errors, country: "" });
//     }
//   };

//   return (
//     <div className={`${styles.sidebar} ${showSidebar ? styles.sidebarOpen : ""}`}>
//       {currentView === "payment" && (
//         <div className={styles.paymentContainer}>
//           <div className={styles.inputGroup}>
//             <label htmlFor="atmNumber">ATM Number</label>
//             <div className={styles.inputWithIcon}>
//               <input
//                 type="text"
//                 id="atmNumber"
//                 value={atmNumber}
//                 onChange={handleAtmNumberChange}
//                 placeholder="1234 1234 1234 1234"
//                 className={styles.expiryDateInput}
//               />
//               <FontAwesomeIcon icon={faCreditCard} className={styles.icon} />
//               {errors.atmNumber && <span className={styles.errorMessage}>{errors.atmNumber}</span>}
//             </div>
//           </div>
//           <div className={styles.yeardate}>
//             <div className={styles.inputGroups}>
//               <label htmlFor="expiryDate">Expiry Date</label>
//               <input
//                 type="text"
//                 id="expiryDate"
//                 value={expiryDate}
//                 onChange={handleExpiryDateChange}
//                 placeholder="MM/YY"
//               />
//               {errors.expiryDate && <span className={styles.errorMessage}>{errors.expiryDate}</span>}
//             </div>
//             <div className={styles.inputGroups}>
//               <label htmlFor="cvc">CVC</label>
//               <div className={styles.inputWithIcon}>
//                 <input
//                   type="text"
//                   id="cvc"
//                   value={cvc}
//                   onChange={handleCvcChange}
//                   placeholder="CVC"
//                 />
//                 <FontAwesomeIcon icon={faKey} className={styles.icon} />
//               </div>
//               {errors.cvc && <span className={styles.errorMessage}>{errors.cvc}</span>}
//             </div>
//           </div>
//           <div className={styles.inputGroup}>
//             <label htmlFor="country">Country</label>
//             <select id="country" value={country} onChange={handleCountryChange}>
//               <option value="">Select Country</option>
//               <option value="us">United States</option>
//               <option value="ca">Canada</option>
//               <option value="uk">United Kingdom</option>
//               {/* Add more country options as needed */}
//             </select>
//             {errors.country && <span className={styles.errorMessage}>{errors.country}</span>}
//           </div>
//           <p>
//             By providing your card information, you allow Protowcall Inc. to charge your card for
//             future payments in accordance with their terms.
//           </p>
//           <div className={styles.buttonGroup}>
//             <button onClick={handleCancelClick} className={styles.cancelButton}>
//               CANCEL
//             </button>
//             <button onClick={handlePaymentSubmit} className={styles.paybutton}>
//               PAY
//             </button>
//           </div>
//         </div>
//       )}
//       {paymentSubmitted && (
//         <div className={styles.successMessage}>
//           <p>Payment submitted successfully!</p>
//           {/* Add additional content or navigation options */}
//         </div>
//       )}
//       <ToastContainer />
//     </div>

//   );
// };

// export default PaymentCard;

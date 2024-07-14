/* eslint-disable @next/next/no-img-element */
import {
    faArrowLeft,
    faChevronDown,
    faChevronUp,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import styles from "@/components/map/styles.module.scss";

  
  import {
    setPreviousSelectionComponent,
    setVehicleDetails,
  } from "@/redux/slices/userSelection"; // Adjust the path as needed
  



const VehicalDetail =()=>{
    const dispatch = useDispatch();
    const [vin, setVin] = useState("");
    const [model, setModel] = useState("");
    const [make, setMake] = useState("");
    const [year, setYear] = useState("");
    const [color, setColor] = useState("");
    const [licensePlate, setLicensePlate] = useState("");
    const [vinInputValue, setVinInputValue] = useState("");
    const [state, setState] = useState("pickup");
    const [isExpanded, setIsExpanded] = useState(false); // State for expanding/collapsing the search box
    const [isMobile, setIsMobile] = useState(false);
    const userSelection = JSON.parse(localStorage.getItem("userSelection")) || {};
    const { vehicleDetails } = userSelection;
  
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
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
    )
}


export default VehicalDetail;
import React, { useState } from "react";
import styles from "./services.module.scss"; // Import CSS styles

const ServicesPage = () => {
  const [selectedServices, setSelectedServices] = useState([]);

  const handleServiceToggle = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = () => {
    // Handle submission of selected services
    console.log("Selected services:", selectedServices);
    // Implement logic to proceed further after selecting services
  };

  return (
    <div className={styles.servicesContainer}>
      <h3>Select Services</h3>
      <div className={styles.servicesList}>
        <div
          className={`${styles.serviceItem} ${
            selectedServices.includes("Service A") ? styles.selected : ""
          }`}
          onClick={() => handleServiceToggle("Service A")}
        >
          Service A
        </div>
        <div
          className={`${styles.serviceItem} ${
            selectedServices.includes("Service B") ? styles.selected : ""
          }`}
          onClick={() => handleServiceToggle("Service B")}
        >
          Service B
        </div>
        <div
          className={`${styles.serviceItem} ${
            selectedServices.includes("Service C") ? styles.selected : ""
          }`}
          onClick={() => handleServiceToggle("Service C")}
        >
          Service C
        </div>
      </div>
      <button
        className={styles.submitButton}
        onClick={handleSubmit}
        disabled={selectedServices.length === 0}
      >
        Submit
      </button>
    </div>
  );
};

export default ServicesPage;

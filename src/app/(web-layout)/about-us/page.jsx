// import ServiceHistory from "app/(web-layout)/about-us/servicehistory";
"use client"
import ServiceHistory from './servicehistory/page';
import React, { useState } from 'react';
import styles from "../service.module.scss"; // Adjust path as needed

const AboutUs = () => {
  const [isExporting, setIsExporting] = useState(false);

  const handleExportClick = () => {
    // Simulate export process (replace with actual export logic)
    setIsExporting(true);
    setTimeout(() => {
      // Mock export completion after 2 seconds
      setIsExporting(false);
      // Implement actual export logic here
      console.log('Export CSV logic goes here');
    }, 2000);
  };

  return (
    <div>
      <div className={styles.containerServiceHistory}>
        <div className={styles.heading}> 
          Service History
          <button
            className={styles.exportButton}
            onClick={handleExportClick}
            disabled={isExporting}
          >
            {isExporting ? 'Exporting...' : 'EXPORT CSV'}
          </button>
        </div>
        
        {/* Render ServiceHistory component */}
        <ServiceHistory />
      </div>
    </div>
  );
};

export default AboutUs;
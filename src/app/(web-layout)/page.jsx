
"use client"


import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faChevronUp, faChevronDown, faArrowsAltH , faTimes , faComment, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import styles from './service.module.scss';
// import styles from "@/app/globals.scss";


const Map = dynamic(() => import('../../components/map/map'), { ssr: false });

const Home = () => {
  // console.log("Google Maps API Key:", process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);
  const [isServiceBoxExpanded, setIsServiceBoxExpanded] = useState(false);
  const [isInnerBoxExpanded, setIsInnerBoxExpanded] = useState(false);

  const toggleServiceBox = () => {
    setIsServiceBoxExpanded(!isServiceBoxExpanded);
  };


  const toggleInnerBox = () => {
    setIsInnerBoxExpanded(!isInnerBoxExpanded);
    
  };

  
  const handleCancelClick = () => {
    setIsInnerBoxExpanded(false)
  };


  return (
    <div className="flex flex-col w-full h-full overflow-hidden">
      <Map />
      <div className={`${styles.serviceBox} ${isServiceBoxExpanded ? styles.expanded : ''}`}>
        <div className={styles.serviceBoxHeader} onClick={toggleServiceBox}>
          {!isServiceBoxExpanded && (
            <>
              <h3 className={styles.serviceBoxTitle}>Ongoing Service</h3>
              <FontAwesomeIcon icon={faChevronUp} className={styles.expandIconOngoing} />
            </>
          )}
          {isServiceBoxExpanded && (
            <FontAwesomeIcon icon={faTimes} className={styles.closeIcon} onClick={toggleServiceBox} />
          )}
        </div>
        {isServiceBoxExpanded && (
          <div className={styles.serviceBoxContent}>
            <h2>Ongoing Service</h2>
            <p>List of all ongoing services</p>
            <div className={`${styles.innerBox} ${isInnerBoxExpanded ? styles.innerBoxExpanded : ''}`}>
              <div className={styles.innerBoxHeader} onClick={toggleInnerBox}>
                <h3 className={styles.serviceBoxTitle}>Tow Required</h3>
                <div className={styles.assignInfo}>
                  <span>Assign to: Name</span>
                  <div className={styles.phoneInfo}>
                    <FontAwesomeIcon icon={faPhone} className={styles.phoneIcon} />
                    <span>Phone Number</span>
                  </div>
                </div>
                <FontAwesomeIcon
                  icon={isInnerBoxExpanded ? faChevronDown : faChevronUp}
                  className={styles.expandIconInner}
                />
              </div>
            </div>
            {isInnerBoxExpanded && (
  <div className={`${styles.innerBoxContent} ${isInnerBoxExpanded ? styles.scrollable : ''}`}>
    <h3 className={styles.innerBoxHeading}>Ongoing Service</h3>
    <div className={styles.contentWrapper}>
      <div className={styles.leftSide}>
        <img src="/images/logo.jpg" alt="Service" className={styles.image} />
        <h4 className={styles.imageTitle}>Image Title</h4>
        <p className={styles.paragraph}>Service Status</p>
         <p className={styles.paragraph}>Pending</p>
        <button className={styles.cancelButton}>Cancel Order</button>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.buttonGroup}>
          <button className={styles.chatButton}>
            <FontAwesomeIcon icon={faComment} className={styles.icon} /> Chat
          </button>
          <button className={styles.callButton} onClick={handleCancelClick}>
            <FontAwesomeIcon icon={faPhone} className={styles.icon} /> Call
          </button>
        </div>
        {/* <Map /> */}
      </div>
    </div>
  </div>
)}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

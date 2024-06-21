
"use client"
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown, faArrowsAltH , faTimes} from '@fortawesome/free-solid-svg-icons';
import styles from './service.module.scss';
// import styles from "@/app/globals.scss";


const Map = dynamic(() => import('../../components/map/map'), { ssr: false });

const Home = () => {
  // console.log("Google Maps API Key:", process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);
  const [isServiceBoxExpanded, setIsServiceBoxExpanded] = useState(false);
  const toggleServiceBox = () => {
    setIsServiceBoxExpanded(!isServiceBoxExpanded);
  };
  return (
    <div className="flex flex-col w-full h-full overflow-hidden">
      {/* <div className="border border-indigo-600 ..."> */}
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
            <h2>Pending Service Page</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

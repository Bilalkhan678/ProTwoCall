
// "use client"


// import React, { useState , useEffect} from 'react';
// import dynamic from 'next/dynamic';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone, faChevronUp, faChevronDown, faArrowsAltH , faTimes , faComment, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
// import styles from './service.module.scss';
// // import styles from "@/app/globals.scss";


// const Map = dynamic(() => import('../../components/map/map'), { ssr: false });

// const Home = () => {
//   // console.log("Google Maps API Key:", process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);
//   const [isServiceBoxExpanded, setIsServiceBoxExpanded] = useState(false);
//   const [isInnerBoxExpanded, setIsInnerBoxExpanded] = useState(false);

//   const toggleServiceBox = () => {
//     console.log('toggleServiceBox called'); // Debugging log
//     setIsServiceBoxExpanded(!isServiceBoxExpanded);
//   };
  

//   const toggleInnerBox = () => {
//     console.log('toggleInnerBox called'); // Debugging log
//     setIsInnerBoxExpanded(!isInnerBoxExpanded);
//   };

//   const handleCancelClick = () => {
//     console.log('handleCancelClick called'); // Debugging log
//     setIsInnerBoxExpanded(false);
//     setIsServiceBoxExpanded(false);
//   };

//   useEffect(() => {
//     console.log('State changed: ', {
//       isServiceBoxExpanded,
//       isInnerBoxExpanded
//     });
//   }, [isServiceBoxExpanded, isInnerBoxExpanded]);

//   return (
//     <div className="flex flex-col w-full h-full overflow-hidden">
//       <Map />
//       <div className={`${styles.serviceBox} ${isServiceBoxExpanded ? styles.expanded : ''}`}>
//         <div className={styles.serviceBoxHeader} onClick={toggleServiceBox}>
//           {!isServiceBoxExpanded && (
//             <>
//               <h3 className={styles.MapserviceBoxTitle}>Ongoing Service</h3>
//               <FontAwesomeIcon icon={faChevronUp} className={styles.expandIconOngoing} />
//             </>
//           )}
//           {isServiceBoxExpanded && (
//             <FontAwesomeIcon icon={faTimes} className={styles.closeIcon} onClick={toggleServiceBox} />
//             // <button onClick={toggleServiceBox} className={styles.cancelButtonTop}>CLOSE</button>
//             // <button onClick={handleCancelClick} className={styles.cancelButtonTop}>CLOSE</button>
//           )}
//         </div>
//         {isServiceBoxExpanded && (
//           <div className={styles.serviceBoxContent}>
//             <h2>Ongoing Service</h2>
//             <p>List of all ongoing services</p>
//             <div className={`${styles.innerBox} ${isInnerBoxExpanded ? styles.innerBoxExpanded : ''}`}>
//               <div className={styles.innerBoxHeader} onClick={toggleInnerBox}>
//                 <h3 className={styles.serviceBoxTitle}>Tow Required</h3>
//                 <div className={styles.assignInfo}>
//                   <span>Assign to: Name</span>
//                   <div className={styles.phoneInfo}>
//                     <FontAwesomeIcon icon={faPhone} className={styles.phoneIcon} />
//                     <span>Phone Number</span>
//                   </div>
//                 </div>
//                 <FontAwesomeIcon
//                   icon={isInnerBoxExpanded ? faChevronDown : faChevronUp}
//                   className={styles.expandIconInner}
//                 />
//               </div>
//             </div>
//             {isInnerBoxExpanded && (
//   <div className={`${styles.innerBoxContent} ${isInnerBoxExpanded ? styles.scrollable : ''}`}>
//     <h3 className={styles.innerBoxHeading}>Ongoing Service</h3>
//     <div className={styles.contentWrapper}>
//       <div className={styles.leftSide}>
//         <img src="/images/tow.png" alt="Service" className={styles.image} />
//         <h4 className={styles.imageTitle}>TOW REQUIRED</h4>
//         <p className={styles.paragraph}>Service Status</p>
//          <p className={styles.paragraph}>Pending</p>
//         <button className={styles.cancelButton}>Cancel Order</button>
//       </div>
//       <div className={styles.rightSide}>
//         <div className={styles.buttonGroup}>
//           <button className={styles.chatButton}>
//             <FontAwesomeIcon icon={faComment} className={styles.icon} /> Chat
//           </button>
//           <button className={styles.callButton} onClick={handleCancelClick}>
//             <FontAwesomeIcon icon={faPhone} className={styles.icon} /> Call
//           </button>
//         </div>
//         {/* <Map /> */}
//       </div>
//     </div>
//   </div>
// )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;








// "use client"

// import React, { useState, useEffect } from 'react';
// import dynamic from 'next/dynamic';
// import { Accordion, AccordionSummary, AccordionDetails, Typography, Button, Box } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import PhoneIcon from '@mui/icons-material/Phone';
// import CommentIcon from '@mui/icons-material/Comment';
// import styles from './service.module.scss';

// const Map = dynamic(() => import('../../components/map/map'), { ssr: false });

// const Home = () => {
//   const [isServiceBoxExpanded, setIsServiceBoxExpanded] = useState(false);
//   const [isInnerBoxExpanded, setIsInnerBoxExpanded] = useState(false);

//   const handleCancelClick = () => {
//     setIsInnerBoxExpanded(false);
//     setIsServiceBoxExpanded(false);
//   };

//   useEffect(() => {
//     console.log('State changed: ', {
//       isServiceBoxExpanded,
//       isInnerBoxExpanded
//     });
//   }, [isServiceBoxExpanded, isInnerBoxExpanded]);

//   return (
//     <Box className="relative w-full h-full overflow-hidden">
//       <Map />
//       <Box className={`${styles.serviceBox} ${isServiceBoxExpanded ? styles.expanded : ''}`} sx={{ position: 'absolute', bottom: 0, left: '', right: 0 }}>
//         <Accordion expanded={isServiceBoxExpanded} onChange={() => setIsServiceBoxExpanded(!isServiceBoxExpanded)}>
//           <AccordionSummary
//             expandIcon={!isServiceBoxExpanded && <ExpandMoreIcon />}
//             aria-controls="service-content"
//             id="service-header"
//             onClick={(e) => e.stopPropagation()} // Prevent accordion collapse/expand when icon is clicked
//             className={styles.serviceBoxHeader}
//           >
//             {!isServiceBoxExpanded && (
//               <>
//                 <Typography variant="h6" className={styles.MapserviceBoxTitle}>Ongoing Service</Typography>
//               </>
//             )}
//             {isServiceBoxExpanded && (
              
//               <Button
//                 onClick={(e) => {
//                   e.stopPropagation(); // Prevent accordion from toggling
//                   setIsServiceBoxExpanded(false);
//                 }}
//                 sx={{ color: 'red', backgroundColor: 'transparent', textTransform: 'none', marginLeft: 'auto', border:'1px solid red' }}
//               >
//                 Close
//               </Button>
//             )}
//           </AccordionSummary>
//           <AccordionDetails sx={{
//             height:'100vh', minWidth:'100vh'
//           }}>
//             {/* <Typography variant="h5" className="font-medium mb-24 border border-indigo-600 ">Ongoing Service</Typography> */}
//             <Typography variant="h5"
//                 className="font-medium mb-3 ">Ongoing Service</Typography>
//             <Typography className="mb-5 text-gray-500 ">List of all ongoing services</Typography>
//             <Accordion expanded={isInnerBoxExpanded} onChange={() => setIsInnerBoxExpanded(!isInnerBoxExpanded)}>
//               <AccordionSummary
//                 expandIcon={<ExpandMoreIcon />}
//                 aria-controls="inner-content"
//                 id="inner-header"
//               >
//                 <Box className={styles.innerBoxHeader}>
//                   <Typography variant="h6" className={styles.serviceBoxTitle}>Tow Required</Typography>
//                   {/* <Box className={styles.assignInfo}>
//                     <Typography>Assign to: Name</Typography>
//                     <Box className={styles.phoneInfo}>
//                       <PhoneIcon className={styles.phoneIcon} />
//                       <Typography>Phone Number</Typography>
//                     </Box>
//                   </Box> */}
//                 </Box>
//               </AccordionSummary>
//               <AccordionDetails className={styles.innerBoxContent}>
//                 <Typography variant="h6" className={styles.innerBoxHeading}>Ongoing Service</Typography>
//                 <Box className={styles.contentWrapper}>
//                   <Box className={styles.leftSide}>
//                     <img src="/images/tow.png" alt="Service" className={styles.image} />
//                     <Typography variant="h6"  className={styles.imageTitle}sx={{
//                       marginTop:"10px "
//                     }}>TOW REQUIRED</Typography>
//                     <Typography className={styles.paragraph}>Service Status</Typography>
//                     <Typography className={styles.paragraph}>Pending</Typography>
//                     <Button variant="contained" className={styles.cancelButton} onClick={handleCancelClick}
//                     sx={{
//                       marginTop:'20px'
//                     }}
//                     >Cancel Order</Button>
//                   </Box>
//                   <Box className={styles.rightSide}>
//                     <Box className={styles.buttonGroup}>
//                       <Button variant="contained" className={styles.chatButton}>
//                         <CommentIcon className={styles.icon} /> Chat
//                       </Button>
//                       <Button variant="contained" className={styles.callButton} onClick={handleCancelClick}>
//                         <PhoneIcon className={styles.icon} /> Call
//                       </Button>
//                     </Box>
//                   </Box>
//                 </Box>
//               </AccordionDetails>
//             </Accordion>
//           </AccordionDetails>
//         </Accordion>
//       </Box>
//     </Box>
//   );
// };

// export default Home;




































// "use client"
// import React, { useState, useEffect } from 'react';
// import dynamic from 'next/dynamic';
// import {Box} from '@mui/material';


// const Map = dynamic(() => import('../../components/map/map'), { ssr: false });
// const OngoingService = dynamic(() => import('../../components/ongingService/ongoingservice'), { ssr: false });

// const Home = () => {
//   return (
//     <Box className="relative w-full h-full overflow-hidden">
//       <Map/>
//       <OngoingService/>
//     </Box>
//   );
// };

// export default Home;



"use client"
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Box } from '@mui/material';
import axios from 'axios';

const Map = dynamic(() => import('../../components/map/map'), { ssr: false });
const OngoingService = dynamic(() => import('../../components/ongingService/ongoingservice'), { ssr: false });

const Home = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem("token");
      console.log("Token ongoing service:", token); // Log the token

      console.log('Fetching orders...');

      try {
        const response = await axios.get('https://api.dev.protowcall.ca/api/v1/orders/customer/ongoing?page=1&limit=100', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Add your token here
          }
        });

        console.log("Response ongoing service:", response); // Log the entire response
        if (response.status === 200) {
          console.log("Orders data Ongoing:", response.data.data); // Log the orders data
          setOrders(response.data.data); // Assuming orders are under response.data.data
        } else {
          console.error('Unexpected response status:', response.status);
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
        if (error.response) {
          console.error('Response data:', error.response.data);
          console.error('Response status:', error.response.status);
          console.error('Response headers:', error.response.headers);
        } else if (error.request) {
          console.error('Request data:', error.request);
        } else {
          console.error('Error message:', error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <Box className="relative w-full h-full overflow-hidden">
      <Map />
      <OngoingService orders={orders} loading={loading} />
    </Box>
  );
};

export default Home;

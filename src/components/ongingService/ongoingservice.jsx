

"use client"
import dynamic from 'next/dynamic';
import React, { useState, useEffect } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Button, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PhoneIcon from '@mui/icons-material/Phone';
import CommentIcon from '@mui/icons-material/Comment';
import styles from '../../app/(web-layout)/service.module.scss';

const OngoingService = ({ orders, loading }) => {
  const [isServiceBoxExpanded, setIsServiceBoxExpanded] = useState(false);
  const [isInnerBoxExpanded, setIsInnerBoxExpanded] = useState(false);
    const imageBaseURL = 'https://dewnj7prds854.cloudfront.net/';


  const handleCancelClick = () => {
    setIsInnerBoxExpanded(false);
    setIsServiceBoxExpanded(false);
  };

  useEffect(() => {
    console.log('State changed: ', {
      isServiceBoxExpanded,
      isInnerBoxExpanded,
      orders // Log the orders state whenever it changes
    });
  }, [isServiceBoxExpanded, isInnerBoxExpanded, orders]);

  return (
    <Box className={`${styles.serviceBox} ${isServiceBoxExpanded ? styles.expanded : ''}`} sx={{ position: 'absolute', bottom: 0, left: '', right: 0 }}>
      <Accordion 
        expanded={isServiceBoxExpanded} 
        onChange={() => setIsServiceBoxExpanded(!isServiceBoxExpanded)}
        className={styles.customAccordion}
      >
        <AccordionSummary
          expandIcon={!isServiceBoxExpanded && <ExpandMoreIcon className={styles.expandMoreIcon} />}
          aria-controls="service-content"
          id="service-header"
          onClick={(e) => e.stopPropagation()} // Prevent accordion collapse/expand when icon is clicked
          className={styles.serviceBoxHeader}
        >
          {!isServiceBoxExpanded && (
            <>
              <Typography variant="h6" className={styles.MapserviceBoxTitle}>Ongoing Services</Typography>
            </>
          )}
          {isServiceBoxExpanded && (
            <Button
              onClick={(e) => {
                e.stopPropagation(); // Prevent accordion from toggling
                setIsServiceBoxExpanded(false);
              }}
              sx={{ color: 'red', backgroundColor: 'transparent', textTransform: 'none', marginLeft: 'auto', border: '1px solid red' }}
            >
              Close
            </Button>
          )}
        </AccordionSummary>
        <AccordionDetails className={styles.customAccordionDetails}>
          <Typography variant="h5" className="font-medium mb-3">Ongoing Services</Typography>
          <Typography className="mb-5 text-gray-500">List of all ongoing services</Typography>
          {loading ? (
            <Typography>Loading...</Typography>
          ) : orders.length > 0 ? (
            orders.map((order, index) => (
              <Accordion key={index} expanded={isInnerBoxExpanded} onChange={() => setIsInnerBoxExpanded(!isInnerBoxExpanded)}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className={styles.expandMoreIcon} />}
                  aria-controls="inner-content"
                  id="inner-header"
                >
                  <Box className={styles.innerBoxHeader}>
                    <Typography variant="h6" className={styles.serviceBoxTitle}>{order.service.title}   {order.status}</Typography>

                    {/* <Typography variant="h6" className={styles.serviceBoxTitle}>Order ID: {order._id}</Typography> */}

                  </Box>
                </AccordionSummary>
                <AccordionDetails className={styles.innerAccordionDetails}>
                  <Typography variant="h6" className={styles.innerBoxHeading}>Ongoing Service</Typography>
                  <Box className={styles.contentWrapper}>
                    <Box className={styles.leftSide}>
                    <img src={`${imageBaseURL}${order.service.image}`} alt="Service" className={styles.image} />
                      <Typography variant="h6" className={styles.imageTitle} sx={{ marginTop: "10px" }}>{order.service.title}</Typography>
                      {/* <Typography className={styles.paragraph}>Service Status</Typography> */}
                      <Typography className={styles.paragraph}>{order.status}</Typography>
                      <Button variant="contained" className={styles.cancelButton} onClick={handleCancelClick} sx={{ marginTop: '20px' }}>Cancel Order</Button>
                    </Box>
                    <Box className={styles.rightSide}>
                      <Box className={styles.buttonGroup}>
                        <Button variant="contained" className={styles.chatButton}>
                          <CommentIcon className={styles.icon} /> Chat
                        </Button>
                        <Button variant="contained" className={styles.callButton} onClick={handleCancelClick}>
                          <PhoneIcon className={styles.icon} /> Call
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </AccordionDetails>
              </Accordion>
            ))
          ) : (
            <Typography>No ongoing services</Typography>
          )}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default OngoingService;



















// "use client"
// import dynamic from 'next/dynamic';
// import React, { useState, useEffect } from 'react';
// import { Accordion, AccordionSummary, AccordionDetails, Typography, Button, Box } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import PhoneIcon from '@mui/icons-material/Phone';
// import CommentIcon from '@mui/icons-material/Comment';
// import axios from 'axios';
// import styles from '../../app/(web-layout)/service.module.scss';

// const OngingService = () => {
//   const [isServiceBoxExpanded, setIsServiceBoxExpanded] = useState(false);
//   const [isInnerBoxExpanded, setIsInnerBoxExpanded] = useState(false);
//   const [orders, setOrders] = useState([]); 
//   const [loading, setLoading] = useState(true); 

//   useEffect(() => {
//     const fetchOrders = async () => {
//       const token = localStorage.getItem("token");
//       console.log("Token ongoing service:", token);
//       console.log('Fetching orders...');

//       try {
//         const response = await axios.get('https://api.dev.protowcall.ca/api/v1/orders/customer/ongoing?page=1&limit=100', {
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${token}`, 
//           }
//         });

//         console.log("Response Ongoing api:", response);
//         if (response.status === 200) { 
//           console.log("Orders data:", response.data); 
//           setOrders(response.data); 
//         } else {
//           console.error('Unexpected response status:', response.status);
//         }
//       } catch (error) {
//         console.error('Error fetching orders:', error);
//         if (error.response) {
//           console.error('Response data:', error.response.data);
//           console.error('Response status:', error.response.status);
//           console.error('Response headers:', error.response.headers);
//         } else if (error.request) {
//           console.error('Request data:', error.request);
//         } else {
//           console.error('Error message:', error.message);
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, []);

//   const handleCancelClick = () => {
//     setIsInnerBoxExpanded(false);
//     setIsServiceBoxExpanded(false);
//   };

//   useEffect(() => {
//     console.log('State changed: ', {
//       isServiceBoxExpanded,
//       isInnerBoxExpanded,
//       orders
//     });
//   }, [isServiceBoxExpanded, isInnerBoxExpanded]);

//   return (
//     <Box className={`${styles.serviceBox} ${isServiceBoxExpanded ? styles.expanded : ''}`} sx={{ position: 'absolute', bottom: 0, left: '', right: 0 }}>
//       <Accordion 
//         expanded={isServiceBoxExpanded} 
//         onChange={() => setIsServiceBoxExpanded(!isServiceBoxExpanded)}
//         className={styles.customAccordion}
//       >
//         <AccordionSummary
//           expandIcon={!isServiceBoxExpanded && <ExpandMoreIcon className={styles.expandMoreIcon} />}
//           aria-controls="service-content"
//           id="service-header"
//           onClick={(e) => e.stopPropagation()} // Prevent accordion collapse/expand when icon is clicked
//           className={styles.serviceBoxHeader}
//         >
//           {!isServiceBoxExpanded && (
//             <>
//               <Typography variant="h6" className={styles.MapserviceBoxTitle}>Ongoing Services</Typography>
//             </>
//           )}
//           {isServiceBoxExpanded && (
//             <Button
//               onClick={(e) => {
//                 e.stopPropagation(); // Prevent accordion from toggling
//                 setIsServiceBoxExpanded(false);
//               }}
//               sx={{ color: 'red', backgroundColor: 'transparent', textTransform: 'none', marginLeft: 'auto', border: '1px solid red' }}
//             >
//               Close
//             </Button>
//           )}
//         </AccordionSummary>
//         <AccordionDetails className={styles.customAccordionDetails}>
//           <Typography variant="h5" className="font-medium mb-3">Ongoing Services</Typography>
//           <Typography className="mb-5 text-gray-500">List of all ongoing services</Typography>
//           {loading ? (
//             <Typography>Loading...</Typography>
//           ) : orders.length > 0 ? (
//             orders.map((order) => (
//               <Accordion key={order._id} expanded={isInnerBoxExpanded} onChange={() => setIsInnerBoxExpanded(!isInnerBoxExpanded)}>
//                 <AccordionSummary
//                   expandIcon={<ExpandMoreIcon className={styles.expandMoreIcon} />}
//                   aria-controls="inner-content"
//                   id="inner-header"
//                 >
//                   <Box className={styles.innerBoxHeader}>
//                     <Typography variant="h6" className={styles.serviceBoxTitle}>Order ID: {order._id}</Typography>
//                   </Box>
//                 </AccordionSummary>
//                 <AccordionDetails className={styles.innerAccordionDetails}>
//                   <Typography variant="h6" className={styles.innerBoxHeading}>Ongoing Service</Typography>
//                   <Box className={styles.contentWrapper}>
//                     <Box className={styles.leftSide}>
//                       <img src={`${order.service.image}`} alt="Service" className={styles.image} />
//                       <Typography variant="h6" className={styles.imageTitle} sx={{ marginTop: "10px" }}>{order.service.title}</Typography>
//                       <Typography className={styles.paragraph}>Service Status</Typography>
//                       <Typography className={styles.paragraph}>{order.status}</Typography>
//                       <Typography className={styles.paragraph}>Customer Note</Typography>
//                       <Typography className={styles.paragraph}>{order.customerNote}</Typography>
//                       <Button variant="contained" className={styles.cancelButton} onClick={handleCancelClick} sx={{ marginTop: '20px' }}>Cancel Order</Button>
//                     </Box>
//                     <Box className={styles.rightSide}>
//                       <Box className={styles.buttonGroup}>
//                         <Button variant="contained" className={styles.chatButton}>
//                           <CommentIcon className={styles.icon} /> Chat
//                         </Button>
//                         <Button variant="contained" className={styles.callButton} onClick={handleCancelClick}>
//                           <PhoneIcon className={styles.icon} /> Call
//                         </Button>
//                       </Box>
//                     </Box>
//                   </Box>
//                 </AccordionDetails>
//               </Accordion>
//             ))
//           ) : (
//             <Typography>No ongoing services</Typography>
//           )}
//         </AccordionDetails>
//       </Accordion>
//     </Box>
//   );
// }

// export default OngingService;









// "use client"
// import dynamic from 'next/dynamic';
// import React, { useState, useEffect } from 'react';
// import { Accordion, AccordionSummary, AccordionDetails, Typography, Button, Box } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import PhoneIcon from '@mui/icons-material/Phone';
// import CommentIcon from '@mui/icons-material/Comment';
// import styles from '../../app/(web-layout)/service.module.scss';


// const OngingService=()=>{
//     const [isServiceBoxExpanded, setIsServiceBoxExpanded] = useState(false);
//     const [isInnerBoxExpanded, setIsInnerBoxExpanded] = useState(false);
//     const [paymentSubmitted, setPaymentSubmitted] = useState(false); // State to control payment submission
  
//     const handleCancelClick = () => {
//       setIsInnerBoxExpanded(false);
//       setIsServiceBoxExpanded(false);
//     };
  
//     useEffect(() => {
//       console.log('State changed: ', {
//         isServiceBoxExpanded,
//         isInnerBoxExpanded
//       });
//     }, [isServiceBoxExpanded, isInnerBoxExpanded]);







// return (
//     <Box className={`${styles.serviceBox} ${isServiceBoxExpanded ? styles.expanded : ''}`} sx={{ position: 'absolute', bottom: 0, left: '', right: 0 }}>
//     <Accordion 
//       expanded={isServiceBoxExpanded} 
//       onChange={() => setIsServiceBoxExpanded(!isServiceBoxExpanded)}
//       className={styles.customAccordion}
//     >
//       <AccordionSummary
//         expandIcon={!isServiceBoxExpanded && <ExpandMoreIcon className={styles.expandMoreIcon} />}
//         aria-controls="service-content"
//         id="service-header"
//         onClick={(e) => e.stopPropagation()} // Prevent accordion collapse/expand when icon is clicked
//         className={styles.serviceBoxHeader}
//       >
//         {!isServiceBoxExpanded && (
//           <>
//             <Typography variant="h6" className={styles.MapserviceBoxTitle}>Ongoing Services</Typography>
//           </>
//         )}
//         {isServiceBoxExpanded && (
//           <Button
//             onClick={(e) => {
//               e.stopPropagation(); // Prevent accordion from toggling
//               setIsServiceBoxExpanded(false);
//             }}
//             sx={{ color: 'red', backgroundColor: 'transparent', textTransform: 'none', marginLeft: 'auto', border: '1px solid red' }}
//           >
//             Close
//           </Button>
//         )}
//       </AccordionSummary>
//       {/* <AccordionDetails sx={{ height: '100vh', minWidth: '100vh' }}> */}
//           <AccordionDetails className={styles.customAccordionDetails}>
//         <Typography variant="h5" className="font-medium mb-3">Ongoing Service</Typography>
//         <Typography className="mb-5 text-gray-500">List of all ongoing services</Typography>
//         <Accordion expanded={isInnerBoxExpanded} onChange={() => setIsInnerBoxExpanded(!isInnerBoxExpanded)}>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon className={styles.expandMoreIcon} />}
//             aria-controls="inner-content"
//             id="inner-header"
//           >
//             <Box className={styles.innerBoxHeader}>
//               <Typography variant="h6" className={styles.serviceBoxTitle}>Tow Required</Typography>
//             </Box>
//           </AccordionSummary>
//           {/* <AccordionDetails className={styles.innerBoxContent}> */}
//           <AccordionDetails className={styles.innerAccordionDetails}>
//             <Typography variant="h6" className={styles.innerBoxHeading}>Ongoing Service</Typography>
//             <Box className={styles.contentWrapper}>
//               <Box className={styles.leftSide}>
//                 <img src="/images/tow.png" alt="Service" className={styles.image} />
//                 <Typography variant="h6" className={styles.imageTitle} sx={{ marginTop: "10px" }}>TOW REQUIRED</Typography>
//                 <Typography className={styles.paragraph}>Service Status</Typography>
//                 <Typography className={styles.paragraph}>Pending</Typography>
//                 <Button variant="contained" className={styles.cancelButton} onClick={handleCancelClick} sx={{ marginTop: '20px' }}>Cancel Order</Button>
//               </Box>
//               <Box className={styles.rightSide}>
//                 <Box className={styles.buttonGroup}>
//                   <Button variant="contained" className={styles.chatButton}>
//                     <CommentIcon className={styles.icon} /> Chat
//                   </Button>
//                   <Button variant="contained" className={styles.callButton} onClick={handleCancelClick}>
//                     <PhoneIcon className={styles.icon} /> Call
//                   </Button>
//                 </Box>
//               </Box>
//             </Box>
//           </AccordionDetails>
//         </Accordion>
//       </AccordionDetails>
//     </Accordion>
//   </Box>
// );
// }


// export default OngingService;
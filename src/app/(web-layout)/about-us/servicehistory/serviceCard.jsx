// // import React from 'react';
// // import styles from '../../service.module.scss';

// // const ServiceCard = ({ service }) => {
// //   return (
// //     <div className={styles.card}>
// //       <h2 className={styles.cardTitle}>{service.title}</h2>
// //       <p className={styles.cardDetail}><strong>Service Name:</strong> {service.serviceName}</p>
// //       <p className={styles.cardDetail}><strong>Insurance Name:</strong> {service.insuranceName}</p>
// //       <p className={styles.cardDetail}><strong>Status:</strong> {service.status}</p>
// //       <p className={styles.cardDetail}><strong>Details:</strong> {service.details}</p>
// //     </div>
// //   );
// // };

// // export default ServiceCard;


// import Link from 'next/link';
// import styles from '../../service.module.scss';

// const ServiceCard = ({ service }) => {
//   // Determine background color based on status
//   let statusColor = '';
//   switch (service.status.toLowerCase()) {
//     case 'completed':
//       statusColor = '#4CAF50'; // Green color for Completed status
//       break;
//     case 'pending':
//       statusColor = '#FFC107'; // Yellow color for Pending status
//       break;
//     default:
//       statusColor = '#f9f9f9'; // Default background color
//       break;
//   }

//   return (
//     <Link href={`/servicesH/${service.id}`} passHref>
//       <a className={styles.card} style={{ backgroundColor: statusColor }}>
//         <div className={styles.cardContent}>
//           <h2 className={styles.cardTitle}>{service.title}</h2>
//           <p className={styles.serviceName}><strong>Service Name:</strong> {service.serviceName}</p>
//           <p className={styles.insuranceName}><strong>Insurance Name:</strong> {service.insuranceName}</p>
//           <p className={styles.status}><strong>Status:</strong> {service.status}</p>
//         </div>
//       </a>
//     </Link>
//   );
// };

// export default ServiceCard;


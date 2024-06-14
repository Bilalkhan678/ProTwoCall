// // src/app/(web-layout)/about-us/cards.jsx
// import { useState } from 'react';
// import Link from 'next/link';

// const ServiceCard = ({ id, title, serviceName, status, details }) => {
//   const [expanded, setExpanded] = useState(false);

//   const toggleDetails = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <div className="service-card">
//       <h3>{title}</h3>
//       <p>Service Name: {serviceName}</p>
//       <p>Status: {status}</p>
//       {expanded && (
//         <div className="details">
//           <p>Details: {details}</p>
//         </div>
//       )}
//       <button onClick={toggleDetails}>{expanded ? 'Hide Details' : 'Show Details'}</button>
//           <Link href={`/cards/${id}`} legacyBehavior>
//         <a>View Details</a>
//       </Link>
//     </div>
//   );
// };

// export default ServiceCard;

// import Link from "next/link";
// import profile from "./profile";
// import dynamic from 'next/dynamic';



// const profile = dynamic(() => import('../../../components/profile/profile'), { ssr: false });


// const Users = () => {
//   // console.log("Google Maps API Key:", process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);
//   return (
//     <div>
//       <h1> bilal</h1>
//     <profile/>
//     </div>
//   );
// };

// export default Users;

// i created in app directory (web-layout) folder , in this folder i created two sub folder about-us and users , i am working in user 

// import Link from "next/link";

// import Profile from "app/(profile-layout)/profile/page";
import Profile from "app/(web-layout)/users/profile";
// import ChangePassword from "app/(web-layout)/users/changepassword";
// import ChangePassword from "app/(profile-layout)/profile/ChangePassword";
// import Profile from "app/(profile-layout)/lay";
// import Profile from "@/components/profile/profile"

const users = () => {
  return (
    <div>
      {/* <h1>b</h1> */}
      <Profile/>
      {/* <ChangePassword/> */}
      {/* <h1>bilal</h1> */}
    </div>
  );
};

export default users;

// import profile from "../../(profile-layout)/profile";


// const Users = () => {
//   // console.log("Google Maps API Key:", process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);
//   console.log("click me to")
//   return (
//     <div className="flex flex-col w-full h-full overflow-hidden">
//       {/* <div className="border border-indigo-600 ..."> */}
//       {/* <Map /> */}
//       {/* <GoogleMaps/> */}
//       {/* </div> */}
//       <profile/>
//     </div>
//   );
// };

// export default Users;



// "use client";

// import React, { useState } from 'react';
// import Profile from './profile';
// import ChangePassword from './changepassword';
// import styles from './page.module.scss';
// import { FaUser, FaLock } from 'react-icons/fa';

// const Users = () => {
//   const [activePage, setActivePage] = useState('profile');

//   const renderPage = () => {
//     switch (activePage) {
//       case 'profile':
//         return <Profile />;
//       case 'changePassword':
//         return <ChangePassword />;
//       default:
//         return <Profile />;
//     }
//   };

//   return (
//     <div>
//       <nav className={styles.nav}>
//         <button
//           className={`${styles.button} ${activePage === 'profile' ? styles.active : ''}`}
//           onClick={() => setActivePage('profile')}
//         >
//           <FaUser className={styles.icon} /> Profile Info
//         </button>
//         <button
//           className={`${styles.button} ${activePage === 'changePassword' ? styles.active : ''}`}
//           onClick={() => setActivePage('changePassword')}
//         >
//           <FaLock className={styles.icon} /> Change Password
//         </button>
//       </nav>
//       {renderPage()}
//     </div>
//   );
// };

// export default Users;


// "use client"

// import { useState } from 'react';
// import styles from './profile.module.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

// const Profile = () => {
//     const [activeButton, setActiveButton] = useState('profileInfo');

//     return (
//         <div className={styles.container}>
//             {/* <div className={styles.heading}>
//                 <h1>Profile</h1>
//             </div> */}
//             <div className={styles.subcontainer}>
//                 <div className={styles.left_side}>
//                     <div className={styles.button_left}>
//                         <button
//                             className={`${styles.button} ${activeButton === 'profileInfo' ? styles.active : ''}`}
//                             onClick={() => setActiveButton('profileInfo')}
//                         >
//                             <FontAwesomeIcon icon={faUser} className={styles.icon} />
//                             Profile Info
//                         </button>
//                         <button
//                             className={`${styles.button} ${activeButton === 'changePassword' ? styles.active : ''}`}
//                             onClick={() => setActiveButton('changePassword')}
//                         >
//                             <FontAwesomeIcon icon={faLock} className={styles.icon} />
//                             Change Password
//                         </button>
//                     </div>
//                 </div>
//                 <div className={styles.right_side}>
//                     <div className={styles.profile}>
//                         <h3>User Detail</h3>
//                         <div className={styles.image}>
//                             <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Profile" />
//                         </div>
//                         <div className={styles.details}>
//                             <div className={styles.inputContainer}>
//                                 <input type="text" id="firstName" className={styles.input} required />
//                                 <label htmlFor="firstName" className={styles.label}>First Name</label>
//                             </div>
//                             <div className={styles.inputContainer}>
//                                 <input type="text" id="lastName" className={styles.input} required />
//                                 <label htmlFor="lastName" className={styles.label}>Last Name</label>
//                             </div>
//                         </div>
//                         <button className={styles.submitButton}>Update Profile</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Profile;


"use client";

import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import styles from './profile.module.scss';

const Profile = () => {
    const [activePage, setActivePage] = useState('profileInfo');

    const renderPage = () => {
        switch (activePage) {
            case 'profileInfo':
                return (
                    <div className={styles.profile}>
                        <h3>User Detail</h3>
                        <div className={styles.image}>
                            <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Profile" />
                        </div>
                        <div className={styles.details}>
                            <div className={styles.inputContainer}>
                                <input type="text" id="firstName" className={styles.input} required />
                                <label htmlFor="firstName" className={styles.label}>First Name</label>
                            </div>
                            <div className={styles.inputContainer}>
                                <input type="text" id="lastName" className={styles.input} required />
                                <label htmlFor="lastName" className={styles.label}>Last Name</label>
                            </div>
                        </div>
                        <button className={styles.submitButton}>Update Profile</button>
                    </div>
                );
            case 'changePassword':
                return (
                    <div className={styles.changePassword}>
                        <h3>Change Password</h3>
                        <div className={styles.inputContainer}>
                            <input type="password" id="currentPassword" className={styles.input} required />
                            <label htmlFor="currentPassword" className={styles.label}>Current Password</label>
                        </div>
                        <div className={styles.inputContainer}>
                            <input type="password" id="newPassword" className={styles.input} required />
                            <label htmlFor="newPassword" className={styles.label}>New Password</label>
                        </div>
                        <div className={styles.inputContainer}>
                            <input type="password" id="confirmPassword" className={styles.input} required />
                            <label htmlFor="confirmPassword" className={styles.label}>Confirm Password</label>
                        </div>
                        <button className={styles.submitButton}>Update Password</button>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.subcontainer}>
                <div className={styles.left_side}>
                    <div className={styles.button_left}>
                        <button
                            className={`${styles.button} ${activePage === 'profileInfo' ? styles.active : ''}`}
                            onClick={() => setActivePage('profileInfo')}
                        >
                            <FaUser className={styles.icon} />
                            Profile Info
                        </button>
                        <button
                            className={`${styles.button} ${activePage === 'changePassword' ? styles.active : ''}`}
                            onClick={() => setActivePage('changePassword')}
                        >
                            <FaLock className={styles.icon} />
                            Change Password
                        </button>
                    </div>
                </div>
                <div className={styles.right_side}>
                    {renderPage()}
                </div>
            </div>
        </div>
    );
};

export default Profile;

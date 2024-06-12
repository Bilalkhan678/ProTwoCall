
// import styles from './profile.module.scss'

// const Profile = () => {
//     return (
//     <div className={styles.container}>
//         <div className={styles.heading}>
//             <h1>Profile</h1>
//         </div>
//         <div className={styles.subcontainer}>
//             <div className={styles.left_side}>
//                 <div className={styles.button_left}>
//                     <button className={styles.button}>Profile Info</button>
//                     <button className={styles.button}>Change Password</button>
//             </div>
//             </div>
//             <div className={styles.right_side}>
//             <div className={styles.profile}>
//                 <div className={styles.image}>
//                     <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
//                 </div>
//                 <div className={styles.details}>
//                     <h2>Name</h2>
//                     <h2>Email</h2>
//                     <h2>Phone</h2>
//                 </div>
//             </div>
//             </div>
//         </div>
//     </div>
//     );
//   };
  
//   export default Profile;

"use client"

import { useState } from 'react';
import styles from './profile.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
    const [activeButton, setActiveButton] = useState('profileInfo');

    return (
        <div className={styles.container}>
            {/* <div className={styles.heading}>
                <h1>Profile</h1>
            </div> */}
            <div className={styles.subcontainer}>
                <div className={styles.left_side}>
                    <div className={styles.button_left}>
                        <button
                            className={`${styles.button} ${activeButton === 'profileInfo' ? styles.active : ''}`}
                            onClick={() => setActiveButton('profileInfo')}
                        >
                            <FontAwesomeIcon icon={faUser} className={styles.icon} />
                            Profile Info
                        </button>
                        <button
                            className={`${styles.button} ${activeButton === 'changePassword' ? styles.active : ''}`}
                            onClick={() => setActiveButton('changePassword')}
                        >
                            <FontAwesomeIcon icon={faLock} className={styles.icon} />
                            Change Password
                        </button>
                    </div>
                </div>
                <div className={styles.right_side}>
                    <div className={styles.profile}>
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
                </div>
            </div>
        </div>
    );
};

export default Profile;



"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaUser, FaLock } from 'react-icons/fa';
import styles from './profile.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

const Profile = () => {
    const [activePage, setActivePage] = useState('profileInfo');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [profileData, setProfileData] = useState({
        firstName: '',
        lastName: ''
    });
    const [passwordData, setPasswordData] = useState({
        password: '',
        newPassword: '',
        confirmPassword: ''
    });

    useEffect(() => {
        // Fetch profile data on component mount
        const token = localStorage.getItem("token");
        console.log("Token in useEffect:", token); // Debug token

        if (!token) {
            toast.error("No token found. Please login again.");
            return;
        }
        const fetchProfileData = async () => {
            try {
                const response = await axios.get
                ('https://api.dev.protowcall.ca/api/v1/users/me', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });
                console.log("response",response);

                setProfileData(response.data);
            } catch (error) {
                console.error("Error fetching profile data:", error);
                toast.error("Failed to fetch profile data");
            }
        };

        fetchProfileData();
    }, []);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleProfileChange = (e) => {
        const { id, value } = e.target;
        setProfileData({ ...profileData, [id]: value });
    };

    const handlePasswordChange = (e) => {
        const { id, value } = e.target;
        setPasswordData({ ...passwordData, [id]: value });
    };

    const handleProfileSubmit = async (e) => {
        e.preventDefault();
        
        console.log("Profile form submitted");
        
        const token = localStorage.getItem("token");
        console.log("Token:", token);

        console.log("Profile Data:", profileData);
    
        if (!token) {
            console.error("Token not found");
            toast.error("Token not found");
            return;
        }
        try {
            // PUT request for updating profile
            const response = await axios.put('https://api.dev.protowcall.ca/api/v1/customers/profile', profileData, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                }
            });
    
            console.log("Profile update response:", response.data);
            toast.success("Profile updated successfully");
        } catch (error) {
            console.error("Profile update error:", error.response ? error.response.data : error.message);
            toast.error("Failed to update profile");
        }
    };

    const handlePasswordSubmit = async (e) => {
        e.preventDefault();

        console.log("Password form submitted");

        if (passwordData.newPassword !== passwordData.confirmPassword) {
            toast.error("New password and confirm password do not match");
            return;
        }

        const token = localStorage.getItem("token");

        if (!token) {
            toast.error("No token found. Please login again.");
            return;
        }

        try {
            const response = await axios.put('https://api.dev.protowcall.ca/api/v1/users/password', passwordData, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                }
            });

            console.log("Password updated:", response.data);
            toast.success("Password updated successfully");
        } catch (error) {
            console.error("Error updating password:", error);
            toast.error("Failed to update password");
        }
    };

    const renderPage = () => {
        switch (activePage) {
            case 'profileInfo':
                return (
                    <form className={styles.profile} onSubmit={handleProfileSubmit}>
                        <h3>User Detail</h3>
                        <div className={styles.image}>
                            <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Profile" />
                        </div>
                        <div className={styles.details}>
                            <div className={styles.inputContainer}>
                                <input
                                    type="text"
                                    id="firstName"
                                    value={profileData.firstName}
                                    onChange={handleProfileChange}
                                    placeholder="First Name"
                                    className={styles.input}
                                    required
                                />
                                <label htmlFor="firstName" className={styles.label}>First Name</label>
                            </div>
                            <div className={styles.inputContainer}>
                                <input
                                    type="text"
                                    id="lastName"
                                    value={profileData.lastName}
                                    onChange={handleProfileChange}
                                    placeholder="Last Name"
                                    className={styles.input}
                                    required
                                />
                                <label htmlFor="lastName" className={styles.label}>Last Name</label>
                            </div>
                        </div>
                        <button type="submit" className={styles.submitButton}>Update Profile</button>
                    </form>
                );
            case 'changePassword':
                return (
                    <form className={styles.changePassword} onSubmit={handlePasswordSubmit}>
                        <div className={styles.inputContainerP}>
                            <input
                                type={passwordVisible ? "text" : "password"}
                                id="password"
                                value={passwordData.password}
                                onChange={handlePasswordChange}
                                placeholder="Current Password"
                                className={styles.inputP}
                                required
                            />
                            <label htmlFor="password" className={styles.labelP}>Current Password*</label>
                            <span className={styles.eyeIcon} onClick={togglePasswordVisibility}>
                                <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
                            </span>
                        </div>
                        <div className={styles.inputContainerP}>
                            <input
                                type={passwordVisible ? "text" : "password"}
                                id="newPassword"
                                value={passwordData.newPassword}
                                onChange={handlePasswordChange}
                                placeholder="New Password"
                                className={styles.inputP}
                                required
                            />
                            <label htmlFor="newPassword" className={styles.labelP}>New Password*</label>
                            <span className={styles.eyeIcon} onClick={togglePasswordVisibility}>
                                <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
                            </span>
                        </div>
                        <div className={styles.inputContainerP}>
                            <input
                                type={passwordVisible ? "text" : "password"}
                                id="confirmPassword"
                                value={passwordData.confirmPassword}
                                onChange={handlePasswordChange}
                                placeholder="Confirm Password"
                                className={styles.inputP}
                                required
                            />
                            <label htmlFor="confirmPassword" className={styles.labelP}>Confirm Password*</label>
                            <span className={styles.eyeIcon} onClick={togglePasswordVisibility}>
                                <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
                            </span>
                        </div>
                        <button type="submit" className={styles.submitButton}>Update Password</button>
                    </form>
                );
            default:
                return null;
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.subcontainer}>
                <h3 className={styles.Heading}>Profile</h3>
                <div className={styles.left_side}>
                    <div className={styles.button_left}>
                        <button
                            className={`${styles.button} ${activePage === 'profileInfo' ? styles.active : ''}`}
                            onClick={() => {
                                console.log("Profile Info button clicked");
                                setActivePage('profileInfo');
                            }}
                        >
                            <FaUser className={styles.icon} />
                            Profile Info
                        </button>
                        <button
                            className={`${styles.button} ${activePage === 'changePassword' ? styles.active : ''}`}
                            onClick={() => {
                                console.log("Change Password button clicked");
                                setActivePage('changePassword');
                            }}
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


















// "use client";

// import React, { useState } from 'react';
// import { FaUser, FaLock } from 'react-icons/fa';
// import styles from './profile.module.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// const Profile = () => {
//     const [activePage, setActivePage] = useState('profileInfo');
//     const [passwordVisible, setPasswordVisible] = useState(false);

//     const togglePasswordVisibility = () => {
//         setPasswordVisible(!passwordVisible);
//     };

//     const renderPage = () => {
//         switch (activePage) {
//             case 'profileInfo':
//                 return (
//                     <div className={styles.profile}>
//                         <h3>User Detail</h3>
//                         <div className={styles.image}>
//                             <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Profile" />
//                         </div>
//                         <div className={styles.details}>
//                             <div className={styles.inputContainer}>
//                                 <input type="text" id="firstName" placeholder="First Name" className={styles.input} required />
//                                 <label htmlFor="firstName" className={styles.label}>First Name</label>
//                             </div>
//                             <div className={styles.inputContainer}>
//                                 <input type="text" id="lastName" placeholder="Last Name" className={styles.input} required />
//                                 <label htmlFor="lastName" className={styles.label}>Last Name</label>
//                             </div>
//                         </div>
//                         <button className={styles.submitButton}>Update Profile</button>
//                     </div>
//                 );
//             case 'changePassword':
//                 return (
//                     <div className={styles.changePassword}>
//                         {/* <h3>Change Password</h3> */}
//                         <div className={styles.inputContainerP}>
//                             <input
//                                 type={passwordVisible ? "text" : "password"}
//                                 id="currentPassword"
//                                 placeholder="Current Password"
//                                 className={styles.inputP}
//                                 required
//                             />
//                             <label htmlFor="currentPassword" className={styles.labelP}>Current Password*</label>
//                             <span className={styles.eyeIcon} onClick={togglePasswordVisibility}>
//                                 <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
//                             </span>
//                         </div>
//                         <div className={styles.inputContainerP}>
//                             <input
//                                 type={passwordVisible ? "text" : "password"}
//                                 id="newPassword"
//                                 placeholder="New Password"
//                                 className={styles.inputP}
//                                 required
//                             />
//                             <label htmlFor="newPassword" className={styles.labelP}>New Password*</label>
//                             <span className={styles.eyeIcon} onClick={togglePasswordVisibility}>
//                                 <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
//                             </span>
//                         </div>
//                         <div className={styles.inputContainerP}>
//                             <input
//                                 type={passwordVisible ? "text" : "password"}
//                                 id="confirmPassword"
//                                 placeholder="Confirm Password"
//                                 className={styles.inputP}
//                                 required
//                             />
//                             <label htmlFor="confirmPassword" className={styles.labelP}>Confirm Password*</label>
//                             <span className={styles.eyeIcon} onClick={togglePasswordVisibility}>
//                                 <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
//                             </span>
//                         </div>
//                         <button className={styles.submitButton}>Update Password</button>
//                     </div>
//                 );
//             default:
//                 return null;
//         }
//     };

//     return (
//         <div className={styles.container}>
//             <div className={styles.subcontainer}>
//                 <h3 className={styles.Heading}>Profile</h3>
//                 <div className={styles.left_side}>
//                     <div className={styles.button_left}>
//                         <button
//                             className={`${styles.button} ${activePage === 'profileInfo' ? styles.active : ''}`}
//                             onClick={() => setActivePage('profileInfo')}
//                         >
//                             <FaUser className={styles.icon} />
//                             Profile Info
//                         </button>
//                         <button
//                             className={`${styles.button} ${activePage === 'changePassword' ? styles.active : ''}`}
//                             onClick={() => setActivePage('changePassword')}
//                         >
//                             <FaLock className={styles.icon} />
//                             Change Password
//                         </button>
//                     </div>
//                 </div>
//                 <div className={styles.right_side}>
//                     {renderPage()}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Profile;

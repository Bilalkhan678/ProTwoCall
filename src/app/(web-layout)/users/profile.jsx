"use client";

import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import styles from './profile.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
    const [activePage, setActivePage] = useState('profileInfo');
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

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
                                <input type="text" id="firstName" placeholder="First Name" className={styles.input} required />
                                <label htmlFor="firstName" className={styles.label}>First Name</label>
                            </div>
                            <div className={styles.inputContainer}>
                                <input type="text" id="lastName" placeholder="Last Name" className={styles.input} required />
                                <label htmlFor="lastName" className={styles.label}>Last Name</label>
                            </div>
                        </div>
                        <button className={styles.submitButton}>Update Profile</button>
                    </div>
                );
            case 'changePassword':
                return (
                    <div className={styles.changePassword}>
                        {/* <h3>Change Password</h3> */}
                        <div className={styles.inputContainerP}>
                            <input
                                type={passwordVisible ? "text" : "password"}
                                id="currentPassword"
                                placeholder="Current Password"
                                className={styles.inputP}
                                required
                            />
                            <label htmlFor="currentPassword" className={styles.labelP}>Current Password*</label>
                            <span className={styles.eyeIcon} onClick={togglePasswordVisibility}>
                                <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
                            </span>
                        </div>
                        <div className={styles.inputContainerP}>
                            <input
                                type={passwordVisible ? "text" : "password"}
                                id="newPassword"
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
                                placeholder="Confirm Password"
                                className={styles.inputP}
                                required
                            />
                            <label htmlFor="confirmPassword" className={styles.labelP}>Confirm Password*</label>
                            <span className={styles.eyeIcon} onClick={togglePasswordVisibility}>
                                <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
                            </span>
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
                <h3 className={styles.Heading}>Profile</h3>
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

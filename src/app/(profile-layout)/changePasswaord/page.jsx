// // 'use client';
// // import { useState } from 'react';
// // import styles from './changePassword.module.scss';

// // const ChangePassword = () => {
// //     const [currentPassword, setCurrentPassword] = useState('');
// //     const [newPassword, setNewPassword] = useState('');
// //     const [confirmPassword, setConfirmPassword] = useState('');

// //     const handleSubmit = (e) => {
// //         e.preventDefault();
// //         // Handle password update logic here
// //         console.log("Password updated", { currentPassword, newPassword, confirmPassword });
// //     };

// //     return (
// //         <div className={styles.container}>
// //             <h1>Change Password</h1>
// //             <form onSubmit={handleSubmit} className={styles.form}>
// //                 <div className={styles.inputContainer}>
// //                     <input 
// //                         type="password" 
// //                         id="currentPassword" 
// //                         value={currentPassword}
// //                         onChange={(e) => setCurrentPassword(e.target.value)}
// //                         className={styles.input} 
// //                         required 
// //                     />
// //                     <label htmlFor="currentPassword" className={styles.label}>Current Password</label>
// //                 </div>
// //                 <div className={styles.inputContainer}>
// //                     <input 
// //                         type="password" 
// //                         id="newPassword" 
// //                         value={newPassword}
// //                         onChange={(e) => setNewPassword(e.target.value)}
// //                         className={styles.input} 
// //                         required 
// //                     />
// //                     <label htmlFor="newPassword" className={styles.label}>New Password</label>
// //                 </div>
// //                 <div className={styles.inputContainer}>
// //                     <input 
// //                         type="password" 
// //                         id="confirmPassword" 
// //                         value={confirmPassword}
// //                         onChange={(e) => setConfirmPassword(e.target.value)}
// //                         className={styles.input} 
// //                         required 
// //                     />
// //                     <label htmlFor="confirmPassword" className={styles.label}>Confirm Password</label>
// //                 </div>
// //                 <button type="submit" className={styles.submitButton}>Update Password</button>
// //             </form>
// //         </div>
// //     );
// // };

// // export default ChangePassword;


// // src/app/(profile-layout)/changepassword/ChangePassword.jsx

// "use client"

// import React from 'react';
// import { useRouter } from 'next/router'; // Import useRouter hook for navigation
// import styles from './ChangePassword.module.scss'; // Import styles if necessary

// const ChangePassword = () => {
//     const router = useRouter();

//     const handleUpdatePassword = () => {
//         // Logic to update password
//         // Redirect to profile page or other page after update
//         router.push('/profile');
//     };

//     return (
//         <div className={styles.container}>
//             <h1>Change Password</h1>
//             <div className={styles.form}>
//                 <div className={styles.inputContainer}>
//                     <input type="password" id="currentPassword" className={styles.input} required />
//                     <label htmlFor="currentPassword" className={styles.label}>Current Password</label>
//                 </div>
//                 <div className={styles.inputContainer}>
//                     <input type="password" id="newPassword" className={styles.input} required />
//                     <label htmlFor="newPassword" className={styles.label}>New Password</label>
//                 </div>
//                 <div className={styles.inputContainer}>
//                     <input type="password" id="confirmPassword" className={styles.input} required />
//                     <label htmlFor="confirmPassword" className={styles.label}>Confirm Password</label>
//                 </div>
//                 <button className={styles.submitButton} onClick={handleUpdatePassword}>Update Password</button>
//             </div>
//         </div>
//     );
// };

// export default ChangePassword;

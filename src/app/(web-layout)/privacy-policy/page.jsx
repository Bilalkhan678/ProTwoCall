import React from 'react';
import styles from "./privacy.module.scss";

const PrivacyPolicy = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1>Privacy Policy</h1>
        </div>
        <div className={styles.content}>
          <h2>INTRODUCTION</h2>
          <p>
            ProTowCall Ltd. (collectively, “ProTowCall”, “we”, “us” or “our”) are committed to protecting the privacy and confidentiality of personal information in our possession. This Privacy Policy explains how we collect, use and disclose personal information that you provide to us through the ProTowCall website located at <a href="https://Protowcall.ca">https://Protowcall.ca</a> (the “Website”) together with the mobile version of the website and the mobile application (the “App”, and collectively, the Website, mobile version and App are the “Service”). ProTowCall is a technology platform that enables Registered Users of our Service to obtain roadside assistance from independent third-party providers of such services who are under agreement with us (“Third Party Service Providers”). Unless otherwise defined herein, all defined terms have the same meaning as set out in the Terms of Service.
          </p>

          <h2>CHANGES TO THIS PRIVACY POLICY</h2>
          <p>
            We reserve the right, at our discretion, to amend this Privacy Policy at any time without prior individual notice. The date on which this Privacy Policy was last amended is shown at the top of this policy. You are responsible for verifying whether any amendments have been made and therefore we ask that you periodically check the date and review this Privacy Policy for the latest information on our privacy practices. If you object to any amendments, please stop using the Service, otherwise your continued use will be taken as your consent to such amendments.
          </p>

          <h2>WHERE THIS PRIVACY POLICY IS EFFECTIVE</h2>
          <p>
            ProTowCall is subject to the Personal Information Protection and Electronic Documents Act (Canada) and applicable Canadian provincial privacy legislation. Privacy laws vary by jurisdiction. You acknowledge and agree that access to the Service that are available through the Service are provided via the Internet and that your information, including personal information, may be transferred across national borders and stored or processed in accordance with the terms and conditions of this Privacy Policy.
          </p>

          {/* Continue adding the rest of the privacy policy text */}
          {/* You can add more sections as needed */}
          
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

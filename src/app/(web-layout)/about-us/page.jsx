// import ServiceHistory from "app/(web-layout)/about-us/servicehistory";
import ServiceHistory from './servicehistory/page';
import styles from "../service.module.scss"

const AboutUs = () => {
  return (
    <div>
      <h1 className={styles.heading}> Service History </h1>
      <ServiceHistory />
    </div>
  );
};

export default AboutUs;
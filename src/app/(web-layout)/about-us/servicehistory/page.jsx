import Link from 'next/link';
import services from '../../../data/services';
import styles from '../../service.module.scss';


const ServiceCard = ({ service }) => {
    const statusColor = service.status.toLowerCase() === 'completed' ? '#4CAF50' : '#FF6347'; 
    // const statusText = service.status.toLowerCase() === 'completed'? 'Completed' : 'Pending';
  return (
    <Link href={`/servicesH/${service.id}`} passHref legacyBehavior>
    <a className={styles.card} >
      <h2 className={styles.cardTitle}></h2>
      <p className={styles.serviceName}><strong></strong> {service.serviceName}</p>
      <p className={styles.insuranceName}><strong></strong> {service.insuranceName}</p>
      <p className={styles.status} style={{ backgroundColor: statusColor }}><strong></strong> {service.status}</p>
      {/* <Link href={`/servicesH/${service.id}`} legacyBehavior>
        <a className={styles.cardLink}>More Details</a>
      </Link> */}
    </a>
    </Link>
  );
};

const ServiceHistory = () => {
  return (
    <div className={styles.cardContainer}>
      {services.map(service => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
};

export default ServiceHistory;

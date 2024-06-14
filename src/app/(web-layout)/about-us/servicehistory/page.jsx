import Link from 'next/link';
import services from '../../../data/services';
import styles from '../../service.module.scss';

const ServiceCard = ({ service }) => {
    let statusColor = '';
    switch (service.status.toLowerCase()) {
      case 'completed':
        statusColor = '#4CAF50'; // Green color for Completed status
        break;
      case 'pending':
        statusColor = '#FFC107'; // Yellow color for Pending status
        break;
      default:
        statusColor = '#f9f9f9'; // Default background color
        break;
    }
  return (
    <Link href={`/servicesH/${service.id}`} legacyBehavior>
    <a className={styles.card}>
      <h2 className={styles.cardTitle}></h2>
      <p className={styles.serviceName}><strong></strong> {service.serviceName}</p>
      <p className={styles.insuranceName}><strong></strong> {service.insuranceName}</p>
      <p className={styles.status}><strong></strong> {service.status}</p>
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

import Link from 'next/link';
import services from '../../../data/service';
import styles from '../../service.module.scss';

const ServiceCard = ({ service }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>{service.title}</h2>
      <p className={styles.cardDetail}><strong>Service Name:</strong> {service.serviceName}</p>
      <p className={styles.cardDetail}><strong>Insurance Name:</strong> {service.insuranceName}</p>
      <p className={styles.cardDetail}><strong>Status:</strong> {service.status}</p>
      <Link href={`/servicesH/${service.id}`} legacyBehavior>
        <a className={styles.cardLink}>More Details</a>
      </Link>
    </div>
  );
};

const ServiceHistory = () => {
  return (
    <div>
      {services.map(service => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
};

export default ServiceHistory;

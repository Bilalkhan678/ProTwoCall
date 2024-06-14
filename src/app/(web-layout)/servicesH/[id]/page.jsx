import services from '../../../data/services';
import styles from '../../service.module.scss';

const ServiceDetail = ({ params }) => {
    const { id } = params;
    const service = services.find(service => service.id === parseInt(id));
  
    if (!service) {
      return <p>Service not found.</p>;
    }
  
    return (
      <div className={styles.card}>
        <h1 className={styles.cardTitle}>{service.title}</h1>
        <p className={styles.cardDetail}><strong>Service Name:</strong> {service.serviceName}</p>
        <p className={styles.cardDetail}><strong>Insurance Name:</strong> {service.insuranceName}</p>
        <p className={styles.cardDetail}><strong>Status:</strong> {service.status}</p>
        <p className={styles.cardDetail}><strong>Details:</strong> {service.details}</p>
      </div>
    );
  };
  
  export async function generateStaticParams() {
    return services.map(service => ({ id: service.id.toString() }));
  }
  
  export default ServiceDetail;
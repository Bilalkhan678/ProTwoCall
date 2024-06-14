import services from '../../../data/services';
import styles from '../../service.module.scss';

const ServiceDetail = ({ params }) => {
    // const statusColor = service.status.toLowerCase() === 'completed' ? '#4CAF50' : '#FF6347'; 
    const { id } = params;
    const service = services.find(service => service.id === parseInt(id));
  
    if (!service) {
      return <p>Service not found.</p>;
    }
    const statusColor = service.status && service.status.toLowerCase() === 'completed' ? '#4CAF50' : '#FF6347';

    return (
        <div className={styles.detailsContainer}>
          <h1 className={styles.detailsTitle}>{service.title}</h1>
          <div className={styles.detailSection}>
            <h2>Service Information</h2>
            <div className={styles.detailItem}>
              <p><strong>Service Name:</strong> <span className={styles.primary}>{service.serviceName}</span></p>
              <p><strong>Insurance Name:</strong> <span className={styles.primary}>{service.insuranceName}</span></p>
              <p><strong>Status:</strong> <span className={styles.primary}  style={{ backgroundColor: statusColor }}>{service.status}</span></p>
            </div>
          </div>
          {service.vehicaleDetails && (
            <div className={styles.detailSection}>
              <h2>Vehicle Details</h2>
              <div className={styles.detailItem}>
                <p><strong>Make:</strong> <span className={styles.primary}>{service.vehicaleDetails.make}</span></p>
                <p><strong>Model:</strong> <span className={styles.primary}>{service.vehicaleDetails.model}</span></p>
                <p><strong>Year:</strong> <span className={styles.primary}>{service.vehicaleDetails.year}</span></p>
                <p><strong>VIN:</strong> <span className={styles.primary}>{service.vehicaleDetails.vin}</span></p>
                <p><strong>Mileage:</strong> <span className={styles.primary}>{service.vehicaleDetails.mileage}</span></p>
                <p><strong>License Plate:</strong> <span className={styles.primary}>{service.vehicaleDetails.licensePlate}</span></p>
                <p><strong>License State:</strong> <span className={styles.primary}>{service.vehicaleDetails.licenseState}</span></p>
                <p><strong>License Expiration:</strong> <span className={styles.primary}>{service.vehicaleDetails.licenseExpiration}</span></p>
                <p><strong>License Class:</strong> <span className={styles.primary}>{service.vehicaleDetails.licenseClass}</span></p>
              </div>
            </div>
          )}
          {service.vehicaleDetails && service.vehicaleDetails.CustomerSignature && (
            <div className={styles.detailSection}>
              <h2>Customer Signature</h2>
              <div className={styles.detailItem}>
                <p><strong>Name:</strong> <span className={styles.primary}>{service.vehicaleDetails.CustomerSignature.name}</span></p>
                <p><strong>Date:</strong> <span className={styles.primary}>{service.vehicaleDetails.CustomerSignature.date}</span></p>
                <p><strong>Time:</strong> <span className={styles.primary}>{service.vehicaleDetails.CustomerSignature.time}</span></p>
                {/* <img
                  src={service.vehicaleDetails.CustomerSignature.signature}
                  alt="Customer Signature"
                  className={styles.signatureImage}
                /> */}
              </div>
            </div>
          )}
        </div>
      );
    };
  
  export async function generateStaticParams() {
    return services.map(service => ({ id: service.id.toString() }));
  }
  
  export default ServiceDetail;
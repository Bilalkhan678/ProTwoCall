import services from '../../../data/services';
import styles from '../../service.module.scss';

const ServiceDetail = ({ params }) => {
    const { id } = params;
    const service = services.find(service => service.id === parseInt(id));
  
    if (!service) {
      return <p>Service not found.</p>;
    }
    return (
        <div className={styles.detailsContainer}>
          <h1 className={styles.detailsTitle}>{service.title}</h1>
          <div className={styles.detailSection}>
            <h2>Service Information</h2>
            <p><strong>Service Name:</strong> {service.serviceName}</p>
            <p><strong>Insurance Name:</strong> {service.insuranceName}</p>
            <p><strong>Status:</strong> {service.status}</p>
          </div>
          {service.vehicaleDetails && (
            <div className={styles.detailSection}>
              <h2>Vehicle Details</h2>
              <p><strong>Make:</strong> {service.vehicaleDetails.make}</p>
              <p><strong>Model:</strong> {service.vehicaleDetails.model}</p>
              <p><strong>Year:</strong> {service.vehicaleDetails.year}</p>
              <p><strong>VIN:</strong> {service.vehicaleDetails.vin}</p>
              <p><strong>Mileage:</strong> {service.vehicaleDetails.mileage}</p>
              <p><strong>License Plate:</strong> {service.vehicaleDetails.licensePlate}</p>
              <p><strong>License State:</strong> {service.vehicaleDetails.licenseState}</p>
              <p><strong>License Expiration:</strong> {service.vehicaleDetails.licenseExpiration}</p>
              <p><strong>License Class:</strong> {service.vehicaleDetails.licenseClass}</p>
            </div>
          )}
          {service.vehicaleDetails && service.vehicaleDetails.CustomerSignature && (
            <div className={styles.detailSection}>
              <h2>Customer Signature</h2>
              <p><strong>Name:</strong> {service.vehicaleDetails.CustomerSignature.name}</p>
              <p><strong>Date:</strong> {service.vehicaleDetails.CustomerSignature.date}</p>
              <p><strong>Time:</strong> {service.vehicaleDetails.CustomerSignature.time}</p>
              {/* <img
                src={service.vehicaleDetails.CustomerSignature.signature}
                alt="Customer Signature"
                className={styles.signatureImage}
              /> */}
            </div>
          )}
        </div>
      );
    };
  
  export async function generateStaticParams() {
    return services.map(service => ({ id: service.id.toString() }));
  }
  
  export default ServiceDetail;
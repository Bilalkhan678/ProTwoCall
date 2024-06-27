import { red } from '@mui/material/colors';
import services from '../../../data/services';
import { ArrowBack, Chat, GetApp } from '@mui/icons-material'; // Example imports, adjust as per your icon library
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
          {/* <h1 className={styles.detailsTitle}>{service.title}</h1> */}
          <ArrowBack className={styles.backIcon} /> {/* Replace with your actual icon component */}
          <div className={styles.detailsHeader}>
            <h1 className={styles.detailsTitle}>Service History</h1>
            
            </div>
            <div className={styles.headerButtons}>
                    <button className={styles.headerButton}>
                        <Chat className={styles.buttonIcon} />
                        VIEW CHAT
                    </button>
                    <button className={styles.headerButton}>
                        <GetApp className={styles.buttonIcon} />
                        DOWNLOAD INVOICE
                    </button>
                </div>
          <div className={styles.detailSection}>
            <h5>Service Details</h5>
            <div className={styles.detailContainer}>
            <p className={styles.detailItem}>
              <span className={styles.detaillabel}>Service Name:</span> 
              <span className={styles.primary}>{service.serviceName}</span>
            </p>
            <p className={styles.detailItem}>
              <strong className={styles.detaillabel}>Insurance Name:</strong> 
              <span className={styles.primary}>{service.insuranceName}</span>
            </p>
            <p className={styles.detailItem}>
              <strong className={styles.detaillabel}>Status:</strong> 
              {/* <span className={styles.primary} style={{ backgroundColor: statusColor, minWidth: '80px' }}>{service.status}</span> */}
              {/* <span className={styles.primary} style={{ backgroundColor: 'red', minWidth: '8px' }}>Completed</span> */}
              <span className={styles.primary} style={{ backgroundColor: statusColor, minWidth: '80px' }}>Completed</span>
            </p>
              {/* <p><strong>Insurance Name:</strong> <span className={styles.primary}>{service.insuranceName}</span></p> */}
              {/* <p><strong>Status:</strong> <span className={styles.primary}  style={{ backgroundColor: statusColor }}>{service.status}</span></p> */}
            </div>
          </div>
          {service.vehicaleDetails && (
            <div className={styles.detailSection}>
              <h5>Vehicle Details</h5>
              <div className={styles.detailSection}>
              <p className={styles.detailItem}>
                <span className={styles.detaillabel}>Make:</span>
                <span className={styles.primary}>{service.vehicaleDetails.make}</span>
              </p>

              <p className={styles.detailItem}>
                <span className={styles.detaillabel}>Model:</span>
                <span className={styles.primary}>{service.vehicaleDetails.model}</span>
              </p>
              <p className={styles.detailItem}>
                <span className={styles.detaillabel}>Year:</span>
                <span className={styles.primary}>{service.vehicaleDetails.year}</span>
              </p>
              <p className={styles.detailItem}>
                <span className={styles.detaillabel}>VIN:</span>
                <span className={styles.primary}>{service.vehicaleDetails.vin}</span>
              </p>
              <p className={styles.detailItem}>
                <span className={styles.detaillabel}>Mileage:</span>
                <span className={styles.primary}>{service.vehicaleDetails.mileage}</span>
              </p>
              <p className={styles.detailItem}>
                <span className={styles.detaillabel}>License Plate:</span>
                <span className={styles.primary}>{service.vehicaleDetails.licensePlate}</span>
              </p>
              <p className={styles.detailItem}>
                <span className={styles.detaillabel}>License State:</span>
                <span className={styles.primary}>{service.vehicaleDetails.licenseState}</span>
              </p>
              <p className={styles.detailItem}>
                <span className={styles.detaillabel}>License Expiration:</span>
                <span className={styles.primary}>{service.vehicaleDetails.licenseExpiration}</span>
              </p>
              <p className={styles.detailItem}>
                <span className={styles.detaillabel}>License Class:</span>
                <span className={styles.primary}>{service.vehicaleDetails.licenseClass}</span>
              </p>
              </div>
            </div>
          )}
          {service.vehicaleDetails && service.vehicaleDetails.CustomerSignature && (
            <div className={styles.detailSection}>
              <h5>Customer Signature</h5>
              <div className={styles.detailSection}>
              <p className={styles.detailItem}>
                <span className={styles.detaillabel}>Name:</span>
                <span className={styles.primary}>{service.vehicaleDetails.CustomerSignature.name}</span>
              </p>
              <p className={styles.detailItem}>
                <span className={styles.detaillabel}>Date:</span>
                <span className={styles.primary}>{service.vehicaleDetails.CustomerSignature.date}</span>
              </p>
              <p className={styles.detailItem}>
                <span className={styles.detaillabel}>Time:</span>
                <span className={styles.primary}>{service.vehicaleDetails.CustomerSignature.time}</span>
              </p>
              
              
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
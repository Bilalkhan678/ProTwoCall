// src/app/(web-layout)/about-us/page.jsx
"use client";
import ServiceCard from './cards';

const serviceData = [
  {
    id: 1,
    title: 'Service 1',
    serviceName: 'Service A',
    status: 'Completed',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    title: 'Service 2',
    serviceName: 'Service B',
    status: 'In Progress',
    details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    title: 'Service 3',
    serviceName: 'Service C',
    status: 'Pending',
    details: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

const AboutUsPage = () => {
  return (
    <div>
      <h1>About Us</h1>
      <div className="service-history">
        {serviceData.map((service) => (
          <ServiceCard
            key={service.id}
            id={service.id}
            title={service.title}
            serviceName={service.serviceName}
            status={service.status}
            details={service.details}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutUsPage;

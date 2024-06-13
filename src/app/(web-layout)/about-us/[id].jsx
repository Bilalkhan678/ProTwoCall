// src/app/(web-layout)/about-us/[id].jsx
"use client"
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

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

const ServiceDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [service, setService] = useState(null);

  useEffect(() => {
    console.log(`ID from URL: ${id}`); // Log the id to console for debugging
    if (id) {
      const foundService = serviceData.find((s) => s.id === parseInt(id, 10));
      setService(foundService);
    }
  }, [id]);

  if (!service) {
    return <p>Service not found</p>;
  }

  return (
    <div>
      <h1>Service Details</h1>
      <h2>{service.title}</h2>
      <p>Service Name: {service.serviceName}</p>
      <p>Status: {service.status}</p>
      <p>Details: {service.details}</p>
    </div>
  );
};

export default ServiceDetailPage;



import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useMemo } from "react";
import styles from './styles.module.scss';

const mapContainerStyle = {
  width: "100%",
  height: "600px", // Ensure it takes up full viewport height
  position: 'relative',
  padding: '10px' // Add padding if necessary to ensure controls are not cut off
};

// const center = useMemo(() => ({ lat: 44.9778, lng: -93.2650 }), []);

const center = {
  lat: 44.9778,
  lng: -93.2650,
};

// const options = useMemo(() => ({
//     fullscreenControl: false,
//     mapTypeControl: false,
//     streetViewControl: false,
//     zoomControl: true,
//     zoomControlOptions: {
//       position: window.google.maps.ControlPosition.RIGHT_CENTER,
//     },
//   }), []);

// const options = {
//     fullscreenControl: false,  // Disable the fullscreen control if you don't need it
//     zoomControlOptions: {
//       position: window.google.maps.ControlPosition.RIGHT_CENTER, // Position the zoom control on the right
//     },
//   };

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={8}
    //   options={options}
    >
      <Marker position={center} />
    </GoogleMap>
  );
};

export default Map;

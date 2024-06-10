

// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
// import { useMemo } from "react";
// import 'leaflet/dist/leaflet.css';
// import styles from './styles.module.scss';

// const mapContainerStyle = {
//   width: "100%",
//   height: "100vh", // Ensure it takes up full viewport height
//   position: 'relative',
//   padding: '10px' // Add padding if necessary to ensure controls are not cut off

// // display: 'flex',
// // justifyContent: "center",
// // alignItems: "center",

// };

// // const center = useMemo(() => ({ lat: 44.9778, lng: -93.2650 }), []);

// const center = {
//   lat: 44.9778,
//   lng: -93.2650,
// };

// // const options = useMemo(() => ({
// //     fullscreenControl: false,
// //     mapTypeControl: false,
// //     streetViewControl: false,
// //     zoomControl: true,
// //     zoomControlOptions: {
// //       position: window.google.maps.ControlPosition.RIGHT_CENTER,
// //     },
// //   }), []);

// // const options = {
// //     fullscreenControl: false,  // Disable the fullscreen control if you don't need it
// //     zoomControlOptions: {
// //       position: window.google.maps.ControlPosition.CENTER, // Position the zoom control on the right
// //     },
// //   };

// // const options = useMemo(() => {
// //     if (typeof window !== 'undefined' && window.google) {
// //       return {
// //         fullscreenControl: false,
// //         zoomControlOptions: {
// //           position: window.google.maps.ControlPosition.CENTER,
// //         },
// //       };
// //     }
// //     return {};
// //   }, []);

// const Map = () => {
//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
//   });

//   if (loadError) return <div>Error loading maps</div>;
//   if (!isLoaded) return <div>Loading...</div>;

//   return (
//     <GoogleMap
//       mapContainerStyle={mapContainerStyle}
//       center={center}
//       zoom={8}
//     //   options={options}
//     >
//       <Marker position={center} />
//     </GoogleMap>
//   );
// };

// export default Map;



// // import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
// // import L from 'leaflet';
// // import 'leaflet/dist/leaflet.css';

// // const customIcon = new L.Icon({
// //   iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-red.png',
// //   iconSize: [38, 95],
// //   iconAnchor: [22, 94],
// //   popupAnchor: [-3, -76],
// // });

// // const CustomMarker = ({ position, text }) => (
// //   <Marker position={position} icon={customIcon}>
// //     <Popup>{text}</Popup>
// //   </Marker>
// // );

// // const SatelliteButton = () => {
// //   const map = useMap();

// //   const handleSatelliteClick = () => {
// //     map.setView(map.getCenter(), map.getZoom());
// //     map.removeLayer(map.getPanes().tilePane);
// //     map.addLayer(
// //       new L.TileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
// //         attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
// //       })
// //     );
// //   };

// //   return (
// //     <button className="satellite-button" onClick={handleSatelliteClick}>
// //       Satellite
// //     </button>
// //   );
// // };

// // const Map = () => {
// //   return (
// //     <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100vh', width: '100%' }}>
// //       <TileLayer
// //         attribution='&copy; OpenStreetMap contributors'
// //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// //       />
// //       <SatelliteButton />
// //       <CustomMarker position={[51.505, -0.09]} text="Custom Marker"/>
// //     </MapContainer>
// //   );
// // };

// // export default Map;

import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useState, useCallback } from "react";
import styles from './styles.module.scss';

const mapContainerStyle = {
  width: "100%",
  height: "90vh",
  position: 'relative'
};

const center = {
  lat: 44.9778,
  lng: -93.2650,
};

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const [mapType, setMapType] = useState("roadmap");
  const [showDropdown, setShowDropdown] = useState(false);
  const [labelsEnabled, setLabelsEnabled] = useState(false);

  const handleMapTypeChange = useCallback((type) => {
    setMapType(type);
    setShowDropdown(false); // Hide the dropdown when a map type is selected
  }, []);

  const handleSatelliteClick = () => {
    setMapType('satellite');
    setShowDropdown(!showDropdown);
  };

  const handleLabelChange = (event) => {
    setLabelsEnabled(event.target.checked);
    setMapType(event.target.checked ? 'hybrid' : 'satellite');
  };

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className={styles.mapContainer}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={8}
        mapTypeId={mapType}
      >
        <Marker position={center} />
      </GoogleMap>

      <div className={styles.mapControls}>
        <button
          className={styles.mapTypeButton}
          onClick={() => handleMapTypeChange('roadmap')}
        >
          Map
        </button>
        <div className={styles.dropdownContainer}>
          <button
            className={styles.mapTypeButton}
            onClick={handleSatelliteClick}
          >
            Satellite
          </button>
          {showDropdown && (
            <div className={styles.dropdownContent}>
              <label>
                <input
                  type="checkbox"
                  checked={labelsEnabled}
                  onChange={handleLabelChange}
                />
                Labels
              </label>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Map;

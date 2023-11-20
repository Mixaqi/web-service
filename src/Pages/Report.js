import React, { useState, useEffect } from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import "./form.css";

function MapComponent({ onLocationChange }) {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleMapClick = (event) => {
    setSelectedLocation({ lat: event.latLng.lat(), lng: event.latLng.lng() });
    onLocationChange({ lat: event.latLng.lat(), lng: event.latLng.lng() });
  };

  return (
    <GoogleMap
      defaultZoom={2}
      defaultCenter={{ lat: 0, lng: 0 }}
      onClick={handleMapClick}
    >
      {selectedLocation && <Marker position={selectedLocation} />}
    </GoogleMap>
  );
}

const WrappedMapComponent = withScriptjs(withGoogleMap(MapComponent));

function Contacts() {
  // ... (остальной код вашей формы)

  const [location, setLocation] = useState(null);

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
  };

  // ... (остальной код вашей формы)

  return (
    <form>
      {/* ... (остальной код вашей формы) */}

      <div style={{ height: "300px", marginBottom: "20px" }}>
        <WrappedMapComponent
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          onLocationChange={handleLocationChange}
        />
      </div>

      {/* ... (остальной код вашей формы) */}
    </form>
  );
}

export default Report;


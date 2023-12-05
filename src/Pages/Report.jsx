import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Report = () => {
  const [markers, setMarkers] = useState([]);

  const handleMapClick = (event) => {
    const newMarker = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };

    setMarkers([...markers, newMarker]);
  };

  const deleteMarker = (index) => {
    const updatedMarkers = [...markers];
    updatedMarkers.splice(index, 1);
    setMarkers(updatedMarkers);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBbew2lrwBi8ibxBzzO_0wO24e4p2cujF8">
      <GoogleMap
        mapContainerStyle={{ height: '400px', width: '100%' }}
        zoom={10}
        center={{ lat: 0, lng: 0 }}
        onClick={handleMapClick}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={marker}
            onClick={() => deleteMarker(index)}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Report;

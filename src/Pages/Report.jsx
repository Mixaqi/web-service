import React, { useState, useEffect } from 'react';
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

  const handleMarkerDrag = (index, newMarker) => {
    const updatedMarkers = [...markers];
    updatedMarkers[index] = newMarker;
    setMarkers(updatedMarkers);
  };

  useEffect(() => {

    if (markers.length > 0) {
      const bounds = new window.google.maps.LatLngBounds();
      markers.forEach((marker) => {
        bounds.extend(marker);
      });

      const newCenter = {
        lat: bounds.getCenter().lat(),
        lng: bounds.getCenter().lng(),
      };

      setMapCenter(newCenter);
    }
  }, [markers]);

  const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });

  return (
    <LoadScript googleMapsApiKey="AIzaSyBbew2lrwBi8ibxBzzO_0wO24e4p2cujF8">
      <GoogleMap
        mapContainerStyle={{ height: '400px', width: '100%' }}
        zoom={10}
        center={mapCenter}
        onClick={handleMapClick}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={marker}
            draggable={true}
            onDragEnd={(e) => handleMarkerDrag(index, { lat: e.latLng.lat(), lng: e.latLng.lng() })}
            onClick={() => deleteMarker(index)}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Report;

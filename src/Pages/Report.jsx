import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Report = () => {
  const [markers, setMarkers] = useState([]);
  const [textData, setTextData] = useState('');
  const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });

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

  const handleSendData = () => {
    console.log('Sending data:', { markers, textData });
    // добавить отправку на сервер
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBbew2lrwBi8ibxBzzO_0wO24e4p2cujF8">
      <GoogleMap
        mapContainerStyle={{ height: '60vh', width: '100%' }}
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
      <div>
        <textarea
          value={textData}
          onChange={(e) => setTextData(e.target.value)}
          placeholder="Опишите местоположение более детально"
          style={{ height: '15vh', width: '100%', resize: 'vertical' }}
        />
      </div>
      <button onClick={handleSendData}>Отправить данные</button>
    </LoadScript>
  );
};

export default Report;

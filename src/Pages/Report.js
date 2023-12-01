import React, { useState } from "react";

const Report = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const generateMapString = () => {
    return `https://maps.google.com/maps?q=${latitude}+${longitude}&hl=ru&z=16&output=embed`;
  };

  return (
    <div>
      <h3>Введите координаты для отображения карты:</h3>
      <div>
        <label>Широта:</label>
        <input
          type="text"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        />
      </div>
      <div>
        <label>Долгота:</label>
        <input
          type="text"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />
      </div>
      <iframe
        title="Google Map"
        width="600"
        height="340"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src={generateMapString()}
      ></iframe>
    </div>
  );
};

export default Report;

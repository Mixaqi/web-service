import React from 'react';
import Report from './Pages/Report';

const App = () => {
  const handleMapClick = (latitude, longitude) => {
    console.log(`Clicked on coordinates: ${latitude}, ${longitude}`);
    // Do something with the coordinates, such as updating state or making an API call
  }; 

  return (
    <div>
      <h1>Interactive Map</h1>
      <Report onMapClick={handleMapClick} />
    </div>
  );
};

export default App;

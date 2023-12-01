import { useJsApiLoader } from '@react-google-maps/api'
import { Map } from '../Components/Map/Map'
import React, { useState } from 'react'
const GMAPS_API_KEY = process.env.REACT_APP_API_KEY
const defaultCenter = {
  lat: -3.745,
  lng: -38.523,
}

const libraries = ["places"]

const Report = () => {
  const {isLoaded} = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GMAPS_API_KEY,
    libraries
  })
  return (
    <div className="Report">
      {isLoaded ? <Map center={defaultCenter} /> : <h2>Loading</h2>}
    </div>
  )
}

export default Report;

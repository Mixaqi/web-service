import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import React, { useEffect, useState } from 'react'

const Report = () => {
  const googleMapsApiKey = `${process.env.REACT_APP_GMAPS_API_KEY}`
  const [markers, setMarkers] = useState([])
  const [text_data, setTextData] = useState('')
  const [mapCenter] = useState({ lat: 52.090261, lng: 23.717483 })
  const [email, setEmail] = useState('')
  const [photo, setPhoto] = useState(null)
  const [emailDirty, setEmailDirty] = useState(false)
  const [emailError, setEmailError] = useState('Email не может быть пустым')
  const [formValid, setFormValid] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (emailError) setFormValid(false)
    else setFormValid(true)
  }, [emailError])

  const emailHandler = (e) => {
    setEmail(e.target.value)
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    if (!re.test(String(e.target.value).toLowerCase()))
      setEmailError('Некорректный email')
    else setEmailError('')
  }

  const handleMapClick = (event) => {
    const newMarker = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    }

    setMarkers([...markers, newMarker])
  }

  const deleteMarker = (index) => {
    const updatedMarkers = [...markers]
    updatedMarkers.splice(index, 1)
    setMarkers(updatedMarkers)
  }

  const handleMarkerDrag = (index, newMarker) => {
    const updatedMarkers = [...markers]
    updatedMarkers[index] = newMarker
    setMarkers(updatedMarkers)
  }

  const handlePhotoChange = (e) => {
    const selectedPhoto = e.target.files[0]
    setPhoto(selectedPhoto)
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true)
        break
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isSubmitting) {
      return
    }
    try {
      setIsSubmitting(true)
      await handleSendData
      handleSendData()
      setEmail('')
      setEmailDirty(false)
      setEmailError('Email не может быть пустым')
      setPhoto(null)
    } catch (error) {
      console.error(error)
    } finally {
      setIsSubmitting(true)
    }
  }

  const handleSendData = async () => {
    const dataToSend = {
      markers,
      text_data,
      email,
      photo,
    }
    console.log('Data to be sent:', dataToSend)
    try {
      const response = await fetch('http://127.0.0.1:8000/api/reports/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(
          `Network response was not ok: ${JSON.stringify(errorData)}`,
        )
      }

      const data = await response.json()
      console.log('Successfully:', data)
    } catch (error) {
      console.error('Error sending data:', error)
      throw error
    }
  }

  return (
    <form onSubmit={handleSendData} style={{ width: '100%' }}>
      <LoadScript googleMapsApiKey={'AIzaSyBbew2lrwBi8ibxBzzO_0wO24e4p2cujF8'}>
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
              onDragEnd={(e) =>
                handleMarkerDrag(index, {
                  lat: e.latLng.lat(),
                  lng: e.latLng.lng(),
                })
              }
              onClick={() => deleteMarker(index)}
            />
          ))}
        </GoogleMap>
        <div>
          <textarea
            value={text_data}
            onChange={(e) => setTextData(e.target.value)}
            placeholder="Опишите местоположение более детально"
            style={{ height: '15vh', width: '100%', resize: 'vertical' }}
          />
        </div>
        {emailDirty && emailError && <div className="error">{emailError}</div>}
        <input
          onChange={(e) => emailHandler(e)}
          value={email}
          onBlur={(e) => blurHandler(e)}
          name="email"
          type="text"
          placeholder="Введите email"
        />
        <input
          type="file"
          onChange={(e) => setPhoto(e.target.files[0])}
          accept="image/*"
        />
        <button disabled={!formValid} type="submit">
          Отправить{' '}
        </button>
      </LoadScript>
    </form>
  )
}

export default Report

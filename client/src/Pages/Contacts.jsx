import React, { useState, useEffect } from 'react'
import './form.css'

function Contacts() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [info, setInfo] = useState('')
  const [emailDirty, setEmailDirty] = useState(false)
  const [nameDirty, setNameDirty] = useState(false)
  const [ageDirty, setAgeDirty] = useState(false)
  const [infoDirty, setInfoDirty] = useState(false)
  const [emailError, setEmailError] = useState('Email не может быть пустым')
  const [nameError, setNameError] = useState('Имя не может быть пустым')
  const [ageError, setAgeError] = useState('Возраст не может быть пустым')
  const [infoError, setInfoError] = useState('Это поле не может быть пустым')
  const [formValid, setFormValid] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (emailError || nameError || ageError || infoError) setFormValid(false)
    else setFormValid(true)
  }, [emailError, nameError, ageError, infoError])

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
      setName('')
      setAge(0)
      setInfo('')
      setEmailDirty(false)
      setNameDirty(false)
      setAgeDirty(false)
      setInfoDirty(false)
      setEmailError('Email не может быть пустым')
      setNameError('Имя не может быть пустым')
      setAgeError('Возраст не может быть пустым')
      setInfoError('Это поле не может быть пустым')
      setFormValid(false)
    } catch (error) {
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const emailHandler = (e) => {
    setEmail(e.target.value)
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    if (!re.test(String(e.target.value).toLowerCase()))
      setEmailError('Некорректный email')
    else setEmailError('')
  }

  const nameHandler = (e) => {
    setName(e.target.value)
    if (e.target.value.length < 2)
      setNameError('Имя должно быть больше одного символа')
    else setNameError('')
  }

  const ageHandler = (e) => {
    setAge(e.target.value)
    if (!Number.isInteger(Number(e.target.value)) || e.target.value <= 0)
      setAgeError('Возраст введен некорректно')
    else setAgeError('')
  }
  const infoHandler = (e) => {
    setInfo(e.target.value)
    if (e.target.value.length === 0) {
      setInfoError('Это поле не должно быть пустым')
    } else {
      setInfoError('')
    }
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true)
        break
      case 'name':
        setNameDirty(true)
        break
      case 'age':
        setAgeDirty(true)
        break
      case 'info':
        setInfoDirty(true)
        break
    }
  }
  const handleSendData = async () => {
    const dataToSend = {
      email,
      name,
      age,
      info,
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/api/appeals/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const data = await response.json()
      console.log('Successfully:', data)
    } catch (error) {
      console.error('Error sending data:', error)
      throw error
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Заполните форму обратной связи</h3>
      {emailDirty && emailError && <div className="error">{emailError}</div>}
      <input
        onChange={(e) => emailHandler(e)}
        value={email}
        onBlur={(e) => blurHandler(e)}
        name="email"
        type="text"
        placeholder="Введите email"
      />
      {nameDirty && nameError && <div className="error">{nameError}</div>}
      <input
        onChange={(e) => nameHandler(e)}
        value={name}
        onBlur={(e) => blurHandler(e)}
        name="name"
        type="text"
        placeholder="Введите имя"
      />
      {ageDirty && ageError && <div className="error">{ageError}</div>}
      <input
        onChange={(e) => ageHandler(e)}
        value={age}
        onBlur={(e) => blurHandler(e)}
        name="age"
        type="number"
        placeholder="Введите возраст"
      />
      {infoDirty && infoError && <div className="error">{infoError}</div>}
      <textarea
        onChange={(e) => infoHandler(e)}
        value={info}
        onBlur={(e) => blurHandler(e)}
        name="info"
        placeholder="Опишите вашу проблему"
        rows="8"
        cols="40"
        style={{ overflowY: 'auto' }}
      ></textarea>
      <button disabled={!formValid} type="submit">
        Отправить{' '}
      </button>
    </form>
  )
}

export default Contacts

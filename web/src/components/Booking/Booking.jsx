import { useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  IconCalendarCheckFill,
  IconCheckCircleFill,
  IconCheckLg,
  IconTelephoneFill,
  IconTools,
  IconWhatsapp,
} from '../icons'
import bookingBg from '../../assets/gallery/mw3.jpeg'
import bookingCar from '../../assets/booking-car.png'

const WEB3FORMS_KEY = 'b9328dd0-046e-4699-9523-3c806566fa89'

const initialForm = {
  name: '',
  phone: '',
  service: '',
  date: '',
  time: '',
  message: '',
}

const initialErrors = {
  name: '',
  phone: '',
  service: '',
  date: '',
  time: '',
}

function formatTime12(time) {
  const [hours, minutes] = time.split(':')
  const hour = parseInt(hours, 10)
  const ampm = hour >= 12 ? 'PM' : 'AM'
  const hour12 = hour % 12 || 12
  return `${hour12}:${minutes} ${ampm}`
}

function sendBookingEmail(bookingData) {
  const formData = new FormData()
  formData.append('access_key', WEB3FORMS_KEY)
  formData.append('subject', `New Booking: ${bookingData.service} - ${bookingData.name}`)
  formData.append('from_name', 'Z Elite Auto Care Website')
  formData.append('name', bookingData.name)
  formData.append('phone', bookingData.phone)
  formData.append('email', bookingData.email || 'Not provided')
  formData.append('service', bookingData.service)
  formData.append('date', bookingData.date)
  formData.append('time', formatTime12(bookingData.time))
  formData.append('message', bookingData.message || 'No additional notes')

  return fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        console.log('Booking email sent successfully')
      } else {
        console.error('Failed to send booking email')
      }
    })
    .catch((error) => {
      console.error('Error sending booking:', error)
    })
}

function Booking() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState(initialErrors)
  const [submitted, setSubmitted] = useState(false)
  const [confirmPhone, setConfirmPhone] = useState('')
  const [confirmDate, setConfirmDate] = useState('')
  const [confirmService, setConfirmService] = useState('')
  const reduceMotion = useReducedMotion()

  const minDate = useMemo(() => {
    const today = new Date()
    const year = today.getFullYear()
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const day = String(today.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }, [])

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const setFieldError = (field, message) => {
    setErrors((prev) => ({ ...prev, [field]: message }))
  }

  const clearFieldError = (field) => {
    setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const validateName = () => {
    const nameValue = form.name.trim()
    if (!nameValue) {
      setFieldError('name', 'Name is required')
      return false
    }
    if (nameValue.length < 2) {
      setFieldError('name', 'Name must be at least 2 characters')
      return false
    }
    clearFieldError('name')
    return true
  }

  const validatePhone = () => {
    const phoneValue = form.phone.trim()
    const phoneRegex = /^(\+?61|0)4\d{8}$/
    if (!phoneValue) {
      setFieldError('phone', 'Phone number is required')
      return false
    }
    if (!phoneRegex.test(phoneValue.replace(/\s/g, ''))) {
      setFieldError('phone', 'Please enter a valid Australian phone number')
      return false
    }
    clearFieldError('phone')
    return true
  }

  const validateService = () => {
    if (!form.service) {
      setFieldError('service', 'Please select a service')
      return false
    }
    clearFieldError('service')
    return true
  }

  const validateDate = () => {
    if (!form.date) {
      setFieldError('date', 'Please select a preferred date')
      return false
    }
    const selectedDate = new Date(form.date)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    if (selectedDate < today) {
      setFieldError('date', 'Please select a future date')
      return false
    }
    clearFieldError('date')
    return true
  }

  const validateTime = () => {
    if (!form.time) {
      setFieldError('time', 'Please select a preferred time')
      return false
    }
    clearFieldError('time')
    return true
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const isNameValid = validateName()
    const isPhoneValid = validatePhone()
    const isServiceValid = validateService()
    const isDateValid = validateDate()
    const isTimeValid = validateTime()

    if (!(isNameValid && isPhoneValid && isServiceValid && isDateValid && isTimeValid)) {
      return
    }

    const bookingData = {
      name: form.name,
      phone: form.phone,
      email: '',
      service: form.service,
      date: form.date,
      time: form.time,
      message: form.message,
    }

    sendBookingEmail(bookingData)

    setConfirmPhone(form.phone)
    setConfirmService(form.service)
    const dateObj = new Date(`${form.date}T00:00:00`)
    const formattedDate = dateObj.toLocaleDateString('en-AU', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    setConfirmDate(`${formattedDate} at ${formatTime12(form.time)}`)
    setSubmitted(true)

    // Smooth scroll after paint
    requestAnimationFrame(() => {
      document.getElementById('formSuccess')?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    })
  }

  const fieldStyle = (field) => ({
    borderColor: errors[field] ? '#dc2626' : 'transparent',
  })

  return (
    <>
      <section id="booking" className="booking py-5">
        <div className="booking__bg" aria-hidden="true">
          <img src={bookingBg} alt="" loading="lazy" decoding="async" />
          <div className="booking__shade" />
        </div>
        <div className="container">
          <motion.div
            className="section-header text-center mb-5"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="booking-hello ze-eyebrow">Book Online</p>
            <h2 className="booking-brand">
              Need a Reliable <span>Mobile Mechanic?</span>
            </h2>
            <p className="booking-sub">We Bring the Garage to You.</p>
          </motion.div>

          <div className="row justify-content-center">
            <motion.div
              className="col-lg-8"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="booking-car" aria-hidden="true">
                <img src={bookingCar} alt="" loading="lazy" decoding="async" />
              </div>
              <div className="booking-panel">
                <div className="booking-panel__head">
                  <h4 className="mb-0">
                    <IconTelephoneFill className="me-2" />CALL NOW: <a href="tel:0432241883">0432 241 883</a>
                  </h4>
                  <small>Or fill the form below for callback</small>
                </div>
                <div className="booking-panel__body">
                  {submitted && (
                    <motion.div
                      id="formSuccess"
                      className="booking-success"
                      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <motion.div
                        className="booking-success__icon"
                        aria-hidden="true"
                        initial={reduceMotion ? false : { scale: 0, rotate: -20 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 0.1 }}
                      >
                        <IconCheckLg />
                      </motion.div>
                      <motion.p
                        className="booking-success__eyebrow"
                        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                      >
                        Z Elite Auto Care
                      </motion.p>
                      <motion.h3
                        className="booking-success__title"
                        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        Booking Request Received!
                      </motion.h3>
                      <motion.p
                        className="booking-success__copy"
                        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        Thank you for choosing Z Elite Auto Care. We&apos;ve successfully received
                        your booking request. Our team will contact you{' '}
                        <strong>as soon as possible</strong> to confirm your appointment and arrange
                        your mobile mechanic service.
                      </motion.p>
                      <motion.div
                        className="booking-success__summary"
                        initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="booking-success__row">
                          <IconTools className="booking-success__row-icon" aria-hidden="true" />
                          <span>
                            <span className="booking-success__label">Service</span>
                            <strong id="confirmService">{confirmService}</strong>
                          </span>
                        </p>
                        <p className="booking-success__row">
                          <IconTelephoneFill className="booking-success__row-icon" aria-hidden="true" />
                          <span>
                            <span className="booking-success__label">We&apos;ll call</span>
                            <strong id="confirmPhone">{confirmPhone}</strong>
                          </span>
                        </p>
                        <p className="booking-success__row">
                          <IconCalendarCheckFill
                            className="booking-success__row-icon"
                            aria-hidden="true"
                          />
                          <span>
                            <span className="booking-success__label">Preferred time</span>
                            <strong id="confirmDate">{confirmDate}</strong>
                          </span>
                        </p>
                      </motion.div>
                      <motion.p
                        className="booking-success__note"
                        initial={reduceMotion ? false : { opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.62 }}
                      >
                        Need something sooner? Reach us directly and we&apos;ll help right away.
                      </motion.p>
                      <motion.div
                        className="booking-success__actions"
                        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <a
                          href="tel:0432241883"
                          className="ze-btn ze-btn--primary"
                        >
                          <IconTelephoneFill className="me-1" />
                          Call 0432 241 883
                        </a>
                        <a
                          href="https://wa.me/61432241883"
                          target="_blank"
                          rel="noreferrer"
                          className="ze-btn ze-btn--success"
                        >
                          <IconWhatsapp className="me-1" />
                          WhatsApp
                        </a>
                      </motion.div>
                    </motion.div>
                  )}

                  {!submitted && (
                    <form id="bookingForm" className="booking-form" onSubmit={handleSubmit} noValidate>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label htmlFor="name" className="form-label fw-bold">
                            Full Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control form-control-lg"
                            placeholder="Your name"
                            value={form.name}
                            onChange={(e) => updateField('name', e.target.value)}
                            onBlur={validateName}
                            style={fieldStyle('name')}
                            required
                          />
                          <span className={`error-message${errors.name ? ' show' : ''}`} id="nameError">
                            {errors.name}
                          </span>
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="phone" className="form-label fw-bold">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="form-control form-control-lg"
                            placeholder="0432 241 883"
                            value={form.phone}
                            onChange={(e) => updateField('phone', e.target.value)}
                            onBlur={validatePhone}
                            style={fieldStyle('phone')}
                            required
                          />
                          <span
                            className={`error-message${errors.phone ? ' show' : ''}`}
                            id="phoneError"
                          >
                            {errors.phone}
                          </span>
                        </div>
                        <div className="col-12">
                          <label htmlFor="service" className="form-label fw-bold">
                            Service Required
                          </label>
                          <select
                            id="service"
                            name="service"
                            className="form-select form-select-lg"
                            value={form.service}
                            onChange={(e) => {
                              const value = e.target.value
                              updateField('service', value)
                              if (!value) {
                                setFieldError('service', 'Please select a service')
                              } else {
                                clearFieldError('service')
                              }
                            }}
                            style={fieldStyle('service')}
                            required
                          >
                            <option value="">Select a service</option>
                            <optgroup label="GARAGE SERVICES (Priority)">
                              <option value="Brake Repairs">Brake Repairs</option>
                              <option value="Oil Changes">Oil Changes</option>
                              <option value="Transmission Service">Transmission Service</option>
                              <option value="Suspension Repairs">Suspension Repairs</option>
                              <option value="Jump Starting">Jump Starting (24/7)</option>
                              <option value="Car Radio Fitting">Car Radio Fitting</option>
                              <option value="Pre-Purchase Inspection">Pre-Purchase Inspection</option>
                              <option value="Headlight Cleaning">Headlight Cleaning</option>
                            </optgroup>
                            <optgroup label="DETAILING SERVICES">
                              <option value="Normal Carwash">Normal Carwash $80</option>
                              <option value="Interior Only">Interior Only $120</option>
                              <option value="Full Detail">Full Detail $250</option>
                              <option value="Full Detail + Coating">
                                Full Detail + 5 Year Coating $600
                              </option>
                            </optgroup>
                          </select>
                          <span
                            className={`error-message${errors.service ? ' show' : ''}`}
                            id="serviceError"
                          >
                            {errors.service}
                          </span>
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="date" className="form-label fw-bold">
                            Preferred Date
                          </label>
                          <input
                            type="date"
                            id="date"
                            name="date"
                            className="form-control form-control-lg"
                            min={minDate}
                            value={form.date}
                            onChange={(e) => {
                              updateField('date', e.target.value)
                            }}
                            onBlur={validateDate}
                            style={fieldStyle('date')}
                            required
                          />
                          <span className={`error-message${errors.date ? ' show' : ''}`} id="dateError">
                            {errors.date}
                          </span>
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="time" className="form-label fw-bold">
                            Preferred Time
                          </label>
                          <input
                            type="time"
                            id="time"
                            name="time"
                            className="form-control form-control-lg"
                            value={form.time}
                            onChange={(e) => updateField('time', e.target.value)}
                            onBlur={validateTime}
                            style={fieldStyle('time')}
                            required
                          />
                          <span className={`error-message${errors.time ? ' show' : ''}`} id="timeError">
                            {errors.time}
                          </span>
                        </div>
                        <div className="col-12">
                          <label htmlFor="message" className="form-label fw-bold">
                            Additional Notes
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            className="form-control"
                            placeholder="Tell us about your vehicle or special requirements..."
                            rows="3"
                            value={form.message}
                            onChange={(e) => updateField('message', e.target.value)}
                          ></textarea>
                        </div>
                        <div className="col-12 text-center mt-4">
                          <button type="submit" className="ze-btn ze-btn--primary ze-btn--lg booking-submit">
                            <IconCheckCircleFill className="me-2" />
                            Confirm Booking
                          </button>
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Booking

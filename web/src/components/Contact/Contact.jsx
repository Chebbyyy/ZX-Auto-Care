import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { IconArrowUpRight, IconClockFill, IconGeoAltFill, IconTelephoneFill } from '../icons'
import AnimatedGrid from '../AnimatedGrid/AnimatedGrid'

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.08 + i * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

function Contact() {
  const [toastMsg, setToastMsg] = useState('Number copied!')
  const [toastShow, setToastShow] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (!toastShow) return undefined
    const timer = setTimeout(() => setToastShow(false), 2200)
    return () => clearTimeout(timer)
  }, [toastShow, toastMsg])

  const handlePhoneClick = (e) => {
    if (window.innerWidth >= 768) {
      e.preventDefault()
      navigator.clipboard
        .writeText('0432241883')
        .then(() => {
          setToastMsg('Number copied: 0432 241 883')
          setToastShow(true)
        })
        .catch(() => {
          window.location.href = 'tel:0432241883'
        })
    }
  }

  return (
    <>
      <section id="contact" className="ct-section">
        <AnimatedGrid />

        <div className="container">
          <motion.div
            className="ct-section-header"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="ct-label">Contact Us</span>
            <h2 className="ct-title">Get in Touch</h2>
            <p className="ct-subtitle">
              Based in Durack, serving all of Darwin. 24 hours a day, every day of the year.
            </p>
          </motion.div>

          <div className="ct-cards-row">
            <motion.div
              className="ct-card ct-card--red"
              custom={0}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              <div className="ct-card-icon">
                <IconTelephoneFill />
              </div>
              <h3 className="ct-card-title">Call Us</h3>
              <a
                href="tel:0432241883"
                className="ct-phone"
                id="ctPhone"
                title="Click to copy number"
                onClick={handlePhoneClick}
              >
                0432 241 883
              </a>
              <a
                href="https://wa.me/61432241883"
                target="_blank"
                rel="noopener noreferrer"
                className="ct-wa-link"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp us
              </a>
            </motion.div>

            <motion.div
              className="ct-card ct-card--red"
              custom={1}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              <div className="ct-card-icon">
                <IconGeoAltFill />
              </div>
              <h3 className="ct-card-title">Our Location</h3>
              <p className="ct-address">
                6 Myola Ct,
                <br />
                Durack NT 0830
              </p>
              <a
                href="https://maps.google.com/?q=6+Myola+Ct,+Durack+NT+0830"
                target="_blank"
                rel="noopener noreferrer"
                className="ct-dir-link"
              >
                Get directions <IconArrowUpRight />
              </a>
            </motion.div>

            <motion.div
              className="ct-card ct-card--red"
              custom={2}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              <div className="ct-card-icon">
                <IconClockFill />
              </div>
              <h3 className="ct-card-title">Opening Hours</h3>
              <p className="ct-hours">Open 24 / 7</p>
              <span className="ct-col-note">Every day, including public holidays</span>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="ct-map-divider">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>

      <section className="ct-map-section">
        <div className="container">
          <motion.div
            className="ct-map-wrap"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.0!2d130.967458!3d-12.472991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s6+Myola+Ct%2C+Durack+NT+0830!5e0!3m2!1sen!2sau!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Z Elite Auto Care, 6 Myola Ct, Durack NT 0830"
            ></iframe>
          </motion.div>
        </div>
      </section>

      <div className={`ct-toast${toastShow ? ' ct-toast--show' : ''}`}>{toastMsg}</div>
    </>
  )
}

export default Contact

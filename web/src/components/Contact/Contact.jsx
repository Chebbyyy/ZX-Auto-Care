import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  IconArrowUpRight,
  IconClockFill,
  IconGeoAltFill,
  IconTelephoneFill,
  IconWhatsapp,
} from '../icons'
import SectionHeader from '../SectionHeader/SectionHeader'

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: 0.08 + i * 0.08,
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
      <section id="contact" className="ct-section ze-section">
        <div className="ze-bg-static" aria-hidden="true" />

        <div className="container">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionHeader
              as="h2"
              eyebrow="Contact Us"
              title="Get in Touch"
              lead="Based in Durack, serving all of Darwin. 24 hours a day, every day of the year."
            />
          </motion.div>

          <div className="ct-cards-row">
            <motion.div
              className="ct-card ct-card--red ze-card ze-card--dark"
              custom={0}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              <div className="ct-card-icon">
                <IconTelephoneFill />
              </div>
              <h2 className="ct-card-title">Call Us</h2>
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
                <IconWhatsapp />
                WhatsApp us
              </a>
            </motion.div>

            <motion.div
              className="ct-card ct-card--red ze-card ze-card--dark"
              custom={1}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              <div className="ct-card-icon">
                <IconGeoAltFill />
              </div>
              <h2 className="ct-card-title">Our Location</h2>
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
              className="ct-card ct-card--red ze-card ze-card--dark"
              custom={2}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              <div className="ct-card-icon">
                <IconClockFill />
              </div>
              <h2 className="ct-card-title">Opening Hours</h2>
              <p className="ct-hours">Open 24 / 7</p>
              <span className="ct-col-note">Every day, including public holidays</span>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="ct-map-section ze-section">
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

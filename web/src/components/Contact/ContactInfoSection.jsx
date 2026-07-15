import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import {
  IconAward,
  IconCalendarCheckFill,
  IconClockFill,
  IconDropletFill,
  IconEnvelopeFill,
  IconGearFill,
  IconGeoAltFill,
  IconImages,
  IconPatchCheck,
  IconShieldCheck,
  IconTelephoneFill,
  IconTools,
  IconTruck,
  IconWhatsapp,
  IconWrench,
} from '../icons'
import DarkVeil from '../DarkVeil/DarkVeil'
import './ContactInfoSection.css'

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
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

function ContactInfoSection() {
  const reduceMotion = useReducedMotion()

  return (
    <>
      <div className="contact-info-divider" aria-hidden="true">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 C360,0 1080,60 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>

      <section className="contact-info-band" aria-label="Contact information">
        <div className="darkveil-backdrop contact-info-band__veil" aria-hidden="true">
          <DarkVeil
            hueShift={155}
            noiseIntensity={0.025}
            scanlineIntensity={0}
            speed={0.18}
            scanlineFrequency={0}
            warpAmount={0.06}
            resolutionScale={1}
          />
        </div>

        <div className="container contact-info-band__inner">
          <div className="row g-4 py-5">
            <motion.div
              className="col-lg-4"
              custom={0}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="contact-info-card">
                <div className="contact-info-card__icon">
                  <IconGearFill />
                </div>
                <h4 className="contact-info-card__title">Z Elite Auto Care</h4>
                <p className="contact-info-card__eyebrow">Darwin&apos;s Trusted Mobile Workshop</p>
                <p className="contact-info-card__copy">
                  Professional mobile garage services including brakes, oil, suspension, electrical
                  and more, delivered to your door anywhere in Darwin, 24/7. Detailing packages
                  also available as an add-on.
                </p>
                <div className="contact-info-card__badges">
                  <span className="contact-info-badge contact-info-badge--primary">
                    <IconTools className="me-1" />
                    Mobile Garage
                  </span>
                  <span className="contact-info-badge">
                    <IconClockFill className="me-1" />
                    24/7 Available
                  </span>
                  <span className="contact-info-badge contact-info-badge--muted">
                    <IconTruck className="me-1" />
                    We Come To You
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="col-lg-4"
              custom={1}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="contact-info-card">
                <div className="contact-info-card__icon">
                  <IconTools />
                </div>
                <h4 className="contact-info-card__title">Quick Links</h4>
                <p className="contact-info-card__eyebrow">Navigate the Site</p>
                <nav className="contact-info-links" aria-label="Quick links">
                  <Link to="/services#garageServices" className="contact-info-link contact-info-link--primary">
                    <IconWrench className="contact-info-link__icon" />
                    <span>
                      <strong>Garage Services</strong>
                      <small>Brake, oil & mechanical repairs</small>
                    </span>
                  </Link>
                  <Link to="/gallery" className="contact-info-link">
                    <IconImages className="contact-info-link__icon contact-info-link__icon--muted" />
                    View Our Work Gallery
                  </Link>
                  <Link to="/contact#booking" className="contact-info-link">
                    <IconCalendarCheckFill className="contact-info-link__icon" />
                    Book a Service Today
                  </Link>
                  <Link to="/services" className="contact-info-link contact-info-link--aob">
                    <IconDropletFill className="contact-info-link__icon contact-info-link__icon--aob" />
                    <span>
                      Car Wash & Detailing
                      <small className="contact-info-aob-tag">Add-on</small>
                    </span>
                  </Link>
                </nav>
              </div>
            </motion.div>

            <motion.div
              className="col-lg-4"
              custom={2}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="contact-info-card">
                <div className="contact-info-card__icon">
                  <IconTelephoneFill />
                </div>
                <h4 className="contact-info-card__title">Get In Touch</h4>
                <p className="contact-info-card__eyebrow">We&apos;re Always Here For You</p>
                <a href="tel:0432241883" className="contact-info-phone-btn">
                  <IconTelephoneFill className="me-2" />
                  0432 241 883
                </a>
                <p className="contact-info-meta">
                  <IconClockFill className="text-danger me-2" />
                  Open 24 hours, 7 days a week
                </p>
                <p className="contact-info-meta">
                  <IconGeoAltFill className="text-danger me-2" />
                  6 Myola Ct, Durack NT 0830
                </p>
                <div className="contact-info-actions">
                  <a
                    href="https://wa.me/61432241883"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success contact-info-action-btn"
                  >
                    <IconWhatsapp className="me-1" />
                    WhatsApp
                  </a>
                  <a href="#contact" className="btn btn-outline-danger contact-info-action-btn">
                    <IconEnvelopeFill className="me-1" />
                    Contact
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="contact-info-trust"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="contact-info-trust-item contact-info-trust-item--red">
              <IconShieldCheck className="me-1" />
              Licensed
            </span>
            <span className="contact-info-trust-item">
              <IconAward className="me-1" />
              Insured
            </span>
            <span className="contact-info-trust-item contact-info-trust-item--light">
              <IconPatchCheck className="me-1" />
              Guaranteed
            </span>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default ContactInfoSection

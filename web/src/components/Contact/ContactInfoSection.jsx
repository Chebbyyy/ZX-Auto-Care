import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  IconCalendarCheckFill,
  IconDropletFill,
  IconImages,
  IconPatchCheck,
  IconShieldCheck,
  IconTools,
  IconWrench,
} from '../icons'
import './ContactInfoSection.css'

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

function ContactInfoSection() {
  return (
    <section className="contact-info-band ze-section" aria-label="Quick links">
      <div className="ze-bg-static" aria-hidden="true" />

      <div className="container contact-info-band__inner">
        <div className="row g-4 py-2 justify-content-center">
          <motion.div
            className="col-lg-8"
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="contact-info-card ze-card ze-card--dark">
              <div className="contact-info-card__icon">
                <IconTools />
              </div>
              <h2 className="contact-info-card__title">Quick Links</h2>
              <div className="contact-info-card__links">
                <Link to="/services#garageServices" className="contact-info-quick-link">
                  <IconWrench className="me-1" />
                  Garage Services
                </Link>
                <Link to="/services#detailingPackages" className="contact-info-quick-link">
                  <IconDropletFill className="me-1" />
                  Detailing
                </Link>
                <Link to="/gallery" className="contact-info-quick-link">
                  <IconImages className="me-1" />
                  Gallery
                </Link>
                <Link to="/about" className="contact-info-quick-link">
                  <IconShieldCheck className="me-1" />
                  About
                </Link>
                <Link to="/testimonials" className="contact-info-quick-link">
                  <IconPatchCheck className="me-1" />
                  Reviews
                </Link>
                <Link to="/contact#booking" className="ze-btn ze-btn--primary ze-btn--sm">
                  <IconCalendarCheckFill className="me-1" />
                  Book a Service
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactInfoSection

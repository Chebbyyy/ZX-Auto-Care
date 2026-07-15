import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion'
import mw1 from '../../assets/gallery/mw1.jpeg'
import mw2 from '../../assets/gallery/mw2.jpeg'
import mw3 from '../../assets/gallery/mw3.jpeg'
import mw6 from '../../assets/gallery/mw 6.jpeg'
import mw7 from '../../assets/gallery/mw7.jpeg'
import mw8 from '../../assets/gallery/mw8.jpeg'
import mw9 from '../../assets/gallery/mw9.jpeg'
import mw10 from '../../assets/gallery/mw10.jpeg'
import mw11 from '../../assets/gallery/mw11.jpeg'
import mw12 from '../../assets/gallery/mw12.jpeg'
import mw13 from '../../assets/gallery/mw13.jpeg'
import mw14 from '../../assets/gallery/mw14.jpeg'
import DarkVeil from '../DarkVeil/DarkVeil'
import {
  IconArrowRightCircleFill,
  IconClock,
  IconCpu,
  IconGearFill,
  IconLightning,
  IconShieldCheck,
  IconStopwatch,
  IconTools,
  IconWrench,
} from '../icons'
import './Gallery.css'

const BA_SLIDES = [
  {
    before: mw11,
    after: mw12,
    beforeAlt: 'Before repair',
    afterAlt: 'After repair',
  },
  {
    before: mw13,
    after: mw14,
    beforeAlt: 'Interior before',
    afterAlt: 'Interior after',
  },
]

const WORK_ITEMS = [
  {
    id: 1,
    img: mw6,
    alt: 'Engine repair',
    badge: 'GARAGE',
    tone: 'danger',
    Icon: IconGearFill,
    iconClass: 'text-warning',
    title: 'Engine Overhaul',
    serviceTag: 'Engine Repair',
    blurb: 'Complete engine component repair and reconditioning',
    modalTitle: 'Engine Component Overhaul',
    lead: 'Professional Engine Repair Service',
    points: [
      'Complete engine disassembly and inspection',
      'Thorough component cleaning and reconditioning',
      'Seal replacement and part restoration',
      'Performance testing and quality assurance',
    ],
  },
  {
    id: 2,
    img: mw7,
    alt: 'CV axle repair',
    badge: 'REPAIR',
    tone: 'warning',
    Icon: IconTools,
    iconClass: 'text-info',
    title: 'CV Axle Replacement',
    serviceTag: 'Drivetrain Service',
    blurb: 'Professional drivetrain and suspension service',
    modalTitle: 'CV Axle & Drivetrain Repair',
    lead: 'Expert Drivetrain Service',
    points: [
      'CV axle replacement and joint inspection',
      'Suspension component assessment',
      'Power transfer restoration',
      'Road testing for smooth operation',
    ],
  },
  {
    id: 3,
    img: mw8,
    alt: 'Engine timing',
    badge: 'PRECISION',
    tone: 'success',
    Icon: IconStopwatch,
    iconClass: 'text-success',
    title: 'Engine Timing',
    serviceTag: 'Engine Repair',
    blurb: 'Precision valve adjustment and timing service',
    modalTitle: 'Engine Valve Adjustment & Timing',
    lead: 'Precision Engine Timing Service',
    points: [
      'Precision valve adjustment and timing work',
      'Camshaft inspection and alignment',
      'Engine performance optimization',
      'Extended engine life guarantee',
    ],
  },
  {
    id: 4,
    img: mw1,
    alt: 'Brake service',
    badge: 'SAFETY',
    tone: 'info',
    Icon: IconShieldCheck,
    iconClass: 'text-info',
    title: 'Brake System',
    serviceTag: 'Brake Service',
    blurb: 'Complete brake and suspension safety service',
    modalTitle: 'Brake System & Suspension Service',
    lead: 'Complete Brake & Safety Service',
    points: [
      'Complete brake system inspection and repair',
      'Brake pad and rotor replacement',
      'Suspension component assessment',
      'Safety testing and road performance check',
    ],
  },
  {
    id: 5,
    img: mw9,
    alt: 'Camshaft inspection',
    badge: 'TIMING',
    tone: 'primary',
    Icon: IconClock,
    iconClass: 'text-primary',
    title: 'Camshaft Service',
    serviceTag: 'Engine Repair',
    blurb: 'Detailed camshaft and valve timing inspection',
    modalTitle: 'Camshaft Inspection & Timing Service',
    lead: 'Precision Camshaft Service',
    points: [
      'Detailed camshaft and valve timing inspection',
      'Bearing cap assessment and alignment',
      'Precise valve synchronization',
      'Timing-related issue prevention',
    ],
  },
  {
    id: 6,
    img: mw10,
    alt: 'Engine bay repair',
    badge: 'SYSTEM',
    tone: 'secondary',
    Icon: IconCpu,
    iconClass: 'text-secondary',
    title: 'Engine Bay Service',
    serviceTag: 'Maintenance',
    blurb: 'Detailed engine bay system repair and maintenance',
    modalTitle: 'Engine Bay System Repair',
    lead: 'Complete Engine Bay Service',
    points: [
      'Cooling system components service',
      'Electrical connections repair',
      'Hose replacements and maintenance',
      'Hands-on troubleshooting',
    ],
  },
  {
    id: 7,
    img: mw3,
    alt: 'Engine removal',
    badge: 'REBUILD',
    tone: 'dark',
    Icon: IconWrench,
    iconClass: 'text-light',
    title: 'Engine Removal',
    serviceTag: 'Engine Repair',
    blurb: 'Complete engine removal and replacement service',
    modalTitle: 'Complete Engine Removal & Replacement',
    lead: 'Professional Engine Replacement',
    points: [
      'Full engine extraction using hydraulic hoist',
      'Engine rebuild and replacement service',
      'Expert handling of heavy components',
      'Precision and safety for major overhauls',
    ],
  },
  {
    id: 8,
    img: mw2,
    alt: 'Dashboard wiring',
    badge: 'ELECTRICAL',
    tone: 'danger',
    Icon: IconLightning,
    iconClass: 'text-warning',
    title: 'Dashboard Wiring',
    serviceTag: 'Electrical',
    blurb: 'Dashboard wiring and electronics repair service',
    modalTitle: 'Dashboard Wiring & Electronics Repair',
    lead: 'Expert Electronics Service',
    points: [
      'Dashboard disassembly for electrical repair',
      'Expert troubleshooting of wiring faults',
      'Sensor issues and component installation',
      'HVAC controls and safety systems',
    ],
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.08 + i * 0.07,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

function Gallery() {
  const [slideIndex, setSlideIndex] = useState(0)
  const [openModal, setOpenModal] = useState(null)
  const reduceMotion = useReducedMotion()
  const activeItem = WORK_ITEMS.find((item) => item.id === openModal) || null

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev === 0 ? 1 : 0))
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (openModal !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [openModal])

  useEffect(() => {
    if (openModal === null) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpenModal(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [openModal])

  return (
    <>
      <section id="gallery" className="gallery gallery--premium">
        <div className="darkveil-backdrop" aria-hidden="true">
          <DarkVeil
            hueShift={155}
            noiseIntensity={0.03}
            scanlineIntensity={0}
            speed={0.2}
            scanlineFrequency={0}
            warpAmount={0.1}
            resolutionScale={1}
          />
        </div>

        <div className="container">
          <motion.div
            className="section-header"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2>Our Work Gallery</h2>
            <div className="header-line"></div>
            <p className="text-muted">See the quality of our craftsmanship</p>
          </motion.div>

          <div id="workCarousel" className="gallery-ba">
            <div className="gallery-ba__panels">
              {BA_SLIDES.map((slide, index) => (
                <div
                  key={`${slide.beforeAlt}-${index}`}
                  className={`gallery-ba__slide${slideIndex === index ? ' is-active' : ''}`}
                >
                  <div className="gallery-ba__pair">
                    <div className="gallery-ba__side">
                      <img src={slide.before} alt={slide.beforeAlt} />
                      <span className="gallery-ba__glass gallery-ba__glass--before">Before</span>
                    </div>
                    <div className="gallery-ba__side">
                      <img src={slide.after} alt={slide.afterAlt} />
                      <span className="gallery-ba__glass gallery-ba__glass--after">After</span>
                    </div>
                    <div className="gallery-ba__handle" aria-hidden="true">
                      <span className="gallery-ba__handle-knob" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="gallery-ba__nav gallery-ba__nav--prev"
              aria-label="Previous slide"
              onClick={() => setSlideIndex((prev) => (prev === 0 ? 1 : 0))}
            >
              ‹
            </button>
            <button
              type="button"
              className="gallery-ba__nav gallery-ba__nav--next"
              aria-label="Next slide"
              onClick={() => setSlideIndex((prev) => (prev === 0 ? 1 : 0))}
            >
              ›
            </button>

            <div className="gallery-ba__dots">
              {BA_SLIDES.map((_, index) => (
                <button
                  key={`dot-${index}`}
                  type="button"
                  className={`gallery-ba__dot${slideIndex === index ? ' is-active' : ''}`}
                  aria-label={`Slide ${index + 1}`}
                  aria-current={slideIndex === index ? 'true' : undefined}
                  onClick={() => setSlideIndex(index)}
                />
              ))}
            </div>
          </div>

          <div className="row g-4">
            {WORK_ITEMS.map((item, index) => {
              const Icon = item.Icon
              return (
                <motion.div
                  key={item.id}
                  className="col-lg-6"
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div
                    className="card h-100 work-card"
                    onClick={() => setOpenModal(item.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        setOpenModal(item.id)
                      }
                    }}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="card-media">
                      <img src={item.img} className="card-img-top" alt={item.alt} />
                      <div className="card-media-shade" aria-hidden="true" />
                      <span className={`work-glass-badge tone-${item.tone}`}>{item.badge}</span>
                      <div className="card-title-overlay">
                        <h5>
                          <Icon className={`${item.iconClass} me-2`} />
                          {item.title}
                        </h5>
                      </div>
                    </div>
                    <div className="card-body">
                      <span className="work-service-tag">{item.serviceTag}</span>
                      <p className="card-text text-dark">{item.blurb}</p>
                      <div className="work-card-meta">
                        <small className="text-muted">Click to view details</small>
                        <span className="work-view-btn">
                          View Project →
                          <IconArrowRightCircleFill className="fs-5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeItem ? (
          <Lightbox item={activeItem} reduceMotion={reduceMotion} onClose={() => setOpenModal(null)} />
        ) : null}
      </AnimatePresence>
    </>
  )
}

function Lightbox({ item, reduceMotion, onClose }) {
  const Icon = item.Icon
  return (
    <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-labelledby="gallery-lb-title">
      <button
        type="button"
        className="gallery-lightbox__backdrop"
        aria-label="Close lightbox"
        onClick={onClose}
      />
      <motion.div
        className="gallery-lightbox__dialog"
        initial={reduceMotion ? false : { opacity: 0, y: 14, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.98 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="gallery-lightbox__header">
          <h5 id="gallery-lb-title">
            <Icon className="me-2" />
            {item.modalTitle}
          </h5>
          <button type="button" className="gallery-lightbox__close" aria-label="Close" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="gallery-lightbox__body">
          <img src={item.img} alt={item.alt} />
          <p className="lead">{item.lead}</p>
          <ul>
            {item.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
        <div className="gallery-lightbox__footer">
          <button type="button" className="btn btn-outline-secondary" onClick={onClose}>
            Close
          </button>
          <Link to="/contact#booking" className="btn btn-danger" onClick={onClose}>
            Book This Service
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

export default Gallery

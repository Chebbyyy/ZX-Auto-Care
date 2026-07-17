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
  IconArrowUpRight,
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
    badge: 'Garage',
    Icon: IconGearFill,
    title: 'Engine Overhaul',
    serviceTag: 'Engine Repair',
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
    badge: 'Repair',
    Icon: IconTools,
    title: 'CV Axle Replacement',
    serviceTag: 'Drivetrain',
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
    badge: 'Precision',
    Icon: IconStopwatch,
    title: 'Engine Timing',
    serviceTag: 'Engine Repair',
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
    badge: 'Safety',
    Icon: IconShieldCheck,
    title: 'Brake System',
    serviceTag: 'Brake Service',
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
    badge: 'Timing',
    Icon: IconClock,
    title: 'Camshaft Service',
    serviceTag: 'Engine Repair',
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
    badge: 'System',
    Icon: IconCpu,
    title: 'Engine Bay Service',
    serviceTag: 'Maintenance',
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
    badge: 'Rebuild',
    Icon: IconWrench,
    title: 'Engine Removal',
    serviceTag: 'Engine Repair',
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
    badge: 'Electrical',
    Icon: IconLightning,
    title: 'Dashboard Wiring',
    serviceTag: 'Electrical',
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
      delay: 0.08 + i * 0.06,
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
      <section id="gallery" className="gallery gallery--premium gallery--shop">
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
            className="section-header gallery-header"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2>
              Our Work <span>Gallery</span>
            </h2>
            <p className="text-muted">Real repairs. Real results.</p>
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

          <div className="gallery-shop-grid">
            {WORK_ITEMS.map((item, index) => {
              const Icon = item.Icon
              return (
                <motion.article
                  key={item.id}
                  className="gallery-shop-card"
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <button
                    type="button"
                    className="gallery-shop-card__hit"
                    onClick={() => setOpenModal(item.id)}
                    aria-label={`View details for ${item.title}`}
                  >
                    <div className="gallery-shop-card__media">
                      <img src={item.img} alt={item.alt} loading="lazy" decoding="async" />
                      <span className="gallery-shop-card__view">View Project</span>
                      <span className="gallery-shop-card__badge">{item.badge}</span>
                    </div>

                    <div className="gallery-shop-card__body">
                      <div className="gallery-shop-card__title-row">
                        <h3>{item.title}</h3>
                        <span className="gallery-shop-card__icon" aria-hidden="true">
                          <Icon />
                        </span>
                      </div>
                      <p className="gallery-shop-card__meta">
                        <span>{item.serviceTag}</span>
                      </p>
                      <span className="gallery-shop-card__cta">
                        View Details
                        <IconArrowUpRight aria-hidden="true" />
                      </span>
                    </div>
                  </button>
                </motion.article>
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

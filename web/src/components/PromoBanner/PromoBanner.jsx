import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import promoImgA from '../../assets/gallery/mw3.jpeg'
import promoImgB from '../../assets/gallery/gs2.jpeg'
import { IconCalendarCheckFill } from '../icons'
import './PromoBanner.css'

const SLIDES = [
  {
    src: promoImgA,
    alt: 'Z Elite technician performing expert vehicle repairs',
  },
  {
    src: promoImgB,
    alt: 'Finished vehicle ready after expert service',
  },
]

const SLIDE_MS = 4500

const fadeSlide = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

function PromoBanner() {
  const reduceMotion = useReducedMotion()
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (reduceMotion) return undefined
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length)
    }, SLIDE_MS)
    return () => window.clearInterval(id)
  }, [reduceMotion])

  return (
    <section className="promo-banner ze-section" aria-labelledby="promo-banner-heading">
      <div className="ze-bg-static" aria-hidden="true" />

      <div className="container promo-banner__container">
        <motion.div
          className="promo-banner__inner"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="promo-banner__media">
            <div className="promo-banner__media-glow" aria-hidden="true" />
            <div className="promo-banner__media-frame">
              <AnimatePresence mode="sync" initial={false}>
                <motion.img
                  key={SLIDES[active].src}
                  src={SLIDES[active].src}
                  alt={SLIDES[active].alt}
                  className="promo-banner__img"
                  initial={reduceMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={reduceMotion ? undefined : { opacity: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  decoding="async"
                  loading="lazy"
                />
              </AnimatePresence>
              <div className="promo-banner__media-shade" aria-hidden="true" />
            </div>

            <div className="promo-banner__dots" aria-hidden="true">
              {SLIDES.map((slide, i) => (
                <span
                  key={slide.src}
                  className={`promo-banner__dot${i === active ? ' is-active' : ''}`}
                />
              ))}
            </div>
          </div>

          <div className="promo-banner__copy">
            <motion.p
              className="ze-eyebrow"
              variants={fadeSlide}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              custom={0.05}
            >
              Book a Service
            </motion.p>

            <motion.h2
              id="promo-banner-heading"
              className="promo-banner__headline ze-section-title"
              variants={fadeSlide}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              custom={0.12}
            >
              Ready When You Are
            </motion.h2>

            <motion.p
              className="promo-banner__text ze-section-lead"
              variants={fadeSlide}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              custom={0.2}
            >
              Tell us what&apos;s going on with your vehicle and we&apos;ll come to you. Fast callback,
              clear pricing, and repairs done right the first time.
            </motion.p>

            <motion.div
              variants={fadeSlide}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              custom={0.28}
            >
              <Link to="/contact#booking" className="ze-btn ze-btn--primary">
                <IconCalendarCheckFill aria-hidden="true" />
                Book Your Service
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PromoBanner

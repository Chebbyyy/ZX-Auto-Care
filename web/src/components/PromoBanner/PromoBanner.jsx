import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import promoImgA from '../../assets/gallery/mw3.jpeg'
import promoImgB from '../../assets/gallery/gs2.jpeg'
import AnimatedGrid from '../AnimatedGrid/AnimatedGrid'
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
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

function PromoBanner() {
  const sectionRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const [active, setActive] = useState(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : ['-5%', '5%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : [1.12, 1.03])

  useEffect(() => {
    if (reduceMotion) return undefined
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length)
    }, SLIDE_MS)
    return () => window.clearInterval(id)
  }, [reduceMotion])

  return (
    <section className="promo-banner" ref={sectionRef} aria-labelledby="promo-banner-heading">
      <AnimatedGrid />

      <div className="container promo-banner__container">
        <motion.div
          className="promo-banner__inner"
          initial={reduceMotion ? false : { opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
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
                  style={{ y: imageY, scale: imageScale }}
                  initial={reduceMotion ? false : { opacity: 0, x: 28 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, x: -28 }}
                  transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
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
              className="promo-banner__eyebrow"
              variants={fadeSlide}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              custom={0.05}
            >
              Z Elite Auto Care
            </motion.p>

            <motion.h2
              id="promo-banner-heading"
              className="promo-banner__headline"
              variants={fadeSlide}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              custom={0.12}
            >
              Ready When You Are.
            </motion.h2>

            <motion.p
              className="promo-banner__text"
              variants={fadeSlide}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              custom={0.22}
            >
              Tell us what&apos;s going on with your vehicle and we&apos;ll come to you. Fast callback,
              clear pricing, and repairs done right the first time.
            </motion.p>

            <motion.div
              variants={fadeSlide}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              custom={0.32}
            >
              <Link to="/contact#booking" className="promo-banner__cta">
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

import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import {
  IconCalendarCheckFill,
  IconCheckCircleFill,
  IconCheckLg,
  IconCpu,
  IconCurrencyDollar,
  IconLightningChargeFill,
  IconPeopleFill,
  IconShieldCheck,
  IconTools,
  IconTruck,
} from '../icons'
import Silk from '../Silk/Silk'
import aboutHeroImg from '../../assets/gallery/mw7.jpeg'
import './WhyUs.css'

const FOCUS_POINTS = [
  'Mobile repairs at your location',
  'Certified technicians',
  'Upfront quotes — no hidden fees',
  '24/7 emergency support',
]

const CHIPS = [
  { Icon: IconShieldCheck, label: 'Quality Service' },
  { Icon: IconCpu, label: 'Modern Equipment' },
  { Icon: IconTools, label: 'Expert Repairs' },
]

const FEATURES = [
  {
    Icon: IconTruck,
    title: 'Mobile Garage',
    body: 'Repairs at your home, office, or roadside.',
  },
  {
    Icon: IconPeopleFill,
    title: 'Expert Mechanics',
    body: 'Certified techs for all makes and models.',
  },
  {
    Icon: IconCurrencyDollar,
    title: 'Clear Pricing',
    body: 'Upfront quotes. No hidden fees.',
  },
  {
    Icon: IconCheckCircleFill,
    title: 'Quality Repairs',
    body: 'Done right the first time.',
  },
  {
    Icon: IconShieldCheck,
    title: 'Guaranteed Work',
    body: "Not satisfied? We'll make it right.",
  },
  {
    Icon: IconLightningChargeFill,
    title: '24/7 Emergency',
    body: 'Urgent repairs when you need them.',
  },
]

const ease = [0.22, 1, 0.36, 1]

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: 0.05 + i * 0.06, ease },
  }),
}

function WhyUs() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="why-us" className="why-us why-us--shouty">
      <div className="silk-backdrop">
        <Silk speed={2} scale={1.05} color="#2a2428" noiseIntensity={0.85} rotation={0.08} />
      </div>

      <div className="why-us__accents" aria-hidden="true">
        <span className="why-us__accent why-us__accent--a" />
        <span className="why-us__accent why-us__accent--b" />
        <span className="why-us__accent why-us__accent--c" />
      </div>

      <div className="container why-us__content">
        <motion.div
          className="about-intro"
          initial={reduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <div className="about-intro__copy">
            <p className="about-eyebrow">
              <span aria-hidden="true">//</span> About
            </p>
            <h1 className="about-title">
              About <span>Us</span>
            </h1>
            <p className="about-lead">
              Mobile garage repairs across Darwin — brakes, oil, suspension, electrical and more.
              Transparent pricing, done right the first time.
            </p>

            <ul className="about-focus-list">
              {FOCUS_POINTS.map((point) => (
                <li key={point}>
                  <span className="about-focus-check" aria-hidden="true">
                    <IconCheckLg />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="about-chips">
              {CHIPS.map(({ Icon, label }) => (
                <div key={label} className="about-chip">
                  <span className="about-chip__icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <Link to="/contact#booking" className="about-cta">
              <IconCalendarCheckFill aria-hidden="true" />
              Book a Service
            </Link>
          </div>

          <motion.div
            className="about-intro__media"
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, delay: 0.12, ease }}
          >
            <img
              src={aboutHeroImg}
              alt="Close-up of precision automotive mechanical work"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="why-choose"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease }}
        >
          <p className="about-eyebrow">
            <span aria-hidden="true">//</span> Why us
          </p>
          <h2 className="why-choose__title">
            Why <span>Choose Us</span>
          </h2>
          <p className="why-choose__sub">
            Mobile, reliable garage service across Darwin.
          </p>
        </motion.div>

        <div className="features-grid features-grid--shouty">
          {FEATURES.map((feature, index) => {
            const Icon = feature.Icon
            return (
              <motion.article
                key={feature.title}
                className="why-shout-card"
                custom={index}
                variants={fadeUp}
                initial={reduceMotion ? false : 'hidden'}
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
              >
                <span className="why-shout-card__icon" aria-hidden="true">
                  <Icon />
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </motion.article>
            )
          })}
        </div>
      </div>

      <div className="why-us__cta">
        <motion.div
          className="container why-us__cta-inner"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease }}
        >
          <p className="why-us__cta-eyebrow">Z Elite Auto Care</p>
          <h3 className="why-us__cta-title">Ready to book?</h3>
          <p className="why-us__cta-text">
            Certified technicians. Mobile, reliable, and done right.
          </p>
          <Link to="/contact#booking" className="why-us__cta-btn">
            <IconCalendarCheckFill aria-hidden="true" />
            Book Your Service
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyUs

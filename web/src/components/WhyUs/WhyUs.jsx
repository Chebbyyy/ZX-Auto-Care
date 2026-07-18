import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import {
  IconAward,
  IconCalendarCheckFill,
  IconCheckLg,
  IconCpu,
  IconGearFill,
  IconGem,
  IconPeopleFill,
  IconShieldCheck,
  IconTools,
} from '../icons'
import AnimatedGrid from '../AnimatedGrid/AnimatedGrid'
import aboutHeroImg from '../../assets/gallery/mw7.jpeg'
import whyBgImg from '../../assets/gallery/mw21.jpeg'
import aboutBgImg from '../../assets/mobile-cleaning.jfif'
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

const WHY_FEATURES = [
  {
    Icon: IconAward,
    title: 'Certified Expertise',
    body: 'Skilled mechanics for all makes and models across Darwin.',
  },
  {
    Icon: IconGearFill,
    title: 'Quality Parts & Work',
    body: 'Professional repairs done right the first time, every time.',
  },
  {
    Icon: IconGem,
    title: 'Mobile Convenience',
    body: 'We come to your home, office, or roadside — no workshop wait.',
  },
  {
    Icon: IconPeopleFill,
    title: 'Customer-First Approach',
    body: 'Clear quotes, honest advice, and work you can trust.',
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
      <div className="why-us__top">
        <div className="why-us__top-bg" aria-hidden="true">
          <img src={aboutBgImg} alt="" loading="lazy" decoding="async" />
          <div className="why-us__top-shade" />
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
        </div>
      </div>

      <div className="why-choose-band">
        <div className="why-choose-band__bg" aria-hidden="true">
          <img src={whyBgImg} alt="" loading="lazy" decoding="async" />
          <div className="why-choose-band__shade" />
        </div>

        <div className="container why-choose-band__inner">
          <motion.div
            className="why-choose"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease }}
          >
            <h2 className="why-choose__title">
              Why <span>Choose Us</span>
            </h2>
          </motion.div>

          <div className="why-choose-grid">
            {WHY_FEATURES.map((feature, index) => {
              const Icon = feature.Icon
              return (
                <motion.article
                  key={feature.title}
                  className="why-choose-item"
                  custom={index}
                  variants={fadeUp}
                  initial={reduceMotion ? false : 'hidden'}
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                >
                  <span className="why-choose-item__icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <h3>{feature.title}</h3>
                  <p>{feature.body}</p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </div>

      <div className="why-us__cta">
        <AnimatedGrid />
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

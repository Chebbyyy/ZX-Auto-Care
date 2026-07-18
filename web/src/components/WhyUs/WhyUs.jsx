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
import SectionHeader from '../SectionHeader/SectionHeader'
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
              <SectionHeader
                as="h2"
                align="start"
                light
                eyebrow="About Us"
                title="About Us"
                titleHighlight="Us"
                lead="Mobile garage repairs across Darwin — brakes, oil, suspension, electrical and more. Transparent pricing, done right the first time."
                className="about-intro__header"
              />

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

              <Link to="/contact#booking" className="ze-btn ze-btn--primary">
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
            <SectionHeader
              eyebrow="Our Promise"
              title="Why Choose Us"
              titleHighlight="Choose Us"
            />
          </motion.div>

          <div className="why-choose-grid">
            {WHY_FEATURES.map((feature, index) => {
              const Icon = feature.Icon
              return (
                <motion.article
                  key={feature.title}
                  className="why-choose-item ze-card ze-card--dark"
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

      <div className="why-us__cta ze-section">
        <div className="ze-bg-static" aria-hidden="true" />
        <motion.div
          className="container why-us__cta-inner"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease }}
        >
          <p className="ze-eyebrow">Next Step</p>
          <h3 className="why-us__cta-title">Ready to Book?</h3>
          <p className="why-us__cta-text">
            Certified technicians. Mobile, reliable, and done right.
          </p>
          <Link to="/contact#booking" className="ze-btn ze-btn--primary">
            <IconCalendarCheckFill aria-hidden="true" />
            Book Your Service
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyUs

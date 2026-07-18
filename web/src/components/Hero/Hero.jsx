import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import heroBg from '../../assets/premium.jfif'
import {
  IconCalendarCheckFill,
  IconCheckLg,
  IconGeoAltFill,
  IconLightningChargeFill,
  IconShieldCheck,
  IconStarFill,
  IconTelephoneFill,
} from '../icons'

const HEADLINE_TOP = ["Darwin's", 'Mobile']
const HEADLINE_BOTTOM = ['Garage', 'Specialists']

const TRUST_POINTS = [
  { Icon: IconGeoAltFill, label: 'Darwin, NT — mobile to you' },
  { Icon: IconShieldCheck, label: 'Quality mechanical work' },
  { Icon: IconLightningChargeFill, label: '24/7 emergency repairs' },
]

const FLOAT_STATS = [
  { value: '100%', label: 'Satisfaction focus' },
  { value: '24/7', label: 'Emergency ready' },
  {
    value: (
      <span className="home-hero-float-stat__stars" aria-label="5 star quality">
        <IconStarFill />
        <IconStarFill />
        <IconStarFill />
        <IconStarFill />
        <IconStarFill />
      </span>
    ),
    label: 'Quality repairs',
  },
]

const ease = [0.22, 1, 0.36, 1]

function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="home"
      className="hero home-hero position-relative overflow-hidden d-flex align-items-center"
    >
      <div className="hero-bg-stage">
        <div className="hero-bg-static">
          <img
            src={heroBg}
            alt="Professional mobile garage and mechanical services"
            className="hero-bg-img"
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </div>

      <div
        className="hero-overlay position-absolute top-0 start-0 w-100 h-100"
        style={{ zIndex: 1 }}
        aria-hidden="true"
      />

      <div className="container position-relative home-hero__container" style={{ zIndex: 2 }}>
        <div className="row align-items-center home-hero__row g-4 g-xl-5">
          <div className="col-lg-6 home-hero__copy">
            <motion.div
              className="hero-info-bar home-hero-info"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease }}
            >
              <div className="hib-badge hib-badge--red">
                <span className="hib-circle hib-circle--red">
                  <IconGeoAltFill />
                </span>
                <span className="hib-text">Darwin, NT</span>
              </div>
              <div className="hib-center">
                <span className="hib-circle hib-circle--red">
                  <IconShieldCheck />
                </span>
                <span className="hib-text">Satisfied</span>
              </div>
              <div className="hib-badge hib-badge--red hib-badge--end">
                <span className="hib-circle hib-circle--red">
                  <IconLightningChargeFill />
                </span>
                <span className="hib-text">24/7 Emergency</span>
              </div>
            </motion.div>

            <motion.h1
              className="hero-headline fw-bold home-hero__title"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.08, ease }}
            >
              {HEADLINE_TOP.map((word, i) => (
                <span key={`t-${word}`} className="home-hero-word">
                  {word}
                  {i < HEADLINE_TOP.length - 1 ? '\u00A0' : ''}
                </span>
              ))}
              <br />
              <span className="hero-headline-accent">Brake Repairs</span>
              <br />
              {HEADLINE_BOTTOM.map((word, i) => (
                <span key={`b-${word}`} className="home-hero-word">
                  {word}
                  {i < HEADLINE_BOTTOM.length - 1 ? '\u00A0' : ''}
                </span>
              ))}
            </motion.h1>

            <motion.p
              className="hero-subheadline home-hero-blur home-hero__lead"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.16, ease }}
            >
              Brakes, oil changes, suspension, electrical and more. Professional mechanical repairs
              brought straight to you, 24/7. Detailing packages also available as an add-on.
            </motion.p>

            <motion.div
              className="d-flex flex-wrap align-items-center hero-cta-buttons home-hero-ctas"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.24, ease }}
            >
              <div className="home-hero-call-group">
                <a
                  href="tel:0432241883"
                  className="ze-btn ze-btn--primary home-hero-call"
                  title="Call 0432 241 883"
                >
                  <IconTelephoneFill aria-hidden="true" />
                  <span className="home-hero-call__label">Call Now</span>
                  <span className="home-hero-call__divider" aria-hidden="true" />
                  <span className="home-hero-call__number">0432 241 883</span>
                </a>
              </div>
              <Link
                to="/contact#booking"
                className="ze-btn ze-btn--ghost-light home-hero-book"
                title="Book a service"
              >
                <IconCalendarCheckFill aria-hidden="true" />
                Book Now
              </Link>
            </motion.div>
          </div>

          <div className="col-lg-6 home-hero__aside">
            <motion.div
              className="home-hero-glass ze-card ze-card--dark"
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: reduceMotion ? 0 : 0.2, ease }}
            >
              <p className="home-hero-glass__eyebrow">Why choose Z Elite Auto Care</p>
              <ul className="home-hero-glass__list">
                {TRUST_POINTS.map(({ Icon, label }) => (
                  <li key={label}>
                    <span className="home-hero-glass__check" aria-hidden="true">
                      <IconCheckLg />
                    </span>
                    <span className="home-hero-glass__icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <span>{label}</span>
                  </li>
                ))}
              </ul>

              <div className="home-hero-float-stats">
                {FLOAT_STATS.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="home-hero-float-stat"
                    initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: reduceMotion ? 0 : 0.45 + i * 0.1,
                      ease,
                    }}
                  >
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

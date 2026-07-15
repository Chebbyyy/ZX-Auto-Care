import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import {
  IconCalendarCheckFill,
  IconCheckCircleFill,
  IconCurrencyDollar,
  IconLightningChargeFill,
  IconPeopleFill,
  IconShieldCheck,
  IconTruck,
} from '../icons'
import Silk from '../Silk/Silk'
import SpotlightCard from '../SpotlightCard/SpotlightCard'
import SplitHeading from '../SplitText/SplitHeading'
import './WhyUs.css'

const FEATURES = [
  {
    Icon: IconTruck,
    title: 'Mobile Garage Service',
    body: 'Professional mechanical repairs at your location. Home, office, or roadside in Darwin.',
    color: '#E10600',
  },
  {
    Icon: IconPeopleFill,
    title: 'Expert Mechanics',
    body: 'Certified technicians with years of mechanical expertise. Specializing in all makes and models.',
    color: '#2563eb',
  },
  {
    Icon: IconCurrencyDollar,
    title: 'Transparent Pricing',
    body: 'Upfront quotes for all garage services. No hidden fees. Fair prices for quality mechanical work.',
    color: '#16a34a',
  },
  {
    Icon: IconCheckCircleFill,
    title: 'Quality Repairs',
    body: 'Every mechanical repair done right the first time. Professional standards for all garage services.',
    color: '#ea580c',
  },
  {
    Icon: IconShieldCheck,
    title: 'Guaranteed Repairs',
    body: "All mechanical work guaranteed. Not satisfied? We'll make it right. Your trust is everything.",
    color: '#7c3aed',
  },
  {
    Icon: IconLightningChargeFill,
    title: 'Emergency Repairs',
    body: '24/7 emergency garage services. Urgent mechanical repairs when you need them most.',
    color: '#0891b2',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.28 + i * 0.07,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

function WhyUs() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="why-us" className="why-us">
      <div className="silk-backdrop">
        <Silk
          speed={2}
          scale={1.05}
          color="#2a2428"
          noiseIntensity={0.85}
          rotation={0.08}
        />
      </div>

      <div className="why-us__accents" aria-hidden="true">
        <span className="why-us__accent why-us__accent--a" />
        <span className="why-us__accent why-us__accent--b" />
        <span className="why-us__accent why-us__accent--c" />
      </div>

      <div className="container why-us__content">
        <motion.div
          className="section-header"
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="why-us__heading-wrap">
            <span className="why-us__heading-glow" aria-hidden="true" />
            <SplitHeading>Why Choose Us</SplitHeading>
          </div>
          <motion.p
            className="text-muted"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            Discover why Elite Auto Care is your preferred choice
          </motion.p>
        </motion.div>

        <div className="features-grid">
          {FEATURES.map((feature, index) => {
            const Icon = feature.Icon
            return (
              <motion.div
                key={feature.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
              >
                <SpotlightCard
                  className="why-spotlight"
                  spotlightColor={`${feature.color}33`}
                  tilt={false}
                >
                  <div
                    className="why-card-body"
                    style={{ '--icon-color': feature.color }}
                  >
                    <div
                      className="why-icon-badge"
                      style={{
                        '--icon-color': feature.color,
                        '--icon-shadow': `${feature.color}40`,
                      }}
                    >
                      <Icon />
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.body}</p>
                  </div>
                </SpotlightCard>
              </motion.div>
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
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="why-us__cta-eyebrow">Z Elite AutoCare</p>
          <h3 className="why-us__cta-title">Ready for expert care you can trust?</h3>
          <p className="why-us__cta-text">
            Book a service with our certified technicians and experience quality workmanship that
            is mobile, reliable, and done right the first time.
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

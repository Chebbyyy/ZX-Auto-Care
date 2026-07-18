import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import {
  IconCalendarCheckFill,
  IconCheckCircleFill,
  IconTelephoneFill,
  IconTruck,
} from '../icons'
import SectionHeader from '../SectionHeader/SectionHeader'
import './HowWeWork.css'

const STEPS = [
  {
    step: '01',
    Icon: IconTelephoneFill,
    title: 'Call or Book Online',
    body: 'Tell us what your vehicle needs. We confirm the details and arrange a convenient time.',
  },
  {
    step: '02',
    Icon: IconTruck,
    title: 'We Come to You',
    body: 'Our mobile workshop arrives at your home, office, or roadside — across Darwin.',
  },
  {
    step: '03',
    Icon: IconCheckCircleFill,
    title: 'Fixed & Back on the Road',
    body: 'Transparent quote first, then skilled repairs done right so you can drive with confidence.',
  },
]

const ease = [0.22, 1, 0.36, 1]

const HowWeWork = () => {
  const reduceMotion = useReducedMotion()

  return (
    <section className="how-we-work ze-section" aria-label="How we work">
      <div className="ze-bg-static" aria-hidden="true" />

      <div className="container how-we-work__inner">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease }}
        >
          <SectionHeader
            eyebrow="How It Works"
            title="Simple From Start To Finish"
            titleHighlight="Finish"
            lead="A clear process designed for busy Darwin drivers — book once, we handle the rest."
            className="how-we-work__header"
          />
        </motion.div>

        <ol className="how-we-work__steps">
          {STEPS.map(({ step, Icon, title, body }, index) => (
            <motion.li
              key={title}
              className="how-we-work__step ze-card ze-card--dark"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: reduceMotion ? 0 : index * 0.08, ease }}
            >
              <span className="how-we-work__number" aria-hidden="true">
                {step}
              </span>
              <span className="how-we-work__icon" aria-hidden="true">
                <Icon />
              </span>
              <h3 className="how-we-work__title">{title}</h3>
              <p className="how-we-work__body">{body}</p>
            </motion.li>
          ))}
        </ol>

        <motion.div
          className="how-we-work__actions"
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.2, ease }}
        >
          <Link to="/contact#booking" className="ze-btn ze-btn--primary">
            <IconCalendarCheckFill aria-hidden="true" />
            Book a Service
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default HowWeWork

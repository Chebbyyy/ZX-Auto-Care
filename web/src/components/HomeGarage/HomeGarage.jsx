import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import {
  IconArrowUpDown,
  IconCalendarCheckFill,
  IconClipboardCheck,
  IconDisc,
  IconDropletFill,
  IconGearFill,
  IconLightningChargeFill,
  IconRadio,
  IconWrench,
} from '../icons'
import carBg from '../../assets/gallery/mw21.jpeg'
import './HomeGarage.css'

const SERVICES = [
  {
    Icon: IconDisc,
    title: 'Brake Repairs',
    blurb: 'Pads, rotors, and fluid service',
  },
  {
    Icon: IconDropletFill,
    title: 'Oil Changes',
    blurb: 'Full synthetic with filter replacement',
  },
  {
    Icon: IconGearFill,
    title: 'Transmission',
    blurb: 'Fluid service and filter care',
  },
  {
    Icon: IconArrowUpDown,
    title: 'Suspension',
    blurb: 'Shocks, struts, and ride quality',
  },
  {
    Icon: IconLightningChargeFill,
    title: 'Electrical',
    blurb: 'Diagnostics, batteries, and wiring',
  },
  {
    Icon: IconRadio,
    title: 'Radio Fitting',
    blurb: 'Car stereo and accessory install',
  },
  {
    Icon: IconClipboardCheck,
    title: 'Pre-Purchase',
    blurb: 'Inspection before you buy',
  },
  {
    Icon: IconWrench,
    title: 'Jump Starting',
    blurb: '24/7 roadside battery boost',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.06 + i * 0.05,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

function HomeGarage() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="home-garage" aria-labelledby="home-garage-heading">
      <div className="home-garage__bg" aria-hidden="true">
        <img src={carBg} alt="" />
        <div className="home-garage__shade" />
      </div>

      <div className="container home-garage__inner">
        <motion.div
          className="home-garage__header"
          initial={reduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
          custom={0}
        >
          <h2 id="home-garage-heading" className="home-garage__title">
            Mobile Mechanical <span>Repairs</span>
          </h2>
        </motion.div>

        <div className="home-garage__grid">
          {SERVICES.map((service, i) => {
            const Icon = service.Icon
            return (
              <motion.div
                key={service.title}
                className="home-garage__item"
                initial={reduceMotion ? false : 'hidden'}
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                custom={i}
              >
                <span className="home-garage__icon" aria-hidden="true">
                  <Icon />
                </span>
                <h3 className="home-garage__item-title">{service.title}</h3>
                <p className="home-garage__item-blurb">{service.blurb}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="home-garage__footer"
          initial={reduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          custom={0.2}
        >
          <p className="home-garage__aob">
            Detailing packages also available as an add-on.
          </p>
          <div className="home-garage__actions">
            <Link to="/services#garageServices" className="home-garage__btn home-garage__btn--ghost">
              View All Services
            </Link>
            <Link to="/contact#booking" className="home-garage__btn home-garage__btn--primary">
              <IconCalendarCheckFill aria-hidden="true" />
              Book a Garage Service
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HomeGarage

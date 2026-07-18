import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import {
  IconArrowUpRight,
  IconDropletFill,
  IconGem,
  IconHouseFill,
  IconStarFill,
  IconWrench,
} from '../icons'
import SectionHeader from '../SectionHeader/SectionHeader'
import './PricingStrip.css'

const PRICE_TILES = [
  {
    Icon: IconWrench,
    title: 'Garage Repairs',
    price: 'Quote first',
    note: 'Upfront quote before any work begins',
    featured: true,
  },
  {
    Icon: IconDropletFill,
    title: 'Express Wash',
    price: 'From $80',
    note: 'Hand wash, vacuum, and windows',
  },
  {
    Icon: IconHouseFill,
    title: 'Interior Detail',
    price: 'From $120',
    note: 'Deep cabin clean and conditioning',
  },
  {
    Icon: IconStarFill,
    title: 'Full Detail',
    price: 'From $250',
    note: 'Inside and out, showroom finish',
  },
  {
    Icon: IconGem,
    title: 'Ceramic Coating',
    price: 'From $600',
    note: 'Full detail plus paint protection',
  },
]

const ease = [0.22, 1, 0.36, 1]

const PricingStrip = () => {
  const reduceMotion = useReducedMotion()

  return (
    <section className="pricing-strip ze-section" aria-label="Transparent pricing">
      <div className="container">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease }}
        >
          <SectionHeader
            light
            eyebrow="Transparent Pricing"
            title="Clear Costs. No Surprises"
            titleHighlight="No Surprises"
            lead="Detailing packages listed upfront. Mechanical repairs always quoted before we start."
            className="pricing-strip__header"
          />
        </motion.div>

        <div className="pricing-strip__grid">
          {PRICE_TILES.map(({ Icon, title, price, note, featured }, index) => (
            <motion.article
              key={title}
              className={`pricing-strip__tile ze-card ze-card--light${featured ? ' pricing-strip__tile--featured' : ''}`}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: reduceMotion ? 0 : index * 0.05, ease }}
            >
              <span className="pricing-strip__icon" aria-hidden="true">
                <Icon />
              </span>
              <h3 className="pricing-strip__title">{title}</h3>
              <p className="pricing-strip__price">{price}</p>
              <p className="pricing-strip__note">{note}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="pricing-strip__actions"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, delay: reduceMotion ? 0 : 0.15, ease }}
        >
          <Link to="/services#detailingPackages" className="ze-btn ze-btn--ghost-dark">
            See All Services & Pricing
            <IconArrowUpRight aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default PricingStrip

import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { IconPatchCheckFill, IconStarFill } from '../icons'
import DarkVeil from '../DarkVeil/DarkVeil'
import './Testimonials.css'

const REVIEWS = [
  {
    initials: 'ST',
    name: 'Samson Tarus',
    text:
      "Outstanding service from a highly professional and trustworthy team. They quickly diagnosed my car's issue, explained everything clearly, and repaired it efficiently at a fair price. Communication was excellent throughout, and my car has been running perfectly ever since. I highly recommend them for reliable, quality mechanical work.",
    featured: false,
  },
  {
    initials: 'JA',
    name: 'Jacob M. Abuoi',
    text:
      'Reliable, honest, and skilled. Fixed my car quickly and properly. Highly recommended.',
    featured: true,
  },
  {
    initials: 'CC',
    name: 'Chepchumba Cherutich',
    text:
      'I had such a great experience with this mechanic while my car was being repaired. From the moment I walked in, they were professional, honest, and incredibly reassuring. They explained everything clearly, kept me updated throughout the process, and made sure I understood what needed to be done before going ahead with any repairs. The work was completed efficiently and to a very high standard. My car is running perfectly now. I truly appreciated their transparency with pricing and the genuine care they showed. I highly recommend to anyone looking for reliable, skilled, and trustworthy service.',
    featured: false,
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.1 + i * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

function StarRow({ className = '' }) {
  return (
    <div className={`testi-stars ${className}`.trim()}>
      <IconStarFill />
      <IconStarFill />
      <IconStarFill />
      <IconStarFill />
      <IconStarFill />
    </div>
  )
}

function Testimonials() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="testimonials-page">
      <section id="testimonials" className="testi-section">
        <div className="darkveil-backdrop" aria-hidden="true">
          <DarkVeil
            hueShift={155}
            noiseIntensity={0.03}
            scanlineIntensity={0}
            speed={0.2}
            scanlineFrequency={0}
            warpAmount={0.08}
            resolutionScale={1}
          />
        </div>

        <div className="container">
          <motion.div
            className="testi-header"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="testi-eyebrow">Customer Reviews</span>
            <h2 className="testi-title">What Our Customers Say</h2>
            <div className="testi-line"></div>
            <p className="testi-subtitle">Real feedback from real Darwin clients</p>
          </motion.div>

          <div className="testi-grid">
            {REVIEWS.map((review, index) => (
              <motion.div
                key={review.name}
                className={`testi-card${review.featured ? ' testi-card--featured' : ''}`}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
              >
                <div className="testi-quote-mark">&ldquo;</div>
                <StarRow />
                <p className="testi-text">{review.text}</p>
                <div className="testi-footer">
                  <div className="testi-avatar">{review.initials}</div>
                  <div className="testi-info">
                    <strong className="testi-name">{review.name}</strong>
                    <span className="testi-badge">
                      <IconPatchCheckFill /> Verified Customer
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="testi-bottom-bar"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="testi-rating-summary">
              <span className="testi-big-score">5.0</span>
              <div>
                <StarRow className="testi-stars--sm" />
                <span className="testi-review-count">Based on customer reviews</span>
              </div>
            </div>
            <Link to="/contact#booking" className="testi-cta-btn">
              Book Your Service Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials

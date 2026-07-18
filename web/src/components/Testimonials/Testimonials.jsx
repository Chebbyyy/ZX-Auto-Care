import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { IconPatchCheckFill, IconStarFill } from '../icons'
import SectionHeader from '../SectionHeader/SectionHeader'
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
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: 0.08 + i * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

function StarRow({ className = '' }) {
  return (
    <div className={`testi-stars ${className}`.trim()} aria-label="5 out of 5 stars">
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
      <section id="testimonials" className="testi-section ze-section">
        <div className="ze-bg-static" aria-hidden="true" />

        <div className="container">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionHeader
              as="h2"
              eyebrow="Customer Reviews"
              title="What Our Customers Say"
              lead="Real feedback from real Darwin clients"
            />
          </motion.div>

          <div className="testi-grid">
            {REVIEWS.map((review, index) => (
              <motion.div
                key={review.name}
                className={`testi-card ze-card ze-card--dark${review.featured ? ' testi-card--featured' : ''}`}
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
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="testi-rating-summary">
              <span className="testi-big-score">5.0</span>
              <div>
                <StarRow className="testi-stars--sm" />
                <span className="testi-review-count">Based on customer reviews</span>
              </div>
            </div>
            <Link to="/contact#booking" className="ze-btn ze-btn--primary">
              Book Your Service Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials

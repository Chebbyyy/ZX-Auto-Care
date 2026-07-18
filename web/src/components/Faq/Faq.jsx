import { useId, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  IconChevronDown,
  IconTelephoneFill,
  IconWhatsapp,
} from '../icons'
import SectionHeader from '../SectionHeader/SectionHeader'
import './Faq.css'

const QUESTIONS = [
  {
    q: 'Which areas of Darwin do you cover?',
    a: 'We provide mobile mechanical repairs across Darwin and surrounding suburbs, including Durack and nearby areas. If you are unsure, call us and we will confirm coverage for your location.',
  },
  {
    q: 'How quickly can you get to me?',
    a: 'For emergencies we operate 24/7 and aim to respond as soon as possible. For booked services we schedule a convenient time that fits your day — usually same day or next available slot.',
  },
  {
    q: 'What repairs can you do on-site?',
    a: 'Most common garage jobs are mobile: brakes, oil changes, suspension, electrical diagnostics, batteries, jump starts, inspections, and radio fitting. We will tell you upfront if a job needs workshop equipment.',
  },
  {
    q: 'How do quotes and payment work?',
    a: 'You always get a clear quote before any work starts — no hidden fees. Payment can be arranged after the job is completed to your satisfaction.',
  },
  {
    q: 'Do I need to book ahead?',
    a: 'Booking online or by phone is recommended so we can plan parts and travel. For urgent breakdowns, call 0432 241 883 and we will prioritise emergency support.',
  },
  {
    q: 'Can I add detailing to a mechanical visit?',
    a: 'Yes. Detailing packages — from Express Wash to ceramic coating — are available as an add-on alongside garage services. Ask when you book and we will package it into one visit where possible.',
  },
]

const ease = [0.22, 1, 0.36, 1]

const FaqItem = ({ item, index, isOpen, onToggle, reduceMotion, baseId }) => {
  const panelId = `${baseId}-panel-${index}`
  const buttonId = `${baseId}-button-${index}`

  const handleClick = () => {
    onToggle(index)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onToggle(index)
    }
  }

  return (
    <div className={`faq__item ze-card ze-card--dark${isOpen ? ' is-open' : ''}`}>
      <h3 className="faq__question">
        <button
          id={buttonId}
          type="button"
          className="faq__trigger"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
        >
          <span>{item.q}</span>
          <IconChevronDown className="faq__chevron" aria-hidden="true" />
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            className="faq__panel"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.3, ease }}
          >
            <p className="faq__answer">{item.a}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0)
  const reduceMotion = useReducedMotion()
  const baseId = useId()

  const handleToggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index))
  }

  return (
    <section className="faq ze-section" aria-label="Frequently asked questions">
      <div className="ze-bg-static" aria-hidden="true" />

      <div className="container faq__inner">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease }}
        >
          <SectionHeader
            eyebrow="Common Questions"
            title="Frequently Asked Questions"
            titleHighlight="Questions"
            lead="Quick answers about our mobile garage service across Darwin."
            className="faq__header"
          />
        </motion.div>

        <div className="faq__list">
          {QUESTIONS.map((item, index) => (
            <FaqItem
              key={item.q}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={handleToggle}
              reduceMotion={reduceMotion}
              baseId={baseId}
            />
          ))}
        </div>

        <motion.div
          className="faq__cta"
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.1, ease }}
        >
          <div className="faq__cta-copy">
            <h3 className="faq__cta-title">Still have questions?</h3>
            <p className="faq__cta-text">Talk to the team — we are available 24/7.</p>
          </div>
          <div className="faq__cta-actions">
            <a href="tel:0432241883" className="ze-btn ze-btn--primary">
              <IconTelephoneFill aria-hidden="true" />
              Call 0432 241 883
            </a>
            <a
              href="https://wa.me/61432241883"
              target="_blank"
              rel="noopener noreferrer"
              className="ze-btn ze-btn--success"
            >
              <IconWhatsapp aria-hidden="true" />
              WhatsApp
            </a>
            <Link to="/contact#booking" className="ze-btn ze-btn--ghost-light">
              Book Online
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Faq

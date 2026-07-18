import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  IconClockFill,
  IconPatchCheckFill,
  IconStarFill,
  IconTools,
} from '../icons'

function animateCounterValue(target, onUpdate) {
  const duration = 1800
  const start = performance.now()
  let frame = 0

  function step(now) {
    const t = Math.min(1, (now - start) / duration)
    const eased = 1 - (1 - t) ** 3
    onUpdate(Math.round(target * eased))
    if (t < 1) {
      frame = requestAnimationFrame(step)
    } else {
      onUpdate(target)
    }
  }

  frame = requestAnimationFrame(step)
  return () => cancelAnimationFrame(frame)
}

const ease = [0.22, 1, 0.36, 1]

function Stats() {
  const [count, setCount] = useState(0)
  const sectionRef = useRef(null)
  const countedRef = useRef(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.home-stat-glow')
    if (!cards?.length) return undefined

    let cancelCounter = null
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const counter = entry.target.querySelector('[data-count]')
          if (!counter || countedRef.current) return
          countedRef.current = true
          const target = parseInt(counter.getAttribute('data-count'), 10)
          cancelCounter = animateCounterValue(target, setCount)
        })
      },
      { threshold: 0.35 },
    )

    cards.forEach((card) => observer.observe(card))
    return () => {
      observer.disconnect()
      if (cancelCounter) cancelCounter()
    }
  }, [])

  const cards = [
    {
      variant: 'red',
      Icon: IconTools,
      iconClass: 'text-danger display-4',
      numberClass: 'text-danger',
      content: 'count',
      label: '% Garage Service Satisfaction',
      delay: 0,
    },
    {
      variant: 'yellow',
      Icon: IconClockFill,
      iconClass: 'text-warning display-4',
      numberClass: 'text-warning',
      content: '24/7',
      label: 'Emergency Repairs Available',
      delay: 1,
    },
    {
      variant: 'green',
      Icon: IconStarFill,
      iconClass: 'text-success display-4',
      numberClass: 'text-success',
      content: '5.0',
      label: 'Quality Mechanical Work',
      delay: 2,
    },
    {
      variant: 'cyan',
      Icon: IconPatchCheckFill,
      iconClass: 'text-info display-4',
      numberClass: 'text-info',
      content: 'Expert',
      label: 'Certified Mechanics',
      delay: 3,
    },
  ]

  return (
    <section className="stats-section stats-section--light home-stats-float" ref={sectionRef}>
      <div className="tech-grid-bg" aria-hidden="true"></div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row g-4">
          {cards.map((card, i) => {
            const Icon = card.Icon
            return (
              <motion.div
                className="col-md-3 col-6"
                key={card.label}
                initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, delay: i * 0.08, ease }}
              >
                <div
                  className={`home-stat-glow ze-card ze-card--light home-stat-glow--${card.variant}`}
                  style={{ '--delay': card.delay }}
                >
                  <div className="stat-card-body text-center p-4 h-100">
                    <div className="stat-icon mb-3">
                      <Icon className={card.iconClass} />
                    </div>
                    <div
                      className={`stat-number ${card.numberClass}`}
                      {...(card.content === 'count' ? { 'data-count': 100 } : {})}
                    >
                      {card.content === 'count' ? count : card.content}
                    </div>
                    <div className="stat-label">{card.label}</div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Stats

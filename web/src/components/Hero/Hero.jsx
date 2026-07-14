import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import heroBg from '../../assets/premium.jfif'
import { IconCalendarCheckFill, IconChevronDown, IconGeoAltFill, IconLightningChargeFill, IconShieldCheck, IconTelephoneFill } from '../icons'

const HERO_WORDS = ['Brake Repairs', 'Oil Changes', 'Suspension Work', 'Electrical Fixes']
const HEADLINE_TOP = ["Darwin's", 'Mobile']
const HEADLINE_BOTTOM = ['Garage', 'Specialists']

function Hero() {
  const [accentText, setAccentText] = useState('')
  const typingRef = useRef({ wi: 0, ci: 0, deleting: false, timeoutId: null })
  const reduceMotion = useRef(
    typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const state = typingRef.current
    let cancelled = false

    function tick() {
      if (cancelled) return

      const word = HERO_WORDS[state.wi]
      const nextText = state.deleting
        ? word.slice(0, state.ci--)
        : word.slice(0, state.ci++)

      setAccentText(nextText)

      if (!state.deleting && state.ci > word.length) {
        state.deleting = true
        state.timeoutId = setTimeout(tick, 1800)
        return
      }
      if (state.deleting && state.ci < 0) {
        state.deleting = false
        state.wi = (state.wi + 1) % HERO_WORDS.length
        state.ci = 0
        state.timeoutId = setTimeout(tick, 400)
        return
      }
      state.timeoutId = setTimeout(tick, state.deleting ? 55 : 90)
    }

    // Let split headline settle before typing accent
    state.timeoutId = setTimeout(tick, reduceMotion.current ? 200 : 1600)
    return () => {
      cancelled = true
      clearTimeout(state.timeoutId)
    }
  }, [])

  return (
    <section
      id="home"
      className="hero position-relative overflow-hidden d-flex align-items-center"
    >
      <div className="hero-bg-stage">
        <div className="hero-bg-kenburns">
          <img
            src={heroBg}
            alt="Professional car wash and mechanical services"
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

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 text-center py-5">
            <div className="hero-info-bar mb-5 home-hero-info">
              <div className="hib-badge hib-badge--red">
                <span className="hib-circle hib-circle--red">
                  <IconGeoAltFill />
                </span>
                <span className="hib-text">Darwin, NT</span>
              </div>
              <div className="hib-center">
                <span className="hib-circle hib-circle--green">
                  <IconShieldCheck />
                </span>
                <span className="hib-text">Satisfied</span>
              </div>
              <div className="hib-badge hib-badge--teal">
                <span className="hib-circle hib-circle--teal">
                  <IconLightningChargeFill />
                </span>
                <span className="hib-text">24/7 Emergency</span>
              </div>
            </div>

            <h1 className="hero-headline fw-bold mb-3">
              {HEADLINE_TOP.map((word, i) => (
                <span key={`t-${word}`} className="home-hero-word" style={{ '--i': i }}>
                  {word}
                  {i < HEADLINE_TOP.length - 1 ? '\u00A0' : ''}
                </span>
              ))}
              <br />
              <span className="home-hero-accent-wrap">
                <span className="hero-headline-accent" id="heroAccent">
                  {accentText}
                </span>
              </span>
              <br />
              {HEADLINE_BOTTOM.map((word, i) => (
                <span
                  key={`b-${word}`}
                  className="home-hero-word"
                  style={{ '--i': HEADLINE_TOP.length + i }}
                >
                  {word}
                  {i < HEADLINE_BOTTOM.length - 1 ? '\u00A0' : ''}
                </span>
              ))}
            </h1>

            <p className="hero-subheadline mb-4 mx-auto home-hero-blur">
              Brakes, oil changes, suspension, electrical and more. Professional mechanical
              repairs brought straight to you, 24/7.
            </p>

            <div className="d-flex flex-wrap justify-content-center gap-3 hero-cta-buttons home-hero-ctas">
              <a
                href="tel:0432241883"
                className="btn btn-danger rounded-pill px-4 py-2 hero-call-pulse d-flex flex-column align-items-center"
                title="Call Z Elite Auto Care"
              >
                <span className="d-flex align-items-center gap-2" style={{ fontSize: '0.85rem' }}>
                  <IconTelephoneFill aria-hidden="true" /> Call Now
                </span>
                <span className="fw-bold" style={{ fontSize: '0.9rem', letterSpacing: '-0.3px' }}>
                  0432 241 883
                </span>
              </a>
              <Link
                to="/contact#booking"
                className="btn btn-outline-light rounded-pill px-4 py-2 d-flex align-items-center gap-2"
                style={{ fontSize: '0.85rem' }}
                title="Book a service"
              >
                <IconCalendarCheckFill aria-hidden="true" /> Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Link
        to="/services"
        className="hero-scroll-indicator home-scroll-indicator"
        aria-label="Scroll to explore services"
      >
        <span className="hero-scroll-text">Scroll</span>
        <IconChevronDown aria-hidden="true" />
      </Link>
    </section>
  )
}

export default Hero

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  IconClockFill,
  IconGeoAltFill,
  IconTelephoneFill,
  IconWhatsapp,
} from '../icons'
import './Footer.css'

function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="row gy-4 site-footer__grid">
            <div className="col-md-4">
              <p className="site-footer__brand">Z Elite Auto Care</p>
              <p className="site-footer__tagline">
                Darwin&apos;s trusted mobile workshop. Professional mechanical repairs brought to
                you, 24/7.
              </p>
            </div>

            <div className="col-md-4">
              <p className="site-footer__heading">Contact</p>
              <ul className="site-footer__list">
                <li>
                  <a href="tel:0432241883" className="site-footer__link">
                    <IconTelephoneFill aria-hidden="true" />
                    0432 241 883
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/61432241883"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site-footer__link"
                  >
                    <IconWhatsapp aria-hidden="true" />
                    WhatsApp
                  </a>
                </li>
                <li>
                  <span className="site-footer__meta">
                    <IconGeoAltFill aria-hidden="true" />
                    6 Myola Ct, Durack NT 0830
                  </span>
                </li>
                <li>
                  <span className="site-footer__meta">
                    <IconClockFill aria-hidden="true" />
                    Open 24/7
                  </span>
                </li>
              </ul>
            </div>

            <div className="col-md-4">
              <p className="site-footer__heading">Explore</p>
              <nav className="site-footer__nav" aria-label="Footer">
                <Link to="/" className="site-footer__link">
                  Home
                </Link>
                <Link to="/services#garageServices" className="site-footer__link">
                  Garage Services
                </Link>
                <Link to="/services#detailingPackages" className="site-footer__link">
                  Detailing
                </Link>
                <Link to="/about" className="site-footer__link">
                  About
                </Link>
                <Link to="/gallery" className="site-footer__link">
                  Gallery
                </Link>
                <Link to="/testimonials" className="site-footer__link">
                  Testimonials
                </Link>
                <Link to="/contact" className="site-footer__link">
                  Contact
                </Link>
              </nav>
            </div>
          </div>

          <div className="site-footer__bottom">
            <p className="site-footer__copy">
              &copy; 2026 Z Elite Auto Care. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <a href="tel:0432241883" className="floating-call-btn" aria-label="Call Z Elite Auto Care">
        <span className="floating-call-btn__label">
          Call
          <br />
          Now
        </span>
        <IconTelephoneFill className="floating-call-btn__icon" aria-hidden="true" />
      </a>

      <a
        href="https://wa.me/61432241883"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        aria-label="Chat on WhatsApp"
      >
        <IconWhatsapp />
      </a>

      <button
        id="scrollTopBtn"
        className={`scroll-top-btn${showScrollTop ? ' show' : ''}`}
        aria-label="Scroll to top"
        type="button"
        onClick={handleScrollToTop}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>
    </>
  )
}

export default Footer

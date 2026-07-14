import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IconWhatsapp } from '../icons'

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const linkStyle = {
    color: '#aaaaaa',
    textDecoration: 'none',
    fontSize: '0.9rem',
  }

  return (
    <>
      <footer
        className="site-footer"
        style={{
          background: '#000000',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          padding: '1.25rem 0',
        }}
      >
        <div className="container">
          <div className="row align-items-center gy-3">
            <div className="col-md-5 text-center text-md-start">
              <p style={{ color: '#aaaaaa', margin: 0, fontSize: '0.9rem' }}>
                &copy; 2026 Z Elite Auto Care. All rights reserved.
              </p>
            </div>
            <div className="col-md-7">
              <nav
                className="d-flex flex-wrap justify-content-center justify-content-md-end gap-3"
                aria-label="Footer"
              >
                <Link to="/" style={linkStyle}>
                  Home
                </Link>
                <Link to="/services" style={linkStyle}>
                  Services
                </Link>
                <Link to="/about" style={linkStyle}>
                  About
                </Link>
                <Link to="/gallery" style={linkStyle}>
                  Gallery
                </Link>
                <Link to="/testimonials" style={linkStyle}>
                  Testimonials
                </Link>
                <Link to="/contact" style={linkStyle}>
                  Contact
                </Link>
                <a
                  href="https://wa.me/61432241883"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ ...linkStyle, color: '#198754' }}
                  aria-label="WhatsApp"
                >
                  <IconWhatsapp />
                </a>
              </nav>
            </div>
          </div>
        </div>
      </footer>

      <a href="tel:0432241883" className="floating-call-btn" aria-label="Call Z Elite Auto Care">
        Call Now
      </a>

      <a
        href="https://wa.me/61432241883"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>

      <button
        id="scrollTopBtn"
        className={`scroll-top-btn${showScrollTop ? ' show' : ''}`}
        aria-label="Scroll to top"
        type="button"
        onClick={scrollToTop}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>
    </>
  )
}

export default Footer

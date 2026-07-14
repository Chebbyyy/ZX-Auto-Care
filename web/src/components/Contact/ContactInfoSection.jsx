import { Link } from 'react-router-dom'
import { IconAward, IconCalendarCheckFill, IconClockFill, IconDropletFill, IconEnvelopeFill, IconGearFill, IconGeoAltFill, IconImages, IconPatchCheck, IconShieldCheck, IconTelephoneFill, IconTools, IconTruck, IconWhatsapp, IconWrench } from '../icons'

function ContactInfoSection() {
  const brandHover = (e, enter) => {
    const el = e.currentTarget
    if (enter) {
      el.style.transform = 'translateY(-10px)'
      el.style.boxShadow = '0 20px 40px rgba(225,6,0,0.3)'
      el.style.background = '#2a1010'
    } else {
      el.style.transform = 'translateY(0)'
      el.style.boxShadow = 'none'
      el.style.background = '#1a1a1a'
    }
  }

  const linksHover = (e, enter) => {
    const el = e.currentTarget
    if (enter) {
      el.style.transform = 'translateY(-10px)'
      el.style.boxShadow = '0 20px 40px rgba(255,193,7,0.2)'
      el.style.background = '#1a1800'
    } else {
      el.style.transform = 'translateY(0)'
      el.style.boxShadow = 'none'
      el.style.background = '#1a1a1a'
    }
  }

  const contactHover = (e, enter) => {
    const el = e.currentTarget
    if (enter) {
      el.style.transform = 'translateY(-10px)'
      el.style.boxShadow = '0 20px 40px rgba(25,135,84,0.25)'
      el.style.background = '#001a0d'
    } else {
      el.style.transform = 'translateY(0)'
      el.style.boxShadow = 'none'
      el.style.background = '#1a1a1a'
    }
  }

  const linkItemHover = (e, enter) => {
    const el = e.currentTarget
    if (enter) {
      el.style.color = '#E10600'
      el.style.paddingLeft = '10px'
    } else {
      el.style.color = '#cccccc'
      el.style.paddingLeft = '0'
    }
  }

  return (
    <>
      <div style={{ lineHeight: 0, background: '#f4f4f5' }}>
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: 'block', width: '100%', height: '60px' }}
        >
          <path d="M0,30 C360,0 1080,60 1440,30 L1440,60 L0,60 Z" fill="#000000" />
        </svg>
      </div>

      <section className="footer" style={{ background: '#000000', position: 'relative', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background:
              'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(225, 6, 0, 0.03) 10px, rgba(225, 6, 0, 0.03) 20px)',
          }}
        ></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row g-4 py-5">
            <div className="col-lg-4">
              <div
                className="card border-danger border-2 h-100"
                style={{ background: '#1a1a1a', transition: 'all 0.3s ease', cursor: 'pointer' }}
                onMouseEnter={(e) => brandHover(e, true)}
                onMouseLeave={(e) => brandHover(e, false)}
              >
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <IconGearFill style={{ fontSize: '3rem', color: '#E10600' }} />
                  </div>
                  <h4 style={{ color: '#E10600', fontWeight: 700, marginBottom: '0.5rem' }}>
                    Z Elite Auto Care
                  </h4>
                  <p
                    style={{
                      color: '#aaaaaa',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      marginBottom: '1rem',
                    }}
                  >
                    Darwin&apos;s Trusted Mobile Workshop
                  </p>
                  <p style={{ color: '#cccccc', fontSize: '0.95rem', lineHeight: 1.7 }}>
                    Professional mechanical repairs and premium car detailing delivered to your door,
                    anywhere in Darwin, 24/7.
                  </p>
                  <div className="mt-3">
                    <span
                      className="badge bg-danger me-2"
                      style={{ fontSize: '0.85rem', padding: '0.45rem 0.9rem' }}
                    >
                      <IconClockFill className="me-1" />24/7 Available
                    </span>
                    <span
                      className="badge bg-warning text-dark"
                      style={{ fontSize: '0.85rem', padding: '0.45rem 0.9rem' }}
                    >
                      <IconTruck className="me-1" />Mobile Service
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div
                className="card border-warning border-2 h-100"
                style={{ background: '#1a1a1a', transition: 'all 0.3s ease', cursor: 'pointer' }}
                onMouseEnter={(e) => linksHover(e, true)}
                onMouseLeave={(e) => linksHover(e, false)}
              >
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <IconTools style={{ fontSize: '3rem', color: '#ffc107' }} />
                  </div>
                  <h4 style={{ color: '#E10600', fontWeight: 700, marginBottom: '0.5rem' }}>
                    Quick Links
                  </h4>
                  <p
                    style={{
                      color: '#aaaaaa',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      marginBottom: '1rem',
                    }}
                  >
                    Navigate the Site
                  </p>
                  <div className="text-start">
                    <Link
                      to="/services"
                      style={{
                        color: '#cccccc',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0.55rem 0',
                        borderBottom: '1px solid #2a2a2a',
                        transition: 'all 0.3s ease',
                        fontWeight: 500,
                      }}
                      onMouseEnter={(e) => linkItemHover(e, true)}
                      onMouseLeave={(e) => linkItemHover(e, false)}
                    >
                      <IconWrench className="me-2 text-danger" />Brake, Oil & Mechanical Repairs
                    </Link>
                    <Link
                      to="/services"
                      style={{
                        color: '#cccccc',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0.55rem 0',
                        borderBottom: '1px solid #2a2a2a',
                        transition: 'all 0.3s ease',
                        fontWeight: 500,
                      }}
                      onMouseEnter={(e) => linkItemHover(e, true)}
                      onMouseLeave={(e) => linkItemHover(e, false)}
                    >
                      <IconDropletFill className="me-2 text-info" />Car Wash & Detailing Packages
                    </Link>
                    <Link
                      to="/gallery"
                      style={{
                        color: '#cccccc',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0.55rem 0',
                        borderBottom: '1px solid #2a2a2a',
                        transition: 'all 0.3s ease',
                        fontWeight: 500,
                      }}
                      onMouseEnter={(e) => linkItemHover(e, true)}
                      onMouseLeave={(e) => linkItemHover(e, false)}
                    >
                      <IconImages className="me-2 text-warning" />View Our Work Gallery
                    </Link>
                    <Link
                      to="/contact#booking"
                      style={{
                        color: '#cccccc',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0.55rem 0',
                        transition: 'all 0.3s ease',
                        fontWeight: 500,
                      }}
                      onMouseEnter={(e) => linkItemHover(e, true)}
                      onMouseLeave={(e) => linkItemHover(e, false)}
                    >
                      <IconCalendarCheckFill className="me-2 text-success" />Book a Service Today
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div
                className="card border-success border-2 h-100"
                style={{ background: '#1a1a1a', transition: 'all 0.3s ease', cursor: 'pointer' }}
                onMouseEnter={(e) => contactHover(e, true)}
                onMouseLeave={(e) => contactHover(e, false)}
              >
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <IconTelephoneFill style={{ fontSize: '3rem', color: '#198754' }} />
                  </div>
                  <h4 style={{ color: '#E10600', fontWeight: 700, marginBottom: '0.5rem' }}>
                    Get In Touch
                  </h4>
                  <p
                    style={{
                      color: '#aaaaaa',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      marginBottom: '1rem',
                    }}
                  >
                    We&apos;re Always Here For You
                  </p>
                  <a
                    href="tel:0432241883"
                    className="btn btn-danger btn-lg w-100 mb-3"
                    style={{ fontSize: '1.15rem', fontWeight: 800, letterSpacing: '0.5px' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.03)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)'
                    }}
                  >
                    <IconTelephoneFill className="me-2" />0432 241 883
                  </a>
                  <p style={{ color: '#cccccc', marginBottom: '0.4rem', fontSize: '0.92rem' }}>
                    <IconClockFill className="text-danger me-2" />Open 24 hours, 7 days a week
                  </p>
                  <p style={{ color: '#cccccc', marginBottom: '1.2rem', fontSize: '0.92rem' }}>
                    <IconGeoAltFill className="text-danger me-2" />6 Myola Ct, Durack NT 0830
                  </p>
                  <div className="d-flex gap-2 justify-content-center">
                    <a
                      href="https://wa.me/61432241883"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-success flex-fill"
                      style={{ fontWeight: 600, transition: 'all 0.3s ease' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)'
                      }}
                    >
                      <IconWhatsapp className="me-1" />WhatsApp
                    </a>
                    <a
                      href="#contact"
                      className="btn btn-outline-danger flex-fill"
                      style={{ fontWeight: 600, transition: 'all 0.3s ease' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)'
                      }}
                    >
                      <IconEnvelopeFill className="me-1" />Contact
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center py-4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="d-inline-flex gap-3 flex-wrap justify-content-center">
              <span style={{ color: '#E10600', fontWeight: 700, fontSize: '0.9rem' }}>
                <IconShieldCheck className="me-1" />Licensed
              </span>
              <span style={{ color: '#ffc107', fontWeight: 700, fontSize: '0.9rem' }}>
                <IconAward className="me-1" />Insured
              </span>
              <span style={{ color: '#198754', fontWeight: 700, fontSize: '0.9rem' }}>
                <IconPatchCheck className="me-1" />Guaranteed
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactInfoSection

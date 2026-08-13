import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IconTelephoneFill } from '../icons'
import './Navbar.css'

const LOGO_SRC = '/logo.jpg'

const PREFETCH = {
  '/services': () => import('../../pages/Services'),
  '/about': () => import('../../pages/About'),
  '/gallery': () => import('../../pages/Gallery'),
  '/testimonials': () => import('../../pages/Testimonials'),
  '/contact': () => import('../../pages/Contact'),
}

function prefetchRoute(path) {
  const load = PREFETCH[path]
  if (!load) return
  try {
    load()
  } catch {
    // ignore prefetch errors
  }
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Warm all routes after first paint so nav never shows a splash screen
  useEffect(() => {
    const idle =
      typeof window.requestIdleCallback === 'function'
        ? window.requestIdleCallback
        : (cb) => window.setTimeout(cb, 700)

    const id = idle(() => {
      Object.keys(PREFETCH).forEach((path) => prefetchRoute(path))
    })

    return () => {
      if (typeof window.cancelIdleCallback === 'function') {
        window.cancelIdleCallback(id)
      } else {
        window.clearTimeout(id)
      }
    }
  }, [])

  const closeMenu = () => setMenuOpen(false)

  const linkProps = (path) => ({
    onMouseEnter: () => prefetchRoute(path),
    onFocus: () => prefetchRoute(path),
    onTouchStart: () => prefetchRoute(path),
  })

  return (
    <nav
      className={`navbar navbar-expand-md navbar-light sticky-top shadow-sm ze-navbar${scrolled ? ' scrolled' : ''}${menuOpen ? ' is-open' : ''}`}
      style={{ background: 'var(--ze-white)', borderBottom: '3px solid var(--ze-red-primary)' }}
    >
      <div className="container">
        <Link to="/" className="navbar-brand" aria-label="Z Elite Auto Care Home" onClick={closeMenu}>
          <img
            src={LOGO_SRC}
            alt="Z Elite Auto Care"
            className="nav-logo-img"
            width={200}
            height={68}
            decoding="async"
            fetchPriority="high"
          />
        </Link>

        <button
          className="navbar-toggler border-danger"
          type="button"
          aria-controls="mainNav"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse${menuOpen ? ' show' : ''}`} id="mainNav">
          <ul className="navbar-nav mx-auto align-items-md-center gap-md-1">
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className={({ isActive }) => `nav-link px-3${isActive ? ' nav-link--active' : ''}`}
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/services"
                className={({ isActive }) => `nav-link px-3${isActive ? ' nav-link--active' : ''}`}
                onClick={closeMenu}
                {...linkProps('/services')}
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) => `nav-link px-3${isActive ? ' nav-link--active' : ''}`}
                onClick={closeMenu}
                {...linkProps('/about')}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/gallery"
                className={({ isActive }) => `nav-link px-3${isActive ? ' nav-link--active' : ''}`}
                onClick={closeMenu}
                {...linkProps('/gallery')}
              >
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/testimonials"
                className={({ isActive }) => `nav-link px-3${isActive ? ' nav-link--active' : ''}`}
                onClick={closeMenu}
                {...linkProps('/testimonials')}
              >
                Testimonials
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) => `nav-link px-3${isActive ? ' nav-link--active' : ''}`}
                onClick={closeMenu}
                {...linkProps('/contact')}
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <a href="tel:0432241883" className="nav-call" onClick={closeMenu}>
            <span className="nav-call__icon" aria-hidden="true">
              <IconTelephoneFill />
            </span>
            <span className="nav-call__text">
              <span className="nav-call__label">Call Us</span>
              <span className="nav-call__number">0432 241 883</span>
            </span>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

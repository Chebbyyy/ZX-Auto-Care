import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/Z Elite Logo.jpg'
import { IconCalendarCheckFill } from '../icons'

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

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav
      className={`navbar navbar-expand-md navbar-light sticky-top shadow-sm${scrolled ? ' scrolled' : ''}`}
      style={{ background: '#ffffff', borderBottom: '3px solid #E10600' }}
    >
      <div className="container">
        <Link to="/" className="navbar-brand" aria-label="Z Elite Auto Care Home" onClick={closeMenu}>
          <img src={logo} alt="Z Elite Auto Care" className="nav-logo-img" />
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
          <ul className="navbar-nav ms-auto align-items-md-center gap-md-1">
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
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) => `nav-link px-3${isActive ? ' nav-link--active' : ''}`}
                onClick={closeMenu}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/gallery"
                className={({ isActive }) => `nav-link px-3${isActive ? ' nav-link--active' : ''}`}
                onClick={closeMenu}
              >
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/testimonials"
                className={({ isActive }) => `nav-link px-3${isActive ? ' nav-link--active' : ''}`}
                onClick={closeMenu}
              >
                Testimonials
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) => `nav-link px-3${isActive ? ' nav-link--active' : ''}`}
                onClick={closeMenu}
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item ms-md-2">
              <Link
                to="/contact#booking"
                className="btn btn-danger rounded-pill px-4 py-2 fw-bold nav-cta"
                onClick={closeMenu}
              >
                <IconCalendarCheckFill className="me-1" /> Book Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

import { Link } from 'react-router-dom'
import Services from '../components/Services/Services'
import heroImg from '../assets/gallery/mw5.jpeg'

function ServicesPage() {
  return (
    <>
      <section className="page-hero" aria-label="Services page header">
        <div className="page-hero__bg" aria-hidden="true">
          <img src={heroImg} alt="" decoding="async" fetchPriority="high" />
          <div className="page-hero__shade" />
        </div>
        <div className="container page-hero__inner">
          <h1 className="page-hero__title">Services</h1>
        </div>
        <div className="page-hero__crumb-row">
          <div className="container">
            <nav className="page-hero__crumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span aria-hidden="true">›</span>
              <span className="page-hero__crumb-current">Services</span>
            </nav>
          </div>
        </div>
      </section>
      <Services />
    </>
  )
}

export default ServicesPage

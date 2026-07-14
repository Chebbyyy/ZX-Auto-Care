import { IconCheckCircleFill, IconCurrencyDollar, IconLightningChargeFill, IconPeopleFill, IconShieldCheck, IconTruck } from '../icons'

function WhyUs() {
  return (
    <section id="why-us" className="why-us">
      <div className="container">
        <div className="section-header" data-animate="fade-up">
          <h2>Why Choose Us</h2>
          <div className="header-line"></div>
          <p className="text-muted">Discover why Elite Auto Care is your preferred choice</p>
        </div>

        <div className="features-grid">
          <div className="why-card" data-animate="feature">
            <div
              className="why-icon-badge"
              style={{
                background: 'linear-gradient(135deg, #E10600, #a00400)',
                boxShadow: '0 6px 18px rgba(225,6,0,0.4)',
              }}
            >
              <IconTruck />
            </div>
            <h3>Mobile Garage Service</h3>
            <p>
              Professional mechanical repairs at your location. Home, office, or roadside in Darwin.
            </p>
          </div>

          <div className="why-card" data-animate="feature">
            <div
              className="why-icon-badge"
              style={{
                background: 'linear-gradient(135deg, #0891b2, #0e7490)',
                boxShadow: '0 6px 18px rgba(8,145,178,0.4)',
              }}
            >
              <IconPeopleFill />
            </div>
            <h3>Expert Mechanics</h3>
            <p>
              Certified technicians with years of mechanical expertise. Specializing in all makes and
              models.
            </p>
          </div>

          <div className="why-card" data-animate="feature">
            <div
              className="why-icon-badge"
              style={{
                background: 'linear-gradient(135deg, #16a34a, #14532d)',
                boxShadow: '0 6px 18px rgba(22,163,74,0.4)',
              }}
            >
              <IconCurrencyDollar />
            </div>
            <h3>Transparent Pricing</h3>
            <p>
              Upfront quotes for all garage services. No hidden fees. Fair prices for quality
              mechanical work.
            </p>
          </div>

          <div className="why-card" data-animate="feature">
            <div
              className="why-icon-badge"
              style={{
                background: 'linear-gradient(135deg, #d97706, #b45309)',
                boxShadow: '0 6px 18px rgba(217,119,6,0.4)',
              }}
            >
              <IconCheckCircleFill />
            </div>
            <h3>Quality Repairs</h3>
            <p>
              Every mechanical repair done right the first time. Professional standards for all garage
              services.
            </p>
          </div>

          <div className="why-card" data-animate="feature">
            <div
              className="why-icon-badge"
              style={{
                background: 'linear-gradient(135deg, #7c3aed, #5b21b6)',
                boxShadow: '0 6px 18px rgba(124,58,237,0.4)',
              }}
            >
              <IconShieldCheck />
            </div>
            <h3>Guaranteed Repairs</h3>
            <p>
              All mechanical work guaranteed. Not satisfied? We&apos;ll make it right. Your trust is
              everything.
            </p>
          </div>

          <div className="why-card" data-animate="feature">
            <div
              className="why-icon-badge"
              style={{
                background: 'linear-gradient(135deg, #db2777, #9d174d)',
                boxShadow: '0 6px 18px rgba(219,39,119,0.4)',
              }}
            >
              <IconLightningChargeFill />
            </div>
            <h3>Emergency Repairs</h3>
            <p>
              24/7 emergency garage services. Urgent mechanical repairs when you need them most.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs

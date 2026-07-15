import { IconArrowUpDown, IconClipboardCheck, IconDisc, IconDropletFill, IconGearFill, IconGem, IconHouseFill, IconLightbulb, IconLightningChargeFill, IconRadio, IconStarFill, IconTools } from '../icons'
import DarkVeil from '../DarkVeil/DarkVeil'
import './Services.css'

function pulseCard(event, duration = 300) {
  const el = event.currentTarget
  el.style.transform = 'scale(1.05)'
  setTimeout(() => {
    el.style.transform = 'scale(1)'
  }, duration)
}

function Services() {
  return (
    <section id="services" className="services services--darkveil">
      <div className="darkveil-backdrop" aria-hidden="true">
        <DarkVeil
          hueShift={155}
          noiseIntensity={0.03}
          scanlineIntensity={0}
          speed={0.22}
          scanlineFrequency={0}
          warpAmount={0.1}
          resolutionScale={1}
        />
      </div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-header animate-on-scroll fade-up" data-animate="fade-up">
          <h2>Our Services</h2>
          <div className="header-line"></div>
          <p>Quality work at honest prices. Professional service for every vehicle in Darwin.</p>
        </div>

        <div className="services-redesign">
          <div className="svc-block" id="garageServices">
            <div className="svc-block-header">
              <span className="svc-block-icon">
                <IconTools />
              </span>
              <div>
                <h3 className="svc-block-title">Garage Services</h3>
                <p className="svc-block-sub">
                  Professional mechanical repairs brought straight to you, anywhere in Darwin.
                </p>
              </div>
            </div>
            <div className="garage-services-grid">
              <div
                className="garage-service-card hover-lift animate-on-scroll scale-in stagger-1"
                data-animate="list-item"
                style={{
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  border: '2px solid #f8f9fa',
                }}
                onClick={(e) => pulseCard(e, 300)}
              >
                <div
                  className="garage-icon"
                  style={{ background: 'linear-gradient(135deg, #E10600 0%, #c90500 100%)' }}
                >
                  <IconDisc className="text-white" />
                </div>
                <h4 className="fade-up stagger-2 text-dark">Brake Repairs</h4>
                <div className="service-features slide-left stagger-3">
                  <small className="text-muted">Brake pads and rotors</small>
                  <small className="text-muted">Brake fluid service</small>
                </div>
              </div>

              <div
                className="garage-service-card hover-lift animate-on-scroll scale-in stagger-2"
                data-animate="list-item"
                style={{
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  border: '2px solid #f8f9fa',
                }}
                onClick={(e) => pulseCard(e, 300)}
              >
                <div
                  className="garage-icon"
                  style={{ background: 'linear-gradient(135deg, #6c757d 0%, #495057 100%)' }}
                >
                  <IconDropletFill className="text-white" />
                </div>
                <h4 className="fade-up stagger-2 text-dark">Oil Changes</h4>
                <div className="service-features slide-left stagger-3">
                  <small className="text-muted">Full synthetic oils</small>
                  <small className="text-muted">Filter replacement</small>
                </div>
              </div>

              <div
                className="garage-service-card hover-lift animate-on-scroll scale-in stagger-3"
                data-animate="list-item"
                style={{
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  border: '2px solid #f8f9fa',
                }}
                onClick={(e) => pulseCard(e, 300)}
              >
                <div
                  className="garage-icon"
                  style={{ background: 'linear-gradient(135deg, #6c757d 0%, #495057 100%)' }}
                >
                  <IconGearFill className="text-white" />
                </div>
                <h4 className="fade-up stagger-2 text-dark">Transmission Service</h4>
                <div className="service-features slide-left stagger-3">
                  <small className="text-muted">Fluid replacement</small>
                  <small className="text-muted">Filter service</small>
                </div>
              </div>

              <div
                className="garage-service-card"
                data-animate="list-item"
                style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
                onClick={(e) => pulseCard(e, 200)}
              >
                <div className="garage-icon">
                  <IconArrowUpDown className="text-white" />
                </div>
                <h4>Suspension Repairs</h4>
                <div className="service-features">
                  <small className="text-muted">Shock absorbers</small>
                  <small className="text-muted">Strut replacement</small>
                </div>
              </div>

              <div
                className="garage-service-card"
                data-animate="list-item"
                style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
                onClick={(e) => pulseCard(e, 200)}
              >
                <div className="garage-icon">
                  <IconLightningChargeFill className="text-white" />
                </div>
                <h4>Jump Starting</h4>
                <div className="service-features">
                  <small className="text-muted">24/7 emergency</small>
                  <small className="text-muted">Battery testing</small>
                </div>
              </div>

              <div
                className="garage-service-card"
                data-animate="list-item"
                style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
                onClick={(e) => pulseCard(e, 200)}
              >
                <div className="garage-icon">
                  <IconRadio className="text-white" />
                </div>
                <h4>Car Radio Fitting</h4>
                <div className="service-features">
                  <small className="text-muted">Professional install</small>
                  <small className="text-muted">Wiring and setup</small>
                </div>
              </div>

              <div
                className="garage-service-card"
                data-animate="list-item"
                style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
                onClick={(e) => pulseCard(e, 200)}
              >
                <div className="garage-icon">
                  <IconClipboardCheck className="text-white" />
                </div>
                <h4>Pre-Purchase Inspection</h4>
                <div className="service-features">
                  <small className="text-muted">Comprehensive check</small>
                  <small className="text-muted">Detailed report</small>
                </div>
              </div>

              <div
                className="garage-service-card"
                data-animate="list-item"
                style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
                onClick={(e) => pulseCard(e, 200)}
              >
                <div className="garage-icon">
                  <IconLightbulb className="text-white" />
                </div>
                <h4>Headlight Cleaning</h4>
                <div className="service-features">
                  <small className="text-muted">Restoration service</small>
                  <small className="text-muted">UV protection</small>
                </div>
              </div>
            </div>
          </div>

          <div className="svc-divider">
            <span className="svc-divider-icon">
              <IconDropletFill />
            </span>
          </div>

          <div className="svc-block" id="detailingPackages">
            <div className="svc-block-header">
              <span className="svc-block-icon svc-block-icon--blue">
                <IconDropletFill />
              </span>
              <div>
                <h3 className="svc-block-title">
                  Detailing Packages
                  <span className="svc-aob-tag">Add-on</span>
                </h3>
                <p className="svc-block-sub">
                  Premium car detailing delivered to your door. From a quick wash to full ceramic
                  coating. Available alongside our garage services.
                </p>
              </div>
            </div>
            <div className="service-cards">
              <div className="service-card" data-animate="card">
                <div className="service-icon-wrapper bg-info">
                  <IconDropletFill className="text-white" />
                </div>
                <h4 className="text-info">Express Wash</h4>
                <p className="service-desc">
                  A proper hand wash from top to bottom, dried off and finished with a full vacuum
                  and wipe inside. Great for a quick refresh.
                </p>
                <div className="service-features">
                  <small className="text-muted">Full exterior hand wash</small>
                  <small className="text-muted">Interior vacuum and wipe</small>
                  <small className="text-muted">Window clean</small>
                </div>
                <p className="service-price">
                  From <strong>$80</strong>
                </p>
              </div>

              <div className="service-card" data-animate="card">
                <div className="service-icon-wrapper bg-warning">
                  <IconHouseFill className="text-white" />
                </div>
                <h4 className="text-warning">Interior Detail</h4>
                <p className="service-desc">
                  We go through every corner of your cabin. Seats shampooed, leather treated, dash
                  and trim wiped down properly.
                </p>
                <div className="service-features">
                  <small className="text-muted">Deep vacuum and shampoo</small>
                  <small className="text-muted">Leather conditioning</small>
                  <small className="text-muted">Dashboard and trim detail</small>
                </div>
                <p className="service-price">
                  From <strong>$120</strong>
                </p>
              </div>

              <div className="service-card featured" data-animate="card">
                <div className="featured-badge">MOST POPULAR</div>
                <div className="service-icon-wrapper bg-success">
                  <IconStarFill className="text-white" />
                </div>
                <h4 style={{ color: '#166534' }}>Full Detail</h4>
                <p className="service-desc" style={{ color: '#374151' }}>
                  Inside and out, your car gets the full treatment. We wash, clay, polish, wax and
                  deep clean the interior so it looks like it just left the showroom.
                </p>
                <div className="service-features">
                  <small style={{ color: '#374151' }}>Full exterior wash and clay bar</small>
                  <small style={{ color: '#374151' }}>Machine polish and wax</small>
                  <small style={{ color: '#374151' }}>Full interior deep clean</small>
                  <small style={{ color: '#374151' }}>Tyre dressing and trim care</small>
                </div>
                <p className="service-price">
                  From <strong>$250</strong>
                </p>
              </div>

              <div className="service-card premium" data-animate="card">
                <div className="premium-badge">PREMIUM</div>
                <div
                  className="service-icon-wrapper"
                  style={{ background: 'linear-gradient(135deg, #E10600 0%, #c90500 100%)' }}
                >
                  <IconGem className="text-white" />
                </div>
                <h4 style={{ color: '#ffffff' }}>Full Detail + Ceramic Coating</h4>
                <p className="service-desc" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  The best we offer. After a complete full detail, we apply a professional ceramic
                  coating that protects your paint and keeps it looking sharp for years.
                </p>
                <div className="service-features">
                  <small style={{ color: 'rgba(255,255,255,0.85)' }}>Complete full detail</small>
                  <small style={{ color: 'rgba(255,255,255,0.85)' }}>Paint decontamination</small>
                  <small style={{ color: 'rgba(255,255,255,0.85)' }}>Professional ceramic coat</small>
                  <small style={{ color: 'rgba(255,255,255,0.85)' }}>5 year paint protection</small>
                </div>
                <p className="service-price" style={{ color: '#ffffff' }}>
                  From{' '}
                  <strong style={{ color: '#FF6B6B', fontSize: '1.6rem' }}>$600</strong>
                </p>
              </div>
            </div>
            <div className="pricing-notice">
              <IconGem />
              <span>
                <strong>PREMIUM PRICING</strong> • SUV & Double Cab Vehicles +$20
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

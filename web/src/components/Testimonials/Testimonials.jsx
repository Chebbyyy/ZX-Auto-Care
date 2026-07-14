import { Link } from 'react-router-dom'
import { IconPatchCheckFill, IconStarFill } from '../icons'

function Testimonials() {
  return (
    <section id="testimonials" className="testi-section">
      <div className="container">
        <div className="testi-header">
          <span className="testi-eyebrow">Customer Reviews</span>
          <h2 className="testi-title">What Our Customers Say</h2>
          <div className="testi-line"></div>
          <p className="testi-subtitle">Real feedback from real Darwin clients</p>
        </div>

        <div className="testi-grid">
          <div className="testi-card">
            <div className="testi-quote-mark">&ldquo;</div>
            <div className="testi-stars">
              <IconStarFill />
              <IconStarFill />
              <IconStarFill />
              <IconStarFill />
              <IconStarFill />
            </div>
            <p className="testi-text">
              Outstanding service from a highly professional and trustworthy team. They quickly
              diagnosed my car&apos;s issue, explained everything clearly, and repaired it efficiently
              at a fair price. Communication was excellent throughout, and my car has been running
              perfectly ever since.
            </p>
            <div className="testi-footer">
              <div className="testi-avatar">ST</div>
              <div className="testi-info">
                <strong className="testi-name">Samson Tarus</strong>
                <span className="testi-badge">
                  <IconPatchCheckFill /> Verified Customer
                </span>
              </div>
            </div>
          </div>

          <div className="testi-card testi-card--featured">
            <div className="testi-quote-mark">&ldquo;</div>
            <div className="testi-stars">
              <IconStarFill />
              <IconStarFill />
              <IconStarFill />
              <IconStarFill />
              <IconStarFill />
            </div>
            <p className="testi-text">
              Reliable, honest, and skilled. Fixed my car quickly and properly. Didn&apos;t try to
              upsell me on anything I didn&apos;t need. Straight to the point, great price, and the car
              drives perfectly. Highly recommended to anyone in Darwin.
            </p>
            <div className="testi-footer">
              <div className="testi-avatar">JA</div>
              <div className="testi-info">
                <strong className="testi-name">Jacob M. Abuoi</strong>
                <span className="testi-badge">
                  <IconPatchCheckFill /> Verified Customer
                </span>
              </div>
            </div>
          </div>

          <div className="testi-card">
            <div className="testi-quote-mark">&ldquo;</div>
            <div className="testi-stars">
              <IconStarFill />
              <IconStarFill />
              <IconStarFill />
              <IconStarFill />
              <IconStarFill />
            </div>
            <p className="testi-text">
              I had such a great experience. From the moment I called, they were professional,
              honest, and incredibly reassuring. They explained everything clearly, kept me updated,
              and the work was completed to a very high standard. I truly appreciated their
              transparency with pricing.
            </p>
            <div className="testi-footer">
              <div className="testi-avatar">CC</div>
              <div className="testi-info">
                <strong className="testi-name">Chepchumba Cherutich</strong>
                <span className="testi-badge">
                  <IconPatchCheckFill /> Verified Customer
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="testi-bottom-bar">
          <div className="testi-rating-summary">
            <span className="testi-big-score">5.0</span>
            <div>
              <div className="testi-stars testi-stars--sm">
                <IconStarFill />
                <IconStarFill />
                <IconStarFill />
                <IconStarFill />
                <IconStarFill />
              </div>
              <span className="testi-review-count">Based on customer reviews</span>
            </div>
          </div>
          <Link to="/contact#booking" className="testi-cta-btn">
            Book Your Service Today
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

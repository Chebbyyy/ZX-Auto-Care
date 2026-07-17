import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import {
  IconArrowUpDown,
  IconCalendarCheckFill,
  IconClipboardCheck,
  IconDisc,
  IconDropletFill,
  IconGearFill,
  IconGem,
  IconHouseFill,
  IconLightbulb,
  IconLightningChargeFill,
  IconRadio,
  IconStarFill,
  IconTools,
} from '../icons'
import DarkVeil from '../DarkVeil/DarkVeil'
import servicesHeroImg from '../../assets/gallery/mw12.jpeg'
import './Services.css'

const ease = [0.22, 1, 0.36, 1]

const GARAGE_SERVICES = [
  { Icon: IconDisc, title: 'Brake Repairs', blurb: 'Pads, rotors & fluid service' },
  { Icon: IconDropletFill, title: 'Oil Changes', blurb: 'Full synthetic with filter' },
  { Icon: IconGearFill, title: 'Transmission', blurb: 'Fluid & filter service' },
  { Icon: IconArrowUpDown, title: 'Suspension', blurb: 'Shocks & strut repairs' },
  { Icon: IconLightningChargeFill, title: 'Jump Starting', blurb: '24/7 emergency boosts' },
  { Icon: IconRadio, title: 'Radio Fitting', blurb: 'Install & wiring setup' },
  { Icon: IconClipboardCheck, title: 'Pre-Purchase', blurb: 'Full inspection & report' },
  { Icon: IconLightbulb, title: 'Headlight Cleaning', blurb: 'Restore & UV protect' },
]

const DETAILING = [
  {
    Icon: IconDropletFill,
    title: 'Express Wash',
    desc: 'A proper hand wash from top to bottom, dried off and finished with a full vacuum and wipe inside. Great for a quick refresh.',
    points: ['Full exterior hand wash', 'Interior vacuum and wipe', 'Window clean'],
    price: '$80',
  },
  {
    Icon: IconHouseFill,
    title: 'Interior Detail',
    desc: 'We go through every corner of your cabin. Seats shampooed, leather treated, dash and trim wiped down properly.',
    points: ['Deep vacuum and shampoo', 'Leather conditioning', 'Dashboard and trim detail'],
    price: '$120',
  },
  {
    Icon: IconStarFill,
    title: 'Full Detail',
    desc: 'Inside and out, your car gets the full treatment. We wash, clay, polish, wax and deep clean the interior so it looks like it just left the showroom.',
    points: [
      'Full exterior wash and clay bar',
      'Machine polish and wax',
      'Full interior deep clean',
      'Tyre dressing and trim care',
    ],
    price: '$250',
    featured: true,
  },
  {
    Icon: IconGem,
    title: 'Full Detail + Ceramic Coating',
    desc: 'The best we offer. After a complete full detail, we apply a professional ceramic coating that protects your paint and keeps it looking sharp for years.',
    points: [
      'Complete full detail',
      'Paint decontamination',
      'Professional ceramic coat',
      '5 year paint protection',
    ],
    price: '$600',
    premium: true,
  },
]

function Services() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="services" className="services services--darkveil services--shouty">
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

      <div className="container services__inner">
        <motion.div
          className="svc-intro"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease }}
        >
          <div className="svc-intro__copy">
            <p className="svc-eyebrow">
              <span aria-hidden="true">//</span> Services
            </p>
            <h2 className="svc-title">
              Our <span>Services</span>
            </h2>
            <p className="svc-lead">
              Mobile garage repairs across Darwin. Detailing available as an add-on.
            </p>
            <Link to="/contact#booking" className="svc-cta">
              <IconCalendarCheckFill aria-hidden="true" />
              Book a Service
            </Link>
          </div>
          <div className="svc-intro__media">
            <img
              src={servicesHeroImg}
              alt="Finished vehicle after Z Elite Auto Care service"
              loading="lazy"
              decoding="async"
            />
          </div>
        </motion.div>

        <div className="svc-block svc-block--garage" id="garageServices">
          <div className="svc-block-header svc-block-header--dark">
            <span className="svc-block-icon">
              <IconTools />
            </span>
            <div>
              <h3 className="svc-block-title">Garage Services</h3>
              <p className="svc-block-sub">Mechanical repairs brought to you.</p>
            </div>
          </div>

          <div className="svc-shout-grid">
            {GARAGE_SERVICES.map((service, i) => {
              const Icon = service.Icon
              return (
                <motion.article
                  key={service.title}
                  className="svc-shout-card"
                  initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: i * 0.04, ease }}
                >
                  <span className="svc-shout-card__icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <h4>{service.title}</h4>
                  <p>{service.blurb}</p>
                </motion.article>
              )
            })}
          </div>
        </div>

        <div className="svc-divider" aria-hidden="true">
          <span className="svc-divider-icon">
            <IconDropletFill />
          </span>
        </div>

        <div className="svc-block svc-block--detail" id="detailingPackages">
          <div className="svc-block-header svc-block-header--dark">
            <span className="svc-block-icon">
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

          <div className="svc-detail-grid">
            {DETAILING.map((pkg, i) => {
              const Icon = pkg.Icon
              return (
                <motion.article
                  key={pkg.title}
                  className={[
                    'svc-detail-card',
                    pkg.featured ? 'svc-detail-card--featured' : '',
                    pkg.premium ? 'svc-detail-card--premium' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: i * 0.05, ease }}
                >
                  {pkg.featured ? <span className="svc-badge">Most Popular</span> : null}
                  {pkg.premium ? <span className="svc-badge svc-badge--premium">Premium</span> : null}
                  <span className="svc-detail-card__icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <h4>{pkg.title}</h4>
                  <p>{pkg.desc}</p>
                  <ul>
                    {pkg.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <p className="svc-detail-card__price">
                    From <strong>{pkg.price}</strong>
                  </p>
                </motion.article>
              )
            })}
          </div>

          <div className="pricing-notice">
            <IconGem />
            <span>
              <strong>PREMIUM PRICING</strong> • SUV & Double Cab Vehicles +$20
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import {
  IconArrowUpRight,
  IconArrowUpDown,
  IconCalendarCheckFill,
  IconDisc,
  IconDropletFill,
  IconGearFill,
  IconGem,
  IconHouseFill,
  IconLightningChargeFill,
  IconStarFill,
} from '../icons'
import servicesBg from '../../assets/gallery/mw23-2.jpeg'
import brakeImg from '../../assets/gallery/mw1.jpeg'
import oilImg from '../../assets/gallery/mw12.jpeg'
import transmissionImg from '../../assets/gallery/mw13.jpeg'
import suspensionImg from '../../assets/gallery/mw14.jpeg'
import electricalImg from '../../assets/gallery/mw2.jpeg'
import inspectionImg from '../../assets/gallery/mw7.jpeg'
import SectionHeader from '../SectionHeader/SectionHeader'
import './Services.css'

const ease = [0.22, 1, 0.36, 1]

const SERVICES_GRID = [
  {
    Icon: IconDisc,
    title: 'Brake Repairs',
    desc: 'Pads, rotors and brake fluid replaced at your home or roadside, restoring safe, confident stopping power.',
    img: brakeImg,
    alt: 'Brake system service',
  },
  {
    Icon: IconDropletFill,
    title: 'Oil Changes',
    desc: 'Full synthetic oil and filter changes done on the spot to keep your engine running clean and strong.',
    img: oilImg,
    alt: 'Engine oil service',
  },
  {
    Icon: IconGearFill,
    title: 'Transmission Service',
    desc: 'Fluid and filter service that keeps shifting smooth and protects your gearbox from costly wear.',
    img: transmissionImg,
    alt: 'Transmission service work',
  },
  {
    Icon: IconArrowUpDown,
    title: 'Suspension Repairs',
    desc: 'Shocks, struts and bushes sorted for a smooth, controlled ride on any Darwin road.',
    img: suspensionImg,
    alt: 'Suspension repair work',
  },
  {
    Icon: IconLightningChargeFill,
    title: 'Electrical & Radio Fitting',
    desc: 'Diagnostics, batteries, wiring and car stereo installs — sorted quickly wherever you are parked.',
    img: electricalImg,
    alt: 'Dashboard wiring and electrical work',
  },
  {
    Icon: IconCalendarCheckFill,
    title: 'Jump Start & Inspections',
    desc: '24/7 jump starting, pre-purchase inspections and headlight restoration whenever you need us.',
    img: inspectionImg,
    alt: 'Vehicle inspection work',
  },
]

const STATS = [
  { value: '24/7', label: 'Emergency Repairs Available' },
  { value: '100%', label: 'Mobile — We Come To You' },
  { value: '99%', label: 'Customer Satisfaction' },
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
      <div className="services__bg" aria-hidden="true">
        <img src={servicesBg} alt="" loading="lazy" decoding="async" />
        <div className="services__shade" />
      </div>

      <div className="container services__inner">
        <motion.div
          className="svc-head"
          id="garageServices"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease }}
        >
          <div className="svc-head__left">
            <SectionHeader
              align="start"
              eyebrow="Our Services"
              title="Trusted Car Care, From Repairs To Detailing"
              titleHighlight="Repairs"
              className="svc-head__header"
            />
          </div>
          <div className="svc-head__right">
            <p className="svc-lead">
              Mobile garage repairs across Darwin, 24 hours a day. Brakes, oil, suspension,
              electrical and more — with premium detailing available as an add-on.
            </p>
            <Link to="/contact#booking" className="ze-btn ze-btn--primary">
              <IconCalendarCheckFill aria-hidden="true" />
              Book a Service
            </Link>
          </div>
        </motion.div>

        <div className="svc-grid">
          {SERVICES_GRID.map((service, i) => {
            const Icon = service.Icon
            return (
              <motion.article
                key={service.title}
                className="svc-grid-card ze-card ze-card--light"
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease }}
              >
                <div className="svc-grid-card__media">
                  <img src={service.img} alt={service.alt} loading="lazy" decoding="async" />
                </div>
                <div className="svc-grid-card__body">
                  <span className="svc-grid-card__badge" aria-hidden="true">
                    <Icon />
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <Link to="/contact#booking" className="svc-grid-card__link">
                    Book Now <IconArrowUpRight aria-hidden="true" />
                  </Link>
                </div>
              </motion.article>
            )
          })}
        </div>

        <div className="svc-stats" role="list">
          {STATS.map((stat) => (
            <div className="svc-stat" role="listitem" key={stat.label}>
              <span className="svc-stat__value">{stat.value}</span>
              <span className="svc-stat__label">{stat.label}</span>
            </div>
          ))}
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
                    'ze-card',
                    'ze-card--light',
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
              <strong>Premium pricing</strong> • SUV & Double Cab Vehicles +$20
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

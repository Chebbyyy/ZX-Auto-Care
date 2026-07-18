import {
  IconClockFill,
  IconPatchCheckFill,
  IconStarFill,
  IconTruck,
} from '../icons'
import './TrustStrip.css'

const BADGES = [
  { Icon: IconPatchCheckFill, label: 'Certified Technicians' },
  { Icon: IconStarFill, label: '5.0 Rated Service' },
  { Icon: IconClockFill, label: '24/7 Emergency' },
  { Icon: IconTruck, label: 'We Come to You' },
]

const TrustStrip = () => {
  return (
    <div className="trust-strip" aria-label="Trust signals">
      <div className="container">
        <ul className="trust-strip__list">
          {BADGES.map(({ Icon, label }, index) => (
            <li key={label} className="trust-strip__item">
              {index > 0 ? <span className="trust-strip__divider" aria-hidden="true" /> : null}
              <span className="trust-strip__badge">
                <Icon aria-hidden="true" />
                <span>{label}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TrustStrip

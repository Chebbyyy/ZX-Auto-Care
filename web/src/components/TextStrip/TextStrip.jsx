import { IconClockFill, IconGearFill, IconInfoCircle, IconTools } from '../icons'

function TextStrip() {
  return (
    <div className="text-strip">
      <div className="text-strip-track">
        <div className="text-strip-content">
          <span>
            <IconTools className="me-2" />GARAGE SERVICES FIRST
          </span>
          <span className="strip-divider">|</span>
          <span>
            <IconClockFill className="me-2" />24/7 EMERGENCY REPAIRS
          </span>
          <span className="strip-divider">|</span>
          <span className="strip-highlight">
            <IconInfoCircle className="me-2" />SUVs & DOUBLE CABS +$20
          </span>
          <span className="strip-divider">|</span>
          <span>
            <IconGearFill className="me-2" />MECHANICAL EXPERTISE
          </span>
          <span className="strip-divider">|</span>
        </div>
        <div className="text-strip-content" aria-hidden="true">
          <span>
            <IconTools className="me-2" />GARAGE SERVICES FIRST
          </span>
          <span className="strip-divider">|</span>
          <span>
            <IconClockFill className="me-2" />24/7 EMERGENCY REPAIRS
          </span>
          <span className="strip-divider">|</span>
          <span className="strip-highlight">
            <IconInfoCircle className="me-2" />SUVs & DOUBLE CABS +$20
          </span>
          <span className="strip-divider">|</span>
          <span>
            <IconGearFill className="me-2" />MECHANICAL EXPERTISE
          </span>
          <span className="strip-divider">|</span>
        </div>
      </div>
    </div>
  )
}

export default TextStrip

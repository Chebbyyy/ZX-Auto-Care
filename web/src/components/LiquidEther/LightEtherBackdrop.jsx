import LiquidEther from '../LiquidEther/LiquidEther'
import './LightEtherBackdrop.css'

const BRAND_COLORS = ['#E10600', '#7a0500', '#ef4444']

/**
 * Reusable Liquid Ether layer for light pages/sections.
 * Place inside a position:relative container.
 */
function LightEtherBackdrop({
  colors = BRAND_COLORS,
  opacity = 0.4,
  className = '',
}) {
  return (
    <div
      className={`light-ether-backdrop ${className}`.trim()}
      style={{ opacity }}
      aria-hidden="true"
    >
      <LiquidEther
        colors={colors}
        mouseForce={14}
        cursorSize={90}
        resolution={0.45}
        autoSpeed={0.35}
        autoIntensity={1.6}
        autoDemo
      />
    </div>
  )
}

export default LightEtherBackdrop

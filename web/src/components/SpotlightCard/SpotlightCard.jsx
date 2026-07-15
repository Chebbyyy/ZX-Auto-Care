import { useRef, useCallback } from 'react'
import './SpotlightCard.css'

/**
 * React Bits SpotlightCard — cursor-follow highlight with optional 3D tilt.
 */
function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(225, 6, 0, 0.22)',
  tilt = true,
  tiltMax = 7,
}) {
  const divRef = useRef(null)

  const handleMouseMove = useCallback(
    (e) => {
      const el = divRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const px = (x / rect.width) * 100
      const py = (y / rect.height) * 100

      el.style.setProperty('--mouse-x', `${x}px`)
      el.style.setProperty('--mouse-y', `${y}px`)
      el.style.setProperty('--spotlight-color', spotlightColor)
      el.style.setProperty('--spot-x', `${px}%`)
      el.style.setProperty('--spot-y', `${py}%`)

      if (tilt) {
        const rotateY = ((x / rect.width) - 0.5) * tiltMax * 2
        const rotateX = ((0.5 - y / rect.height)) * tiltMax * 2
        el.style.setProperty('--tilt-x', `${rotateX}deg`)
        el.style.setProperty('--tilt-y', `${rotateY}deg`)
      }
    },
    [spotlightColor, tilt, tiltMax],
  )

  const handleMouseLeave = useCallback(() => {
    const el = divRef.current
    if (!el) return
    el.style.setProperty('--tilt-x', '0deg')
    el.style.setProperty('--tilt-y', '0deg')
    el.style.setProperty('--mouse-x', '50%')
    el.style.setProperty('--mouse-y', '50%')
  }, [])

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`card-spotlight${tilt ? ' card-spotlight--tilt' : ''} ${className}`.trim()}
    >
      <span className="card-spotlight__accent" aria-hidden="true" />
      <span className="card-spotlight__shimmer" aria-hidden="true" />
      {children}
    </div>
  )
}

export default SpotlightCard

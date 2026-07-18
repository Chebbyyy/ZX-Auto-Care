import { useEffect, useRef } from 'react'
import './AnimatedGrid.css'

/**
 * React Bits–style animated grid backdrop (canvas).
 * Brand colors: black / dark gray / red.
 */
function AnimatedGrid({
  variant = 'dark',
  color = variant === 'light' ? 'rgba(225, 6, 0, 0.35)' : 'rgba(225, 6, 0, 0.45)',
  gridColor = variant === 'light' ? 'rgba(10, 10, 10, 0.08)' : 'rgba(148, 163, 184, 0.14)',
  speed = 0.35,
  cellSize = 48,
  opacity = 0.55,
  className = '',
}) {
  const canvasRef = useRef(null)
  const rafRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let w = 0
    let h = 0
    let dpr = 1
    let t = 0
    let running = true

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = parent.clientWidth
      h = parent.clientHeight
      canvas.width = Math.max(1, Math.floor(w * dpr))
      canvas.height = Math.max(1, Math.floor(h * dpr))
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = () => {
      if (!running) return
      ctx.clearRect(0, 0, w, h)

      // Base wash
      const isLight = variant === 'light'
      const bg = ctx.createLinearGradient(0, 0, w, h)
      if (isLight) {
        bg.addColorStop(0, '#ffffff')
        bg.addColorStop(0.45, '#f6f6f7')
        bg.addColorStop(1, '#fbfbfc')
      } else {
        bg.addColorStop(0, '#0a0a0a')
        bg.addColorStop(0.45, '#121212')
        bg.addColorStop(1, '#0d0d0d')
      }
      ctx.fillStyle = bg
      ctx.fillRect(0, 0, w, h)

      // Soft red aurora blobs
      const pulse = 0.5 + Math.sin(t * 0.9) * 0.5
      const blobScale = isLight ? 0.4 : 1
      const blob = (x, y, r, a) => {
        const alpha = a * blobScale
        const g = ctx.createRadialGradient(x, y, 0, x, y, r)
        g.addColorStop(0, `rgba(225, 6, 0, ${alpha})`)
        g.addColorStop(0.45, `rgba(201, 5, 0, ${alpha * 0.35})`)
        g.addColorStop(1, isLight ? 'rgba(255, 255, 255, 0)' : 'rgba(0, 0, 0, 0)')
        ctx.fillStyle = g
        ctx.fillRect(x - r, y - r, r * 2, r * 2)
      }

      blob(w * (0.18 + Math.sin(t * 0.4) * 0.04), h * 0.35, Math.max(w, h) * 0.42, 0.18 + pulse * 0.08)
      blob(w * (0.82 + Math.cos(t * 0.35) * 0.03), h * 0.7, Math.max(w, h) * 0.38, 0.12 + (1 - pulse) * 0.07)
      blob(w * 0.55, h * (0.15 + Math.sin(t * 0.55) * 0.05), Math.max(w, h) * 0.28, 0.08)

      // Animated grid
      const offset = (t * speed * 40) % cellSize
      ctx.save()
      ctx.globalAlpha = opacity
      ctx.strokeStyle = gridColor
      ctx.lineWidth = 1
      ctx.beginPath()
      for (let x = -cellSize + offset; x <= w + cellSize; x += cellSize) {
        ctx.moveTo(x, 0)
        ctx.lineTo(x, h)
      }
      for (let y = -cellSize + offset * 0.6; y <= h + cellSize; y += cellSize) {
        ctx.moveTo(0, y)
        ctx.lineTo(w, y)
      }
      ctx.stroke()

      // Moving highlight nodes
      ctx.fillStyle = color
      for (let x = offset; x <= w; x += cellSize * 2) {
        for (let y = offset * 0.6; y <= h; y += cellSize * 2) {
          const n = 0.35 + Math.sin(t * 1.2 + x * 0.02 + y * 0.015) * 0.35
          ctx.globalAlpha = opacity * n
          ctx.beginPath()
          ctx.arc(x, y, 1.6, 0, Math.PI * 2)
          ctx.fill()
        }
      }
      ctx.restore()

      // Edge vignette
      const vig = ctx.createRadialGradient(w * 0.5, h * 0.5, Math.min(w, h) * 0.2, w * 0.5, h * 0.5, Math.max(w, h) * 0.75)
      if (isLight) {
        vig.addColorStop(0, 'rgba(255,255,255,0)')
        vig.addColorStop(1, 'rgba(255,255,255,0.6)')
      } else {
        vig.addColorStop(0, 'rgba(0,0,0,0)')
        vig.addColorStop(1, 'rgba(0,0,0,0.55)')
      }
      ctx.fillStyle = vig
      ctx.fillRect(0, 0, w, h)

      if (!reduceMotion) {
        t += 0.016
        rafRef.current = requestAnimationFrame(draw)
      }
    }

    resize()
    draw()
    window.addEventListener('resize', resize)

    return () => {
      running = false
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [cellSize, color, gridColor, opacity, speed, variant])

  return (
    <div className={`animated-grid ${className}`.trim()} aria-hidden="true">
      <canvas ref={canvasRef} className="animated-grid__canvas" />
    </div>
  )
}

export default AnimatedGrid

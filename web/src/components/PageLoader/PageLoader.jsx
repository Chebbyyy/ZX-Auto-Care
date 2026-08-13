import { useEffect } from 'react'

/** Hides the HTML splash once React has painted. */
function PageLoader({ minMs = 720 }) {
  useEffect(() => {
    const loader = document.getElementById('ze-page-loader')
    if (!loader) return undefined

    const started = performance.now()
    let cancelled = false
    let timerId = 0

    const finish = () => {
      if (cancelled) return
      loader.classList.add('is-done')
      // Match CSS transition so it eases out, not cuts
      timerId = window.setTimeout(() => {
        if (loader.parentNode) loader.remove()
      }, 520)
    }

    const run = () => {
      const elapsed = performance.now() - started
      const wait = Math.max(0, minMs - elapsed)
      timerId = window.setTimeout(finish, wait)
    }

    requestAnimationFrame(() => requestAnimationFrame(run))

    return () => {
      cancelled = true
      window.clearTimeout(timerId)
    }
  }, [minMs])

  return null
}

export default PageLoader

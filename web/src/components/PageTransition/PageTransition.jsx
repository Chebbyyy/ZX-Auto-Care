import { Suspense, useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import './PageTransition.css'

function PageTransition() {
  const location = useLocation()
  const [progress, setProgress] = useState(false)

  useEffect(() => {
    setProgress(true)
    const done = window.setTimeout(() => setProgress(false), 700)
    return () => window.clearTimeout(done)
  }, [location.pathname])

  return (
    <>
      <div
        className={`route-progress${progress ? ' is-active' : ''}`}
        aria-hidden="true"
      />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  )
}

export default PageTransition

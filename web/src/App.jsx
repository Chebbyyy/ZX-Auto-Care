import { lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import PageLoader from './components/PageLoader/PageLoader'
import Home from './pages/Home'

const ServicesPage = lazy(() => import('./pages/Services'))
const GalleryPage = lazy(() => import('./pages/Gallery'))
const About = lazy(() => import('./pages/About'))
const TestimonialsPage = lazy(() => import('./pages/Testimonials'))
const ContactPage = lazy(() => import('./pages/Contact'))

function App() {
  return (
    <BrowserRouter>
      <PageLoader minMs={720} />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

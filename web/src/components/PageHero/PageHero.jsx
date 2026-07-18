import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './PageHero.css'

const PageHero = ({ eyebrow, title, titleHighlight, description, image, imageAlt = '' }) => {
  const reduceMotion = useReducedMotion()
  const titleIndex = titleHighlight ? title.indexOf(titleHighlight) : -1

  const renderedTitle =
    titleIndex >= 0 ? (
      <>
        {title.slice(0, titleIndex)}
        <span>{titleHighlight}</span>
        {title.slice(titleIndex + titleHighlight.length)}
      </>
    ) : (
      title
    )

  return (
    <section className="ze-page-hero" aria-labelledby="ze-page-hero-title">
      <div className="ze-page-hero__media" aria-hidden="true">
        <img src={image} alt={imageAlt} decoding="async" fetchPriority="high" />
      </div>
      <div className="ze-page-hero__shade" aria-hidden="true" />

      <div className="container ze-page-hero__inner">
        <motion.div
          className="ze-page-hero__content"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="ze-eyebrow ze-page-hero__eyebrow">{eyebrow}</p>
          <h1 id="ze-page-hero-title" className="ze-page-hero__title">
            {renderedTitle}
          </h1>
          <p className="ze-page-hero__description">{description}</p>
          <nav className="ze-page-hero__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{title}</span>
          </nav>
        </motion.div>
      </div>
    </section>
  )
}

export default PageHero

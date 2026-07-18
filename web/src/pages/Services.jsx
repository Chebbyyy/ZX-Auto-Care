import PageHero from '../components/PageHero/PageHero'
import Services from '../components/Services/Services'
import heroImg from '../assets/gallery/mw5.jpeg'

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Mobile Workshop"
        title="Mechanical Services"
        titleHighlight="Services"
        description="Professional repairs, inspections, and vehicle care delivered across Darwin, 24 hours a day."
        image={heroImg}
      />
      <Services />
    </>
  )
}

export default ServicesPage

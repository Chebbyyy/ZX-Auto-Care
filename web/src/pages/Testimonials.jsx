import PageHero from '../components/PageHero/PageHero'
import Testimonials from '../components/Testimonials/Testimonials'
import testimonialsHero from '../assets/gallery/mw14.jpeg'

function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Customer Reviews"
        title="Trusted Across Darwin"
        titleHighlight="Trusted"
        description="Straightforward service, clear communication, and mechanical work our customers confidently recommend."
        image={testimonialsHero}
      />
      <Testimonials />
    </>
  )
}

export default TestimonialsPage

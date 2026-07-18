import PageHero from '../components/PageHero/PageHero'
import WhyUs from '../components/WhyUs/WhyUs'
import aboutHero from '../assets/mobile-cleaning.jfif'

function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Built Around Your Convenience"
        titleHighlight="Convenience"
        description="Honest advice, skilled mechanical work, and a mobile service built for Darwin drivers."
        image={aboutHero}
      />
      <WhyUs />
    </>
  )
}

export default About

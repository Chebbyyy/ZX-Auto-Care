import Hero from '../components/Hero/Hero'
import Stats from '../components/Stats/Stats'
import TrustStrip from '../components/TrustStrip/TrustStrip'
import HomeGarage from '../components/HomeGarage/HomeGarage'
import HowWeWork from '../components/HowWeWork/HowWeWork'
import PricingStrip from '../components/PricingStrip/PricingStrip'
import Faq from '../components/Faq/Faq'
import PromoBanner from '../components/PromoBanner/PromoBanner'
import '../styles/home-stats-band.css'
import '../styles/home-enhance.css'

function Home() {
  return (
    <div className="home-page">
      <Hero />
      <div className="home-stats-band">
        <Stats />
        <TrustStrip />
      </div>
      <HomeGarage />
      <HowWeWork />
      <PricingStrip />
      <Faq />
      <PromoBanner />
    </div>
  )
}

export default Home

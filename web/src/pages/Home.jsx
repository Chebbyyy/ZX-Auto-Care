import Hero from '../components/Hero/Hero'
import TextStrip from '../components/TextStrip/TextStrip'
import Stats from '../components/Stats/Stats'
import HomeGarage from '../components/HomeGarage/HomeGarage'
import PromoBanner from '../components/PromoBanner/PromoBanner'
import '../styles/home-stats-band.css'
import '../styles/home-enhance.css'

function Home() {
  return (
    <div className="home-page">
      <Hero />
      <div className="home-stats-band">
        <TextStrip />
        <Stats />
      </div>
      <HomeGarage />
      <PromoBanner />
    </div>
  )
}

export default Home

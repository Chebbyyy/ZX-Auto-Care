import Booking from '../components/Booking/Booking'
import Contact from '../components/Contact/Contact'
import PageHero from '../components/PageHero/PageHero'
import contactHero from '../assets/premium.jfif'
import '../components/Contact/Contact.css'

function ContactPage() {
  return (
    <div className="contact-page">
      <PageHero
        eyebrow="We Come to You"
        title="Book Your Mobile Mechanic"
        titleHighlight="Mobile Mechanic"
        description="Tell us what your vehicle needs and our Darwin team will arrange a convenient mobile service."
        image={contactHero}
      />
      <Booking />
      <Contact />
    </div>
  )
}

export default ContactPage

import Booking from '../components/Booking/Booking'
import Contact from '../components/Contact/Contact'
import ContactInfoSection from '../components/Contact/ContactInfoSection'
import '../components/Contact/Contact.css'

function ContactPage() {
  return (
    <div className="contact-page">
      <Booking />
      <Contact />
      <ContactInfoSection />
    </div>
  )
}

export default ContactPage

import Hero from '../components/Hero/Hero'
import Recommended from '../components/Recommended/Recommended'
import Services from '../components/Services/Services'
import AppSection from '../components/AppSection/AppSection'
import ContactForm from '../components/ContactForm/ContactForm'
import SearchLinks from '../components/SearchLinks/SearchLinks'

function Home() {
  return (
    <>
      <Hero />
      <Recommended />
      <Services />
      <AppSection />
      <ContactForm />
      <SearchLinks />
    </>
  )
}

export default Home


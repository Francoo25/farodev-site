import IconSprite from './components/IconSprite.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Portfolio from './components/Portfolio.jsx'
import TechStrip from './components/TechStrip.jsx'
import About from './components/About.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <IconSprite />
      <a className="skip-link" href="#contenido">Saltar al contenido</a>

      <Header />

      <main id="contenido">
        <Hero />
        <Services />
        <Portfolio />
        <TechStrip />
        <About />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

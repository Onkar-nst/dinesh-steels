import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ReviewsStrip from './components/ReviewsStrip'
import About from './components/About'
import Stats from './components/Stats'
import Products from './components/Products'
import Materials from './components/Materials'
import Industries from './components/Industries'
import Callouts from './components/Callouts'
import Showcase from './components/Showcase'
import WhyChooseUs from './components/WhyChooseUs'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import ClientLogos from './components/ClientLogos'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        {/* 1. Hero — Airkom slider */}
        <Hero />
        {/* 2. Reviews strip — Airkom marquee */}
        <ReviewsStrip />
        {/* 3. About — Airkom split panel */}
        <About />
        {/* 4. Stats counter — Airkom bordered band */}
        <Stats />
        {/* 5. Products catalog — Laser Tech */}
        <Products />
        {/* 6. Materials — Airkom hover tiles */}
        <Materials />
        {/* 7. Industries — Laser Tech */}
        <Industries />
        {/* 8. Why Choose Us — Airkom pillars (1st in the Airkom block) */}
        <WhyChooseUs />
        {/* 9. Callouts — Airkom highlight cards (2nd) */}
        <Callouts />
        {/* 10. Showcase band — Airkom media band (3rd) */}
        <Showcase />
        {/* 11. Process — FDC */}
        <Process />
        {/* 11. Testimonials — Airkom */}
        <Testimonials />
        {/* 12. Client logos — Airkom */}
        <ClientLogos />
        {/* 13. FAQ — FDC */}
        <FAQ />
        {/* 14. CTA banner — Airkom */}
        <CTA />
        {/* Contact / Quote form */}
        <Contact />
      </main>
      {/* 15. Footer — Airkom */}
      <Footer />
      <FloatingActions />
    </div>
  )
}

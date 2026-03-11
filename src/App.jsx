import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import TechStack from './sections/TechStack'
import Projects from './sections/Projects'
import Achievements from './sections/Achievements'
import Certifications from './sections/Certifications'
import Footer from './components/Footer'
import FloatingContact from './components/FloatingContact'
import CertModal from './components/CertModal'
import ContactModal from './components/ContactModal'

function App() {
  const [selectedCert, setSelectedCert] = useState(null)
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <div className="relative min-h-screen bg-[#020817] overflow-x-hidden">
      {/* Global ambient background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-cyan-500/[0.04] blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/[0.04] blur-[100px]" />
        <div
          className="absolute inset-0 opacity-100"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34,211,238,0.025) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34,211,238,0.025) 1px, transparent 1px)
            `,
            backgroundSize: '70px 70px'
          }}
        />
      </div>

      <div className="relative z-10">
        <Navbar onContactOpen={() => setContactOpen(true)} />
        <Hero onContactOpen={() => setContactOpen(true)} />
        <About />
        <TechStack />
        <Projects />
        <Achievements />
        <Certifications onCertClick={setSelectedCert} />
        <Footer />
        <FloatingContact onClick={() => setContactOpen(true)} />
      </div>

      {selectedCert && (
        <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
      )}

      {contactOpen && (
        <ContactModal onClose={() => setContactOpen(false)} />
      )}
    </div>
  )
}

export default App

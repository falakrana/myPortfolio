import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import './index.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen text-white relative">

      {/* ── Global video background (fixed, behind everything) ── */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2"
          style={{ filter: 'brightness(0.45) saturate(0.8)' }}
        >
          <source src="/Video/vid-3.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay to keep all sections readable */}
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* ── Page content (above video) ── */}
      <div className="relative z-10">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
        <Navbar />
        <Hero />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;

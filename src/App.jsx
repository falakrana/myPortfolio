import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import './index.css';

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#ffffff' }}>
      {/* Global floating particles + cursor effect — renders over everything */}
      <ParticleBackground />

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
  );
}

export default App;

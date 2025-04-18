// "use client";

import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MagnetLines from "./components/MagnetLines";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import "./App.css";
import GridOverlay from "./components/GridOverlay";
import About from "./components/About";

function App() {
  return (
    <div className="bg-background text-white min-h-screen relative">
      {/* Background image with overlay */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1636531370203-a6f3d331be57?w=1500&auto=format&fit=crop&q=80")',
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
      </div>

      {/* Magnetic Lines Effect */}
      <div className="hidden md:block">
        <MagnetLines
          rows={20}
          columns={20}
          containerSize="100vw"
          lineColor="rgba(255, 255, 255, 0.4)"
          lineWidth="1.5px"
          lineHeight="25px"
          baseAngle={0}
        />
      </div>

      <GridOverlay />
      <Header />

      <main className="container mx-auto px-4 relative z-20">
        <Hero />
        <About/>
        <div className="space-y-32">
          <Projects />
          <Skills />
          <Certifications />
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;

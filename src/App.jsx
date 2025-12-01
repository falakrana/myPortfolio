"use client"

import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Certifications from "./components/Certifications"
import Contact from "./components/Contact"

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen text-white overflow-hidden bg-slate-950">
      <div className="fixed inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1636531370203-a6f3d331be57?w=1500&auto=format&fit=crop&q=80"
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/70"></div>
      </div>

      <div className="relative z-10">
        <Navbar scrollY={scrollY} />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </div>
    </div>
  )
}

export default App

// "use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MagnetLines from "./components/MagnetLines";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import "./App.css";
import GridOverlay from "./components/GridOverlay";
import About from "./components/About";
import { ArrowUp } from "lucide-react";

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const sections = useRef([]);
  
  useEffect(() => {
    // Initialize sections
    sections.current = [
      { id: "home", element: document.getElementById("home") || document.querySelector("section") },
      { id: "about", element: document.getElementById("about") },
      { id: "skills", element: document.getElementById("skills") },
      { id: "experience", element: document.getElementById("experience") },
      { id: "projects", element: document.getElementById("projects") },
      { id: "certifications", element: document.getElementById("certifications") },
      { id: "contact", element: document.getElementById("contact") },
    ].filter(section => section.element);

    const handleScroll = () => {
      // Handle scroll to top button visibility
      if (window.scrollY > 500) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }

      // Determine active section for navigation highlighting
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (let i = sections.current.length - 1; i >= 0; i--) {
        const section = sections.current[i];
        if (!section.element) continue;
        
        const offsetTop = section.element.offsetTop;
        
        if (scrollPosition >= offsetTop) {
          if (activeSection !== section.id) {
            setActiveSection(section.id);
          }
          break;
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    // Run once to set initial active section
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Pass the active section to the Header component
  return (
      <div className="bg-background text-white min-h-screen relative font-poppins">
      {/* Background image with overlay */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1636531370203-a6f3d331be57?w=1500&auto=format&fit=crop&q=80")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/60" />
        
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-[#3a5a40]/20 to-[#588157]/20"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Animated particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed rounded-full bg-[#dad7cd]/10 blur-sm z-10"
          style={{
            width: Math.random() * 10 + 5,
            height: Math.random() * 10 + 5,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [Math.random() * 20, Math.random() * -20],
            x: [Math.random() * 20, Math.random() * -20],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
      
      {/* Magnetic Lines Effect */}
      <div className="hidden md:block">
        <MagnetLines
          rows={20}
          columns={20}
          containerSize="100vw"
          lineColor="rgba(255, 255, 255, 0.2)"
          lineWidth="1.5px"
          lineHeight="25px"
          baseAngle={0}
        />
      </div>

      <GridOverlay />
      <Header activeSection={activeSection} />

      <main className="container mx-auto px-4 relative z-20">
        <section id="home">
            <Hero />
        </section>
        <About />
        <div className="space-y-32">
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
        </div>
      </main>
      
      {/* Scroll to top button with enhanced animation */}
      <AnimatePresence>
        {showScrollButton && (
          <motion.button
            className="fixed bottom-8 right-8 bg-gradient-to-r from-[#588157] to-[#3a5a40] text-white p-3 rounded-full shadow-lg z-50 glow outline-none focus:outline-none"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ y: -5, boxShadow: "0 0 15px rgba(218, 215, 205, 0.5)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
      </div>
  );
}

export default App;

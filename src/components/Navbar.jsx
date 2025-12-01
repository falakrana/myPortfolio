"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function Navbar({ scrollY }) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = ["Home", "About", "Experience", "Skills", "Projects","Certifications",  "Contact"]

  const handleScroll = (id) => {
    const element = document.getElementById(id.toLowerCase())
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? "bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent"
          >
            FR
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.05 }}
                onClick={() => handleScroll(item)}
                className="text-sm font-medium hover:text-cyan-400 transition-colors duration-300"
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-800/50 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-800/50 py-4"
          >
            {navItems.map((item) => (
              <motion.button
                key={item}
                whileHover={{ x: 4 }}
                onClick={() => handleScroll(item)}
                className="block w-full text-left px-4 py-3 text-sm font-medium hover:text-cyan-400 transition-colors"
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

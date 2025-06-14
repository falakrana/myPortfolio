import React from 'react'
import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"
import ScrollArrow from "./scroll-arrow"
import { ChevronRight, Sparkles } from "lucide-react"

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-white relative overflow-hidden">
      {/* Background gradient animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#3a5a40]/20 to-[#588157]/20 z-0"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      
      {/* Animated grid lines */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(218, 215, 205, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(218, 215, 205, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="text-center max-w-3xl mx-auto px-4 z-10 relative">
        {/* Sparkle effect on name */}
        <motion.div 
          className="relative inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="absolute -top-6 -right-6 text-[#dad7cd]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Sparkles size={20} />
          </motion.span>
          
          <h1 className="text-6xl font-poppins font-bold mb-4 shine">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#dad7cd] to-[#a3b18a]">
              Falak Rana
            </span>
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-10"
        >
          <p className="text-xl font-poppins text-gray-300 mb-6">
            Transforming complex data challenges into elegant, scalable solutions
          </p>
          <TypeAnimation
            sequence={[
              "Machine Learning Enthusiast",
              1000,
              "Data Engineering Student",
              1000,
              "AI Solutions Developer",
              1000,
            ]}
            wrapper="h2"
            cursor={true}
            repeat={Number.POSITIVE_INFINITY}
            className="text-3xl font-poppins font-light mb-8"
          />
        </motion.div>

        {/* Skills chips */}
        <motion.div
          className="flex flex-wrap gap-3 justify-center mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {['Python', 'PyTorch', 'TensorFlow', 'SQL', 'GenAI'].map((skill, i) => (
            <motion.span 
              key={i} 
              className="bg-white/10 px-4 py-2 rounded-full text-sm font-poppins"
              whileHover={{ scale: 1.05 }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center mt-10 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="/resume/myResume.pdf"
            download
            className="bg-gradient-to-r from-[#588157] to-[#3a5a40] text-white py-3 px-6 rounded-lg flex items-center gap-2 font-poppins font-medium glow"
            whileHover={{ 
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(88, 129, 87, 0.5)"
            }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Download Resume
            <ChevronRight size={18} />
          </motion.a>
          
          <motion.a
            href="#contact"
            className="bg-white/10 backdrop-blur-sm text-white py-3 px-6 rounded-lg flex items-center gap-2 border border-white/20 font-poppins font-medium"
            whileHover={{ 
              y: -5,
              backgroundColor: "rgba(255, 255, 255, 0.15)"
            }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Connect
            <ChevronRight size={18} />
          </motion.a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <ScrollArrow targetId="about" className="mt-16" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
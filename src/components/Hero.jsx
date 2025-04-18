

"use client"

import { TypeAnimation } from "react-type-animation"
import { useEffect, useState } from "react"
import ScrollArrow from "./scroll-arrow"

function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Delay the animation to make it more dramatic
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center text-white">
      <div className="text-center max-w-3xl mx-auto px-4">
        <h1
          className={`text-6xl font-bold mb-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-10"
          }`}
        >
          Falak Rana
        </h1>
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-10"
          }`}
        >
          <TypeAnimation
            sequence={[
              "Data Analytics Professional",
              1000,
              "Machine Learning Enthusiast",
              1000,
              "Data Visualization Expert",
              1000,
            ]}
            wrapper="h2"
            cursor={true}
            repeat={Number.POSITIVE_INFINITY}
            className="text-3xl font-light"
          />
        </div>

        <div
          className={`mt-12 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 transform-none" : "opacity-0"
          }`}
        >
          <ScrollArrow targetId="about" />
        </div>
      </div>
    </section>
  )
}

export default Hero

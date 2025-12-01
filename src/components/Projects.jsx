"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function Projects() {
  const allProjects = [
    {
      title: "Disease Prediction using ML",
      description:
        "Disease prediction using machine learning models with Flask framework.",
      tech: ["Machine Learning", "Flask", "Healthcare"],
      image: "/Projects/diseasePrediction.jpeg",
      github: "https://github.com/falakrana/Disease-Prediction-using-ML.git",
    },
    {
      title: "Coursera-QA-App",
      description:
        "The Coursera QA Assistant is a browser extension that helps learners get answers to their questions about Coursera course content directly from the course page they're viewing.",
      tech: ["playwright-python", "gemini-1.5-flash", "RAG"],
      image: "/Projects/CourseraSum.jpeg",
      github: "https://github.com/falakrana/coursera-qa-app.git",
    },
    {
      title: "Langchain Translator via GROQ",
      description:
        "A high-performance translation API leveraging Gemma 2B via Groq's LPUs for sub-second translations, managed with LangChain and served via FastAPI.",
      tech: ["fastapi", "groq-lpu", "llm", "langchain"],
      image: "/Projects/languageTranslator.jpeg",
      github: "https://github.com/falakrana/LangChainGROQTranslator.git",
    },
    {
      title: "Crew-AI-Content-Writer-Agent",
      description:
        "This project utilizes CrewAI to build a research and writing agent duo. It automates content generation for trending topics using Google Gemini and Serper.dev search tools.",
      tech: ["crew-ai", "ai-agent", "python"],
      image: "/Projects/crewaiImage.jpeg",
      github: "https://github.com/falakrana/Crew-AI-ContentWriter-Agent.git",
    },
    {
      title: "Speech to Text Chatbot Using Groq Llama3",
      description: "This project is a real-time voice assistant built using Flask, Groq's LLaMA 3 (70B) via langchain_groq, and speech recognition. It assistant listens to your speech, transcribes it, sends it to the Groq LLM for a response.",
      tech: ["speech-recognition", "groq-api", "langchain"],
      image: "/Projects/speechToText.png",
      github: "https://github.com/falakrana/Crew-AI-ContentWriter-Agent.git",
    },
    {
      title: "Data Visualization Analysis",
      description:
        "Comprehensive data analysis and visualization projects using Python and Tableau with real-world datasets and dashboards.",
      tech: ["Python", "Tableau", "Visualization"],
      image: "/Projects/dataVisualization.png",
      github: "https://github.com/falakrana/Data-Analysis-Visualization.git",
    },
    {
      title: "Youtube RAG chrome extension application",
      description:
        "YouTube Q&A Chatbot extracts video transcripts, uses AI to answer questions, available as Chrome extension and web app with Gemini AI integration.",
      tech: ["FAISS DB", "gemini-1.5", "youtube-chatbot"],
      image: "/Projects/youtube.jpeg",
      github: "https://github.com/falakrana/youtube-video-qa-chrome-extension.git",
    },
    {
      title: "Email composition using Google ADK",
      description:
        "Demonstration where I built ai agent, where it will provide me basic structure of an email. Using google agent development kit(ADK).",
      tech: ["agent Development kit", "ai agent"],
      image: "/Projects/email_adk.jpeg",
      github: "https://github.com/falakrana/Email-composition-Google_ADK.git",
    },
  ]

  const projectsPerSlide = 6
  const totalSlides = Math.ceil(allProjects.length / projectsPerSlide)
  const [currentSlide, setCurrentSlide] = useState(0)

  const visibleProjects = allProjects.slice(currentSlide * projectsPerSlide, (currentSlide + 1) * projectsPerSlide)

  const handleNextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  return (
    <section id="projects" className="py-20 px-4 bg-slate-900/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-amber-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-slate-700/50 rounded-xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm mb-4 line-clamp-3">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.a
                  whileHover={{ x: 4 }}
                  href={project.github}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                >
                  View on GitHub
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {totalSlides > 1 && (
          <div className="flex justify-center items-center gap-6 mt-12">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrevSlide}
              disabled={currentSlide === 0}
              className="p-3 bg-cyan-500/20 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <div className="flex gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? "bg-cyan-400 w-8" : "bg-slate-600"
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNextSlide}
              disabled={currentSlide === totalSlides - 1}
              className="p-3 bg-cyan-500/20 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        )}
      </div>
    </section>
  )
}

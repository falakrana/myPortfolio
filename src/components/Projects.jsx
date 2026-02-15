import React, { useState } from 'react';
import FolderProjectCard from './FolderProjectCard';

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 6;

  const allProjects = [
    {
      title: "CacheFlux",
      description: "A Redis-based distributed cache in front of PostgreSQL for high-traffic systems.",
      techStack: ["Redis", "Nginx", "FastAPI", "PostgreSQL"],
      image: "/Projects/cachingImage.png",
      liveUrl: null,
      githubUrl: "https://github.com/falakrana/CacheFlux.git"
    },
    {
      title: "Encryption suite built with rust",
      description: "A powerful, high-performance, and secure encryption/decryption suite built with Rust, WebAssembly, and React.",
      techStack: ["Rust", "React.js", "WASM", "Encryption", "WebAssembly"],
      image: "/Projects/encryption-image.png",
      liveUrl: null,
      githubUrl: "https://github.com/falakrana/file-encryption-rust.git"
    },
    {
      title: "Coursera-QA-App",
      description: "The Coursera QA Assistant is a browser extension that helps learners get answers to their questions about Coursera course content directly from the course page they're viewing.",
      techStack: ["Playwright-Python", "Gemini-1.5-Flash", "RAG"],
      image: "/Projects/CourseraSum.jpeg",
      liveUrl: null,
      githubUrl: "https://github.com/falakrana/coursera-qa-app.git"
    },
    {
      title: "Langchain Translator via GROQ",
      description: "A high-performance translation API leveraging Gemma 2B via Groq's LPUs for sub-second translations, managed with LangChain and served via FastAPI.",
      techStack: ["FastAPI", "Groq-LPU", "LLM", "LangChain"],
      image: "/Projects/languageTranslator.jpeg",
      liveUrl: null,
      githubUrl: "https://github.com/falakrana/LangChainGROQTranslator.git"
    },
    {
      title: "Crew-AI-Content-Writer-Agent",
      description: "This project utilizes CrewAI to build a research and writing agent duo. It automates content generation for trending topics using Google Gemini and Serper.dev search tools.",
      techStack: ["Crew-AI", "AI-Agent", "Python"],
      image: "/Projects/crewaiImage.jpeg",
      liveUrl: null,
      githubUrl: "https://github.com/falakrana/Crew-AI-ContentWriter-Agent.git"
    },
    {
      title: "Disease Prediction using ML",
      description: "Disease prediction using machine learning models with Flask framework.",
      techStack: ["Machine Learning", "Flask", "Healthcare"],
      image: "/Projects/diseasePrediction.jpeg",
      liveUrl: null,
      githubUrl: "https://github.com/falakrana/Disease-Prediction-using-ML.git"
    },
    {
      title: "Speech to Text Chatbot Using Groq Llama3",
      description: "This project is a real-time voice assistant built using Flask, Groq's LLaMA 3 (70B) via langchain_groq, and speech recognition. It assistant listens to your speech, transcribes it, sends it to the Groq LLM for a response.",
      techStack: ["Speech-Recognition", "Groq-API", "LangChain"],
      image: "/Projects/speechToText.png",
      liveUrl: null,
      githubUrl: "https://github.com/falakrana/Crew-AI-ContentWriter-Agent.git"
    },
    {
      title: "Data Visualization Analysis",
      description: "Comprehensive data analysis and visualization projects using Python and Tableau with real-world datasets and dashboards.",
      techStack: ["Python", "Tableau", "Visualization"],
      image: "/Projects/dataVisualization.png",
      liveUrl: null,
      githubUrl: "https://github.com/falakrana/Data-Analysis-Visualization.git"
    },
    {
      title: "Youtube RAG chrome extension application",
      description: "YouTube Q&A Chatbot extracts video transcripts, uses AI to answer questions, available as Chrome extension and web app with Gemini AI integration.",
      techStack: ["FAISS DB", "Gemini-1.5", "YouTube-Chatbot"],
      image: "/Projects/youtube.jpeg",
      liveUrl: null,
      githubUrl: "https://github.com/falakrana/youtube-video-qa-chrome-extension.git"
    },
    {
      title: "Email composition using Google ADK",
      description: "Demonstration where I built ai agent, where it will provide me basic structure of an email. Using google agent development kit(ADK).",
      techStack: ["Agent Development Kit", "AI Agent"],
      image: "/Projects/email_adk.jpeg",
      liveUrl: null,
      githubUrl: "https://github.com/falakrana/Email-composition-Google_ADK.git"
    }
  ];

  const totalPages = Math.ceil(allProjects.length / projectsPerPage);
  const startIndex = currentPage * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = allProjects.slice(startIndex, endIndex);

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
  };

  return (
    <section id="projects" className="py-20 px-6 bg-dark-bg relative">
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="mb-12 fade-in flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-neon-purple">#</span>
              <span className="text-white">projects</span>
            </h2>
            <div className="h-px w-64 bg-neon-purple"></div>
          </div>
          <div className="text-white hover:text-neon-purple transition-colors font-medium">
            <span className="text-gray-400">Page {currentPage + 1} of {totalPages}</span>
          </div>
        </div>

        {/* Projects Grid - Folder Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-8">
          {currentProjects.map((project, index) => (
            <FolderProjectCard
              key={index}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              image={project.image}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-12 fade-in">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 0}
              className={`flex items-center gap-2 px-6 py-3 border transition-all ${
                currentPage === 0
                  ? 'border-gray-800 text-gray-600 cursor-not-allowed'
                  : 'border-neon-purple text-neon-purple hover:bg-neon-purple/10'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </button>

            {/* Page Indicators */}
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-10 h-10 border transition-all ${
                    currentPage === index
                      ? 'border-neon-purple bg-neon-purple/20 text-neon-purple'
                      : 'border-gray-800 text-gray-400 hover:border-neon-purple hover:text-neon-purple'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages - 1}
              className={`flex items-center gap-2 px-6 py-3 border transition-all ${
                currentPage === totalPages - 1
                  ? 'border-gray-800 text-gray-600 cursor-not-allowed'
                  : 'border-neon-purple text-neon-purple hover:bg-neon-purple/10'
              }`}
            >
              Next
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

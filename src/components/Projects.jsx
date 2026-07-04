import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const allProjects = [
  {
    title: 'Menova-SaaS',
    description: 'Menova is a full-stack SaaS platform for restaurants to manage digital QR-based menus, branding, and table ordering.',
    techStack: ['React', 'FastAPI', 'MongoDB', 'Clerk'],
    image: '/Projects/menova.png',
    githubUrl: 'https://menova.vercel.app',
  },
  {
    title: 'DevCollab',
    description: 'A modern developer collaboration platform combining task management and real-time communication, built with ASP.NET Core and Next.js.',
    techStack: ['DotNet', 'Next.js', 'SignalR', 'PostgreSQL'],
    image: '/Projects/DevCollab.jpeg',
    githubUrl: 'https://github.com/falakrana/DevCollab.git',
  },
  {
    title: 'ResumeIQ',
    description: 'AI-powered resume optimization platform with ATS scoring, skill gap analysis, job matching, and actionable recommendations.',
    techStack: ['Angular', 'MongoDB', 'FastAPI'],
    image: '/Projects/resumeiq.png',
    githubUrl: 'https://github.com/falakrana/ResumeIQ.git',
  },
  {
    title: 'CacheFlux',
    description: 'A Redis-based distributed cache in front of PostgreSQL for high-traffic systems.',
    techStack: ['Redis', 'Nginx', 'FastAPI', 'PostgreSQL'],
    image: '/Projects/cachingImage.png',
    githubUrl: 'https://github.com/falakrana/CacheFlux.git',
  },
  {
    title: 'ChronoNote',
    description: 'A RESTful API built with Spring Boot for note management with automatic version tracking.',
    techStack: ['Java', 'Spring Boot', 'PostgreSQL'],
    image: '/Projects/chronoNoteImage.jpeg',
    githubUrl: 'https://github.com/falakrana/ChronoNote.git',
  },
  {
    title: 'AIReviewBot',
    description: 'An AI-based code review system that provides feedback and suggestions for code improvements.',
    techStack: ['Python', 'tree-sitter', 'Redis', 'Celery'],
    image: '/Projects/aiReviewBot.jpeg',
    githubUrl: 'https://github.com/falakrana/AIReviewBot.git',
  },
  {
    title: 'Coursera-QA-App',
    description: 'Browser extension that helps learners get answers directly from the course page.',
    techStack: ['Python', 'Playwright', 'Gemini'],
    image: '/Projects/CourseraSum.jpeg',
    githubUrl: 'https://github.com/falakrana/coursera-qa-app.git',
  },
  {
    title: 'EchoDesk',
    description: 'A security-first Windows Desktop AI Agent that uses natural language to launch applications.',
    techStack: ['Python', 'LLMs', 'Windows CLI'],
    image: '/Projects/echoDesk.png',
    githubUrl: 'https://github.com/falakrana/EchoDesk.git',
  },
  {
    title: 'CrewAI Writer',
    description: 'Research and writing agent duo that automates content generation using multi-agent orchestration.',
    techStack: ['Crew-AI', 'AI-Agent', 'Python'],
    image: '/Projects/crewaiImage.jpeg',
    githubUrl: 'https://github.com/falakrana/Crew-AI-ContentWriter-Agent.git',
  },
  {
    title: 'Disease Prediction',
    description: 'Disease prediction using ML models with Flask framework for healthcare applications.',
    techStack: ['Python', 'React', 'Decision Tree', 'Flask'],
    image: '/Projects/diseasePrediction.jpeg',
    githubUrl: 'https://github.com/falakrana/Disease-Prediction-using-ML.git',
  },
  {
    title: 'Data Visualization',
    description: 'Interactive data visualization tool for deep insights and analytics with Python.',
    techStack: ['Python', 'Pandas', 'Matplotlib'],
    image: '/Projects/dataVisualization.png',
    githubUrl: 'https://github.com/falakrana',
  },
  {
    title: 'YouTube Insights',
    description: 'Chrome extension for YouTube where users can chat with the video. RAG pipeline implemented.',
    techStack: ['React', 'YouTube API', 'Firebase'],
    image: '/Projects/youtube.jpeg',
    githubUrl: 'https://github.com/falakrana',
  },
];

const CARDS_PER_PAGE = 4;
const TOTAL_PAGES = Math.ceil(allProjects.length / CARDS_PER_PAGE);

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const handlePrev = () => {
    setDirection(-1);
    setCurrentPage((prev) => (prev === 0 ? TOTAL_PAGES - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentPage((prev) => (prev === TOTAL_PAGES - 1 ? 0 : prev + 1));
  };

  // Get current page projects
  const currentProjects = allProjects.slice(
    currentPage * CARDS_PER_PAGE,
    (currentPage + 1) * CARDS_PER_PAGE
  );

  // Bento span config for 4 items
  const colSpans = ['md:col-span-7', 'md:col-span-5', 'md:col-span-5', 'md:col-span-7'];

  return (
    <section
      id="projects"
      className="py-20 md:py-28 px-6 overflow-hidden relative"
      style={{ borderTop: '1px solid hsl(var(--stroke))' }}
    >
      {/* Ambient background decoration */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(137,170,204,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="section-eyebrow">Selected Works</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display italic text-white leading-tight">
              Featured{' '}
              <span className="font-display italic text-white">
                projects
              </span>
            </h2>
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center gap-4 self-start md:self-auto">
            <span className="text-xs font-mono text-slate-300 font-semibold">
              {String(currentPage + 1).padStart(2, '0')} / {String(TOTAL_PAGES).padStart(2, '0')}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-stroke flex items-center justify-center text-white hover:bg-surface transition-colors"
                aria-label="Previous Page"
              >
                ←
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-stroke flex items-center justify-center text-white hover:bg-surface transition-colors"
                aria-label="Next Page"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Bento Grid layout inside AnimatePresence */}
        <div className="relative min-h-[300px] md:min-h-[500px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentPage}
              custom={direction}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 50 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6"
            >
              {currentProjects.map((project, index) => {
                const globalIndex = currentPage * CARDS_PER_PAGE + index;
                return (
                  <div
                    key={globalIndex}
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    className={`col-span-12 ${colSpans[index]} aspect-[4/3] md:aspect-[16/10] bg-surface border border-stroke rounded-3xl overflow-hidden relative group cursor-pointer shadow-lg transition-transform duration-300 hover:scale-[1.01]`}
                  >
                    {/* Background image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Halftone overlay */}
                    <div
                      className="absolute inset-0 pointer-events-none opacity-20 mix-blend-multiply"
                      style={{
                        backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
                        backgroundSize: '4px 4px',
                      }}
                    />

                    {/* Default visual details overlay (bottom bar gradient) */}
                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end pointer-events-none">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#89AACC] mb-1">
                        Project {String(globalIndex + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-xl md:text-2xl font-display italic text-white mb-2">
                        {project.title}
                      </h3>
                      
                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded bg-white/10 text-white/90 border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Hover screen */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center"
                      style={{ background: 'rgba(8, 8, 8, 0.88)', backdropFilter: 'blur(12px)' }}
                    >
                      {/* Hover label pill with animated border */}
                      <div
                        className="p-[1.5px] rounded-full overflow-hidden mb-4"
                        style={{
                          background: 'linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)',
                        }}
                      >
                        <div className="px-5 py-2.5 rounded-full text-xs font-semibold text-white" style={{ background: 'hsl(0 0% 10%)' }}>
                          View — <span className="font-display italic font-medium">{project.title}</span>
                        </div>
                      </div>

                      {/* Hover description details */}
                      <p className="text-sm text-slate-100 max-w-sm leading-relaxed mb-4">
                        {project.description}
                      </p>

                      <span className="text-xs uppercase tracking-widest text-[#89AACC] font-semibold border-b border-[#89AACC]/50 pb-0.5">
                        Open GitHub ↗
                      </span>
                    </div>

                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Global CTA button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/falakrana"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-stroke px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white hover:bg-surface/50 transition-colors"
          >
            Explore All Repositories ↗
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;

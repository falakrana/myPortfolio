import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'motion/react';

gsap.registerPlugin(ScrollTrigger);

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

const Projects = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const toggleDescription = (e, index) => {
    e.stopPropagation();
    setExpandedDescriptions((cur) => ({ ...cur, [index]: !cur[index] }));
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      const track = trackRef.current;
      const section = sectionRef.current;

      const getMove = () => {
        const last = track.lastElementChild;
        if (!last) return track.scrollWidth - window.innerWidth;
        return last.offsetLeft + last.offsetWidth / 2 - window.innerWidth / 2;
      };

      gsap.to(track, {
        x: () => -getMove(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${getMove() + 400}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="min-h-screen bg-bg overflow-hidden relative"
      style={{ borderTop: '1px solid hsl(var(--stroke))' }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] pointer-events-none -translate-y-1/2"
        style={{
          background: 'radial-gradient(circle, rgba(137,170,204,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Static title */}
      <div className="absolute top-24 left-0 w-full z-20 pointer-events-none">
        <div className="container mx-auto px-6 text-center">
          <div
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] mb-3"
            style={{ color: 'hsl(var(--muted))' }}
          >
            <span className="w-6 h-px" style={{ backgroundColor: 'hsl(var(--stroke))' }} />
            My Work
            <span className="w-6 h-px" style={{ backgroundColor: 'hsl(var(--stroke))' }} />
          </div>
          <h2 className="text-4xl md:text-6xl font-display italic text-text-primary leading-tight">
            Selected{' '}
            <span style={{ color: 'hsl(var(--muted))' }}>projects</span>
          </h2>
        </div>
      </div>

      {/* Scrolling track */}
      <div
        ref={trackRef}
        className="flex items-center h-screen pt-44 px-[10vw] gap-10 md:gap-16 will-change-transform"
      >
        {allProjects.map((project, index) => (
          <div
            key={index}
            className="w-[280px] md:w-[380px] lg:w-[420px] flex-shrink-0 group cursor-pointer"
            onClick={() => window.open(project.githubUrl, '_blank')}
          >
            {/* Project image card */}
            <div
              className="relative aspect-[4/3] md:aspect-video rounded-2xl overflow-hidden border transition-all duration-700 ease-out group-hover:-translate-y-3 group-hover:shadow-2xl"
              style={{
                backgroundColor: 'hsl(var(--surface))',
                borderColor: 'hsl(var(--stroke))',
              }}
            >
              {/* Browser bar */}
              <div
                className="h-7 flex items-center px-3 border-b gap-1.5 shrink-0"
                style={{
                  backgroundColor: 'hsl(var(--surface))',
                  borderColor: 'hsl(var(--stroke))',
                }}
              >
                <div className="w-2 h-2 rounded-full bg-red-500/60" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                <div className="w-2 h-2 rounded-full bg-green-500/60" />
                <div
                  className="flex-1 text-center text-[9px] font-mono tracking-wider opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                  style={{ color: 'hsl(var(--muted))' }}
                >
                  {project.githubUrl.split('/').pop().replace('.git', '')}
                </div>
              </div>

              {/* Image */}
              <div className="relative flex-1 overflow-hidden" style={{ height: 'calc(100% - 28px)' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-1000 ease-out group-hover:scale-110"
                />

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-end p-4"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)' }}
                >
                  <span
                    className="translate-y-3 group-hover:translate-y-0 transition-transform duration-500 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-md flex items-center gap-2"
                    style={{
                      backgroundColor: 'rgba(137,170,204,0.15)',
                      border: '1px solid rgba(137,170,204,0.4)',
                      color: '#89AACC',
                    }}
                  >
                    View Source ↗
                  </span>
                </div>
              </div>
            </div>

            {/* Info below */}
            <div className="mt-6 px-1 relative">
              {/* Number watermark */}
              <div
                className="absolute -top-14 right-0 text-7xl md:text-8xl font-display italic pointer-events-none -z-10 transition-all duration-500 group-hover:-translate-y-2"
                style={{ color: 'hsl(var(--surface))' }}
              >
                {(index + 1).toString().padStart(2, '0')}
              </div>

              <div className="flex flex-col gap-2 relative z-10">
                <h4 className="text-lg md:text-xl font-semibold text-text-primary group-hover:text-white transition-colors duration-300">
                  {project.title}
                </h4>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded-md border"
                      style={{
                        backgroundColor: 'rgba(137,170,204,0.08)',
                        color: '#89AACC',
                        borderColor: 'rgba(137,170,204,0.2)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <div className="relative max-w-[95%]">
                  <p
                    className={`text-sm leading-relaxed transition-all duration-500 ${
                      expandedDescriptions[index] ? 'max-h-40' : 'max-h-[3.5rem]'
                    } overflow-hidden`}
                    style={{ color: 'hsl(var(--muted))' }}
                  >
                    {project.description}
                  </p>
                  {project.description.length > 100 && (
                    <button
                      type="button"
                      onClick={(e) => toggleDescription(e, index)}
                      className="text-xs font-bold mt-1 transition-colors"
                      style={{ color: '#89AACC' }}
                    >
                      {expandedDescriptions[index] ? 'Show less' : '...more'}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* GitHub CTA card */}
        <div
          className="w-[220px] md:w-[280px] flex-shrink-0 flex flex-col justify-center items-center group cursor-pointer h-full pb-24"
          onClick={() => window.open('https://github.com/falakrana', '_blank')}
        >
          <div
            className="w-28 h-28 md:w-36 md:h-36 rounded-full border border-dashed flex items-center justify-center transition-all duration-700 group-hover:scale-110 relative"
            style={{ borderColor: 'hsl(var(--stroke))' }}
          >
            <div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                background: 'radial-gradient(circle, rgba(137,170,204,0.1) 0%, transparent 70%)',
              }}
            />
            <svg
              className="w-10 h-10 md:w-12 md:h-12 transition-colors duration-500"
              style={{ color: 'hsl(var(--muted))' }}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </div>
          <h4
            className="mt-8 text-lg font-semibold uppercase tracking-[0.2em] transition-colors duration-300"
            style={{ color: 'hsl(var(--muted))' }}
          >
            GitHub
          </h4>
          <p
            className="text-xs mt-2 uppercase tracking-widest opacity-50"
            style={{ color: 'hsl(var(--muted))' }}
          >
            All repositories
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;

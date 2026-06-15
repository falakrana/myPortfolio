import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const toggleDescription = (event, index) => {
    event.stopPropagation();
    setExpandedDescriptions((current) => ({
      ...current,
      [index]: !current[index],
    }));
  };

  const allProjects = [
    {
      title: "Menova-SaaS",
      description:
        "Menova is a full-stack SaaS platform for restaurants to manage digital QR-based menus, branding, and table ordering.",
      techStack: ["React", "FastAPI", "MongoDB", "Clerk"],
      image: "/Projects/menova.png",
      githubUrl: "https://menova.vercel.app",
    },
    {
      title: "DevCollab",
      description:
        "A modern developer collaboration platform combining task management and real-time communication, built with ASP.NET Core and Next.js.",
      techStack: ["DotNet", "Next.js", 'SignalR', "PostgreSQL"],
      image: "/Projects/DevCollab.jpeg",
      githubUrl: "https://github.com/falakrana/DevCollab.git",
    },
    {
      title: "ResumeIQ",
      description:
        "AI-powered resume optimization platform with ATS scoring, skill gap analysis, job matching, and actionable recommendations.",
      techStack: ["angular", "mongodb", "fastapi"],
      image: "/Projects/resumeiq.png",
      githubUrl: "https://github.com/falakrana/ResumeIQ.git",
    },
    {
      title: "CacheFlux",
      description:
        "A Redis-based distributed cache in front of PostgreSQL for high-traffic systems.",
      techStack: ["Redis", "Nginx", "FastAPI", "PostgreSQL"],
      image: "/Projects/cachingImage.png",
      githubUrl: "https://github.com/falakrana/CacheFlux.git",
    },
    {
      title: "ChronoNote",
      description:
        "A RESTful API built with Spring Boot for note management with automatic version tracking.",
      techStack: ["Java", "Spring-Boot", "Version-Control", "PostgreSQL"],
      image: "/Projects/chronoNoteImage.jpeg",
      githubUrl: "https://github.com/falakrana/ChronoNote.git",
    },
    {
      title: "AIReviewBot",
      description:
        "An AI based code review system that provides feedback and suggestions for code improvements.",
      techStack: ["python", "tree-sitter", "Redis", "Celery"],
      image: "/Projects/aiReviewBot.jpeg",
      githubUrl: "https://github.com/falakrana/AIReviewBot.git",
    },
    {
      title: "Coursera-QA-App",
      description:
        "Browser extension that helps learners get answers directly from the course page.",
      techStack: ["Python", "Playwright-Python", "Gemini-1.5-Flash"],
      image: "/Projects/CourseraSum.jpeg",
      githubUrl: "https://github.com/falakrana/coursera-qa-app.git",
    },
    {
      title: "EchoDesk",
      description:
        "A security-first Windows Desktop AI Agent that uses natural language to launch applications. Built with a strict separation between application discovery (Phase 1) and agentic execution (Phase 2).",
      techStack: ["Python", "LLMs", "Windows cli"],
      image: "/Projects/echoDesk.png",
      githubUrl: "https://github.com/falakrana/EchoDesk.git",
    },
    {
      title: "Encryption Suite",
      description:
        "Powerful high-performance secure encryption/decryption suite with Rust and WebAssembly.",
      techStack: ["Rust", "React.js", "WASM"],
      image: "/Projects/encryption-image.png",
      githubUrl: "https://github.com/falakrana/file-encryption-rust.git",
    },

    {
      title: "CrewAI Writer",
      description:
        "Research and writing agent duo that automates content generation.",
      techStack: ["Crew-AI", "AI-Agent", "Python"],
      image: "/Projects/crewaiImage.jpeg",
      githubUrl: "https://github.com/falakrana/Crew-AI-ContentWriter-Agent.git",
    },
    {
      title: "Disease Prediction",
      description: "Disease prediction using ML models with Flask framework.",
      techStack: ["Python", "Reactjs", "Decision-Tree", "Randome Forest", "Healthcare"],
      image: "/Projects/diseasePrediction.jpeg",
      githubUrl: "https://github.com/falakrana/Disease-Prediction-using-ML.git",
    },
    {
      title: "Data Visualization",
      description:
        "Interactive data visualization tool for deep insights and analytics.",
      techStack: ["Python", "Pandas", "Matplotlib"],
      image: "/Projects/dataVisualization.png",
      githubUrl: "https://github.com/falakrana",
    },
    {
      title: "Langchain Translator",
      description:
        "A high-performance translation API leveraging Gemma 2B via Groq's LPUs.",
      techStack: ["FastAPI", "Groq-LPU", "LangChain"],
      image: "/Projects/languageTranslator.jpeg",
      githubUrl: "https://github.com/falakrana/LangChainGROQTranslator.git",
    },
    {
      title: "Speech to Text",
      description:
        "Advanced speech-to-text conversion tool using state-of-the-art ASR models.",
      techStack: ["Whisper-AI", "Python", "Speech"],
      image: "/Projects/speechToText.png",
      githubUrl: "https://github.com/falakrana",
    },
    {
      title: "Email Automation",
      description: "Smart email automation and workflow management system.",
      techStack: ["Node.js", "Mailgun", "Automation"],
      image: "/Projects/email_adk.jpeg",
      githubUrl: "https://github.com/falakrana",
    },
    {
      title: "YouTube Insights",
      description:
        "Chrome extension for youtube, where user can chat with the video. A RAG based pipeline is implemented.",
      techStack: ["React", "YouTube API", "Firebase"],
      image: "/Projects/youtube.jpeg",
      githubUrl: "https://github.com/falakrana",
    },
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      const track = trackRef.current;
      const section = sectionRef.current;

      const getHorizontalMove = () => {
        const lastCard = track.lastElementChild;
        if (!lastCard) return track.scrollWidth - window.innerWidth;
        const lastCardOffsetLeft = lastCard.offsetLeft;
        const lastCardWidth = lastCard.offsetWidth;
        return lastCardOffsetLeft + lastCardWidth / 2 - window.innerWidth / 2;
      };

      gsap.to(track, {
        x: () => -getHorizontalMove(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getHorizontalMove() + 400}`,
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
      className="min-h-screen bg-light-bg overflow-hidden relative border-t border-gray-100"
    >
      {/* BACKGROUND DECORATIONS */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2"></div>

      {/* STATIC TITLE AREA - Pinned at top during scroll */}
      <div className="absolute top-24 left-0 w-full z-20 pointer-events-none">
        <div className="container mx-auto px-6 text-center">
          <h2 className="section-title italic font-serif mb-2">My Work</h2>
          <p className="text-text-secondary font-medium uppercase tracking-[0.2em] text-[10px] md:text-xs">
            Building digital experiences
          </p>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex items-center h-screen pt-40 px-[10vw] gap-12 md:gap-20 will-change-transform"
      >
        {allProjects.map((project, index) => (
          <div
            key={index}
            className="w-[300px] md:w-[400px] lg:w-[450px] flex-shrink-0 group cursor-pointer"
            onClick={() => window.open(project.githubUrl, "_blank")}
          >
            {/* Project Card Mockup */}
            <div className="relative aspect-[4/3] md:aspect-video rounded-2xl overflow-hidden shadow-sm group-hover:shadow-2xl transition-all duration-700 ease-out group-hover:-translate-y-3 border border-gray-200 bg-white/50 backdrop-blur-sm flex flex-col">
              {/* Browser / App Header */}
              <div className="h-8 bg-gray-100/80 backdrop-blur flex items-center px-4 border-b border-gray-200 gap-1.5 shrink-0 transition-colors duration-500 group-hover:bg-gray-100">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                <div className="flex-1 text-center text-[10px] text-gray-500 font-mono tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.githubUrl.split("/").pop().replace(".git", "")}
                </div>
              </div>

              {/* Image Container */}
              <div className="relative flex-1 overflow-hidden bg-gray-50">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-1000 ease-out group-hover:scale-110"
                />
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* "View Source" Floating Badge */}
                <div className="absolute bottom-4 right-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out z-10">
                  <span className="bg-white/90 backdrop-blur-md text-accent-black px-4 py-2 rounded-full font-bold text-[10px] md:text-xs uppercase tracking-widest shadow-xl flex items-center gap-2 group/btn">
                    View Source
                    <svg
                      className="w-3 h-3 md:w-4 md:h-4 text-accent-blue transform transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            {/* LOWER INFO SECTION */}
            <div className="mt-8 md:mt-10 px-2 relative">
              {/* Watermark Number */}
              <div className="absolute -top-16 md:-top-20 right-0 text-7xl md:text-9xl font-bold text-gray-100/60 pointer-events-none -z-10 font-serif italic transition-all duration-500 group-hover:text-accent-blue/10 group-hover:-translate-y-4">
                {(index + 1).toString().padStart(2, "0")}
              </div>

              <div className="flex flex-col gap-3 md:gap-4 relative z-10">
                <h4 className="text-xl md:text-2xl font-bold text-text-primary tracking-tight group-hover:text-accent-blue transition-colors duration-300">
                  {project.title}
                </h4>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-[9px] md:text-[10px] font-bold uppercase tracking-wider rounded-md bg-accent-blue/5 text-accent-blue border border-accent-blue/10 group-hover:bg-accent-blue/10 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="relative mt-1 max-w-[95%]">
                  <p
                    className={`project-description text-text-secondary text-sm md:text-base leading-relaxed opacity-80 transition-[max-height] duration-500 ease-in-out ${expandedDescriptions[index]
                      ? "max-h-40"
                      : "max-h-[2.85rem] md:max-h-[3.25rem]"
                      }`}
                  >
                    {project.description}
                  </p>

                  {project.description.length > 120 && (
                    <button
                      type="button"
                      aria-expanded={!!expandedDescriptions[index]}
                      onClick={(event) => toggleDescription(event, index)}
                      className={
                        expandedDescriptions[index]
                          ? "mt-1 rounded-md bg-transparent p-0 text-xs font-bold uppercase tracking-widest text-accent-blue transition-colors duration-300 hover:text-blue-700"
                          : "absolute bottom-0 right-0 rounded-md bg-light-bg pl-2 text-sm md:text-base font-bold text-accent-blue transition-colors duration-300 hover:text-blue-700"
                      }
                    >
                      {expandedDescriptions[index] ? "Show less" : "..."}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* FINAL "View More" CARD */}
        <div
          className="w-[250px] md:w-[320px] flex-shrink-0 flex flex-col justify-center items-center group cursor-pointer h-full pb-20"
          onClick={() => window.open("https://github.com/falakrana", "_blank")}
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-dashed border-gray-300 flex items-center justify-center transition-all duration-700 group-hover:border-accent-blue group-hover:scale-110 group-hover:bg-accent-blue/5 relative">
            {/* Pulsing ring */}
            <div className="absolute inset-0 rounded-full border border-accent-blue/30 scale-150 opacity-0 group-hover:animate-ping"></div>

            <svg
              className="w-10 h-10 md:w-12 md:h-12 text-gray-400 group-hover:text-accent-blue transition-colors duration-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h4 className="mt-8 text-lg md:text-xl font-bold text-text-primary group-hover:text-accent-blue transition-colors uppercase tracking-[0.3em]">
            Explore Github
          </h4>
          <p className="text-text-secondary text-xs mt-3 uppercase tracking-widest opacity-60">
            View all repositories
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;

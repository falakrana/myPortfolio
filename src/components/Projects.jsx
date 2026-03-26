import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  const allProjects = [
    {
      title: "CacheFlux",
      description: "A Redis-based distributed cache in front of PostgreSQL for high-traffic systems.",
      techStack: ["Redis", "Nginx", "FastAPI", "PostgreSQL"],
      image: "/Projects/cachingImage.png",
      githubUrl: "https://github.com/falakrana/CacheFlux.git"
    },
    {
      title: "Encryption Suite",
      description: "Powerful high-performance secure encryption/decryption suite with Rust and WebAssembly.",
      techStack: ["Rust", "React.js", "WASM"],
      image: "/Projects/encryption-image.png",
      githubUrl: "https://github.com/falakrana/file-encryption-rust.git"
    },
    {
      title: "Coursera-QA-App",
      description: "Browser extension that helps learners get answers directly from the course page.",
      techStack: ["Playwright-Python", "Gemini-1.5-Flash"],
      image: "/Projects/CourseraSum.jpeg",
      githubUrl: "https://github.com/falakrana/coursera-qa-app.git"
    },
    {
      title: "Langchain Translator",
      description: "A high-performance translation API leveraging Gemma 2B via Groq's LPUs.",
      techStack: ["FastAPI", "Groq-LPU", "LangChain"],
      image: "/Projects/languageTranslator.jpeg",
      githubUrl: "https://github.com/falakrana/LangChainGROQTranslator.git"
    },
    {
      title: "CrewAI Writer",
      description: "Research and writing agent duo that automates content generation.",
      techStack: ["Crew-AI", "AI-Agent", "Python"],
      image: "/Projects/crewaiImage.jpeg",
      githubUrl: "https://github.com/falakrana/Crew-AI-ContentWriter-Agent.git"
    },
    {
      title: "Disease Prediction",
      description: "Disease prediction using ML models with Flask framework.",
      techStack: ["ML", "Flask", "Healthcare"],
      image: "/Projects/diseasePrediction.jpeg",
      githubUrl: "https://github.com/falakrana/Disease-Prediction-using-ML.git"
    },
    {
      title: "Data Visualization",
      description: "Interactive data visualization tool for deep insights and analytics.",
      techStack: ["Python", "Pandas", "Matplotlib"],
      image: "/Projects/dataVisualization.png",
      githubUrl: "https://github.com/falakrana"
    },
    {
      title: "Speech to Text",
      description: "Advanced speech-to-text conversion tool using state-of-the-art ASR models.",
      techStack: ["Whisper-AI", "Python", "Speech"],
      image: "/Projects/speechToText.png",
      githubUrl: "https://github.com/falakrana"
    },
    {
      title: "Email Automation",
      description: "Smart email automation and workflow management system.",
      techStack: ["Node.js", "Mailgun", "Automation"],
      image: "/Projects/email_adk.jpeg",
      githubUrl: "https://github.com/falakrana"
    },
    {
      title: "YouTube Insights",
      description: "Analytical tool for YouTube content creators to monitor performance and trends.",
      techStack: ["React", "YouTube API", "Firebase"],
      image: "/Projects/youtube.jpeg",
      githubUrl: "https://github.com/falakrana"
    }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      const track = trackRef.current;
      const section = sectionRef.current;
      
      const horizontalMove = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: () => -horizontalMove,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${horizontalMove + 400}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="min-h-screen bg-light-bg overflow-hidden relative border-t border-gray-100">
      {/* STATIC TITLE AREA - Pinned at top during scroll */}
      <div className="absolute top-24 left-0 w-full z-20 pointer-events-none">
        <div className="container mx-auto px-6 text-center">
           <h2 className="section-title italic font-serif italic mb-2">My Work</h2>
           <p className="text-text-secondary font-medium uppercase tracking-[0.2em] text-[10px] md:text-xs">Building digital experiences</p>
        </div>
      </div>

      <div ref={trackRef} className="flex items-center h-screen pt-40 px-[10vw] gap-12 md:gap-16 will-change-transform">
        {allProjects.map((project, index) => (
          <div 
            key={index}
            className="w-[300px] md:w-[380px] lg:w-[420px] flex-shrink-0 group cursor-pointer"
            onClick={() => window.open(project.githubUrl, '_blank')}
          >
            {/* Project Card */}
            <div className="relative aspect-video rounded-[1.5rem] overflow-hidden shadow-lg transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-2 border border-gray-100 bg-white">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                 <div className="bg-white/90 backdrop-blur text-accent-black px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    Explore Details
                 </div>
              </div>
            </div>

            {/* LOWER INFO SECTION */}
            <div className="mt-6 px-1 flex flex-col items-start gap-3">
               <div>
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="text-[9px] font-bold text-accent-blue bg-accent-blue/10 px-2 py-0.5 rounded tracking-widest uppercase">Project {index + 1} / 10</span>
                    <h4 className="text-lg md:text-xl font-serif font-bold text-text-primary italic tracking-tight">{project.title}</h4>
                  </div>
                  <p className="text-text-secondary text-xs md:text-sm leading-relaxed max-w-[95%] opacity-70 mb-3 h-10 overflow-hidden text-ellipsis line-clamp-2">
                    {project.description}
                  </p>
               </div>

               {/* VIEW SOURCE LINK */}
               <div className="flex items-center gap-2 group/link border-b border-transparent hover:border-accent-blue transition-all pb-1">
                 <span className="text-xs font-bold text-accent-blue tracking-wider uppercase underline underline-offset-4 decoration-1">View source</span>
                 <svg className="w-4 h-4 text-accent-blue transform transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                 </svg>
               </div>
            </div>
          </div>
        ))}

        {/* FINAL "View More" CARD */}
        <div 
          className="w-[220px] md:w-[280px] flex-shrink-0 flex flex-col justify-center items-center group cursor-pointer pb-20"
          onClick={() => window.open('https://github.com/falakrana', '_blank')}
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center transition-all duration-500 group-hover:border-accent-blue group-hover:scale-105">
            <svg className="w-10 h-10 md:w-12 md:h-12 text-gray-300 group-hover:text-accent-blue transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </div>
          <h4 className="mt-6 text-lg md:text-xl font-serif italic text-text-primary group-hover:text-accent-blue transition-colors uppercase tracking-[0.2em] font-bold">ALL PROJECTS</h4>
        </div>
      </div>
    </section>
  );
};

export default Projects;

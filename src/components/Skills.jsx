import React, { useState } from 'react';

const ORBIT_RADIUS = 240; // px - distance from center to folder center

const Skills = () => {
  const [activeFolder, setActiveFolder] = useState(null);

  const skillCategories = [
    {
      id: "backend",
      category: "Backend & Apps",
      icon: "⚙️",
      color: "#7dd3fc",
      colorClass: "bg-[#7dd3fc]",
      rotation: "-rotate-3",
      skills: [
        { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
        { name: "Express.js", icon: "https://cdn.simpleicons.org/express/000000" },
        { name: "Flask", icon: "https://cdn.simpleicons.org/flask/000000" },
        { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi/009688" },
        { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
        { name: ".NET", icon: "https://cdn.simpleicons.org/dotnet/512BD4" },
      ]
    },
    {
      id: "database",
      category: "Databases",
      icon: "🗄️",
      color: "#6ee7b7",
      colorClass: "bg-[#6ee7b7]",
      rotation: "rotate-2",
      skills: [
        { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
        { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
        { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
        { name: "Redis", icon: "https://cdn.simpleicons.org/redis/DC382D" },
        { name: "FAISS", icon: "https://cdn.simpleicons.org/meta/0467DF" },
      ]
    },
    {
      id: "web",
      category: "Full-Stack Web",
      icon: "🌐",
      color: "#f9a8d4",
      colorClass: "bg-[#f9a8d4]",
      rotation: "rotate-0",
      skills: [
        { name: "React.js", icon: "https://cdn.simpleicons.org/react/61DAFB" },
        { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000" },
        { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
        { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
        { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      ]
    },
    {
      id: "languages",
      category: "Languages",
      icon: "💻",
      color: "#d8b4fe",
      colorClass: "bg-[#d8b4fe]",
      rotation: "rotate-3",
      skills: [
        { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
        { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
        { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
        { name: "Java", icon: "https://cdn.simpleicons.org/openjdk/437291" },
      ]
    },
    {
      id: "devops",
      category: "DevOps & Cloud",
      icon: "🛠️",
      color: "#fcd34d",
      colorClass: "bg-[#fcd34d]",
      rotation: "-rotate-2",
      skills: [
        { name: "AWS", icon: "./icons/aws-icon.png" },
        { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
        { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
        { name: "GitHub", icon: "https://cdn.simpleicons.org/github/181717" },
        { name: "Nginx", icon: "https://cdn.simpleicons.org/nginx/009639" },
      ]
    },
    {
      id: "ai",
      category: "AI & ML",
      icon: "🤖",
      color: "#93c5fd",
      colorClass: "bg-[#93c5fd]",
      rotation: "rotate-4",
      skills: [
        { name: "TensorFlow", icon: "https://cdn.simpleicons.org/tensorflow/FF6F00" },
        { name: "PyTorch", icon: "https://cdn.simpleicons.org/pytorch/EE4C2C" },
        { name: "LangChain", icon: "https://cdn.simpleicons.org/langchain/1C3C3C" },
        { name: "Scikit-Learn", icon: "https://cdn.simpleicons.org/scikitlearn/F7931E" },
        { name: "Crew-ai", icon: "./icons/crewai-icon.png" },
        { name: "Gemini", icon: "./icons/gemini-icon.png" },
        { name: "Ollama", icon: "./icons/ollama-icon.png" },
        { name: "hugging-face", icon: "./icons/huggingface-icon.png" },
        { name: "RAG", icon: "./icons/rag-icon.jpg" },
      ]
    },
    {
      id: "dataviz",
      category: "Data Visualization",
      icon: "📊",
      color: "#fdba74",
      colorClass: "bg-[#fdba74]",
      rotation: "-rotate-2",
      skills: [
        { name: "Tableau", icon: "./icons/tableau-icon.png" },
        { name: "Excel", icon: "./icons/excel-icon.png" },
        { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
      ]
    }
  ];

  const total = skillCategories.length;
  // Each card starts at a different angle evenly spread around the circle
  // Animation duration per card is fixed; delay offsets each card's start position

  const DURATION = 22; // seconds for one full orbit

  return (
    <section id="skills" className="py-24 px-6 relative bg-light-bg overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10 text-center">
        {/* Heading */}
        <div className="mb-12 fade-in">
          <h2 className="section-title italic font-serif italic mb-4">Skills &amp; Expertise</h2>
          <p className="text-text-secondary font-medium uppercase tracking-[0.2em] text-xs">Explore My Technical Toolbox</p>
        </div>

        {/* Orbit Stage */}
        <div className="orbit-stage fade-in">
          {/* Orbit ring (decorative) */}
          <div className="orbit-ring" />

          {/* Central glow */}
          <div className="orbit-center-glow">
            <div className="orbit-glow-core" />
            <div className="orbit-glow-ring1" />
            <div className="orbit-glow-ring2" />
          </div>

          {/* Folder cards */}
          {skillCategories.map((cat, index) => {
            // Delay = fraction of duration so card starts at the right angle
            const delayFraction = index / total;
            const delay = -(delayFraction * DURATION); // negative delay = pre-started

            const isActive = activeFolder === cat.id;
            const isBlurred = activeFolder && !isActive;

            return (
              <div
                key={cat.id}
                className="orbit-item"
                style={{
                  animationDuration: `${DURATION}s`,
                  animationDelay: `${delay}s`,
                  animationPlayState: activeFolder ? 'paused' : 'running',
                }}
              >
                {/* Counter-rotate wrapper so folder stays upright */}
                <div
                  className="orbit-item-inner"
                  style={{
                    animationDuration: `${DURATION}s`,
                    animationDelay: `${delay}s`,
                    animationPlayState: activeFolder ? 'paused' : 'running',
                  }}
                >
                  <div
                    className={`folder-card-wrap ${isBlurred ? 'opacity-30 blur-[4px]' : ''} transition-all duration-400`}
                    onClick={() => setActiveFolder(activeFolder === cat.id ? null : cat.id)}
                  >
                    <div className={`folder-card ${isActive ? 'scale-110' : 'hover:scale-105'} transition-transform duration-300`}>

                      {/* POPPING ICONS */}
                      <div className={`folder-icons-tray transition-all duration-700 ${isActive ? 'icons-open' : ''}`}>
                        {cat.skills.map((skill, sIndex) => (
                          <div
                            key={skill.name}
                            className="skill-icon-chip group/icon relative"
                            style={{
                              transform: `rotate(${Math.sin(sIndex + index) * 12}deg) translateY(${sIndex % 2 === 0 ? 0 : 6}px)`,
                              zIndex: 10 + sIndex,
                            }}
                          >
                            <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                            {/* Tooltip */}
                            <div className="skill-tooltip">
                              {skill.name}
                              <div className="skill-tooltip-arrow" />
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* FOLDER BODY */}
                      <div className="folder-body">
                        {/* Back */}
                        <div className="folder-back" style={{ backgroundColor: cat.color }} />
                        {/* Tab */}
                        <div
                          className="folder-tab"
                          style={{ backgroundColor: cat.color, clipPath: 'polygon(0 0, 75% 0, 100% 100%, 0% 100%)' }}
                        />
                        {/* Front */}
                        <div className="folder-front" style={{ backgroundColor: cat.color }}>
                          <span className="text-3xl mb-1 drop-shadow-sm select-none">{cat.icon}</span>
                          <p className="folder-label">{cat.category}</p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Click hint */}
        <p className="mt-8 text-text-secondary text-xs font-medium tracking-widest uppercase opacity-60">Click a folder to explore skills</p>
      </div>

      <style>{`
        /* ─── Orbit Stage ─────────────────────────────────── */
        .orbit-stage {
          position: relative;
          width: 100%;
          height: ${ORBIT_RADIUS * 2 + 200}px;
        }

        /* ─── Orbit Ring ──────────────────────────────────── */
        .orbit-ring {
          position: absolute;
          width: ${ORBIT_RADIUS * 2}px;
          height: ${ORBIT_RADIUS * 2}px;
          border-radius: 50%;
          border: 1.5px dashed rgba(100, 116, 139, 0.25);
          pointer-events: none;
          /* Explicit center */
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }

        /* ─── Center Glow ─────────────────────────────────── */
        .orbit-center-glow {
          position: absolute;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          /* Explicit center */
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }

        .orbit-glow-core {
          position: absolute;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: radial-gradient(circle, #a78bfa 0%, #818cf8 60%, transparent 100%);
          box-shadow: 0 0 20px 6px rgba(139, 92, 246, 0.45), 0 0 40px 10px rgba(99, 102, 241, 0.2);
          animation: glowPulse 3s ease-in-out infinite;
        }

        .orbit-glow-ring1 {
          position: absolute;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          border: 1.5px solid rgba(139, 92, 246, 0.3);
          animation: glowPulse 3s ease-in-out infinite 0.5s;
        }

        .orbit-glow-ring2 {
          position: absolute;
          width: 78px;
          height: 78px;
          border-radius: 50%;
          border: 1px solid rgba(139, 92, 246, 0.15);
          animation: glowPulse 3s ease-in-out infinite 1s;
        }

        @keyframes glowPulse {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }

        /* ─── Orbit Item ──────────────────────────────────── */
        .orbit-item {
          position: absolute;
          width: ${ORBIT_RADIUS * 2}px;
          height: ${ORBIT_RADIUS * 2}px;
          border-radius: 50%;
          /* Explicit center — do NOT use transform here, animation uses it */
          left: 50%;
          top: 50%;
          margin-left: -${ORBIT_RADIUS}px;
          margin-top: -${ORBIT_RADIUS}px;
          animation: orbitSpin linear infinite;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          /* Let clicks pass through the large invisible circle */
          pointer-events: none;
        }

        @keyframes orbitSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        /* Counter-rotate so the card stays upright */
        .orbit-item-inner {
          animation: orbitCounterSpin linear infinite;
          margin-top: -54px;
          pointer-events: none;
        }

        @keyframes orbitCounterSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }

        /* ─── Folder Card ─────────────────────────────────── */
        .folder-card-wrap {
          cursor: pointer;
          /* Re-enable pointer events only on the actual card */
          pointer-events: auto;
        }

        .folder-card {
          position: relative;
          width: 140px;
          height: 108px;
        }

        /* ─── Popping Icons Tray ──────────────────────────── */
        .folder-icons-tray {
          position: absolute;
          top: 0;
          left: 50%;
          width: 140px;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          overflow: hidden;
          transform: translateX(-50%) translateY(-18px);
          transition: transform 0.65s cubic-bezier(0.34, 1.56, 0.64, 1);
          z-index: 5;
          pointer-events: none;
        }

        .folder-icons-tray.icons-open {
          transform: translateX(-50%) translateY(-90px);
          z-index: 50;
          pointer-events: auto;
          overflow: visible;
        }

        .skill-icon-chip {
          width: 40px;
          height: 40px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.12);
          padding: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1.5px solid rgba(0,0,0,0.06);
          flex-shrink: 0;
          margin-left: -20px;
          transition: transform 0.2s;
          pointer-events: auto;
          position: relative;
        }

        .skill-icon-chip:hover {
          transform: scale(1.3) !important;
          z-index: 50;
        }

        .skill-icon-chip:first-child {
          margin-left: 0;
        }

        /* Tooltip */
        .skill-tooltip {
          position: absolute;
          top: -30px;
          left: 50%;
          transform: translateX(-50%);
          background: #1a1a1a;
          color: white;
          font-size: 9px;
          font-weight: 700;
          padding: 3px 7px;
          border-radius: 6px;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s;
          z-index: 100;
          letter-spacing: 0.03em;
        }

        .skill-icon-chip:hover .skill-tooltip {
          opacity: 1;
        }

        .skill-tooltip-arrow {
          position: absolute;
          bottom: -3px;
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
          width: 6px;
          height: 6px;
          background: #1a1a1a;
        }

        /* ─── Folder Body ─────────────────────────────────── */
        .folder-body {
          position: relative;
          width: 100%;
          height: 100%;
          z-index: 20;
        }

        .folder-back {
          position: absolute;
          inset: 0;
          border-radius: 1.6rem;
          border-top-right-radius: 0;
          border: 2px solid rgba(0,0,0,0.08);
          box-shadow: 0 4px 16px rgba(0,0,0,0.08);
        }

        .folder-tab {
          position: absolute;
          top: -12px;
          left: 0;
          width: 52px;
          height: 14px;
          border-top: 2px solid rgba(0,0,0,0.08);
          border-left: 2px solid rgba(0,0,0,0.08);
          border-radius: 8px 8px 0 0;
        }

        .folder-front {
          position: absolute;
          inset: 0;
          border-radius: 1.6rem;
          border-top-right-radius: 0;
          border: 2px solid rgba(0,0,0,0.08);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 30;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        }

        .folder-label {
          font-size: 9px;
          font-weight: 800;
          font-family: 'Plus Jakarta Sans', sans-serif;
          text-align: center;
          max-width: 80%;
          line-height: 1.2;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: #1a1a1a;
          user-select: none;
        }

        /* ─── Responsive ──────────────────────────────────── */
        @media (max-width: 640px) {
          .orbit-stage {
            height: 420px;
          }
          .orbit-ring {
            width: 220px;
            height: 220px;
          }
          .orbit-item {
            width: 220px;
            height: 220px;
            margin-left: -110px;
            margin-top: -110px;
          }
          .orbit-item-inner {
            margin-top: -32px;
          }
          .folder-card {
            width: 84px;
            height: 64px;
          }
          .folder-tab {
            top: -8px;
            width: 32px;
            height: 10px;
          }
          .folder-front span {
            font-size: 1.25rem !important;
            margin-bottom: 1px !important;
          }
          .folder-label {
            font-size: 6px;
          }
          .folder-icons-tray {
            width: 84px;
          }
          .folder-icons-tray.icons-open {
            transform: translateX(-50%) translateY(-60px);
          }
          .skill-icon-chip {
            width: 26px;
            height: 26px;
            padding: 4px;
            border-radius: 6px;
            margin-left: -12px;
          }
          .skill-tooltip {
            font-size: 7px;
            padding: 2px 4px;
            top: -20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;

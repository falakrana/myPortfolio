import React, { useState } from 'react';
import { motion } from 'motion/react';

const ORBIT_RADIUS = 240;

const skillCategories = [
  {
    id: 'backend',
    category: 'Backend & Apps',
    icon: '⚙️',
    color: '#89AACC',
    skills: [
      { name: 'Node.js',    icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
      { name: 'Express.js', icon: 'https://cdn.simpleicons.org/express/ffffff' },
      { name: 'Flask',      icon: 'https://cdn.simpleicons.org/flask/ffffff' },
      { name: 'FastAPI',    icon: 'https://cdn.simpleicons.org/fastapi/009688' },
      { name: 'Docker',     icon: 'https://cdn.simpleicons.org/docker/2496ED' },
      { name: '.NET',       icon: 'https://cdn.simpleicons.org/dotnet/512BD4' },
    ],
  },
  {
    id: 'database',
    category: 'Databases',
    icon: '🗄️',
    color: '#7B9FBF',
    skills: [
      { name: 'MongoDB',    icon: 'https://cdn.simpleicons.org/mongodb/47A248' },
      { name: 'MySQL',      icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
      { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
      { name: 'Redis',      icon: 'https://cdn.simpleicons.org/redis/DC382D' },
    ],
  },
  {
    id: 'web',
    category: 'Full-Stack Web',
    icon: '🌐',
    color: '#6087A6',
    skills: [
      { name: 'React.js',     icon: 'https://cdn.simpleicons.org/react/61DAFB' },
      { name: 'Next.js',      icon: 'https://cdn.simpleicons.org/nextdotjs/ffffff' },
      { name: 'JavaScript',   icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
      { name: 'TypeScript',   icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
      { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
    ],
  },
  {
    id: 'languages',
    category: 'Languages',
    icon: '💻',
    color: '#8FAACC',
    skills: [
      { name: 'Python',     icon: 'https://cdn.simpleicons.org/python/3776AB' },
      { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
      { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
      { name: 'Java',       icon: 'https://cdn.simpleicons.org/openjdk/437291' },
    ],
  },
  {
    id: 'devops',
    category: 'DevOps & Cloud',
    icon: '🛠️',
    color: '#7593B8',
    skills: [
      { name: 'AWS',    icon: './icons/aws-icon.png' },
      { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
      { name: 'Git',    icon: 'https://cdn.simpleicons.org/git/F05032' },
      { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/ffffff' },
      { name: 'Nginx',  icon: 'https://cdn.simpleicons.org/nginx/009639' },
    ],
  },
  {
    id: 'ai',
    category: 'AI & ML',
    icon: '🤖',
    color: '#89AACC',
    skills: [
      { name: 'TensorFlow',  icon: 'https://cdn.simpleicons.org/tensorflow/FF6F00' },
      { name: 'PyTorch',     icon: 'https://cdn.simpleicons.org/pytorch/EE4C2C' },
      { name: 'LangChain',   icon: 'https://cdn.simpleicons.org/langchain/1C3C3C' },
      { name: 'Scikit-Learn',icon: 'https://cdn.simpleicons.org/scikitlearn/F7931E' },
      { name: 'Gemini',      icon: './icons/gemini-icon.png' },
      { name: 'Ollama',      icon: './icons/ollama-icon.png' },
    ],
  },
  {
    id: 'dataviz',
    category: 'Data Viz',
    icon: '📊',
    color: '#6B8EAD',
    skills: [
      { name: 'Tableau', icon: './icons/tableau-icon.png' },
      { name: 'Excel',   icon: './icons/excel-icon.png' },
      { name: 'Python',  icon: 'https://cdn.simpleicons.org/python/3776AB' },
    ],
  },
];

const DURATION = 22;

const Skills = () => {
  const [activeFolder, setActiveFolder] = useState(null);

  const total = skillCategories.length;

  return (
    <section id="skills" className="py-20 md:py-28 px-6 relative bg-bg overflow-hidden">
      {/* Ambient */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(137,170,204,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-12"
        >
          <div className="section-eyebrow justify-center">Skills & Expertise</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display italic text-text-primary leading-tight">
            Technical{' '}
            <span className="font-display italic" style={{ color: 'hsl(var(--muted))' }}>
              toolbox
            </span>
          </h2>
        </motion.div>

        {/* Orbit stage */}
        <div className="orbit-stage-dark">
          {/* Orbit ring */}
          <div className="orbit-ring-dark" />

          {/* Center glow */}
          <div className="orbit-center-dark">
            <div className="orbit-core-dark" />
            <div className="orbit-ring1-dark" />
            <div className="orbit-ring2-dark" />
          </div>

          {skillCategories.map((cat, index) => {
            const delay = -(index / total) * DURATION;
            const isActive = activeFolder === cat.id;
            const isBlurred = activeFolder && !isActive;

            return (
              <div
                key={cat.id}
                className="orbit-item-dark"
                style={{
                  animationDuration: `${DURATION}s`,
                  animationDelay: `${delay}s`,
                  animationPlayState: activeFolder ? 'paused' : 'running',
                }}
              >
                <div
                  className="orbit-inner-dark"
                  style={{
                    animationDuration: `${DURATION}s`,
                    animationDelay: `${delay}s`,
                    animationPlayState: activeFolder ? 'paused' : 'running',
                  }}
                >
                  <div
                    className={`folder-wrap-dark transition-all duration-400 ${isBlurred ? 'opacity-20 blur-[3px]' : ''}`}
                    onClick={() => setActiveFolder(activeFolder === cat.id ? null : cat.id)}
                  >
                    <div className={`folder-dark ${isActive ? 'scale-110' : 'hover:scale-105'} transition-transform duration-300`}>
                      {/* Popping icons */}
                      <div className={`icons-tray-dark transition-all duration-700 ${isActive ? 'icons-open-dark' : ''}`}>
                        {cat.skills.map((skill, si) => (
                          <div
                            key={skill.name}
                            className="skill-chip-dark group/icon relative"
                            style={{
                              transform: `rotate(${Math.sin(si + index) * 12}deg) translateY(${si % 2 === 0 ? 0 : 6}px)`,
                              zIndex: 10 + si,
                            }}
                          >
                            <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                            <div className="chip-tooltip-dark">
                              {skill.name}
                              <div className="chip-arrow-dark" />
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Folder body */}
                      <div className="folder-body-dark">
                        <div className="folder-back-dark" style={{ backgroundColor: `${cat.color}25`, borderColor: `${cat.color}40` }} />
                        <div className="folder-tab-dark" style={{ backgroundColor: `${cat.color}35`, borderColor: `${cat.color}40`, clipPath: 'polygon(0 0, 75% 0, 100% 100%, 0% 100%)' }} />
                        <div className="folder-front-dark" style={{ backgroundColor: `${cat.color}20`, borderColor: `${cat.color}40` }}>
                          <span className="text-2xl mb-1 select-none">{cat.icon}</span>
                          <p className="folder-label-dark" style={{ color: cat.color }}>{cat.category}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p
          className="mt-6 text-xs uppercase tracking-widest opacity-50"
          style={{ color: 'hsl(var(--muted))' }}
        >
          Click a folder to explore skills
        </p>
      </div>

      <style>{`
        .orbit-stage-dark {
          position: relative;
          width: 100%;
          height: ${ORBIT_RADIUS * 2 + 200}px;
        }
        .orbit-ring-dark {
          position: absolute;
          width: ${ORBIT_RADIUS * 2}px;
          height: ${ORBIT_RADIUS * 2}px;
          border-radius: 50%;
          border: 1px dashed rgba(137,170,204,0.15);
          pointer-events: none;
          left: 50%; top: 50%;
          transform: translate(-50%,-50%);
        }
        .orbit-center-dark {
          position: absolute;
          width: 80px; height: 80px;
          display: flex; align-items: center; justify-content: center;
          left: 50%; top: 50%;
          transform: translate(-50%,-50%);
        }
        .orbit-core-dark {
          position: absolute;
          width: 28px; height: 28px;
          border-radius: 50%;
          background: radial-gradient(circle, #89AACC 0%, #4E85BF 60%, transparent 100%);
          box-shadow: 0 0 20px 6px rgba(137,170,204,0.3), 0 0 40px 10px rgba(78,133,191,0.15);
          animation: glowPulseDark 3s ease-in-out infinite;
        }
        .orbit-ring1-dark {
          position: absolute; width: 54px; height: 54px;
          border-radius: 50%;
          border: 1px solid rgba(137,170,204,0.2);
          animation: glowPulseDark 3s ease-in-out infinite 0.5s;
        }
        .orbit-ring2-dark {
          position: absolute; width: 76px; height: 76px;
          border-radius: 50%;
          border: 1px solid rgba(137,170,204,0.1);
          animation: glowPulseDark 3s ease-in-out infinite 1s;
        }
        @keyframes glowPulseDark {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.1); }
        }
        .orbit-item-dark {
          position: absolute;
          width: ${ORBIT_RADIUS * 2}px; height: ${ORBIT_RADIUS * 2}px;
          border-radius: 50%;
          left: 50%; top: 50%;
          margin-left: -${ORBIT_RADIUS}px; margin-top: -${ORBIT_RADIUS}px;
          animation: orbitSpinDark linear infinite;
          display: flex; align-items: flex-start; justify-content: center;
          pointer-events: none;
        }
        @keyframes orbitSpinDark { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .orbit-inner-dark {
          animation: counterSpinDark linear infinite;
          margin-top: -54px;
          pointer-events: none;
        }
        @keyframes counterSpinDark { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
        .folder-wrap-dark { cursor: pointer; pointer-events: auto; }
        .folder-dark { position: relative; width: 130px; height: 100px; }
        .icons-tray-dark {
          position: absolute; top: 0; left: 50%; width: 130px;
          display: flex; justify-content: center; align-items: flex-end;
          overflow: hidden;
          transform: translateX(-50%) translateY(-18px);
          transition: transform 0.65s cubic-bezier(0.34,1.56,0.64,1);
          z-index: 5; pointer-events: none;
        }
        .icons-open-dark {
          transform: translateX(-50%) translateY(-85px);
          z-index: 50; pointer-events: auto; overflow: visible;
        }
        .skill-chip-dark {
          width: 36px; height: 36px;
          background: hsl(var(--surface));
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.4);
          padding: 7px;
          display: flex; align-items: center; justify-content: center;
          border: 1px solid rgba(137,170,204,0.2);
          flex-shrink: 0; margin-left: -16px;
          transition: transform 0.2s; pointer-events: auto; position: relative;
        }
        .skill-chip-dark:first-child { margin-left: 0; }
        .skill-chip-dark:hover { transform: scale(1.3) !important; z-index: 50; }
        .chip-tooltip-dark {
          position: absolute; top: -28px; left: 50%; transform: translateX(-50%);
          background: hsl(var(--surface)); color: hsl(var(--text));
          border: 1px solid hsl(var(--stroke));
          font-size: 9px; font-weight: 700; padding: 3px 7px;
          border-radius: 6px; white-space: nowrap; opacity: 0;
          pointer-events: none; transition: opacity 0.2s; z-index: 100;
        }
        .skill-chip-dark:hover .chip-tooltip-dark { opacity: 1; }
        .chip-arrow-dark {
          position: absolute; bottom: -3px; left: 50%;
          transform: translateX(-50%) rotate(45deg);
          width: 6px; height: 6px; background: hsl(var(--surface));
          border-right: 1px solid hsl(var(--stroke));
          border-bottom: 1px solid hsl(var(--stroke));
        }
        .folder-body-dark { position: relative; width: 100%; height: 100%; z-index: 20; }
        .folder-back-dark {
          position: absolute; inset: 0;
          border-radius: 1.4rem; border-top-right-radius: 0;
          border: 1px solid; box-shadow: 0 4px 16px rgba(0,0,0,0.3);
        }
        .folder-tab-dark {
          position: absolute; top: -11px; left: 0; width: 50px; height: 13px;
          border-top: 1px solid; border-left: 1px solid; border-radius: 6px 6px 0 0;
        }
        .folder-front-dark {
          position: absolute; inset: 0;
          border-radius: 1.4rem; border-top-right-radius: 0;
          border: 1px solid;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          z-index: 30; box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        }
        .folder-label-dark {
          font-size: 8px; font-weight: 800; font-family: 'Inter', sans-serif;
          text-align: center; max-width: 80%; line-height: 1.2;
          text-transform: uppercase; letter-spacing: 0.06em; user-select: none;
        }
        @media (max-width: 640px) {
          .orbit-stage-dark { height: 420px; }
          .orbit-ring-dark { width: 210px; height: 210px; }
          .orbit-item-dark { width: 210px; height: 210px; margin-left: -105px; margin-top: -105px; }
          .orbit-inner-dark { margin-top: -30px; }
          .folder-dark { width: 78px; height: 60px; }
          .folder-tab-dark { top: -8px; width: 30px; height: 10px; }
          .folder-front-dark span { font-size: 1rem !important; }
          .folder-label-dark { font-size: 6px; }
          .icons-tray-dark { width: 78px; }
          .icons-open-dark { transform: translateX(-50%) translateY(-55px); }
          .skill-chip-dark { width: 24px; height: 24px; padding: 4px; border-radius: 6px; margin-left: -10px; }
        }
      `}</style>
    </section>
  );
};

export default Skills;

import React, { useState, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const [activeFolder, setActiveFolder] = useState(null);
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const group1Ref = useRef(null);
  const group2Ref = useRef(null);

  const skillCategories = [
    {
      id: "backend",
      category: "Backend & Apps",
      icon: "⚙️",
      color: "bg-[#7dd3fc]", // sky-300
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
      color: "bg-[#6ee7b7]", // emerald-300
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
      color: "bg-[#f9a8d4]", // pink-300
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
      color: "bg-[#d8b4fe]", // purple-300
      rotation: "rotate-3",
      skills: [
        { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
        { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
        { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
        { name: "Rust", icon: "https://cdn.simpleicons.org/rust/000000" },
        { name: "Java", icon: "https://cdn.simpleicons.org/openjdk/437291" },
      ]
    },
    {
      id: "devops",
      category: "DevOps & Cloud",
      icon: "🛠️",
      color: "bg-[#fcd34d]", // amber-300
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
      color: "bg-[#93c5fd]", // blue-300
      rotation: "rotate-4",
      skills: [
        { name: "TensorFlow", icon: "https://cdn.simpleicons.org/tensorflow/FF6F00" },
        { name: "PyTorch", icon: "https://cdn.simpleicons.org/pytorch/EE4C2C" },
        { name: "LangChain", icon: "https://cdn.simpleicons.org/langchain/1C3C3C" },
        { name: "Scikit-Learn", icon: "https://cdn.simpleicons.org/scikitlearn/F7931E" },
      ]
    },
    {
      id: "dataviz",
      category: "Data Visualization",
      icon: "📊",
      color: "bg-[#fdba74]", // orange-300
      rotation: "-rotate-2",
      skills: [
        { name: "Tableau", icon: "./icons/tableau-icon.png" },
        { name: "Excel", icon: "./icons/excel-icon.png" },
        { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
      ]
    },
  ];

  const firstGroup = skillCategories.slice(0, 4);
  const secondGroup = skillCategories.slice(4);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: 1,
        }
      });

      // Group 1 Fades Out
      tl.to(group1Ref.current, {
        opacity: 0,
        y: -40,
        scale: 0.95,
        duration: 1,
        ease: "power2.inOut"
      }, 0);

      // Group 2 Fades In
      tl.fromTo(group2Ref.current, 
        { 
          opacity: 0, 
          y: 40, 
          scale: 0.95,
          pointerEvents: "none" 
        },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          pointerEvents: "auto",
          duration: 1,
          ease: "power2.inOut"
        }, 
        0.3 // Slight overlap/delay for beauty
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const renderFolder = (cat, index, overallIndex) => (
    <div 
      key={cat.id}
      className={`relative group cursor-pointer flex justify-center transition-all duration-500 ${
        activeFolder && activeFolder !== cat.id ? 'blur-[8px] opacity-30 shadow-none' : ''
      }`}
      onClick={() => setActiveFolder(activeFolder === cat.id ? null : cat.id)}
    >
      <div 
        className="w-full flex justify-center float-folder"
        style={{ animationDelay: `${overallIndex * 0.2}s` }}
      >
        <div className={`relative w-64 h-48 transition-all duration-500 transform-gpu ${cat.rotation} ${activeFolder === cat.id ? 'scale-110 rotate-0' : 'hover:scale-[1.05]'}`}>
          <div className={`absolute top-0 left-0 w-full flex justify-center -space-x-4 transition-all duration-700 ${
            activeFolder === cat.id ? 'translate-y-[-85px]' : 'translate-y-[-20px] group-hover:translate-y-[-25px]'
          }`}>
            {cat.skills.map((skill, sIndex) => (
              <div 
                key={skill.name}
                className="w-14 h-14 bg-white rounded-2xl shadow-xl p-2.5 flex items-center justify-center border border-gray-100 transition-all duration-300 hover:scale-125 group/icon relative"
                style={{ 
                  transform: `rotate(${Math.sin(sIndex + overallIndex) * 15}deg) translateY(${sIndex % 2 === 0 ? 0 : 8}px)`,
                  zIndex: 10 + sIndex,
                  opacity: activeFolder === cat.id ? 1 : 0.95
                }}
              >
                <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                <div className="absolute top-[-35px] left-1/2 -translate-x-1/2 bg-accent-black text-white text-[10px] px-2 py-1 rounded-lg opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50 pointer-events-none shadow-xl border border-white/10 font-bold tracking-tight">
                   {skill.name}
                   <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-accent-black rotate-45 border-r border-b border-white/10"></div>
                </div>
              </div>
            ))}
          </div>
          <div className="relative w-full h-full z-20">
            <div className={`absolute inset-0 rounded-[2.5rem] rounded-tr-none ${cat.color} border-[2.5px] border-black/10 shadow-lg`}></div>
            <div className={`absolute top-[-15px] left-0 w-32 h-16 ${cat.color} border-t-[2.5px] border-l-[2.5px] border-black/10 rounded-t-[1.5rem]`}
              style={{ clipPath: 'polygon(0 0, 75% 0, 100% 100%, 0% 100%)' }}
            ></div>
            <div className={`absolute inset-0 rounded-[2.5rem] rounded-tr-none ${cat.color} border-[2.5px] border-black/10 flex flex-col items-center justify-center transition-all duration-700 shadow-md ${activeFolder === cat.id ? 'rotateX(-30deg) translateY(12px)' : ''} z-30`}>
              <span className="text-4xl mb-2 drop-shadow-sm select-none">{cat.icon}</span>
              <p className="text-text-primary text-[11px] font-extrabold font-serif leading-tight text-center max-w-[80%] uppercase tracking-tight select-none">
                 {cat.category}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section 
      ref={sectionRef} 
      id="skills" 
      className="relative bg-light-bg overflow-visible"
    >
      {/* Sticky Trigger Wrapper */}
      <div ref={triggerRef} className="min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <div className="mb-20 fade-in">
            <h2 className="section-title italic font-serif italic mb-4">Skills & Expertise</h2>
            <p className="text-text-secondary font-medium uppercase tracking-[0.2em] text-xs">Explore My Technical Toolbox</p>
          </div>

          <div className="relative min-h-[500px] flex items-center justify-center">
            {/* Group 1: First 4 Cards (Grid 2x2) */}
            <div 
              ref={group1Ref}
              className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 gap-y-28 gap-x-12 content-center preserve-3d"
            >
              {firstGroup.map((cat, index) => renderFolder(cat, index, index))}
            </div>

            {/* Group 2: Remaining 3 Cards (Centered Layout) */}
            <div 
              ref={group2Ref}
              className="absolute inset-0 flex flex-wrap justify-center gap-y-28 gap-x-12 opacity-0 pointer-events-none content-center preserve-3d"
            >
              {secondGroup.map((cat, index) => (
                <div key={cat.id} className="w-full md:w-[calc(50%-24px)] lg:w-[calc(33.33%-32px)] flex justify-center">
                  {renderFolder(cat, index, index + 4)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .float-folder {
          animation: folderFloat 4s ease-in-out infinite;
        }
        @keyframes folderFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
};

export default Skills;

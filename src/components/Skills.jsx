import React, { useState } from 'react';

const Skills = () => {
  const [activeFolder, setActiveFolder] = useState(null);

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
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 relative bg-light-bg overflow-visible">
      <div className="container mx-auto max-w-6xl relative z-10 text-center">
        <div className="mb-20 fade-in">
          <h2 className="section-title italic font-serif italic mb-4">Skills & Expertise</h2>
          <p className="text-text-secondary font-medium uppercase tracking-[0.2em] text-xs">Explore My Technical Toolbox</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-28 gap-x-12 mt-12 fade-in">
          {skillCategories.map((cat, index) => (
            <div 
              key={cat.id}
              className={`relative group cursor-pointer flex justify-center transition-all duration-500 ${
                activeFolder && activeFolder !== cat.id ? 'blur-[8px] opacity-30' : ''
              }`}
              onClick={() => setActiveFolder(activeFolder === cat.id ? null : cat.id)}
            >
              {/* Floating Wrapper */}
              <div 
                className="w-full flex justify-center float-folder"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`relative w-64 h-48 transition-all duration-500 transform-gpu ${cat.rotation} ${activeFolder === cat.id ? 'scale-110 rotate-0' : 'hover:scale-[1.05]'}`}>
                  
                  {/* POPPING ICONS */}
                  <div className={`absolute top-0 left-0 w-full flex justify-center -space-x-4 transition-all duration-700 ${
                    activeFolder === cat.id ? 'translate-y-[-85px]' : 'translate-y-[-20px] group-hover:translate-y-[-25px]'
                  }`}>
                    {cat.skills.map((skill, sIndex) => (
                      <div 
                        key={skill.name}
                        className="w-14 h-14 bg-white rounded-2xl shadow-xl p-2.5 flex items-center justify-center border border-gray-100 transition-all duration-300 hover:scale-125 group/icon relative"
                        style={{ 
                          transform: `rotate(${Math.sin(sIndex + index) * 15}deg) translateY(${sIndex % 2 === 0 ? 0 : 8}px)`,
                          zIndex: 10 + sIndex,
                          opacity: activeFolder === cat.id ? 1 : 0.95
                        }}
                      >
                        <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                        
                        {/* Tooltip on Hover */}
                        <div className="absolute top-[-35px] left-1/2 -translate-x-1/2 bg-accent-black text-white text-[10px] px-2 py-1 rounded-lg opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50 pointer-events-none shadow-xl border border-white/10 font-bold tracking-tight">
                           {skill.name}
                           {/* Tiny Arrow */}
                           <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-accent-black rotate-45 border-r border-b border-white/10"></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* FOLDER BODY */}
                  <div className="relative w-full h-full z-20">
                    {/* Back Part */}
                    <div className={`absolute inset-0 rounded-[2.5rem] rounded-tr-none ${cat.color} border-[2.5px] border-black/10 shadow-lg`}></div>
                    
                    {/* Tab Part */}
                    <div className={`absolute top-[-15px] left-0 w-32 h-16 ${cat.color} border-t-[2.5px] border-l-[2.5px] border-black/10 rounded-t-[1.5rem]`}
                      style={{ clipPath: 'polygon(0 0, 75% 0, 100% 100%, 0% 100%)' }}
                    ></div>

                    {/* Front Part (Animated) */}
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
          ))}
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
      `}</style>
    </section>
  );
};

export default Skills;

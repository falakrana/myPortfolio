import React from 'react';

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Parul University",
      duration: "2022 - 2026",
      shortDesc: "Focusing on Software Engineering and AI.",
      bgColor: "bg-gradient-to-br from-yellow-300 to-orange-400",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    },
    {
      degree: "Higher Secondary (12th)",
      institution: "Green Valley High School",
      duration: "2020 - 2022",
      shortDesc: "Science stream with Math and CS.",
      bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2072&auto=format&fit=crop",
    }
  ];

  return (
    <section id="education" className="py-24 px-6 relative bg-light-bg overflow-hidden">
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16 fade-in">
          <h2 className="section-title italic font-serif italic mb-4">Education</h2>
          <p className="text-text-secondary font-medium uppercase tracking-[0.2em] text-xs">A journey through knowledge</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mt-12 fade-in">
          {education.map((edu, index) => (
            <div key={index} className="flex flex-col group relative">
              {/* TOP CARD: Image / Color Background */}
              <div className={`h-[240px] md:h-[280px] ${edu.bgColor} rounded-[2rem] relative overflow-hidden shadow-sm transition-transform duration-500 group-hover:-translate-y-1 z-10`}>
                <div className="absolute inset-x-8 top-10 bottom-0">
                  <div className="w-full h-full bg-white/10 backdrop-blur-sm rounded-t-2xl overflow-hidden border-t border-x border-white/20 shadow-2xl">
                    <img 
                      src={edu.image}
                      alt={edu.degree}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Date Badge */}
                <div className="absolute top-4 left-6 z-10">
                  <div className="bg-white/90 backdrop-blur px-3 py-1 rounded-full shadow-sm">
                    <span className="text-[10px] font-bold text-text-primary tracking-widest">{edu.duration}</span>
                  </div>
                </div>
              </div>

              {/* HANGING THREADS */}
              <div className="absolute top-[240px] md:top-[280px] left-10 w-[2px] h-6 bg-gray-300 z-0 opacity-50"></div>
              <div className="absolute top-[240px] md:top-[280px] right-10 w-[2px] h-6 bg-gray-300 z-0 opacity-50"></div>

              {/* HANGING CONTENT ELEMENT */}
              <div className="mt-4 bg-white rounded-[1.5rem] p-4 shadow-sm border border-gray-100/50 flex flex-col justify-between hover:shadow-lg transition-all transform-gpu origin-top swing-on-hover">
                <div>
                  <p className="text-text-primary text-[13px] font-medium leading-relaxed mb-3">
                    Studied <span className="font-bold">{edu.degree}</span> at {edu.institution}. {edu.shortDesc}
                  </p>
                </div>

                <div className="flex">
                  <button className="bg-accent-black text-white px-5 py-1.5 rounded-xl text-[10px] font-bold transition-all hover:bg-gray-800 active:scale-95">
                    Visit Site
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .swing-on-hover {
          transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .group:hover .swing-on-hover {
          animation: swingAnimation 2s ease-in-out infinite;
        }
        @keyframes swingAnimation {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(2deg); }
          75% { transform: rotate(-2deg); }
        }
      `}</style>
    </section>
  );
};

export default Education;

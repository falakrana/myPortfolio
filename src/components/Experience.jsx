import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: "Associate Software Developer Intern",
      company: "Infodesk India Pvt. Ltd.",
      period: "Jan' 26 - Present",
      achievements: [
        "Developing live production-grade full-stack applications",
        "Building scalable REST APIs with Next.js and Rust",
        "Optimizing MongoDB database schemas for performance",
        "Implementing modern backend logic and microservices",
        "Collaborating under senior developer mentorship for best practices"
      ],
      stickyColor: "bg-[#FEF08A]",
      barColor: "bg-[#7C3AED]", // Violet
    },
    {
      role: "Machine Learning Intern",
      company: "Unified Mentor",
      period: "Jan' 25 - Apr' 25",
      achievements: [
        "Delivered 6 real-world end-to-end Machine Learning projects",
        "Performed data cleaning and feature engineering at scale",
        "Optimized models using Scikit-learn and TensorFlow",
        "Built predictive systems for complex datasets",
        "Integrated ML models with Flask-based web backends"
      ],
      stickyColor: "bg-[#FEF08A]",
      barColor: "bg-[#EC4899]", // Pink
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 relative overflow-visible bg-light-bg">
      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section Header */}
        <div className="mb-16 fade-in px-4">
           <h2 className="section-title italic mb-4">Work Experience</h2>
        </div>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group/card fade-in">
              {/* CLEAN WHITE CARD */}
              <div className="relative bg-white border border-gray-100 p-10 pr-48 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.07)] transition-all duration-700 overflow-visible group-hover/card:translate-y-[-2px]">
                
                {/* Header: Company and Date */}
                <div className="mb-6 flex items-baseline gap-3">
                  <h3 className="text-[28px] font-sans font-bold text-[#1a1a1a] tracking-tight">
                    {exp.company}
                  </h3>
                  <span className="text-gray-400 text-base font-medium">({exp.period})</span>
                </div>

                {/* ACHIEVEMENTS (Formatted as per reference image: comma separated) */}
                <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium tracking-tight">
                  {exp.achievements.join(' , ')}
                </p>

                {/* BOTTOM COLOR BAR */}
                <div className={`absolute bottom-0 left-0 right-0 h-1.5 ${exp.barColor} opacity-20 group-hover:opacity-100 transition-opacity`}></div>

                {/* THE REALISTIC STICKY NOTE (Still present as per design) */}
                <div 
                  className={`absolute top-[-30px] right-[-30px] w-44 h-44 ${exp.stickyColor} shadow-xl z-30 flex items-center justify-center p-8 transition-all duration-1000 float cursor-default`}
                  style={{
                    animationDelay: `${index * 0.5}s`,
                    transform: `rotate(${index % 2 === 0 ? 6 : -6}deg)`
                  }}
                >
                  <p className="font-['Caveat'] text-2xl font-bold text-gray-800 leading-tight text-center relative z-10 select-none">
                    {exp.role}
                  </p>

                  {/* Corner Curl Effect */}
                  <div className="absolute bottom-0 right-0 w-12 h-12 overflow-hidden pointer-events-none">
                    <div className="absolute bottom-0 right-0 w-full h-full bg-black/10 transition-transform duration-500 group-hover/card:scale-110" 
                      style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }}
                    ></div>
                    <div className="absolute bottom-[-1px] right-[-1px] w-[85%] h-[85%] bg-white/40 shadow-[-5px_-5px_10px_rgba(0,0,0,0.05)] origin-bottom-right rotate-[-5deg] transition-all duration-500 group-hover/card:rotate-[-12deg]"
                      style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
                    ></div>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Download Resume Link Refined */}
        <div className="text-center mt-24">
          <a
            href="/Resume-AI-ML.pdf"
            download="Falak_Rana_Resume.pdf"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-accent-black text-white font-bold rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <svg className="w-5 h-5 transition-transform group-hover:translate-y-[-2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            <span className="relative z-10 tracking-widest uppercase text-xs">Download Full Resume</span>
          </a>
        </div>
      </div>

      <style>{`
        .float {
          animation: stickyFloat 5s ease-in-out infinite;
        }
        @keyframes stickyFloat {
          0%, 100% { transform: translateY(0) rotate(2deg); }
          50% { transform: translateY(-10px) rotate(4deg); }
        }
      `}</style>
    </section>
  );
};

export default Experience;

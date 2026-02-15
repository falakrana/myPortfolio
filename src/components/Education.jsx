import React from 'react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Parul University ",
      duration: "2022 - 2026",
      description: "Major in Computer Science with focus on Software Engineering, Data Structures, Algorithms, Database Management, and Web Development. Achieved distinction in final year project."
    },
    {
      degree: "Higher Secondary Education (12th)",
      institution: "Green Valley High School",
      duration: "2020 - 2022",
      description: "Science stream with Mathematics, Physics, and Chemistry. Secured 90%+ aggregate with excellence in Mathematics and Computer Science."
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-dark-secondary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="mb-12 fade-in">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-neon-purple">#</span>
              <span className="text-white">education</span>
            </h2>
            <div className="h-px flex-1 max-w-md bg-neon-purple"></div>
          </div>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 fade-in">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className="border border-gray-800 p-6 hover:border-neon-purple transition-all duration-300 group relative overflow-hidden"
            >
              {/* Decorative corner elements */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-neon-purple/20 group-hover:border-neon-purple/50 transition-colors"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-neon-purple/20 group-hover:border-neon-purple/50 transition-colors"></div>

              {/* Duration Badge */}
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-neon-purple/10 border border-neon-purple/30">
                  <svg className="w-4 h-4 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-neon-purple font-mono text-xs">{edu.duration}</span>
                </div>
              </div>

              {/* Degree */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-purple transition-colors">
                {edu.degree}
              </h3>

              {/* Institution */}
              <p className="text-neon-purple font-medium mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                {edu.institution}
              </p>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed text-sm">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

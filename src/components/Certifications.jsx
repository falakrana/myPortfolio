import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Cloud Practitioner",
      issuer: "AWS skill builder",
      date: "2025",
      link: "../../Certifications/AWS-Simulearn_Cloud-Practitioner.pdf"
    },
    {
      title: "Data Science Certification",
      issuer: "Udemy",
      date: "2024",
      link: "../../Certifications/DataScienceBootcamp.pdf"
    },
    {
      title: "Tableau Visualization",
      issuer: "Udemy",
      date: "2024",
      link: "../../Certifications/Tableau.pdf"
    },
    {
      title: "MySQL Competency",
      issuer: "Cursa",
      date: "2023",
      link: "../../Certifications/SQL.pdf"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6 bg-dark-secondary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="mb-12 fade-in">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-neon-purple">#</span>
              <span className="text-white">certifications</span>
            </h2>
            <div className="h-px flex-1 max-w-md bg-neon-purple"></div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="relative group"
            >
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              
              {/* Card */}
              <div className="relative bg-dark-bg border border-gray-800 p-6 transition-all duration-300 group-hover:border-neon-purple group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-neon-purple/20 overflow-hidden">
                {/* Animated corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-neon-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-neon-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Certificate Icon with glow */}
                <div className="flex items-start justify-between mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-neon-purple/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <svg className="w-12 h-12 text-neon-purple relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  
                  {/* Date badge */}
                  <div className="px-3 py-1 bg-neon-purple/10 border border-neon-purple/30 group-hover:bg-neon-purple/20 group-hover:border-neon-purple transition-all duration-300">
                    <span className="text-neon-purple font-mono text-xs">{cert.date}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-purple transition-colors duration-300">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-4 h-4 text-gray-500 group-hover:text-neon-purple transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <p className="text-gray-400 font-medium text-sm group-hover:text-gray-300 transition-colors duration-300">{cert.issuer}</p>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-4 group-hover:via-neon-purple/50 transition-colors duration-500"></div>

                {/* View Certificate Link */}
                <a 
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-neon-purple hover:text-purple-400 transition-all duration-300 text-sm font-medium group/link"
                >
                  <span className="relative">
                    View Certificate
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-purple group-hover/link:w-full transition-all duration-300"></span>
                  </span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

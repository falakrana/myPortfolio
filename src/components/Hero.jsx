import React from 'react';

const Hero = () => {
  return (
    <>
      {/* Main Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        {/* Decorative dots - left side */}
        <div className="absolute left-4 top-1/4 grid grid-cols-5 gap-2 opacity-30">
          {[...Array(25)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-gray-600 rounded-full"></div>
          ))}
        </div>

        {/* Decorative dots - right side */}
        <div className="absolute right-4 top-1/3 grid grid-cols-5 gap-2 opacity-30">
          {[...Array(25)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-gray-600 rounded-full"></div>
          ))}
        </div>

        {/* Decorative squares - right side */}
        <div className="absolute right-20 top-1/4 grid grid-cols-3 gap-3 opacity-20">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-4 h-4 border border-gray-700"></div>
          ))}
        </div>

        <div className="container mx-auto px-6 lg:px-12 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-white">Falak is a </span>
                <span className="text-neon-purple">Full Stack AI developer</span>
                {/* <span className="text-white"> and </span> */}
                {/* <span className="text-neon-purple">front-end developer</span> */}
              </h1>
              
              <p className="text-gray-400 mb-8 max-w-md">
                Crafting responsive websites where technologies meet creativity
              </p>

              <a 
                href="/Resume-AI-ML.pdf" 
                download="Falak_Rana_Resume.pdf"
                className="btn-primary inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </div>

            {/* Right Image */}
            <div className="relative fade-in group">
              {/* Main image container */}
              <div className="relative">
                <img 
                  src="../myImage/myImage2.png"
                  alt="Developer"
                  className="w-full max-w-sm mx-auto rounded-lg transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-neon-purple/30"
                />
                
                {/* Status badge */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-dark-secondary border border-neon-purple px-6 py-3 flex items-center gap-3 transition-all duration-300 group-hover:border-neon-purple group-hover:shadow-lg group-hover:shadow-neon-purple/50">
                  <div className="w-4 h-4 bg-neon-purple animate-pulse"></div>
                  <span className="text-gray-300 font-medium">Currently working in <span className="text-white font-semibold">Infodesk India</span> as Software Developer</span>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 border border-gray-700 transition-all duration-500 group-hover:border-neon-purple group-hover:-translate-x-1 group-hover:-translate-y-1"></div>
              <div className="absolute -bottom-4 -right-4 grid grid-cols-3 gap-2 transition-all duration-500 group-hover:translate-x-1 group-hover:translate-y-1">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-gray-700 transition-colors duration-500 group-hover:bg-neon-purple/50"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto max-w-4xl">
          <div className="border border-gray-800 p-8 relative">
            {/* Quote icon */}
            <div className="absolute -top-4 left-8 bg-dark-bg px-4">
              <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
              </svg>
            </div>

            <p className="text-white text-xl md:text-2xl font-medium text-center mb-4">
              With great power comes great electricity bill
            </p>

            <div className="flex justify-end">
              <div className="border border-gray-800 px-6 py-2">
                <p className="text-gray-400 font-mono">- Dr. Who</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

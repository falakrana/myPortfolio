import React from 'react';

const About = () => {
  const stats = [
    { label: "Years of Experience", value: "1+" },
    { label: "Projects Completed", value: "10+" },
    { label: "Technologies", value: "15+" },
    { label: "Coffee Consumed", value: "∞" }
  ];

  const funFacts = [
    "🚀 Love building scalable systems",
    "💡 Always learning new tech",
    "🎯 Problem-solving enthusiast",
    "⚡ Performance optimization geek"
  ];

  return (
    <section id="about" className="py-20 px-6 bg-dark-bg relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="mb-12 fade-in">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-neon-purple">#</span>
              <span className="text-white">about-me</span>
            </h2>
            <div className="h-px flex-1 max-w-md bg-neon-purple"></div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left: Description */}
          <div className="fade-in space-y-4">
            <p className="text-gray-400 leading-relaxed">
              Hello, I'm Falak!
            </p>
            
            <p className="text-gray-400 leading-relaxed">
              I'm a passionate software developer with experience in building
              reliable, scalable, and user-focused applications. I enjoy working
              across the stack, from designing backend APIs and database models
              to integrating modern front-end frameworks that bring ideas to
              life.
            </p>
            
            <p className="text-gray-400 leading-relaxed">
              My journey in tech is driven by curiosity and continuous learning.
              I have hands-on experience with full-stack development, databases,
              and modern development tools, and I enjoy applying my
              problem-solving mindset to build practical solutions that address
              real-world needs.
            </p>
          </div>

          {/* Right: Stats Grid */}
          <div className="fade-in">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="border border-gray-800 p-6 hover:border-neon-purple transition-all duration-300 group text-center"
                >
                  <div className="text-3xl font-bold text-neon-purple mb-2 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom: Two Cards Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 fade-in">
          {/* Quick Facts Card */}
          <div className="border border-gray-800 p-6 hover:border-neon-purple transition-all duration-300">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="text-neon-purple">✨</span>
              Quick Facts
            </h3>
            <div className="space-y-3">
              {funFacts.map((fact, index) => (
                <div 
                  key={index}
                  className="text-gray-400 text-sm flex items-center gap-2 hover:text-white transition-colors"
                >
                  {fact}
                </div>
              ))}
            </div>
          </div>

          {/* Code Snippet Card */}
          <div className="border border-gray-800 p-6 bg-dark-secondary/50 font-mono text-sm overflow-hidden hover:border-neon-purple transition-all duration-300">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-gray-500 ml-2 text-xs">~/falak/passion.js</span>
            </div>
            <div className="space-y-1 text-gray-400">
              <div><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = {"{"}</div>
              <div className="ml-4"><span className="text-green-400">name</span>: <span className="text-yellow-400">"Falak Rana"</span>,</div>
              <div className="ml-4"><span className="text-green-400">role</span>: <span className="text-yellow-400">"Software Developer"</span>,</div>
              <div className="ml-4"><span className="text-green-400">passion</span>: <span className="text-yellow-400">"Building cool stuff"</span>,</div>
              <div className="ml-4"><span className="text-green-400">status</span>: <span className="text-yellow-400">"Always learning"</span></div>
              <div>{"}"};</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

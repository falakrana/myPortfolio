import React from 'react';

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-28 pb-16"
      style={{ backgroundColor: 'transparent' }}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto">

        {/* Pill badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-gray-200 bg-white/80 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_6px_rgba(34,197,94,0.5)]" />
          <span className="text-xs text-gray-500 font-medium tracking-wide">Open To Work</span>
        </div>

        {/* Headline */}
        <h1
          className="text-5xl md:text-7xl font-serif font-bold leading-[1.1] tracking-tight mb-5"
          style={{ color: '#0f172a' }}
        >
          Building products that are<br />
          <span style={{ color: '#3b82f6' }}>fast, intelligent,</span><br />
          and simple to use.
        </h1>

        {/* Subtext */}
        <p className="text-base md:text-lg text-gray-400 font-medium max-w-xl mb-10 leading-relaxed">
          Full-stack engineer focused on AI-powered systems, clean APIs, and experiences that just work.
        </p>

        {/* CTA row */}
        <div className="flex items-center gap-6">
          <a
            href="/NewResumeSDE.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 shadow-md"
            style={{ backgroundColor: '#3b82f6' }}
          >
            View Resume
          </a>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-sm font-semibold flex items-center gap-1.5 transition-all duration-200 hover:gap-2.5"
            style={{ color: '#0f172a' }}
          >
            See my work <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

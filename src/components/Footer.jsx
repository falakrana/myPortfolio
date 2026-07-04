import React from 'react';

const Footer = () => (
  <footer
    className="py-8 px-6 border-t"
    style={{
      backgroundColor: 'transparent',
      borderColor: 'hsl(var(--stroke))',
    }}
  >
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-display italic text-xl text-white hover:opacity-70 transition-opacity"
        >
          Falak<span style={{ color: '#89AACC' }}>.</span>
        </button>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6">
          {['experience', 'projects', 'skills', 'certifications', 'contact'].map((id) => (
            <button
              key={id}
              onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
              className="text-xs uppercase tracking-widest capitalize transition-colors hover:text-white"
              style={{ color: 'hsl(var(--muted))' }}
            >
              {id}
            </button>
          ))}
        </div>

        {/* Socials */}
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.5)] animate-pulse" />
          
        </div>
      </div>

      <div
        className="mt-6 pt-6 border-t text-center"
        style={{ borderColor: 'hsl(var(--stroke))' }}
      >
        <p className="text-xs" style={{ color: 'hsl(var(--muted))' }}>
          © {new Date().getFullYear()} Falak Rana — Crafted with care & coffee ✦
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

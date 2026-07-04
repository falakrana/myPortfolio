import React, { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home',    id: null         },
  { label: 'Work',    id: 'projects'   },
  { label: 'Resume',  id: null, href: '/NewResumeSDE.pdf' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState('Home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (link) => {
    setActive(link.label);
    if (link.href) {
      window.open(link.href, '_blank');
      return;
    }
    if (!link.id) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4 pointer-events-none"
    >
      <div
        className={`pointer-events-auto inline-flex items-center rounded-full backdrop-blur-md border border-white/10 px-2 py-2 transition-all duration-300 ${
          scrolled
            ? 'shadow-lg shadow-black/40 bg-black/60'
            : 'bg-black/30'
        }`}
      >
        {/* ─── Logo button ─── */}
        <button
          onClick={() => scrollTo({ label: 'Home', id: null })}
          className="relative w-9 h-9 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 group flex-shrink-0"
          aria-label="Back to top"
        >
          {/* Accent gradient ring */}
          <span
            className="absolute inset-0 rounded-full"
            style={{
              background: 'linear-gradient(90deg, #89AACC, #4E85BF)',
              WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 2px))',
              mask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 2px))',
            }}
          />
          {/* Inner circle */}
          <span
            className="absolute inset-[2px] rounded-full flex items-center justify-center font-display italic text-[13px] text-white"
            style={{ backgroundColor: 'hsl(var(--bg))' }}
          >
            FR
          </span>
        </button>

        {/* Divider */}
        <span className="hidden sm:block w-px h-5 bg-white/10 mx-1.5" />

        {/* ─── Nav links ─── */}
        {navLinks.map((link) => (
          <button
            key={link.label}
            onClick={() => scrollTo(link)}
            className={`rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm transition-all duration-200 ${
              active === link.label
                ? 'text-white bg-white/10'
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
          >
            {link.label}
          </button>
        ))}

        {/* Divider */}
        <span className="hidden sm:block w-px h-5 bg-white/10 mx-1.5" />

        {/* ─── Say hi button ─── */}
        <a
          href="mailto:ranafalak18@gmail.com"
          className="relative inline-flex items-center gap-1 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-white transition-all duration-300 group overflow-hidden"
          style={{ backgroundColor: 'hsl(var(--surface))' }}
        >
          {/* Accent gradient border on hover */}
          <span
            className="absolute inset-[-2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: 'linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)',
              zIndex: -1,
            }}
          />
          <span
            className="absolute inset-0 rounded-full transition-colors duration-300"
            style={{ backgroundColor: 'hsl(var(--surface))', zIndex: -1 }}
          />
          <span className="relative z-10 font-medium">Say hi</span>
          <span className="relative z-10 text-white/60 group-hover:text-white transition-colors">↗</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

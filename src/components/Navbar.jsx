import React, { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home',          id: null           },
  { label: 'Experience',    id: 'experience'   },
  { label: 'Projects',      id: 'projects'     },
  { label: 'Skills',        id: 'skills'       },
  { label: 'Contact',       id: 'contact'      },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState('Home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id, label) => {
    setActive(label);
    if (!id) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4 pointer-events-none">
      <div
        className={`pointer-events-auto inline-flex items-center rounded-full backdrop-blur-md border border-white/10 px-2 py-2 transition-shadow duration-300 ${
          scrolled ? 'shadow-md shadow-black/30' : ''
        }`}
        style={{ backgroundColor: 'hsl(var(--surface))' }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo(null, 'Home')}
          className="relative w-9 h-9 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 group"
          aria-label="Back to top"
        >
          {/* Gradient ring */}
          <span
            className="absolute inset-0 rounded-full accent-gradient p-[2px] group-hover:[background:linear-gradient(270deg,#89AACC_0%,#4E85BF_100%)]"
            style={{ WebkitMask: 'radial-gradient(circle at center, transparent 60%, black 61%)' }}
          />
          {/* Inset gradient border via box ring */}
          <span className="absolute inset-0 rounded-full"
            style={{
              background: 'linear-gradient(90deg,#89AACC,#4E85BF)',
              WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 2px))',
              mask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 2px))',
            }}
          />
          <span
            className="absolute inset-[2px] rounded-full flex items-center justify-center font-display italic text-[13px] font-normal text-text-primary"
            style={{ backgroundColor: 'hsl(var(--bg))' }}
          >
            FR
          </span>
        </button>

        {/* Divider */}
        <span className="hidden sm:block w-px h-5 mx-1" style={{ backgroundColor: 'hsl(var(--stroke))' }} />

        {/* Nav links */}
        {navLinks.map((link) => (
          <button
            key={link.label}
            onClick={() => scrollTo(link.id, link.label)}
            className={`rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm transition-all duration-200 ${
              active === link.label
                ? 'text-text-primary'
                : 'text-muted hover:text-text-primary'
            }`}
            style={
              active === link.label
                ? { backgroundColor: 'hsl(var(--stroke) / 0.5)' }
                : {}
            }
          >
            {link.label}
          </button>
        ))}

        {/* Divider */}
        <span className="hidden sm:block w-px h-5 mx-1" style={{ backgroundColor: 'hsl(var(--stroke))' }} />

        {/* Say hi button */}
        <a
          href="mailto:ranafalak18@gmail.com"
          className="relative inline-flex items-center gap-1 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-text-primary transition-all duration-300 group overflow-hidden"
          style={{ backgroundColor: 'hsl(var(--surface))' }}
        >
          {/* Gradient border on hover */}
          <span
            className="absolute inset-[-2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 accent-gradient"
            style={{ zIndex: -1 }}
          />
          <span
            className="absolute inset-[0px] rounded-full"
            style={{ backgroundColor: 'hsl(var(--surface))', zIndex: -1 }}
          />
          <span className="relative z-10">Say hi</span>
          <span className="relative z-10 text-muted">↗</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

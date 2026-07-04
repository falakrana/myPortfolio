import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { label: 'Home',           id: null              },
  { label: 'Experience',     id: 'experience'      },
  { label: 'Education',      id: 'education'       },
  { label: 'Projects',       id: 'projects'        },
  { label: 'Skills',         id: 'skills'          },
  { label: 'Certifications', id: 'certifications'  },
  { label: 'Contact',        id: 'contact'         },
];

// Condensed mobile nav (3 primary + menu toggle)
const primaryLinks = [
  { label: 'Home',     id: null         },
  { label: 'Work',     id: 'projects'   },
  { label: 'Resume',   id: null, href: '/NewResumeSDE.pdf' },
];

const Navbar = () => {
  const [scrolled,     setScrolled]     = useState(false);
  const [active,       setActive]       = useState('Home');
  const [menuOpen,     setMenuOpen]     = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const scrollTo = (link) => {
    setMenuOpen(false);
    setActive(link.label);
    if (link.href) { window.open(link.href, '_blank'); return; }
    if (!link.id)  { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const pillBg = scrolled
    ? 'bg-black/70 shadow-lg shadow-black/40'
    : 'bg-black/30';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4 pointer-events-none">
      <div
        ref={menuRef}
        className={`pointer-events-auto inline-flex items-center rounded-full backdrop-blur-md border border-white/10 px-2 py-2 transition-all duration-300 ${pillBg}`}
      >
        {/* ── Logo ─────────────────────────────────────── */}
        <button
          onClick={() => scrollTo({ label: 'Home', id: null })}
          className="relative w-9 h-9 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 group flex-shrink-0"
          aria-label="Back to top"
        >
          <span
            className="absolute inset-0 rounded-full"
            style={{
              background: 'linear-gradient(90deg, #89AACC, #4E85BF)',
              WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 2px))',
              mask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 2px))',
            }}
          />
          <span
            className="absolute inset-[2px] rounded-full flex items-center justify-center font-display italic text-[13px] text-white"
            style={{ backgroundColor: 'hsl(var(--bg))' }}
          >
            FR
          </span>
        </button>

        <span className="w-px h-5 bg-white/10 mx-1.5" />

        {/* ── Desktop nav links (md+) ──────────────────── */}
        <div className="hidden md:flex items-center">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link)}
              className={`rounded-full px-3 py-1.5 text-xs transition-all duration-200 whitespace-nowrap ${
                active === link.label
                  ? 'text-white bg-white/10'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* ── Mobile: 3 primary links ───────────────────── */}
        <div className="flex md:hidden items-center">
          {primaryLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link)}
              className={`rounded-full px-3 py-1.5 text-xs transition-all duration-200 ${
                active === link.label
                  ? 'text-white bg-white/10'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}

          {/* Hamburger toggle */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="w-8 h-8 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all ml-1"
            aria-label="Toggle menu"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
              {menuOpen ? (
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              ) : (
                <>
                  <rect y="2"  width="14" height="1.5" rx="0.75" />
                  <rect y="6"  width="14" height="1.5" rx="0.75" />
                  <rect y="10" width="14" height="1.5" rx="0.75" />
                </>
              )}
            </svg>
          </button>
        </div>

        <span className="w-px h-5 bg-white/10 mx-1.5" />

        {/* ── Say hi button ────────────────────────────── */}
        <a
          href="mailto:ranafalak18@gmail.com"
          className="relative inline-flex items-center gap-1 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-white transition-all duration-300 group overflow-hidden"
          style={{ backgroundColor: 'hsl(var(--surface))' }}
        >
          <span
            className="absolute inset-[-2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: 'linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)', zIndex: -1 }}
          />
          <span
            className="absolute inset-0 rounded-full transition-colors duration-300"
            style={{ backgroundColor: 'hsl(var(--surface))', zIndex: -1 }}
          />
          <span className="relative z-10 font-medium">Say hi</span>
          <span className="relative z-10 text-white/60 group-hover:text-white transition-colors">↗</span>
        </a>
      </div>

      {/* ── Mobile dropdown menu ─────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 pointer-events-auto rounded-2xl border border-white/10 bg-black/80 backdrop-blur-md p-2 min-w-[180px] shadow-xl shadow-black/40"
            style={{ zIndex: 999 }}
          >
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link)}
                className={`w-full text-left rounded-xl px-4 py-2.5 text-sm transition-all duration-150 ${
                  active === link.label
                    ? 'text-white bg-white/10'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

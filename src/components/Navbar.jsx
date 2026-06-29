import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Experience',    id: 'experience'    },
    { label: 'Education',     id: 'education'     },
    { label: 'Projects',      id: 'projects'      },
    { label: 'Skills',        id: 'skills'        },
    { label: 'Certification', id: 'certifications'},
    { label: 'Contact',       id: 'contact'       },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-lg border-b border-gray-100 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo — left */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-serif font-bold text-2xl transition-colors"
            style={{ color: '#0f172a' }}
          >
            Falak<span style={{ color: '#3b82f6' }}>.</span>
          </button>

          {/* Nav links — center */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA button — right */}
          <div className="hidden md:flex items-center">
            <a
              href="mailto:ranafalak18@gmail.com"
              className="px-5 py-2 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 shadow-sm"
              style={{ backgroundColor: '#3b82f6' }}
            >
              Get in touch
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
            style={{ color: '#0f172a' }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 pt-4 border-t border-gray-100 bg-white/95 backdrop-blur-lg rounded-2xl p-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors py-2"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <a
                  href="mailto:ranafalak18@gmail.com"
                  className="inline-block px-5 py-2 rounded-full text-sm font-semibold text-white"
                  style={{ backgroundColor: '#3b82f6' }}
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const ROLES = ['Creative', 'Fullstack', 'Founder', 'Scholar'];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const nameRef = useRef(null);
  const blurRefs = useRef([]);

  // Cycle roles
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  // GSAP entrance
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      nameRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, delay: 0.1 }
    );

    if (blurRefs.current.length) {
      tl.fromTo(
        blurRefs.current.filter(Boolean),
        { opacity: 0, filter: 'blur(10px)', y: 20 },
        { opacity: 1, filter: 'blur(0px)', y: 0, duration: 1, stagger: 0.1 },
        '-=0.7'
      );
    }
  }, []);

  const addBlurRef = (el) => {
    if (el && !blurRefs.current.includes(el)) {
      blurRefs.current.push(el);
    }
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: 'hsl(var(--bg))' }}
    >
      {/* Subtle background ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(137,170,204,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Grid lines overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(hsl(var(--text)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--text)) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">

        {/* Eyebrow */}
        <p
          ref={addBlurRef}
          className="text-xs uppercase tracking-[0.3em] mb-8"
          style={{ color: 'hsl(var(--muted))' }}
        >
          FULL STACK AI DEVELOPER
        </p>

        {/* Name */}
        <h1
          ref={nameRef}
          className="text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-6"
          style={{ opacity: 0 }}
        >
          Falak Rana
        </h1>

        {/* Role line */}
        <p
          ref={addBlurRef}
          className="text-base md:text-lg mb-4 font-body"
          style={{ color: 'hsl(var(--muted))' }}
        >
          A{' '}
          <span
            key={roleIndex}
            className="font-display italic text-text-primary inline-block animate-role-fade-in"
          >
            {ROLES[roleIndex]}
          </span>{' '}
          developer based in India.
        </p>

        {/* Description */}
        <p
          ref={addBlurRef}
          className="text-sm md:text-base max-w-md mb-12 leading-relaxed"
          style={{ color: 'hsl(var(--muted))' }}
        >
          Building AI-powered systems, clean APIs, and digital experiences that scale — with a focus on the details that make products feel exceptional.
        </p>

        {/* CTA Buttons */}
        <div ref={addBlurRef} className="flex flex-wrap items-center justify-center gap-4">
          {/* See Works */}
          <button
            onClick={() => scrollToSection('projects')}
            className="relative group rounded-full text-sm px-7 py-3.5 font-medium transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: 'hsl(var(--text))',
              color: 'hsl(var(--bg))',
            }}
          >
            <span
              className="absolute inset-[-2px] rounded-full opacity-0 group-hover:opacity-100 accent-gradient transition-opacity duration-300"
              style={{ zIndex: -1 }}
            />
            <span
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ backgroundColor: 'hsl(var(--bg))', zIndex: -1 }}
            />
            <span className="relative group-hover:text-text-primary transition-colors duration-300">
              See Works
            </span>
          </button>

          {/* Resume */}
          <a
            href="/NewResumeSDE.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group rounded-full text-sm px-7 py-3.5 font-medium border-2 transition-all duration-300 hover:scale-105 hover:border-transparent text-text-primary"
            style={{ borderColor: 'hsl(var(--stroke))', backgroundColor: 'hsl(var(--bg))' }}
          >
            <span
              className="absolute inset-[-2px] rounded-full opacity-0 group-hover:opacity-100 accent-gradient transition-opacity duration-300"
              style={{ zIndex: -1 }}
            />
            <span
              className="absolute inset-0 rounded-full"
              style={{ backgroundColor: 'hsl(var(--bg))', zIndex: -1 }}
            />
            <span className="relative">View Resume ↗</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span
          className="text-[10px] uppercase tracking-[0.2em]"
          style={{ color: 'hsl(var(--muted))' }}
        >
          SCROLL
        </span>
        <div className="relative w-px h-10 overflow-hidden" style={{ backgroundColor: 'hsl(var(--stroke))' }}>
          <div
            className="absolute top-0 left-0 w-full animate-scroll-down"
            style={{
              height: '40%',
              background: 'linear-gradient(180deg, #89AACC, #4E85BF)',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

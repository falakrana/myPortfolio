import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const ROLES = ['Creative', 'Fullstack', 'Founder', 'Scholar'];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const nameRef = useRef(null);
  const blurRefs = useRef([]);

  // Cycle roles every 2s
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  // GSAP entrance animation
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      nameRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, delay: 0.1 }
    );

    const validBlurRefs = blurRefs.current.filter(Boolean);
    if (validBlurRefs.length) {
      tl.fromTo(
        validBlurRefs,
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
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

      {/* ─── Cosmic background image ─── */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-top"
        />
        {/* Dark vignette overlay — makes text pop */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 90% 70% at 50% 0%, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.55) 60%, rgba(6,10,16,0.95) 100%)',
          }}
        />
        {/* Bottom fade into bg */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48"
          style={{ background: 'linear-gradient(to top, hsl(var(--bg)) 0%, transparent 100%)' }}
        />
      </div>

      {/* ─── Hero content ─── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">

        {/* Open To Work badge — top pill */}
        <div
          ref={addBlurRef}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-white/15 bg-black/30 backdrop-blur-md shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.7)]" />
          <span className="text-xs text-slate-200 font-medium tracking-widest uppercase">Open To Work</span>
        </div>

        {/* Eyebrow — COLLECTION '26 style */}
        <p
          ref={addBlurRef}
          className="text-xs uppercase tracking-[0.35em] mb-6 text-slate-400"
        >
          COLLECTION &apos;26
        </p>

        {/* Name — huge, italic, Instrument Serif */}
        <h1
          ref={nameRef}
          className="text-[clamp(3.5rem,12vw,8rem)] font-display italic leading-[0.9] tracking-tight text-white mb-6 drop-shadow-2xl"
          style={{ opacity: 0 }}
        >
          Falak Rana
        </h1>

        {/* Role line */}
        <p
          ref={addBlurRef}
          className="text-base md:text-xl mb-5 text-slate-300 font-body"
        >
          A{' '}
          <span
            key={roleIndex}
            className="font-display italic text-white underline underline-offset-4 decoration-white/40 inline-block animate-role-fade-in"
          >
            {ROLES[roleIndex]}
          </span>{' '}
          developer based in India.
        </p>

        {/* Description */}
        <p
          ref={addBlurRef}
          className="text-sm md:text-base max-w-md mb-12 leading-relaxed text-slate-400"
        >
          Building AI-powered systems, clean APIs, and digital experiences that scale — with a focus on the details that make products feel exceptional.
        </p>

        {/* CTA Buttons */}
        <div ref={addBlurRef} className="flex flex-wrap items-center justify-center gap-4">

          {/* See Works — solid white */}
          <button
            onClick={() => scrollToSection('projects')}
            className="group relative rounded-full text-sm px-8 py-3.5 font-semibold transition-all duration-300 hover:scale-105 bg-white text-black hover:bg-white/90"
          >
            <span className="relative">See Works</span>
          </button>

          {/* Reach out — outlined */}
          <a
            href="mailto:ranafalak18@gmail.com"
            className="group relative rounded-full text-sm px-8 py-3.5 font-semibold border-2 border-white/30 text-white backdrop-blur-sm bg-white/5 transition-all duration-300 hover:scale-105 hover:border-white/60 hover:bg-white/10"
          >
            <span className="relative">Reach out...</span>
          </a>
        </div>
      </div>

      {/* ─── Scroll indicator ─── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
        <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400">
          SCROLL
        </span>
        <div
          className="relative w-px h-10 overflow-hidden"
          style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
        >
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

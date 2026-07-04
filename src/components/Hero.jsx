import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Hls from 'hls.js';

const HLS_SRC = 'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8';
const ROLES = ['Creative', 'Fullstack', 'Founder', 'Scholar'];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const nameRef   = useRef(null);
  const blurRefs  = useRef([]);
  const videoRef  = useRef(null);

  // ── HLS video setup ──────────────────────────────────────────────
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls({ autoStartLoad: true, startLevel: -1 });
      hls.loadSource(HLS_SRC);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => video.play().catch(() => {}));
      return () => hls.destroy();
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Safari native HLS
      video.src = HLS_SRC;
      video.addEventListener('loadedmetadata', () => video.play().catch(() => {}));
    }
  }, []);

  // ── Role cycling ─────────────────────────────────────────────────
  useEffect(() => {
    const t = setInterval(() => setRoleIndex((i) => (i + 1) % ROLES.length), 2000);
    return () => clearInterval(t);
  }, []);

  // ── GSAP entrance ────────────────────────────────────────────────
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo(nameRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2, delay: 0.1 });
    const valid = blurRefs.current.filter(Boolean);
    if (valid.length) {
      tl.fromTo(
        valid,
        { opacity: 0, filter: 'blur(10px)', y: 20 },
        { opacity: 1, filter: 'blur(0px)', y: 0, duration: 1, stagger: 0.1 },
        '-=0.7'
      );
    }
  }, []);

  const addBlurRef = (el) => {
    if (el && !blurRefs.current.includes(el)) blurRefs.current.push(el);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

      {/* ── Video background ─────────────────────────────────────── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          autoPlay
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2"
          style={{ filter: 'contrast(1.08) brightness(0.7) saturate(0.85) sepia(0.12)' }}
        />

        {/* Retro scanlines overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.18) 0px, rgba(0,0,0,0.18) 1px, transparent 1px, transparent 3px)',
            backgroundSize: '100% 3px',
          }}
        />

        {/* Subtle film-grain noise via SVG */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none z-10" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30 z-20" />

        {/* Retro vignette */}
        <div
          className="absolute inset-0 pointer-events-none z-20"
          style={{
            background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 50%, rgba(0,0,0,0.55) 100%)',
          }}
        />

        {/* Bottom fade to bg */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48 z-30"
          style={{ background: 'linear-gradient(to top, hsl(var(--bg)) 0%, transparent 100%)' }}
        />
      </div>

      {/* ── Hero content ─────────────────────────────────────────── */}
      <div className="relative z-40 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">

        {/* Open To Work badge */}
        <div
          ref={addBlurRef}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-white/15 bg-black/35 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.7)]" />
          <span className="text-xs text-slate-200 font-medium tracking-widest uppercase">Open To Work</span>
        </div>

        {/* Eyebrow */}
        <p ref={addBlurRef} className="text-xs uppercase tracking-[0.35em] mb-6 text-slate-400">
          COLLECTION &apos;26
        </p>

        {/* Name */}
        <h1
          ref={nameRef}
          className="text-[clamp(3.5rem,12vw,8rem)] font-display italic leading-[0.9] tracking-tight text-white mb-6 drop-shadow-2xl"
          style={{ opacity: 0 }}
        >
          Falak Rana
        </h1>

        {/* Role line */}
        <p ref={addBlurRef} className="text-base md:text-xl mb-5 text-slate-300 font-body">
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
        <p ref={addBlurRef} className="text-sm md:text-base max-w-md mb-12 leading-relaxed text-slate-400">
          Building AI-powered systems, clean APIs, and digital experiences that scale — with a focus on the details that make products feel exceptional.
        </p>

        {/* CTA Buttons */}
        <div ref={addBlurRef} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          {/* See Works — solid white */}
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative rounded-full text-sm px-8 py-3.5 font-semibold transition-all duration-300 hover:scale-105 bg-white text-black hover:bg-white/90 w-full sm:w-auto"
          >
            See Works
          </button>

          {/* Reach out — outlined */}
          <a
            href="mailto:ranafalak18@gmail.com"
            className="group relative rounded-full text-sm px-8 py-3.5 font-semibold border-2 border-white/30 text-white backdrop-blur-sm bg-white/5 transition-all duration-300 hover:scale-105 hover:border-white/60 hover:bg-white/10 w-full sm:w-auto text-center"
          >
            Reach out...
          </a>
        </div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────────── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-40">
        <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400">SCROLL</span>
        <div className="relative w-px h-10 overflow-hidden" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>
          <div
            className="absolute top-0 left-0 w-full animate-scroll-down"
            style={{ height: '40%', background: 'linear-gradient(180deg, #89AACC, #4E85BF)' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

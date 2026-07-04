import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'motion/react';

gsap.registerPlugin(ScrollTrigger);

const certifications = [
  {
    title: 'AWS Cloud Practitioner',
    issuer: 'AWS Skill Builder',
    date: '2025',
    description:
      'Demonstrated foundational knowledge of AWS Cloud, covering core services, pricing, architecture, and security best practices. Focused on serverless infrastructure and IAM.',
    link: '/Certifications/AWS-Simulearn_Cloud-Practitioner.pdf',
    accent: '#89AACC',
    rotation: '-3deg',
  },
  {
    title: 'Linux Fundamentals',
    issuer: 'Cisco',
    date: '2026',
    description:
      'Fundamental Linux operating system concepts, command line operations, system administration, and network configuration for enterprise environments.',
    link: '/Certifications/Linux-unhatched-CISCO.pdf',
    accent: '#7B9FBF',
    rotation: '2deg',
  },
  {
    title: 'Data Science Specialization',
    issuer: 'Udemy Bootcamp',
    date: '2024',
    description:
      'Comprehensive data science bootcamp covering Python, statistics, machine learning, deep learning, and data visualization. Built and deployed multiple predictive models.',
    link: '/Certifications/DataScienceBootcamp.pdf',
    accent: '#6087A6',
    rotation: '-2deg',
  },
  {
    title: 'Fundamentals of ML & AI',
    issuer: 'AWS Skill Builder',
    date: '2026',
    description:
      'Core concepts of machine learning and artificial intelligence on AWS platform, including foundational ML services and AI implementation strategies.',
    link: '/Certifications/fundamental-of-ml-and-ai-aws.pdf',
    accent: '#8FAACC',
    rotation: '4deg',
  },
  {
    title: 'Tableau Visualization',
    issuer: 'Udemy Mastery',
    date: '2024',
    description:
      'Advanced data visualization skills using Tableau. Mastered dashboard creation, data storytelling, and complex calculated fields for business analytics.',
    link: '/Certifications/Tableau.pdf',
    accent: '#7593B8',
    rotation: '-4deg',
  },
  {
    title: 'MySQL Competency',
    issuer: 'Cursa Platform',
    date: '2023',
    description:
      'Proficiency in MySQL database management, query optimization, and relational database design. Covered subqueries, joins, and indexing strategies.',
    link: '/Certifications/SQL.pdf',
    accent: '#89AACC',
    rotation: '3deg',
  },
  {
    title: 'AWS S3 Storage Service',
    issuer: 'AWS Skill Builder',
    date: '2026',
    description:
      'Knowledge of AWS S3 storage service, including object storage, storage optimization, and data transfer options for scalable cloud architecture.',
    link: '/Certifications/intro-aws-s3.pdf',
    accent: '#6B8EAD',
    rotation: '-1deg',
  },
];

// ── CertCard: glow border only on hover, no overlay ──────────────
const CertCard = ({ cert, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-surface rounded-3xl p-6 flex flex-col justify-between cursor-pointer relative overflow-hidden shadow-2xl transition-all duration-300 min-h-[220px] md:aspect-square cert-card-rotate"
      style={{
        // rotation is applied via CSS class on md+
        '--cert-rotation': cert.rotation,
        border: `1px solid ${hovered ? cert.accent : 'rgba(255,255,255,0.1)'}`,
        boxShadow: hovered
          ? `0 0 0 1px ${cert.accent}40, 0 0 18px 4px ${cert.accent}30, 0 8px 32px rgba(0,0,0,0.4)`
          : '0 8px 32px rgba(0,0,0,0.4)',
      }}
    >
      {/* Halftone dot texture */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #89AACC 1.2px, transparent 1.2px)',
          backgroundSize: '10px 10px',
        }}
      />

      {/* Top: issuer + title + date badge */}
      <div className="relative z-10 flex justify-between items-start">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            {cert.issuer}
          </span>
          <h3 className="text-lg md:text-xl font-display italic text-white mt-1">
            {cert.title}
          </h3>
        </div>
        <span
          className="text-[9px] font-bold px-2 py-0.5 rounded-md border flex-shrink-0 ml-2"
          style={{
            backgroundColor: `${cert.accent}15`,
            color: cert.accent,
            borderColor: `${cert.accent}40`,
          }}
        >
          {cert.date}
        </span>
      </div>

      {/* Description */}
      <p className="relative z-10 text-xs md:text-sm text-slate-300 leading-relaxed italic my-4">
        &ldquo;{cert.description}&rdquo;
      </p>

      {/* Bottom CTA */}
      <div
        className="relative z-10 flex justify-between items-center pt-4"
        style={{ borderTop: `1px solid rgba(255,255,255,0.08)` }}
      >
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
          Click to View
        </span>
        <span
          className="text-xs transition-colors duration-300"
          style={{ color: hovered ? cert.accent : 'rgba(255,255,255,0.3)' }}
        >
          ↗
        </span>
      </div>
    </div>
  );
};

const MOBILE_PER_PAGE = 4;

const Certifications = () => {
  const containerRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);
  const [selectedCert, setSelectedCert] = useState(null);
  const [mobilePage, setMobilePage] = useState(0);

  const totalMobilePages = Math.ceil(certifications.length / MOBILE_PER_PAGE);

  const mobileCerts = certifications.slice(
    mobilePage * MOBILE_PER_PAGE,
    (mobilePage + 1) * MOBILE_PER_PAGE
  );

  useEffect(() => {
    // Only apply GSAP scroll parallax on desktop/medium screens
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Parallax columns effect
      gsap.fromTo(
        leftColRef.current,
        { y: 80 },
        {
          y: -150,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        rightColRef.current,
        { y: -80 },
        {
          y: 150,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    });

    return () => mm.revert();
  }, []);

  const leftCerts = certifications.filter((_, i) => i % 2 === 0);
  const rightCerts = certifications.filter((_, i) => i % 2 !== 0);

  return (
    <section
      ref={containerRef}
      id="certifications"
      className="relative overflow-visible py-24 px-6 border-t"
      style={{ borderColor: 'hsl(var(--stroke))' }}
    >
      {/* Background decorations */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl pointer-events-none"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-900/5 rounded-full blur-3xl pointer-events-none"
      />

      {/* Mobile Header (visible on mobile only) */}
      <div className="md:hidden text-center mb-10">
        <div className="section-eyebrow justify-center">Certifications</div>
        <h2 className="text-4xl font-display italic text-white leading-tight mb-4">
          Technical{' '}
          <span className="font-display italic text-white">
            milestones
          </span>
        </h2>
        <p className="text-sm text-slate-300">
          A gallery showcasing my certified expertise and platform qualifications.
        </p>
      </div>

      {/* ── MOBILE: Paginated single-column layout ─────────────────── */}
      <div className="md:hidden relative max-w-lg mx-auto z-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={mobilePage}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-5"
          >
            {mobileCerts.map((cert, index) => (
              <CertCard
                key={mobilePage * MOBILE_PER_PAGE + index}
                cert={cert}
                onClick={() => setSelectedCert(cert)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination controls */}
        <div className="flex items-center justify-between mt-8">
          {/* Page counter */}
          <span className="text-xs font-mono text-slate-400 font-semibold">
            {String(mobilePage + 1).padStart(2, '0')} / {String(totalMobilePages).padStart(2, '0')}
          </span>

          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalMobilePages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setMobilePage(i)}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: i === mobilePage ? '20px' : '6px',
                  height: '6px',
                  backgroundColor: i === mobilePage ? '#89AACC' : 'rgba(255,255,255,0.2)',
                }}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>

          {/* Arrow buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setMobilePage((p) => Math.max(0, p - 1))}
              disabled={mobilePage === 0}
              className="w-10 h-10 rounded-full border flex items-center justify-center text-white transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
              style={{ borderColor: 'hsl(var(--stroke))', backgroundColor: 'hsl(var(--surface))' }}
              aria-label="Previous page"
            >
              ←
            </button>
            <button
              onClick={() => setMobilePage((p) => Math.min(totalMobilePages - 1, p + 1))}
              disabled={mobilePage === totalMobilePages - 1}
              className="w-10 h-10 rounded-full border flex items-center justify-center text-white transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
              style={{ borderColor: 'hsl(var(--stroke))', backgroundColor: 'hsl(var(--surface))' }}
              aria-label="Next page"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* ── DESKTOP: 3-Column parallax layout (md+) ───────────────── */}
      <div className="hidden md:block relative max-w-6xl mx-auto z-20">
        <div className="grid grid-cols-3 gap-12 items-start">
          
          {/* Left Column */}
          <div ref={leftColRef} className="space-y-12">
            {leftCerts.map((cert, index) => (
              <CertCard
                key={index}
                cert={cert}
                onClick={() => setSelectedCert(cert)}
              />
            ))}
          </div>

          {/* Center Column (Sticky Desktop text) */}
          <div className="sticky top-[30vh] py-8 text-center max-w-xs mx-auto z-10">
            <div className="section-eyebrow justify-center">Certifications</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display italic text-white leading-tight mb-4">
              Technical{' '}
              <span className="font-display italic text-white">
                milestones
              </span>
            </h2>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              A scroll-driven gallery showcasing my certified expertise, technical milestones, and platform qualifications.
            </p>
          </div>

          {/* Right Column */}
          <div ref={rightColRef} className="space-y-12 mt-24">
            {rightCerts.map((cert, index) => (
              <CertCard
                key={index}
                cert={cert}
                onClick={() => setSelectedCert(cert)}
              />
            ))}
          </div>

        </div>
      </div>

      {/* Lightbox / Modal View */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="bg-surface border border-stroke rounded-3xl w-full max-w-4xl max-h-[90vh] h-[85vh] overflow-hidden flex flex-col relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full border border-stroke bg-bg/50 backdrop-blur text-white flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                ✕
              </button>

              {/* Title Header */}
              <div className="p-6 border-b border-stroke flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-surface">
                <div>
                  <span className="text-xs uppercase tracking-widest text-slate-400">{selectedCert.issuer}</span>
                  <h3 className="text-2xl md:text-3xl font-display italic text-white">
                    {selectedCert.title}
                  </h3>
                </div>
                <a
                  href={selectedCert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2"
                  style={{
                    background: 'linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)',
                    color: 'hsl(var(--bg))',
                  }}
                >
                  Download PDF ↗
                </a>
              </div>

              {/* PDF Viewer frame */}
              <div className="flex-1 bg-bg relative">
                <iframe
                  src={selectedCert.link + '#toolbar=0'}
                  title={selectedCert.title}
                  className="w-full h-full border-0"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;

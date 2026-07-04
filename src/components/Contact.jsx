import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'motion/react';

gsap.registerPlugin(ScrollTrigger);

const MARQUEE_TEXT = 'AVAILABLE FOR WORK • BUILDING THE FUTURE • ';

const Contact = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        xPercent: -50,
        duration: 25,
        ease: 'none',
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      className="pt-20 md:pt-28 pb-0 relative bg-bg overflow-hidden"
      style={{ borderTop: '1px solid hsl(var(--stroke))' }}
    >
      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at bottom, rgba(137,170,204,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <div className="section-eyebrow justify-center">Contact</div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary leading-tight mb-6">
            Let's work{' '}
            <span className="font-display italic text-text-primary">
              together
            </span>
          </h2>
          <p
            className="text-base md:text-lg max-w-lg mx-auto leading-relaxed"
            style={{ color: 'hsl(var(--muted))' }}
          >
            I'm open to freelance opportunities and exciting projects. Don't hesitate to reach out.
          </p>
        </motion.div>

        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border"
            style={{
              backgroundColor: 'hsl(var(--surface))',
              borderColor: 'hsl(var(--stroke))',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.6)] animate-pulse" />
            <span className="text-xs font-medium text-text-primary uppercase tracking-widest">
              Available for projects
            </span>
          </div>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          {/* Email */}
          <motion.a
            href="mailto:ranafalak18@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative rounded-2xl p-7 border overflow-hidden transition-all duration-500 hover:-translate-y-1 block"
            style={{
              backgroundColor: 'hsl(var(--surface))',
              borderColor: 'hsl(var(--stroke))',
            }}
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(137,170,204,0.06) 0%, transparent 70%)',
              }}
            />
            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300"
                style={{
                  backgroundColor: 'rgba(137,170,204,0.1)',
                  border: '1px solid rgba(137,170,204,0.2)',
                }}
              >
                <svg className="w-5 h-5" fill="none" stroke="#89AACC" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-widest mb-0.5" style={{ color: 'hsl(var(--muted))' }}>
                  Email me at
                </p>
                <p className="text-text-primary font-semibold text-base group-hover:text-white transition-colors">
                  ranafalak18@gmail.com
                </p>
              </div>
            </div>
            <p className="text-sm" style={{ color: 'hsl(var(--muted))' }}>
              Drop me an email anytime. I'll get back to you as soon as possible.
            </p>
            <span
              className="absolute top-5 right-5 text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg"
            >
              ↗
            </span>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/falak-rana-125520221/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="group relative rounded-2xl p-7 border overflow-hidden transition-all duration-500 hover:-translate-y-1 block"
            style={{
              backgroundColor: 'hsl(var(--surface))',
              borderColor: 'hsl(var(--stroke))',
            }}
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(137,170,204,0.06) 0%, transparent 70%)',
              }}
            />
            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300"
                style={{
                  backgroundColor: 'rgba(137,170,204,0.1)',
                  border: '1px solid rgba(137,170,204,0.2)',
                }}
              >
                <svg className="w-5 h-5" fill="#89AACC" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-widest mb-0.5" style={{ color: 'hsl(var(--muted))' }}>
                  Connect on
                </p>
                <p className="text-text-primary font-semibold text-base group-hover:text-white transition-colors">
                  LinkedIn
                </p>
              </div>
            </div>
            <p className="text-sm" style={{ color: 'hsl(var(--muted))' }}>
              Let's connect professionally and grow our networks together.
            </p>
            <span className="absolute top-5 right-5 text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg">
              ↗
            </span>
          </motion.a>
        </div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center gap-4 mb-16"
        >
          {[
            {
              href: 'https://github.com/falakrana',
              label: 'GitHub',
              icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              ),
            },
            {
              href: 'https://twitter.com/falakrana30',
              label: 'Twitter',
              icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              ),
            },
            {
              href: 'https://www.linkedin.com/in/falak-rana-125520221/',
              label: 'LinkedIn',
              icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              ),
            },
            {
              href: 'mailto:ranafalak18@gmail.com',
              label: 'Email',
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ),
            },
          ].map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20"
              style={{
                backgroundColor: 'hsl(var(--surface))',
                borderColor: 'hsl(var(--stroke))',
                color: 'hsl(var(--muted))',
              }}
            >
              {icon}
            </a>
          ))}
        </motion.div>
      </div>

      {/* GSAP Marquee ticker */}
      <div
        className="overflow-hidden border-t py-5 relative"
        style={{ borderColor: 'hsl(var(--stroke))' }}
      >
        <div ref={marqueeRef} className="flex whitespace-nowrap will-change-transform">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="text-xs font-bold uppercase tracking-[0.3em] pr-12 flex-shrink-0"
              style={{ color: 'hsl(var(--muted))' }}
            >
              {MARQUEE_TEXT}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;

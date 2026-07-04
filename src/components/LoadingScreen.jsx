import React, { useState, useEffect, useRef } from 'react';

const WORDS = ['Design', 'Create', 'Inspire'];
const DURATION_MS = 2700;

const LoadingScreen = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [wordVisible, setWordVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const startRef = useRef(null);
  const rafRef = useRef(null);

  // Counter using rAF
  useEffect(() => {
    startRef.current = performance.now();
    const tick = (now) => {
      const elapsed = now - startRef.current;
      const progress = Math.min(elapsed / DURATION_MS, 1);
      const eased = progress < 0.5
        ? 2 * progress * progress
        : -1 + (4 - 2 * progress) * progress;
      const nextCount = Math.floor(eased * 100);
      setCount(nextCount);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setCount(100);
        setTimeout(() => {
          setLeaving(true);
          setTimeout(onComplete, 500);
        }, 400);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [onComplete]);

  // Cycling words
  useEffect(() => {
    const cycle = setInterval(() => {
      setWordVisible(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % WORDS.length);
        setWordVisible(true);
      }, 300);
    }, 900);
    return () => clearInterval(cycle);
  }, []);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col overflow-hidden"
      style={{
        backgroundColor: 'hsl(var(--bg))',
        opacity: leaving ? 0 : 1,
        transition: leaving ? 'opacity 0.5s ease-out' : 'none',
      }}
    >
      {/* Top-left label */}
      <div
        className="absolute top-8 left-8 text-xs uppercase tracking-[0.3em]"
        style={{ color: 'hsl(var(--muted))' }}
      >
        Portfolio
      </div>

      {/* Center word */}
      <div className="flex-1 flex items-center justify-center">
        <span
          className="text-5xl md:text-7xl lg:text-8xl font-display italic"
          style={{
            color: 'hsla(var(--text) / 0.8)',
            opacity: wordVisible ? 1 : 0,
            transform: wordVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.3s ease, transform 0.3s ease',
          }}
        >
          {WORDS[wordIndex]}
        </span>
      </div>

      {/* Bottom right counter */}
      <div className="absolute bottom-10 right-8">
        <span
          className="text-7xl md:text-9xl font-display tabular-nums leading-none"
          style={{ color: 'hsl(var(--text))' }}
        >
          {String(count).padStart(3, '0')}
        </span>
      </div>

      {/* Bottom progress bar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[3px]"
        style={{ backgroundColor: 'hsla(var(--stroke) / 0.5)' }}
      >
        <div
          className="h-full accent-gradient origin-left"
          style={{
            transform: `scaleX(${count / 100})`,
            transition: 'transform 0.05s linear',
            boxShadow: '0 0 8px rgba(137,170,204,0.35)',
          }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;

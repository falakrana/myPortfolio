import React, { useMemo, useEffect, useRef, useState } from 'react';

/* ─────────────────────────────────────────────
   Floating tick/dash particles (static layer)
───────────────────────────────────────────── */
const StaticParticles = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 80 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      width: `${8 + Math.random() * 8}px`,
      height: `${2 + Math.random() * 2}px`,
      rotation: -55 + Math.random() * 110,
      opacity: 0.35 + Math.random() * 0.45,
      duration: `${3 + Math.random() * 5}s`,
      delay: `-${Math.random() * 8}s`,
    }));
  }, []);

  return (
    <>
      {particles.map((p) => (
        <span
          key={p.id}
          aria-hidden="true"
          style={{
            position: 'fixed',
            left: p.left,
            top: p.top,
            width: p.width,
            height: p.height,
            borderRadius: '2px',
            backgroundColor: '#3b82f6',
            opacity: p.opacity,
            '--rot': `rotate(${p.rotation}deg)`,
            animation: `floatTick ${p.duration} ease-in-out ${p.delay} infinite`,
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
      ))}
    </>
  );
};

/* ─────────────────────────────────────────────
   Cursor trail effect
───────────────────────────────────────────── */
const CursorEffect = () => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -999, y: -999 });
  const trails = useRef([]);
  const raf = useRef(null);
  const TRAIL_LENGTH = 18;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMove = (e) => {
      const x = e.clientX ?? e.touches?.[0]?.clientX;
      const y = e.clientY ?? e.touches?.[0]?.clientY;
      if (x !== undefined) mouse.current = { x, y };
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onMove, { passive: true });

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Push current mouse position to trail
      trails.current.push({ x: mouse.current.x, y: mouse.current.y });
      if (trails.current.length > TRAIL_LENGTH) trails.current.shift();

      // Draw trail segments
      trails.current.forEach((pt, i) => {
        const progress = i / trails.current.length;
        const alpha = progress * 0.55;
        const size = progress * 6;

        // Small tick shape at each trail point
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.translate(pt.x, pt.y);
        ctx.rotate((i * 18 * Math.PI) / 180);
        ctx.fillStyle = '#3b82f6';
        ctx.beginPath();
        ctx.roundRect(-size, -size * 0.25, size * 2, size * 0.5, 1);
        ctx.fill();
        ctx.restore();
      });

      // Cursor dot
      ctx.save();
      ctx.globalAlpha = 0.9;
      ctx.fillStyle = '#3b82f6';
      ctx.beginPath();
      ctx.arc(mouse.current.x, mouse.current.y, 4, 0, Math.PI * 2);
      ctx.fill();
      // Outer ring
      ctx.globalAlpha = 0.2;
      ctx.beginPath();
      ctx.arc(mouse.current.x, mouse.current.y, 14, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
};

/* ─────────────────────────────────────────────
   Combined export
───────────────────────────────────────────── */
const ParticleBackground = () => (
  <>
    <style>{`
      @keyframes floatTick {
        0%, 100% { transform: var(--rot) translateY(0px); }
        50%       { transform: var(--rot) translateY(-14px); }
      }
    `}</style>
    <StaticParticles />
    <CursorEffect />
  </>
);

export default ParticleBackground;

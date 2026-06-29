import React, { useEffect, useRef } from 'react';

const PARTICLE_COUNT = 140;
const MAGNET_RADIUS = 180;   // px — how close cursor needs to be to attract
const MAGNET_STRENGTH = 0.06; // how strongly pulled (0–1)
const RETURN_SPEED = 0.04;   // how fast they drift back home

/* ── build initial particle data ── */
function createParticles(W, H) {
  return Array.from({ length: PARTICLE_COUNT }, () => {
    const ox = Math.random() * W;
    const oy = Math.random() * H;
    return {
      ox, oy,           // home position (viewport %)
      x: ox, y: oy,    // current position
      w: 8 + Math.random() * 8,
      h: 2 + Math.random() * 2,
      rot: -55 + Math.random() * 110,   // degrees
      opacity: 0.3 + Math.random() * 0.5,
      // float oscillation
      floatAmp: 8 + Math.random() * 6,
      floatSpeed: 0.3 + Math.random() * 0.5,
      floatOffset: Math.random() * Math.PI * 2,
    };
  });
}

/* ── Canvas particle layer ── */
const ParticleCanvas = () => {
  const canvasRef = useRef(null);
  const stateRef = useRef({
    particles: [],
    mouse: { x: -9999, y: -9999 },
    raf: null,
    t: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const s = stateRef.current;

    const isTouchDevice = window.matchMedia('(hover: none)').matches;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      s.particles = createParticles(canvas.width, canvas.height);
    };
    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e) => {
      s.mouse.x = e.clientX;
      s.mouse.y = e.clientY;
    };
    const onMouseLeave = () => {
      s.mouse.x = -9999;
      s.mouse.y = -9999;
    };

    if (!isTouchDevice) {
      window.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseleave', onMouseLeave);
    }

    const tick = () => {
      s.t += 0.016;
      const { width: W, height: H } = canvas;
      ctx.clearRect(0, 0, W, H);

      const mx = s.mouse.x;
      const my = s.mouse.y;

      for (const p of s.particles) {
        const floatY = Math.sin(s.t * p.floatSpeed + p.floatOffset) * p.floatAmp;
        const homeX = p.ox;
        const homeY = p.oy + floatY;

        if (!isTouchDevice) {
          // ── magnet attraction (desktop only) ──
          const dx = mx - p.x;
          const dy = my - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MAGNET_RADIUS && dist > 0) {
            const force = (1 - dist / MAGNET_RADIUS) * MAGNET_STRENGTH;
            p.x += dx * force;
            p.y += dy * force;
          } else {
            p.x += (homeX - p.x) * RETURN_SPEED;
            p.y += (homeY - p.y) * RETURN_SPEED;
          }
        } else {
          // ── mobile: just float at home position ──
          p.x = homeX;
          p.y = homeY;
        }

        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rot * Math.PI) / 180);
        ctx.fillStyle = '#3b82f6';
        ctx.beginPath();
        ctx.roundRect(-p.w / 2, -p.h / 2, p.w, p.h, 2);
        ctx.fill();
        ctx.restore();
      }

      s.raf = requestAnimationFrame(tick);
    };
    s.raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(s.raf);
      window.removeEventListener('resize', resize);
      if (!isTouchDevice) {
        window.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseleave', onMouseLeave);
      }
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
        zIndex: 0,
      }}
    />
  );
};

/* ── Blue cursor dot ── */
const CursorDot = () => {
  const dotRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    // Don't show cursor dot on touch devices
    if (window.matchMedia('(hover: none)').matches) return;

    const onMove = (e) => {
      dot.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
      dot.style.opacity = '1';
    };
    const onLeave = () => { dot.style.opacity = '0'; };
    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 10,
        height: 10,
        borderRadius: '50%',
        backgroundColor: '#3b82f6',
        opacity: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        willChange: 'transform',
        boxShadow: '0 0 8px rgba(59,130,246,0.6)',
      }}
    />
  );
};

/* ── Combined export ── */
const ParticleBackground = () => (
  <>
    <ParticleCanvas />
    <CursorDot />
  </>
);

export default ParticleBackground;

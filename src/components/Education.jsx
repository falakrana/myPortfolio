import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

const education = [
  {
    degree: 'B.Tech in Computer Science',
    institution: 'Parul University',
    duration: '2022 – 2026',
    shortDesc: 'Focusing on Software Engineering and Artificial Intelligence.',
    score: '8.26 / 10.0',
    accent: '#89AACC',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop',
    tag: 'B.Tech',
  },
  {
    degree: 'Higher Secondary (12th)',
    institution: 'Green Valley High School',
    duration: '2022',
    shortDesc: 'Science stream with Mathematics and Computer Science.',
    score: '91.8 / 100',
    accent: '#7B9FBF',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2072&auto=format&fit=crop',
    tag: 'HSC',
  },
];

const DraggableCard = ({ edu, index }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const tooltipX = useMotionValue(0);
  const tooltipY = useMotionValue(0);
  const tooltipOpacity = useSpring(0);

  const onPointerDown = (e) => {
    setDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
    e.currentTarget.setPointerCapture(e.pointerId);
    tooltipOpacity.set(0);
  };

  const onPointerMove = (e) => {
    if (!dragging) {
      const rect = e.currentTarget.getBoundingClientRect();
      tooltipX.set(e.clientX - rect.left);
      tooltipY.set(e.clientY - rect.top);
      return;
    }
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    const rx = Math.sign(dx) * Math.pow(Math.abs(dx), 0.75) * 1.5;
    const ry = Math.sign(dy) * Math.pow(Math.abs(dy), 0.75) * 1.5;
    setPos({ x: rx, y: ry });
  };

  const onPointerUp = (e) => {
    setDragging(false);
    setPos({ x: 0, y: 0 });
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
      className="group relative flex flex-col"
    >
      {/* Image card top */}
      <div
        className="relative h-56 md:h-64 rounded-3xl overflow-hidden border transition-transform duration-500 group-hover:-translate-y-1"
        style={{ borderColor: 'hsl(var(--stroke))' }}
      >
        <img
          src={edu.image}
          alt={edu.degree}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          draggable="false"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Duration badge */}
        <div className="absolute top-4 left-4">
          <span
            className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-md border"
            style={{
              backgroundColor: `${edu.accent}20`,
              color: edu.accent,
              borderColor: `${edu.accent}40`,
            }}
          >
            {edu.duration}
          </span>
        </div>

        {/* Degree tag */}
        <div className="absolute top-4 right-4">
          <span
            className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest"
            style={{ backgroundColor: edu.accent, color: 'hsl(var(--bg))' }}
          >
            {edu.tag}
          </span>
        </div>

        {/* Bottom name */}
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-white font-semibold text-lg leading-tight">{edu.institution}</p>
        </div>
      </div>

      {/* SVG threads */}
      <svg className="absolute top-[224px] md:top-[256px] left-8 overflow-visible pointer-events-none z-0" style={{ width: 2, height: 80 }}>
        <line x1="0" y1="0" x2={pos.x * 0.3} y2={60 + pos.y * 0.3}
          stroke={`${edu.accent}60`} strokeWidth="1.5" strokeLinecap="round"
          className={dragging ? '' : 'transition-all duration-700 ease-out'} />
      </svg>
      <svg className="absolute top-[224px] md:top-[256px] right-8 overflow-visible pointer-events-none z-0" style={{ width: 2, height: 80 }}>
        <line x1="0" y1="0" x2={pos.x * 0.3} y2={60 + pos.y * 0.3}
          stroke={`${edu.accent}60`} strokeWidth="1.5" strokeLinecap="round"
          className={dragging ? '' : 'transition-all duration-700 ease-out'} />
      </svg>

      {/* Draggable info card */}
      <div
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onMouseEnter={() => tooltipOpacity.set(1)}
        onMouseLeave={() => tooltipOpacity.set(0)}
        className="mt-5 rounded-2xl p-5 border touch-none relative transform-gpu"
        style={{
          backgroundColor: 'hsl(var(--surface))',
          borderColor: 'hsl(var(--stroke))',
          borderTop: `2px solid ${edu.accent}40`,
          transform: dragging
            ? `translate(${pos.x}px,${pos.y}px) rotate(${pos.x * 0.04}deg)`
            : 'translate(0px,0px) rotate(0deg)',
          transition: dragging ? 'none' : 'transform 0.8s cubic-bezier(0.34,1.56,0.64,1)',
          cursor: dragging ? 'grabbing' : 'grab',
        }}
      >
        <p className="text-slate-100 text-sm font-medium leading-relaxed mb-4 select-none pointer-events-none">
          Studied{' '}
          <span className="font-semibold text-white">{edu.degree}</span>{' '}
          at {edu.institution}. {edu.shortDesc}
        </p>

        <div className="flex items-center justify-between">
          <span
            className="px-4 py-1.5 rounded-xl text-[11px] font-bold select-none"
            style={{ backgroundColor: `${edu.accent}20`, color: edu.accent }}
          >
            Score: {edu.score}
          </span>
          <span
            className="text-[10px] uppercase tracking-widest select-none text-slate-300 font-semibold"
          >
            Drag to stretch
          </span>
        </div>

        {/* Tooltip */}
        <motion.div
          className="pointer-events-none absolute top-0 left-0 px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap hidden sm:block"
          style={{
            x: tooltipX,
            y: tooltipY,
            opacity: tooltipOpacity,
            backgroundColor: 'hsl(var(--surface))',
            border: '1px solid hsl(var(--stroke))',
            color: 'hsl(var(--text))',
            zIndex: 50,
          }}
        >
          Stretch &amp; play ✦
        </motion.div>
      </div>
    </motion.div>
  );
};

const Education = () => (
  <section id="education" className="py-20 md:py-28 px-6 relative bg-bg overflow-hidden">
    <div
      className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
      style={{
        background: 'radial-gradient(circle at bottom left, rgba(137,170,204,0.04) 0%, transparent 60%)',
      }}
    />

    <div className="max-w-5xl mx-auto relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        className="mb-16"
      >
        <div className="section-eyebrow">Education</div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display italic text-text-primary leading-tight">
          Academic{' '}
          <span className="font-display italic text-text-primary">
            journey
          </span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20">
        {education.map((edu, i) => (
          <DraggableCard edu={edu} index={i} key={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Education;

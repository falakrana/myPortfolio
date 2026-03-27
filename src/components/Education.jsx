import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

const ElasticHangingCard = ({ edu }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });

  // Tooltip tracking
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateFigcaption = useSpring(0, { stiffness: 350, damping: 30, mass: 1 });
  const opacity = useSpring(0);
  const [lastY, setLastY] = useState(0);

  const handlePointerDown = (e) => {
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
    e.currentTarget.setPointerCapture(e.pointerId);
    opacity.set(0); // Hide tooltip while dragging
  };

  const handlePointerMove = (e) => {
    // Tooltip logic
    if (!isDragging) {
      const rect = e.currentTarget.getBoundingClientRect();
      const offsetX = e.clientX - rect.left - rect.width / 2;
      const offsetY = e.clientY - rect.top - rect.height / 2;

      x.set(e.clientX - rect.left);
      y.set(e.clientY - rect.top);

      const velocityY = offsetY - lastY;
      rotateFigcaption.set(-velocityY * 0.6);
      setLastY(offsetY);
    }

    // Drag logic
    if (!isDragging) return;
    const deltaX = e.clientX - dragStart.current.x;
    const deltaY = e.clientY - dragStart.current.y;
    
    const rx = Math.sign(deltaX) * Math.pow(Math.abs(deltaX), 0.75) * 1.5;
    const ry = Math.sign(deltaY) * Math.pow(Math.abs(deltaY), 0.75) * 1.5;
    
    setPos({ x: rx, y: ry });
  };

  const handlePointerUp = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    setPos({ x: 0, y: 0 });
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  const handleMouseEnter = () => {
    if (!isDragging) opacity.set(1);
  };

  const handleMouseLeave = () => {
    opacity.set(0);
    rotateFigcaption.set(0);
  };

  const cardTransform = isDragging 
    ? `translate(${pos.x}px, ${pos.y}px) rotate(${pos.x * 0.05}deg)` 
    : `translate(0px, 0px) rotate(0deg)`;

  const transitionClass = isDragging 
    ? 'transition-none shadow-xl z-30 cursor-grabbing' 
    : 'transition-all duration-[800ms] cursor-grab hover:shadow-lg origin-top swing-on-hover z-20';

  const springStyle = isDragging ? {} : {
    transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' 
  };

  return (
    <div className="flex flex-col group relative">
      {/* TOP CARD: Image / Color Background */}
      <div className={`h-[240px] md:h-[280px] ${edu.bgColor} rounded-[2rem] relative overflow-hidden shadow-sm transition-transform duration-500 group-hover:-translate-y-1 z-10`}>
        <div className="absolute inset-x-8 top-10 bottom-0 pointer-events-none">
          <div className="w-full h-full bg-white/10 backdrop-blur-sm rounded-t-2xl overflow-hidden border-t border-x border-white/20 shadow-2xl">
            <img 
              src={edu.image}
              alt={edu.degree}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              draggable="false"
            />
          </div>
        </div>

        {/* Date Badge */}
        <div className="absolute top-4 left-6 z-10 pointer-events-none">
          <div className="bg-white/90 backdrop-blur px-3 py-1 rounded-full shadow-sm">
            <span className="text-[10px] font-bold text-text-primary tracking-widest">{edu.duration}</span>
          </div>
        </div>
      </div>

      {/* SVG THREADS */}
      <svg className="absolute top-[240px] md:top-[280px] left-10 w-[2px] overflow-visible pointer-events-none z-0" style={{ height: '100px' }}>
         <line 
           x1="0" y1="0" 
           x2={pos.x} y2={24 + pos.y} 
           stroke="#d1d5db" strokeWidth="2" strokeLinecap="round" opacity="0.6" 
           className={isDragging ? '' : 'transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]'}
         />
      </svg>
      <svg className="absolute top-[240px] md:top-[280px] right-10 w-[2px] overflow-visible pointer-events-none z-0" style={{ height: '100px' }}>
         <line 
           x1="0" y1="0" 
           x2={pos.x} y2={24 + pos.y} 
           stroke="#d1d5db" strokeWidth="2" strokeLinecap="round" opacity="0.6" 
           className={isDragging ? '' : 'transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]'}
         />
      </svg>

      {/* HANGING CONTENT ELEMENT */}
      <div 
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`mt-6 bg-white rounded-[1.5rem] p-4 shadow-sm border border-gray-100/50 flex flex-col justify-between transform-gpu touch-none relative ${transitionClass}`}
        style={{ transform: cardTransform, ...(!isDragging ? springStyle : {}) }}
      >
        <div className="pointer-events-none select-none">
          <p className="text-text-primary text-[13px] font-medium leading-relaxed mb-3">
            Studied <span className="font-bold">{edu.degree}</span> at {edu.institution}. {edu.shortDesc}
          </p>
        </div>

        <div className="flex z-30 pointer-events-auto">
          <span 
            onPointerDown={(e) => e.stopPropagation()} 
            className="bg-accent-black text-white px-5 py-1.5 rounded-xl text-[10px] font-bold select-none cursor-default"
          >
            Score: {edu.score}
          </span>
        </div>

        {/* Hover Tooltip implementation from TiltedCard */}
        <motion.figcaption
          className="pointer-events-none absolute left-0 top-0 rounded-lg bg-white/95 backdrop-blur px-3 py-1.5 text-xs text-[#2d2d2d] z-[50] hidden sm:block shadow-lg border border-gray-100 font-bold tracking-tight whitespace-nowrap"
          style={{
            x,
            y,
            opacity,
            rotate: rotateFigcaption
          }}
        >
          {edu.degree} - Score: {edu.score}
        </motion.figcaption>
      </div>
    </div>
  );
};

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Parul University",
      duration: "2022 - 2026",
      shortDesc: "Focusing on Software Engineering and AI.",
      bgColor: "bg-gradient-to-br from-yellow-300 to-orange-400",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
      score: "8.26/10.0"
    },
    {
      degree: "Higher Secondary (12th)",
      institution: "Green Valley High School",
      duration: "2022",
      shortDesc: "Science stream with Math and CS.",
      bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2072&auto=format&fit=crop",
      score: "91.8/100.0"
    }
  ];

  return (
    <section id="education" className="py-24 px-6 relative bg-light-bg overflow-hidden">
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16 fade-in">
          <h2 className="section-title italic font-serif italic mb-4">Education</h2>
          <p className="text-text-secondary font-medium uppercase tracking-[0.2em] text-xs">A journey through knowledge</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mt-12 fade-in">
          {education.map((edu, index) => (
            <ElasticHangingCard edu={edu} key={index} />
          ))}
        </div>
      </div>

      <style>{`
        .swing-on-hover {
          transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        /* Group hover triggers swing ONLY if swing-on-hover class is present */
        .group:hover .swing-on-hover {
          animation: swingAnimation 2s ease-in-out infinite;
        }
        @keyframes swingAnimation {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(2deg); }
          75% { transform: rotate(-2deg); }
        }
      `}</style>
    </section>
  );
};

export default Education;

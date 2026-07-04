import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const experiences = [
  {
    role: 'Software Developer Intern',
    company: 'Infodesk India Pvt. Ltd.',
    period: "Jan '26 – May '26",
    accentColor: '#89AACC',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=200&auto=format&fit=crop',
    achievements: [
      'Developing scalable microservices and REST APIs using .NET (C#) and Spring Boot (Java) for enterprise systems',
      'Building responsive UIs with React, Next.js, TypeScript and managing async workflows using Redux Saga',
      'Managing cloud infrastructure on AWS (EC2, S3, CloudWatch) for automation, logging, and deployment',
      'Designing and optimizing databases using SQL and MongoDB',
      'Developing high-performance Rust CLI tools for legal document analysis',
    ],
  },
  {
    role: 'Machine Learning Intern',
    company: 'Unified Mentor',
    period: "Jan '25 – Apr '25",
    accentColor: '#7B9FBF',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=200&auto=format&fit=crop',
    achievements: [
      'Delivered 6 real-world end-to-end Machine Learning projects',
      'Performed data cleaning and feature engineering at scale',
      'Optimized models using Scikit-learn and TensorFlow',
      'Built predictive systems for complex datasets',
      'Integrated ML models with Flask-based web backends',
    ],
  },
  {
    role: 'AI Research Intern',
    company: 'Parul University',
    period: "Jun '24 – Jan '25",
    accentColor: '#6087A6',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=200&auto=format&fit=crop',
    achievements: [
      'Worked in a team conducting research on ML models',
      'Conducted research on transformer architectures and BERT',
    ],
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    rotateX: 12,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 70,
      damping: 15,
      duration: 0.8,
    },
  },
};

const dotVariants = {
  hidden: {
    scale: 0.6,
    backgroundColor: 'rgba(30, 41, 59, 1)', // slate-800
    borderColor: 'rgba(51, 65, 85, 1)', // slate-700
    boxShadow: '0 0 0px rgba(0,0,0,0)',
  },
  visible: (accentColor) => ({
    scale: 1.25,
    backgroundColor: 'rgba(10, 10, 10, 1)', // deep dark bg
    borderColor: accentColor,
    boxShadow: `0 0 16px ${accentColor}`,
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 12,
      delay: 0.1,
    },
  }),
};

const connectorVariants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut', delay: 0.1 },
  },
};

const ExperienceCard = ({ exp, index, isLast, expandedIndex, toggleExpand }) => {
  const cardRef = useRef(null);
  const isExpanded = expandedIndex === index;

  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="relative"
    >
      {/* Vertical line segment connecting to the next dot */}
      {!isLast && (
        <div
          className="absolute left-0 top-[40px] md:top-[56px] w-[2px] bg-stroke/30 rounded-full"
          style={{ height: 'calc(100% + 3rem)' }}
        />
      )}

      {/* Horizontal connector line */}
      <motion.div
        variants={connectorVariants}
        className="absolute left-[-32px] md:left-[-64px] top-[40px] md:top-[56px] -translate-y-1/2 h-[1px] bg-stroke/50 origin-left -z-10 w-8 md:w-16"
      />

      {/* Timeline dot */}
      <motion.div
        custom={exp.accentColor}
        variants={dotVariants}
        className="absolute left-[-32px] md:left-[-64px] top-[40px] md:top-[56px] -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 z-20 flex items-center justify-center bg-bg"
      >
        {/* Glowing inner dot */}
        <div
          className="w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: exp.accentColor }}
        />
      </motion.div>

      {/* Card itself */}
      <motion.div
        variants={cardVariants}
        onClick={() => toggleExpand(index)}
        className={`group block w-full text-left rounded-[32px] md:rounded-[48px] p-4 md:p-6 border border-stroke transition-all duration-300 cursor-pointer overflow-hidden ${
          isExpanded ? 'bg-surface border-white/20' : 'bg-surface/30 hover:bg-surface'
        }`}
        style={{
          transformOrigin: 'top center',
        }}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 md:gap-6">
          <div className="flex items-center gap-4 md:gap-6 flex-1">
            {/* Circle Image */}
            <img
              src={exp.image}
              alt={exp.company}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border border-stroke flex-shrink-0"
            />
            
            {/* Role & Company */}
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-lg md:text-xl font-medium text-white group-hover:text-white transition-colors">
                  {exp.role}
                </h3>
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: exp.accentColor }}
                />
                <span className="text-xs text-slate-300 font-mono">{exp.period}</span>
              </div>
              <p className="text-sm mt-0.5 font-semibold" style={{ color: exp.accentColor }}>
                {exp.company}
              </p>
            </div>
          </div>

          {/* Right trigger / read-time styling */}
          <div className="flex items-center gap-3 self-end sm:self-auto text-white">
            <span className="text-xs uppercase tracking-widest text-slate-300 hidden md:inline-block">
              {isExpanded ? 'Collapse' : 'View Achievements'}
            </span>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="w-8 h-8 rounded-full border border-stroke flex items-center justify-center bg-bg/40 text-white"
            >
              ↓
            </motion.div>
          </div>
        </div>

        {/* Collapsible achievements */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: 'auto', opacity: 1, marginTop: 24 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="border-t border-stroke pt-5 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="space-y-3 pl-2 md:pl-20">
                {exp.achievements.map((ach, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span
                      className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: exp.accentColor }}
                    />
                    <p className="text-sm md:text-base text-slate-200 leading-relaxed">
                      {ach}
                    </p>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-20 md:py-28 px-6 relative bg-bg overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at top right, rgba(137,170,204,0.05) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <div className="section-eyebrow">Work Experience</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display italic text-text-primary leading-tight">
              Work{' '}
              <span className="font-display italic text-text-primary">
                experience
              </span>
            </h2>
          </div>
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-stroke px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-text-primary hover:bg-surface/50 transition-colors"
          >
            View Projects ↘
          </button>
        </motion.div>

        {/* Journal style list with timeline scroll animation */}
        <div className="relative pl-8 md:pl-16 space-y-12">
          {experiences.map((exp, i) => (
            <ExperienceCard
              key={i}
              exp={exp}
              index={i}
              isLast={i === experiences.length - 1}
              expandedIndex={expandedIndex}
              toggleExpand={toggleExpand}
            />
          ))}
        </div>


        {/* Resume download */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="/NewResumeSDE.pdf"
            download="FalakRanaResume.pdf"
            className="relative group inline-flex items-center gap-3 rounded-full text-sm px-7 py-3.5 font-medium transition-all duration-300 hover:scale-105 text-text-primary border"
            style={{ borderColor: 'hsl(var(--stroke))', backgroundColor: 'hsl(var(--surface))' }}
          >
            <span
              className="absolute inset-[-2px] rounded-full opacity-0 group-hover:opacity-100 accent-gradient transition-opacity duration-300"
              style={{ zIndex: -1 }}
            />
            <span
              className="absolute inset-0 rounded-full"
              style={{ backgroundColor: 'hsl(var(--surface))', zIndex: -1 }}
            />
            <svg className="w-4 h-4 relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span className="relative">Download Full Resume</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

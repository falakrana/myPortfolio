import React, { useState } from 'react';
import { motion } from 'motion/react';

const experiences = [
  {
    role: 'Software Developer Intern',
    company: 'Infodesk India Pvt. Ltd.',
    period: "Jan '26 – May '26",
    accentColor: '#89AACC',
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
    achievements: [
      'Worked in a team conducting research on ML models',
      'Conducted research on transformer architectures and BERT',
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const Experience = () => {
  const [expanded, setExpanded] = useState({});

  const toggle = (i) => setExpanded((prev) => ({ ...prev, [i]: !prev[i] }));

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
          className="mb-16"
        >
          <div className="section-eyebrow">Work Experience</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display italic text-text-primary leading-tight">
            Where I've{' '}
            <span className="font-display italic" style={{ color: 'hsl(var(--muted))' }}>
              worked
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px hidden md:block"
            style={{ backgroundColor: 'hsl(var(--stroke))' }}
          />

          <div className="space-y-6 md:pl-10">
            {experiences.map((exp, i) => {
              const isExpanded = expanded[i];
              const shouldTrunc = exp.achievements.length > 3;
              const shown = !isExpanded && shouldTrunc ? exp.achievements.slice(0, 3) : exp.achievements;

              return (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  variants={cardVariants}
                  className="relative group"
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-[-14px] top-6 w-3 h-3 rounded-full border-2 border-bg hidden md:block transition-transform duration-300 group-hover:scale-125"
                    style={{ backgroundColor: exp.accentColor, borderColor: 'hsl(var(--bg))' }}
                  />

                  {/* Card */}
                  <div
                    className="rounded-2xl p-6 md:p-8 border transition-all duration-500 group-hover:border-white/10"
                    style={{
                      backgroundColor: 'hsl(var(--surface))',
                      borderColor: 'hsl(var(--stroke))',
                      borderTop: `2px solid ${exp.accentColor}33`,
                    }}
                  >
                    {/* Card header */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-5">
                      <div>
                        <h3
                          className="text-xl md:text-2xl font-semibold text-text-primary mb-1 group-hover:text-white transition-colors"
                        >
                          {exp.company}
                        </h3>
                        <p
                          className="text-sm font-medium"
                          style={{ color: exp.accentColor }}
                        >
                          {exp.role}
                        </p>
                      </div>
                      <span
                        className="text-xs font-medium px-3 py-1 rounded-full self-start sm:self-auto"
                        style={{
                          backgroundColor: `${exp.accentColor}15`,
                          color: exp.accentColor,
                          border: `1px solid ${exp.accentColor}30`,
                        }}
                      >
                        {exp.period}
                      </span>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-2.5">
                      {shown.map((ach, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span
                            className="mt-[7px] w-1 h-1 rounded-full flex-shrink-0"
                            style={{ backgroundColor: exp.accentColor }}
                          />
                          <span
                            className="text-sm leading-relaxed"
                            style={{ color: 'hsl(var(--muted))' }}
                          >
                            {ach}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {shouldTrunc && (
                      <button
                        onClick={() => toggle(i)}
                        className="mt-4 text-xs font-medium uppercase tracking-widest transition-colors"
                        style={{ color: exp.accentColor }}
                      >
                        {isExpanded ? 'Show less ↑' : `+${exp.achievements.length - 3} more ↓`}
                      </button>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
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

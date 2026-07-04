import React from 'react';
import { motion } from 'motion/react';

const certifications = [
  {
    title: 'AWS Cloud Practitioner',
    issuer: 'AWS Skill Builder',
    date: '2025',
    description:
      'Demonstrated foundational knowledge of AWS Cloud, covering core services, pricing, architecture, and security best practices. Focused on serverless infrastructure and IAM.',
    link: '/Certifications/AWS-Simulearn_Cloud-Practitioner.pdf',
    accent: '#89AACC',
    rotation: '-1deg',
  },
  {
    title: 'Linux Fundamentals',
    issuer: 'Cisco',
    date: '2026',
    description:
      'Fundamental Linux operating system concepts, command line operations, system administration, and network configuration for enterprise environments.',
    link: '/Certifications/Linux-unhatched-CISCO.pdf',
    accent: '#7B9FBF',
    rotation: '1deg',
  },
  {
    title: 'Data Science Specialization',
    issuer: 'Udemy Bootcamp',
    date: '2024',
    description:
      'Comprehensive data science bootcamp covering Python, statistics, machine learning, deep learning, and data visualization. Built and deployed multiple predictive models.',
    link: '/Certifications/DataScienceBootcamp.pdf',
    accent: '#6087A6',
    rotation: '1.5deg',
  },
  {
    title: 'Fundamentals of ML & AI',
    issuer: 'AWS Skill Builder',
    date: '2026',
    description:
      'Core concepts of machine learning and artificial intelligence on AWS platform, including foundational ML services and AI implementation strategies.',
    link: '/Certifications/fundamental-of-ml-and-ai-aws.pdf',
    accent: '#8FAACC',
    rotation: '0deg',
  },
  {
    title: 'Tableau Visualization',
    issuer: 'Udemy Mastery',
    date: '2024',
    description:
      'Advanced data visualization skills using Tableau. Mastered dashboard creation, data storytelling, and complex calculated fields for business analytics.',
    link: '/Certifications/Tableau.pdf',
    accent: '#7593B8',
    rotation: '-0.5deg',
  },
  {
    title: 'MySQL Competency',
    issuer: 'Cursa Platform',
    date: '2023',
    description:
      'Proficiency in MySQL database management, query optimization, and relational database design. Covered subqueries, joins, and indexing strategies.',
    link: '/Certifications/SQL.pdf',
    accent: '#89AACC',
    rotation: '-1.5deg',
  },
  {
    title: 'AWS S3 Storage Service',
    issuer: 'AWS Skill Builder',
    date: '2026',
    description:
      'Knowledge of AWS S3 storage service, including object storage, storage optimization, and data transfer options for scalable cloud architecture.',
    link: '/Certifications/intro-aws-s3.pdf',
    accent: '#6B8EAD',
    rotation: '0.5deg',
  },
];

const Certifications = () => (
  <section
    id="certifications"
    className="py-20 md:py-28 px-6 relative bg-bg overflow-visible"
  >
    <div
      className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none"
      style={{
        background: 'radial-gradient(circle at top right, rgba(137,170,204,0.04) 0%, transparent 60%)',
      }}
    />

    <div className="max-w-3xl mx-auto relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center mb-20"
      >
        <div className="section-eyebrow justify-center">Certifications</div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display italic text-text-primary leading-tight">
          Technical{' '}
          <span className="font-display italic" style={{ color: 'hsl(var(--muted))' }}>
            milestones
          </span>
        </h2>
      </motion.div>

      {/* Stacking cards */}
      <div className="relative space-y-28 md:space-y-40 pb-28">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="sticky transition-all duration-500 hover:scale-[1.01]"
            style={{
              top: `${index * 36 + 90}px`,
              zIndex: index + 10,
              transform: `rotate(${cert.rotation})`,
            }}
          >
            {/* Paperclip decoration */}
            <div className="absolute top-[-15px] right-8 z-20 pointer-events-none opacity-30">
              <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
                <path
                  d="M72.2 26.5L34.2 64.5C31.4 67.3 31.4 71.8 34.2 74.6C37 77.4 41.5 77.4 44.3 74.6L82.3 36.6C86.5 32.4 86.5 25.6 82.3 21.4C78.1 17.2 71.3 17.2 67.1 21.4L23.4 65.1C17.8 70.7 17.8 80.3 23.4 85.9C29 91.5 38.6 91.5 44.2 85.9L80.3 49.8"
                  stroke={cert.accent}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Card */}
            <div
              className="rounded-3xl border overflow-hidden flex flex-col shadow-2xl"
              style={{
                backgroundColor: 'hsl(var(--surface))',
                borderColor: 'hsl(var(--stroke))',
                boxShadow: `0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px ${cert.accent}20`,
              }}
            >
              {/* Colored header */}
              <div
                className="px-8 py-7 rounded-t-3xl"
                style={{
                  backgroundColor: `${cert.accent}12`,
                  borderBottom: `1px solid ${cert.accent}25`,
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3
                      className="text-2xl md:text-3xl font-display italic leading-tight mb-1"
                      style={{ color: 'hsl(var(--text))' }}
                    >
                      {cert.title}
                    </h3>
                    <p
                      className="text-xs font-bold uppercase tracking-widest"
                      style={{ color: cert.accent }}
                    >
                      {cert.issuer}
                    </p>
                  </div>
                  <span
                    className="text-[10px] font-bold px-3 py-1 rounded-full border flex-shrink-0 mt-1"
                    style={{
                      backgroundColor: `${cert.accent}15`,
                      color: cert.accent,
                      borderColor: `${cert.accent}30`,
                    }}
                  >
                    {cert.date}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="px-8 py-6 flex flex-col justify-between flex-grow">
                <p
                  className="text-sm md:text-base leading-relaxed mb-6 italic"
                  style={{ color: 'hsl(var(--muted))' }}
                >
                  "{cert.description}"
                </p>

                <div
                  className="flex justify-between items-center pt-4 border-t"
                  style={{ borderColor: 'hsl(var(--stroke))' }}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: cert.accent }}
                    />
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest"
                      style={{ color: 'hsl(var(--muted))' }}
                    >
                      Verified
                    </span>
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold underline underline-offset-4 transition-opacity hover:opacity-70"
                    style={{ color: cert.accent }}
                  >
                    View Certificate ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;

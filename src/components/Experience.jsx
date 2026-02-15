import React from 'react';
import TimelineExperienceItem from './TimelineExperienceItem';

const Experience = () => {
  const experiences = [
    {
      role: "Associate Software Developer Intern",
      company: "Infodesk India Pvt. Ltd.",
      period: "Jan 2026 - Present",
      description: "Currently working on live production-grade applications under senior developer mentorship. Contributing to full-stack development tasks including API development, database integration, and performance-focused backend logic using modern web technologies.",
      technologies: ["Next.js", "MongoDB", "Rust", "API Development", "Full-Stack Development"]
    },
    {
      role: "Machine Learning Intern",
      company: "Unified Mentor",
      period: "Jan 2025 – Apr 2025",
      description: "Worked on 6 real-world machine learning projects involving data cleaning, feature engineering, model training, and evaluation. Built and optimized supervised and unsupervised models using Scikit-learn and TensorFlow, and deployed selected models using Flask APIs.",
      technologies: ["Python", "SQL", "Machine Learning", "Supervised Learning", "Unsupervised Learning", "TensorFlow", "Scikit-learn", "Flask"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-dark-bg relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="mb-16 fade-in">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-neon-purple">#</span>
              <span className="text-white">experience</span>
            </h2>
            <div className="h-px flex-1 max-w-md bg-neon-purple"></div>
          </div>
          <p className="text-gray-400">My professional journey and career timeline</p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-8 md:pl-0">
          {/* Vertical Timeline Line - Slightly Left of Center */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-purple via-purple-600 to-purple-900/20 md:transform md:-translate-x-1/2"></div>

          {/* Timeline Start Indicator */}
          <div className="absolute left-0 md:left-1/2 -top-4 transform md:-translate-x-1/2 z-10">
            <div className="w-3 h-3 bg-neon-purple rounded-full shadow-lg shadow-neon-purple/50 animate-pulse"></div>
          </div>

          {/* Experience Items */}
          <div className="space-y-20 pt-8 pb-8">
            {experiences.map((exp, index) => (
              <TimelineExperienceItem
                key={index}
                experience={exp}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>

          {/* Timeline End Indicator */}
          <div className="absolute left-0 md:left-1/2 -bottom-4 transform md:-translate-x-1/2 z-10">
            <div className="w-2.5 h-2.5 bg-purple-600 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .fade-in-left {
          animation: fadeInLeft 0.6s ease-out forwards;
          opacity: 0;
        }

        .fade-in-right {
          animation: fadeInRight 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Experience;

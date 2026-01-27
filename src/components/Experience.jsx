"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Award, Calendar, ArrowRight } from "lucide-react";

export default function Experience() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const experiences = [
    {
      title: "Machine Learning Intern",
      company: "Unified Mentor",
      period: "Jan 2025 – Apr 2025",
      description:
        "Worked on 6 real-world machine learning projects involving data cleaning, feature engineering, model training, and evaluation. Built and optimized supervised and unsupervised models using Scikit-learn and TensorFlow, and deployed selected models using Flask APIs.",
      icon: Briefcase,
      skills: [
        "Python",
        "SQL",
        "Machine Learning",
        "Supervised Learning",
        "Unsupervised Learning",
        "TensorFlow",
        "Scikit-learn",
        "Flask",
      ],
    },

    {
      title: "Associate Software Developer Intern",
      company: "Infodesk India Pvt Ltd",
      period: "Jan 2026 – Present",
      description:
        "Currently working on live production-grade applications under senior developer mentorship. Contributing to full-stack development tasks including API development, database integration, and performance-focused backend logic using modern web technologies.",
      icon: Award,
      skills: [
        "Next.js",
        "MongoDB",
        "Rust",
        "Full-Stack Development",
        "API Development",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section
      id="experience"
      className="py-20 px-4 bg-slate-900/20 backdrop-blur-sm relative"
    >
      {/* Background glow */}
      <motion.div
        className="absolute top-20 right-10 w-96 h-96 rounded-full bg-cyan-400/10 blur-3xl -z-10"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-cyan-400 to-amber-400 bg-clip-text text-transparent">
            Experience
          </span>
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto relative"
        >
          {/* Timeline line (desktop) */}
          <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400/40 via-amber-400/40 to-cyan-400/20 hidden md:block"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.2,
                  },
                },
              }}
              className={`mb-12 flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center`}
            >
              {/* Date (mobile) */}
              <div className="flex items-center md:hidden mb-3 text-slate-300 text-sm">
                <Calendar size={14} className="mr-2 text-cyan-400" />
                {exp.period}
              </div>

              {/* Card */}
              <motion.div
                className={`w-full md:w-[calc(50%-20px)] ${
                  index % 2 === 0 ? "md:pr-6" : "md:pl-6"
                }`}
                whileHover={{
                  y: -6, // only lift, no shadow
                  transition: { type: "spring", stiffness: 260 },
                }}
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-slate-700/50 rounded-2xl p-5 transition-all hover:border-cyan-400/40 shadow-none">
                  <div className="flex items-start mb-3">
                    <div className="w-10 h-10 rounded-full bg-slate-700/60 flex items-center justify-center mr-3">
                      <exp.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-cyan-400">
                        {exp.title}
                      </h3>
                      <p className="text-slate-300 text-sm">{exp.company}</p>
                      {/* Date (desktop) */}
                      <p className="text-slate-400 hidden md:flex items-center mt-1 text-xs">
                        <Calendar className="mr-1" size={12} />
                        {exp.period}
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm mb-4">
                    {exp.description}
                  </p>

                  <p className="text-xs font-semibold text-amber-400 mb-1">
                    Key Skills:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-slate-800/70 px-2 py-0.5 rounded-md text-slate-200 text-xs flex items-center border border-slate-600/60"
                      >
                        <ArrowRight className="mr-1 text-cyan-400" size={10} />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

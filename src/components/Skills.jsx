"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Backend & Application Development",
      skills: [
        "Flask",
        "FastAPI",
        "REST API Development",
        "Authentication & Authorization",
        "API Integration",
      ],
    },
    {
      title: "Databases & Data Management",
      skills: [
        "MongoDB",
        "MySQL",
        "SQLite",
        "Schema Design",
        "Data Cleaning & Preprocessing",
      ],
    },
    {
      title: "Full-Stack & Web Technologies",
      skills: [
        "Next.js",
        "React",
        "Node.js",
        "Express.js",
        "Typescript",
        "JavaScript",
      ],
    },
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "SQL", "Java", "Rust"],
    },
    {
      title: "Cloud, DevOps & Tools",
      skills: ["Git", "GitHub", "Docker", "AWS", "Linux"],
    },
    {
      title: "AI & Data (Supporting Skills)",
      skills: [
        "Machine Learning Fundamentals",
        "Neural Networks",
        "TensorFlow, PyTorch",
        "Scikit-learn",
        "Vector Databases (FAISS, ChromaDB)",
        "RAG (Retrieval-Augmented Generation)",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-4 bg-slate-900/20 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-amber-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                boxShadow: "0 0 30px rgba(6, 182, 212, 0.2)",
              }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-cyan-400 mb-4">
                {category.title}
              </h3>

              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-amber-400"></div>
                    <span className="text-slate-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

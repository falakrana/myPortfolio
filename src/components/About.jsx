"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-slate-900/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-amber-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-amber-500 rounded-2xl opacity-20 blur-2xl"></div>
              <img
                src="/myImage/myImage.png"
                alt="Falak Rana"
                className="relative w-full h-full object-cover rounded-2xl border border-slate-700/50"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a passionate software developer with experience in building
              reliable, scalable, and user-focused applications. I enjoy working
              across the stack, from designing backend APIs and database models
              to integrating modern front-end frameworks that bring ideas to
              life.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              My journey in tech is driven by curiosity and continuous learning.
              I have hands-on experience with full-stack development, databases,
              and modern development tools, and I enjoy applying my
              problem-solving mindset to build practical solutions that address
              real-world needs.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { label: "Projects. For more visit github", value: "10+" },
                { label: "Currently working as INTERN.", value: "Fresher" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-slate-800/50 backdrop-blur border border-cyan-500/30 rounded-lg p-4"
                >
                  <div className="text-2xl font-bold text-cyan-400">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

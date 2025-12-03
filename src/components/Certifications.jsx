"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Cloud Practitioner",
      issuer: "AWS skill builder",
      date: "2025",
      link: "../../Certifications/AWS-Simulearn_Cloud-Practitioner.pdf",
    },
    {
      title: "Data Science Certification",
      issuer: "Udemy",
      date: "2024",
      link: "../../Certifications/DataScienceBootcamp.pdf",
    },
    {
      title: "Tableau Visualization",
      issuer: "Udemy",
      date: "2024",
      link: "../../Certifications/Tableau.pdf",
    },
    {
      title: "MySQL Competency",
      issuer: "Cursa",
      date: "2023",
      link: "../../Certifications/SQL.pdf",
    },
    {
      title: "Excel Proficiency",
      issuer: "Coursera",
      date: "2023",
      link: "../../Certifications/ExcelIBM.pdf",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(certifications.length / itemsPerPage);

  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => setIsVisible(inView), [inView]);

  const visibleItems = certifications.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="certifications" className="py-20 bg-slate-900/20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="bg-gradient-to-r from-cyan-400 to-amber-400 bg-clip-text text-transparent">
            Certifications
          </span>
        </motion.h2>

        {/* Cards Grid */}
        <motion.div
          ref={sectionRef}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {visibleItems.map((cert, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{
                y: -6,
                boxShadow: "0 0 25px rgba(6,182,212,0.3)",
              }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm transition-all hover:border-cyan-500/40"
            >
              <div className="flex items-center gap-3 mb-3">
                <Award className="w-6 h-6 text-cyan-400" />
                <h3 className="text-lg font-bold text-cyan-400">{cert.title}</h3>
              </div>

              <p className="text-slate-400 text-sm mb-1 font-medium">
                {cert.issuer}
              </p>
              <p className="text-slate-500 text-xs mb-4">Issued: {cert.date}</p>

              <a
                href={cert.link}
                target="_blank"
                className="flex items-center gap-2 text-amber-400 font-medium mt-auto hover:text-cyan-400 transition-colors"
              >
                View Certificate
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-10">
            <button
              onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
              className="p-2 rounded-full bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600 text-cyan-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentPage ? "bg-cyan-400" : "bg-slate-600"
                }`}
                onClick={() => setCurrentPage(index)}
              />
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
              className="p-2 rounded-full bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600 text-cyan-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChevronLeft,
  ChevronRight,
  Brain,
  TrendingUp,
  Database,
  BarChart2,
  Code,
} from "lucide-react";
import ScrollArrow from "./scroll-arrow";

const skillsData = [
  {
    icon: Brain,
    title: "Generative AI",
    skills: [
      "LangChain",
      "RAG (Retrieval-Augmented Generation)",
      "Embeddings",
      "Agent Development Kit()", 
      "Crew-AI"
    ],
    gradient: "from-[#dad7cd]/80 to-[#a3b18a]/80",
  },
  {
    icon: TrendingUp,
    title: "Machine Learning",
    skills: ["Scikit-learn", "TensorFlow", "Deep Learning", "Neural Networks"],
    gradient: "from-[#a3b18a]/80 to-[#588157]/80",
  },
  {
    icon: Database,
    title: "Database Management",
    skills: ["MySQL", "MongoDB", "Data Cleaning", "Vector Database(FAISS, ChromaDB)"],
    gradient: "from-[#588157]/80 to-[#3a5a40]/80",
  },
  {
    icon: BarChart2,
    title: "Data Analysis & Visualization",
    skills: ["Tableau", "Excel", "Power BI"],
    gradient: "from-[#3a5a40]/80 to-[#344e41]/80",
  },
  {
    icon: Code,
    title: "Programming",
    skills: ["Python", "SQL", "Javascript", "Git", "Github"],
    gradient: "from-[#588157]/80 to-[#a3b18a]/80",
  },
];

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6; // 2 rows × 3 columns
  const totalPages = Math.ceil(skillsData.length / itemsPerPage);

  const getCurrentPageItems = () => {
    const startIndex = currentPage * itemsPerPage;
    return skillsData.slice(startIndex, startIndex + itemsPerPage);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="skills" ref={ref} className="py-20 relative">
      {/* Background shapes */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#dad7cd]/10 blur-3xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -30, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center text-white mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#dad7cd] to-[#a3b18a]">
            Skills & Technologies
          </span>
        </motion.h2>

        <div className="relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4"
          >
            {getCurrentPageItems().map((skill, index) => (
              <motion.div
                key={`${currentPage}-${index}`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: "easeOut",
                    },
                  },
                }}
                whileHover={{
                  y: -10,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="h-full"
              >
                <Card
                  className={`${
                    skill.dark
                      ? "bg-black/80"
                      : "bg-gradient-to-br " + skill.gradient
                  } text-white h-[280px] flex flex-col backdrop-blur-sm border-none shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300`}
                >
                  <CardHeader className="pb-3">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1,
                      }}
                      className="w-12 h-12 rounded-full flex items-center justify-center bg-white/20 mb-3"
                    >
                      <skill.icon className="h-6 w-6" />
                    </motion.div>
                    <CardTitle className="text-xl font-semibold">
                      {skill.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow pt-2">
                    <ul className="space-y-2">
                      {skill.skills.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className="flex items-center"
                        >
                          <span className="mr-3 w-1.5 h-1.5 bg-white rounded-full inline-block"></span>
                          <span className="text-white/90 text-sm">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-12 gap-4">
              <motion.button
                onClick={prevPage}
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </motion.button>

              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentPage === i ? "bg-[#A3B18A]" : "bg-white/30"
                    }`}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextPage}
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </motion.button>
            </div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <ScrollArrow targetId="experience" className="mt-16" />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

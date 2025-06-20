import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  ArrowRight,
} from "lucide-react";
import ScrollArrow from "./scroll-arrow";

function Experience() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const experiences = [
    {
      title: "Machine learning internship",
      company: "Unified Mentor",
      period: "Jan 2025 - Apr 2025",
      description:
        "Completed 6 ML projects focused on data preprocessing and model development using TensorFlow, Scikit-learn, and Flask. Gained hands-on experience with neural networks and deep learning.",
      icon: Briefcase,
      skills: [
        "Python",
        "SQL",
        "Tableau",
        "ML",
        "Supervised Learning",
        "Unsupervised Learning",
      ],
      gradient: "from-[#dad7cd]/80 to-[#a3b18a]/80",
    },
    {
  title: "Agentic AI Development Course",
  company: "Self paced",
  period: "Currently",
  description:
    "Learning and building AI agents using LangChain and other LLM tools like crew-ai, langgraph and google's agent development kit(adk). Hands-on experience with prompt chaining, agent architecture, memory management, tool usage.",
  icon: GraduationCap,
  skills: [
    "LangChain",
    "Embeddings",
    "Vector Databases",
    "Prompt Engineering",
    "AI Agents",
    "AI Tool",
    "ADK",
    "LangGraph",
    "Memory Handling",
  ],
  gradient: "from-[#588157]/80 to-[#3a5a40]/80",
}

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
    <section id="experience" className="py-16 relative">
      {/* Background effects */}
      <motion.div
        className="absolute top-40 right-10 w-96 h-96 rounded-full bg-[#588157]/10 blur-3xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#dad7cd] to-[#a3b18a]">
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
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] top-0 bottom-0 w-1 bg-gradient-to-b from-[#dad7cd]/40 via-[#588157]/40 to-[#344e41]/40 hidden md:block"></div>

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
              className={`mb-10 flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center`}
            >
              {/* Timeline date for mobile */}
              <div className="flex items-center md:hidden mb-3">
                <Calendar className="mr-2 text-[#dad7cd]" size={14} />
                <span className="text-[#dad7cd] text-sm">{exp.period}</span>
              </div>

              {/* Content card */}
              <motion.div
                className={`w-full md:w-[calc(50%-20px)] ${
                  index % 2 === 0 ? "md:pr-6" : "md:pl-6"
                }`}
                whileHover={{
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <div
                  className={`bg-gradient-to-br ${exp.gradient} rounded-3xl p-1 shadow-lg`}
                >
                  {/* <div className="bg-black/80 backdrop-blur-sm rounded-lg p-4 h-full"> */}
                  {/* <div className="bg-black/80 backdrop-blur-sm rounded-3xl p-4 h-full"> */}
                  <div className="bg-black/80 backdrop-blur-sm rounded-3xl p-4 h-full">
                    <div className="flex items-start mb-3">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3 flex-shrink-0">
                        <exp.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {exp.title}
                        </h3>
                        <p className="text-[#dad7cd]/90 font-medium text-sm">
                          {exp.company}
                        </p>
                        {/* Date for desktop */}
                        <p className="text-white/70 hidden md:flex items-center mt-1 text-xs">
                          <Calendar className="mr-1" size={12} />
                          {exp.period}
                        </p>
                      </div>
                    </div>
                    <p className="text-white/90 mb-3 text-sm">
                      {exp.description}
                    </p>
                    <div>
                      <p className="text-white/90 font-medium mb-1 text-xs">
                        Key Skills:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {exp.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="bg-white/20 px-2 py-0.5 rounded-full text-white text-xs flex items-center"
                          >
                            <ArrowRight className="mr-1" size={10} />
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <ScrollArrow targetId="projects" className="mt-8" />
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;

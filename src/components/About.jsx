import ScrollArrow from "./scroll-arrow";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Award,
  Briefcase,
  Code,
  GraduationCap,
  Heart,
  Star,
  FileText,
  Download,
  FileBadge,
} from "lucide-react";

function About() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  // Use the correct path for the public folder asset
  const resumePath = "/resume/myResume.pdf";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="py-24 min-h-screen bg-transparent flex items-center relative"
    >
      {/* Enhanced animated background shapes */}
      <motion.div
        className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#a3b18a]/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 10, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-[#588157]/10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -20, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Add floating particles for more visual interest */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#dad7cd]/10"
          style={{
            width: Math.random() * 6 + 2,
            height: Math.random() * 6 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [Math.random() * 20, Math.random() * -20],
            x: [Math.random() * 20, Math.random() * -20],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: Math.random() * 8 + 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      <div className="container mx-auto z-10">
        <motion.h2
          className="text-4xl font-bold text-center text-white mb-12 drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#dad7cd] to-[#a3b18a]">
            About Me
          </span>
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col lg:flex-row items-start justify-center gap-12 max-w-6xl mx-auto"
        >
          {/* Left section: About content */}
          <motion.div
            variants={itemVariants}
            className="flex-1 flex flex-col items-start"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
              <motion.div
                className="relative group flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Profile image with animated border effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#dad7cd] to-[#588157] blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src="/myImage.jpg"
                  alt="Falak Rana profile"
                  className="relative w-40 h-40 rounded-full border-4 border-[#588157] shadow-2xl object-cover"
                />
              </motion.div>

              <div>
                <motion.h3
                  variants={itemVariants}
                  className="text-3xl font-semibold text-white mb-4 text-center md:text-left"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#dad7cd] to-[#a3b18a]">
                    Falak Rana
                  </span>
                  <div className="text-lg text-white/80 font-normal mt-1">
                    Machine learning Enthusiastic
                  </div>
                </motion.h3>
              </div>
            </div>

            <div className="space-y-4">
              <motion.p
                variants={itemVariants}
                className="text-lg leading-relaxed text-gray-200"
              >
                Student engaging in machine learning along with artificial intelligence with hands-on experience in
                designing and deploying neural networks and generative AI
                systems using frameworks like LangChain, Ollama, TensorFlow, and
                PyTorch. Adept in solving real-world problems through Natural
                Language Processing (NLP), computer vision, and advanced model
                optimization techniques such as regularization and
                hyperparameter tuning.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-lg leading-relaxed text-gray-200"
              >
                Skilled in working with structured and unstructured data using
                SQL and MongoDB, with strong capabilities in data cleaning,
                preprocessing, and analysis. Proficient in data visualization
                tools like Tableau, Excel, and Matplotlib to uncover insights
                and support data-driven decisions.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-lg leading-relaxed text-gray-200"
              >
                Solid foundation in Data Structures and Algorithms (DSA),
                enabling the development of efficient and scalable solutions
                across diverse problem domains.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-lg leading-relaxed text-gray-200"
              >
                Always eager to learn and build, I'm open to collaborations,
                internships, and exciting new challenges. Let's connect and
                create something impactful!
              </motion.p>
            </div>
          </motion.div>

          {/* Right section: Resume */}
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-2/5 mt-8 lg:mt-0"
          >
            <div className="bg-gradient-to-br from-[#588157] to-[#3a5a40] rounded-xl p-1 h-full">
              <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 flex flex-col h-full">
                <motion.div
                  className="w-16 h-16 rounded-full bg-[#dad7cd]/20 flex items-center justify-center flex-shrink-0 mx-auto mb-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotate: 360 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <FileText className="w-8 h-8 text-[#dad7cd]" />
                </motion.div>

                <div className="flex-grow text-center">
                  <h3 className="text-xl font-bold mb-3 text-white">
                    My Resume
                  </h3>
                  <p className="text-white/80 mb-6">
                    Get a comprehensive overview of my skills, experience, and
                    educational background. You'll find detailed information
                    about my projects and technical competencies.
                  </p>

                  <div className="flex flex-wrap gap-4 justify-center">
                    <motion.a
                      href={resumePath}
                      download="Falak_Rana_Resume.pdf"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-[#588157] to-[#3a5a40] text-white py-2 px-4 rounded-lg shadow-lg font-medium"
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Download className="w-4 h-4" />
                      <span>Download Resume</span>
                    </motion.a>

                    <motion.a
                      href={resumePath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-lg shadow-lg font-medium"
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FileBadge className="w-4 h-4" />
                      <span>View Resume</span>
                    </motion.a>
                  </div>
                </div>

                {/* Resume highlights */}
                <div className="mt-8 grid grid-cols-1 gap-4">
                  {[
                    {
                      title: "Technical Skills",
                      content:
                        "Python, ML, Deep Learning, Generative AI, Visualization, Data Analysis, SQL",
                    },
                    {
                      title: "Experience",
                      content: "Data Analysis, ML Projects",
                    },
                    {
                      title: "Education",
                      content:
                        "Computer Science & Engineering from Parul University",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ delay: 0.3 + i * 0.2, duration: 0.5 }}
                      className="bg-gradient-to-br from-[#dad7cd]/20 to-[#588157]/20 p-4 rounded-lg backdrop-blur-sm"
                    >
                      <h3 className="text-md font-bold text-[#dad7cd] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-white/80 text-sm">{item.content}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <ScrollArrow targetId="skills" className="mt-16" />
        </motion.div>
      </div>
    </section>
  );
}

export default About;

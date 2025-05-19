// About.jsx
import ScrollArrow from "./scroll-arrow";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
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
      className="py-12 md:py-24 min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Decorative retro borders with greenish theme */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-6 border-t-2 border-[#a3b18a] border-double"></div>
        <div className="absolute inset-x-0 bottom-0 h-6 border-b-2 border-[#a3b18a] border-double"></div>
        <div className="absolute inset-y-0 left-0 w-6 border-l-2 border-[#a3b18a] border-double"></div>
        <div className="absolute inset-y-0 right-0 w-6 border-r-2 border-[#a3b18a] border-double"></div>
        <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-[#a3b18a]"></div>
        <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-[#a3b18a]"></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-[#a3b18a]"></div>
        <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-[#a3b18a]"></div>
      </div>

      {/* Textured overlay */}
      <div className="absolute inset-0 bg-[url('/textures/noise.png')] opacity-5 mix-blend-overlay"></div>

      {/* Green ambient glow */}
      <motion.div
        className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#a3b18a]/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [0, 10, 0], y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-[#588157]/10 blur-3xl"
        animate={{ scale: [1, 1.3, 1], x: [0, -20, 0], y: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Content */}
      <div className="container mx-auto px-6 z-10">
        <motion.div
          className="relative text-center mb-16 mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-4">
            <motion.h2
              className="text-4xl font-bold text-center text-white mb-12"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d9ead3] to-[#a3b18a]">
                About Me
              </span>
            </motion.h2>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto"
        >
          {/* Profile */}
          <motion.div
            variants={itemVariants}
            className="flex-shrink-0 w-full lg:w-1/4 flex flex-col items-center"
          >
            <div className="relative mb-8 group">
              <div className="absolute inset-0 rounded-full transform -rotate-2 bg-[#a3b18a]/20"></div>
              <div className="absolute inset-0 rounded-full transform rotate-2 bg-[#a3b18a]/20"></div>
              <div className="relative p-2 bg-gradient-to-br from-[#a3b18a] to-[#588157] rounded-full shadow-xl">
                <div className="bg-black p-2 rounded-full">
                  <img
                    src="/myImage.jpg"
                    alt="Falak Rana profile"
                    className="w-full aspect-square object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-poppins font-semibold text-[#a3b18a] mb-3 text-center">
              Falak Rana
            </h3>
            <div className="text-base md:text-lg text-[#588157] font-poppins font-light text-center mb-6 italic">
              Machine Learning Enthusiast
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            variants={itemVariants}
            className="flex-1 flex flex-col items-start bg-black/30 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-[#a3b18a]/20"
          >
            <div className="space-y-4 font-poppins">
              <motion.p
                variants={itemVariants}
                className="text-base md:text-lg leading-relaxed text-[#d9ead3] first-letter:text-3xl first-letter:font-bold first-letter:mr-1 first-letter:float-left first-letter:text-[#a3b18a]"
              >
                Student engaging in machine learning along with artificial
                intelligence with hands-on experience in designing and deploying
                neural networks and generative AI systems using frameworks like
                LangChain, Ollama, TensorFlow, and PyTorch. Adept in solving
                real-world problems through Natural Language Processing (NLP),
                computer vision, and advanced model optimization techniques such
                as regularization and hyperparameter tuning.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-base md:text-lg leading-relaxed text-[#d9ead3]"
              >
                Skilled in working with structured and unstructured data using
                SQL and MongoDB, with strong capabilities in data cleaning,
                preprocessing, and analysis. Proficient in data visualization
                tools like Tableau, Excel, and Matplotlib to uncover insights
                and support data-driven decisions.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-base md:text-lg leading-relaxed text-[#d9ead3]"
              >
                Solid foundation in Data Structures and Algorithms (DSA),
                enabling the development of efficient and scalable solutions
                across diverse problem domains.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-base md:text-lg leading-relaxed text-[#d9ead3]"
              >
                Always eager to learn and build, I'm open to collaborations,
                internships, and exciting new challenges. Let's connect and
                create something impactful!
              </motion.p>
            </div>

            <div className="w-full flex items-center justify-end mt-6">
              <div className="h-px flex-grow bg-gradient-to-r from-transparent to-[#a3b18a]/40"></div>
              <div className="px-4 text-[#a3b18a] font-poppins font-light italic text-lg">FR</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16"
        >
          <ScrollArrow
            targetId="skills"
            className="text-[#a3b18a] hover:text-[#d9ead3] transition-colors duration-300"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default About;

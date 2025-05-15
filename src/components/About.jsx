import ScrollArrow from "./scroll-arrow";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Briefcase, Code, GraduationCap, Heart, Star } from "lucide-react";

function About() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Personal details for the info cards
  // const personalDetails = [
  //   { 
  //     title: "Education", 
  //     content: "B.Tech Computer Science & Engineering",
  //     icon: GraduationCap,
  //     gradient: "from-[#dad7cd] to-[#a3b18a]"
  //   },
  //   { 
  //     title: "Experience", 
  //     content: "2+ years of ML projects & research",
  //     icon: Briefcase,
  //     gradient: "from-[#a3b18a] to-[#588157]"
  //   },
  //   { 
  //     title: "Languages", 
  //     content: "Python, SQL, JavaScript, Java",
  //     icon: Code,
  //     gradient: "from-[#588157] to-[#3a5a40]"
  //   },
  //   { 
  //     title: "Interests", 
  //     content: "AI, Machine Learning, Data Science",
  //     icon: Heart,
  //     gradient: "from-[#3a5a40] to-[#344e41]"
  //   }
  // ];

  return (
    <section id="about" className="py-24 min-h-screen bg-transparent flex items-center relative">
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
          repeatType: "reverse"
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
          repeatType: "reverse"
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
          className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12 max-w-5xl mx-auto"
        >
          <motion.div 
            variants={itemVariants}
            className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto mb-8 md:mb-0"
          >
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Profile image with animated border effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#dad7cd] to-[#588157] blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src="/myImage.jpg"
                alt="Falak Rana profile"
                className="relative w-48 h-48 rounded-full border-4 border-[#588157] shadow-2xl object-cover"
              />
              
             
            </motion.div>
          </motion.div>
          
          <div className="max-w-2xl w-full space-y-5">
            <motion.h3 
              variants={itemVariants}
              className="text-3xl font-semibold text-white mb-4"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#dad7cd] to-[#a3b18a]">
                Falak Rana
              </span>
              <span className="ml-3 text-lg text-white/80 font-normal">Data Analytics Professional</span>
            </motion.h3>
            
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-gray-200">
              Hey! I'm Falak Rana, a tech enthusiast with a strong foundation in
              Machine Learning and a growing passion for Full-Stack Development.
              I'm currently pursuing my Bachelor's in Computer Science and
              Engineering, and I enjoy solving real-world problems by combining
              data-driven insights with clean, functional code.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-gray-200">
              My primary focus is on Machine Learning, where I work on projects
              involving deep learning, computer vision, and intelligent systems.
              From handwritten digit recognition to disease prediction, I love
              exploring how AI can improve everyday life.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-gray-200">
              I also explore development side to bring my ML projects to life with
              clean and functional interfaces.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-gray-200">
              Always eager to learn and build, I'm open to collaborations,
              internships, and exciting new challenges. Let's connect and create
              something impactful!
            </motion.p>
          </div>
        </motion.div>
        
        {/* Personal info cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto"
        >
          {/* {personalDetails.map((detail, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.2 + (index * 0.1), duration: 0.5 }
                }
              }}
              whileHover={{ 
                y: -5,
                transition: { type: "spring", stiffness: 300 }
              }}
              className={`bg-gradient-to-br ${detail.gradient} rounded-lg p-1`}
            >
              <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 h-full">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                    <detail.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{detail.title}</h3>
                </div>
                <p className="text-white/90">{detail.content}</p>
              </div>
            </motion.div>
          ))} */}
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

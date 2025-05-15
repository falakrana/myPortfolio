import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FileDown, FileText, FileBadge, Download } from "lucide-react";
import ScrollArrow from "./scroll-arrow";

function Resume() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  // Use the correct path for the public folder asset
  const resumePath = "/resume/myResume.pdf";

  return (
    <section id="resume" className="py-20 relative">
      {/* Background shapes */}
      <motion.div
        className="absolute top-20 right-10 w-80 h-80 rounded-full bg-[#a3b18a]/10 blur-3xl -z-10" 
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
            Resume
          </span>
        </motion.h2>
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-br from-[#588157] to-[#3a5a40] rounded-xl p-1">
            <div className="bg-black/60 backdrop-blur-sm rounded-lg p-8 flex flex-col md:flex-row items-center gap-8">
              <motion.div 
                className="w-24 h-24 rounded-full bg-[#dad7cd]/20 flex items-center justify-center flex-shrink-0"
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <FileText className="w-12 h-12 text-[#dad7cd]" />
              </motion.div>
              
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-2xl font-bold mb-3 text-white">Download My Resume</h3>
                <p className="text-white/80 mb-4">
                  Get a comprehensive overview of my skills, experience, and educational background.
                  You'll find detailed information about my projects, technical competencies, and achievements.
                </p>
                
                <div className="flex flex-wrap gap-5 mt-6 justify-center md:justify-start">
                  <motion.a
                    href={resumePath}
                    download="myResume.pdf"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#588157] to-[#3a5a40] text-white py-3 px-6 rounded-lg shadow-lg font-medium"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download className="w-5 h-5" />
                    <span>Download Resume (PDF)</span>
                  </motion.a>
                  
                  <motion.a
                    href={resumePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white py-3 px-6 rounded-lg shadow-lg font-medium"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FileBadge className="w-5 h-5" />
                    <span>View Resume</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Resume highlights */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Technical Skills",
                content: "Python, SQL, ML, Data Analysis, Visualization"
              },
              {
                title: "Experience",
                content: "Data Analysis, ML Projects, Research"
              },
              {
                title: "Education",
                content: "Computer Science & Engineering"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3 + (i * 0.2), duration: 0.5 }}
                className="bg-gradient-to-br from-[#dad7cd]/20 to-[#588157]/20 p-6 rounded-lg backdrop-blur-sm"
              >
                <h3 className="text-lg font-bold text-[#dad7cd] mb-3">{item.title}</h3>
                <p className="text-white/80">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <ScrollArrow targetId="contact" className="mt-12" />
        </motion.div>
      </div>
    </section>
  );
}

export default Resume; 
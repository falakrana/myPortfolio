import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ScrollArrow from "./scroll-arrow";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Link, Code } from "lucide-react";

const projects = [
  {
    title: "Disease Prediction using ML",
    description:
      "Disease prediction using machine learning models with Flask framework.",
    link: "https://github.com/falakrana/Disease-Prediction-using-ML.git",
    tags: ["Machine Learning", "Flask", "Healthcare"],
    image: "/projects/diseasePrediction.jpeg", // You'll need to add this image
    gradient: "from-[#DAD7CD]/80 to-[#A3B18A]/80",
    icon: <Code className="w-5 h-5" />
  },
  {
    title: "Data Visualization Analysis",
    description:
      "Comprehensive data analysis and visualization projects using Python and Tableau with real-world datasets and dashboards.",
    link: "https://github.com/falakrana/Data-Analysis-Visualization.git",
    tags: ["Python", "Tableau", "Visualization"],
    image: "/projects/dataVisualization.png", // You'll need to add this image
    gradient: "from-[#A3B18A]/80 to-[#588157]/80",
    icon: <Code className="w-5 h-5" />
  },
  {
    title: "Virtual Mouse Using Eyes",
    description:
      "A virtual mouse system that allows users to control their cursor and perform click actions using eye movement and blinking.",
    link: "https://github.com/falakrana/virtualMouseDetectionUsingEyes.git",
    tags: ["OpenCV", "Mediapipe", "pyautogui", "python"],
    image: "/projects/virtualEyeTracking.png", // You'll need to add this image
    gradient: "from-[#588157]/80 to-[#3A5A40]/80",
    icon: <Code className="w-5 h-5" />
  },
  // {
  //   title: "Bengaluru House Prediction",
  //   description:
  //     "Predicting house prices in Bengaluru using machine learning with Flask backend.",
  //   link: "https://github.com/falakrana/bengluruHousePrediction.git",
  //   tags: ["Machine Learning", "Flask", "Real Estate", "Regression"],
  //   image: "/projects/bengluruHousePrediction.jpeg", // You'll need to add this image
  //   gradient: "from-[#3A5A40]/80 to-[#344E41]/80",
  //   icon: <Code className="w-5 h-5" />
  // },
  {
    title: "Vehicle Sale Price Prediction",
    description:
      "ML-based web app that predicts vehicle resale prices using RandomForest with hyperparameter tuning.",
    link: "https://github.com/falakrana/Vehicle-Price-Prediction.git",
    tags: ["RandomForest", "RandomSearchCV", "Flask", "MongoDB"],
    image: "/projects/vehicleSales.jpeg", // You'll need to add this image
    gradient: "from-[#344E41]/80 to-[#588157]/80",
    icon: <Code className="w-5 h-5" />
  },
  // {
  //   title: "Car Parking Simulation",
  //   description:
  //     "The Car Parking Simulation project, built with Flask, uses DSA concepts to manage parking slots efficiently.",
  //   link: "https://github.com/falakrana/Car-Parking-Service.git",
  //   tags: ["DSA", "Flask", "Simulation"],
  //   image: "/projects/carParking.jpeg", // You'll need to add this image
  //   gradient: "from-[#588157]/80 to-[#A3B18A]/80",
  //   icon: <Code className="w-5 h-5" />
  // },
];

function Projects() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  
  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut",
      }
    },
    hover: {
      y: -12,
      transition: { 
        type: "spring", 
        stiffness: 200, 
        damping: 15 
      }
    },
  };
  
  const imageVariants = {
    hidden: { scale: 1.2, opacity: 0.3 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.6 }
    },
    hover: { 
      scale: 1.1,
      transition: { 
        duration: 0.3,
        ease: "easeOut" 
      }
    }
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Enhanced background shapes */}
      <motion.div
        className="absolute top-20 left-10 w-80 h-80 rounded-full bg-[#DAD7CD]/10 blur-3xl -z-10" 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotateZ: [0, 15, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      {/* Add more animated background elements */}
      <motion.div
        className="absolute bottom-40 right-10 w-96 h-96 rounded-full bg-[#3A5A40]/10 blur-3xl -z-10" 
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          y: [0, -30, 0],
          rotateZ: [0, -10, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      {/* Floating particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 8 + 3,
            height: Math.random() * 8 + 3,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 2 === 0 
              ? 'radial-gradient(circle, rgba(218,215,205,0.15) 0%, rgba(218,215,205,0) 70%)' 
              : 'radial-gradient(circle, rgba(88,129,87,0.15) 0%, rgba(88,129,87,0) 70%)',
          }}
          animate={{
            y: [Math.random() * 20 * (Math.random() > 0.5 ? 1 : -1), Math.random() * 20 * (Math.random() > 0.5 ? 1 : -1)],
            x: [Math.random() * 20 * (Math.random() > 0.5 ? 1 : -1), Math.random() * 20 * (Math.random() > 0.5 ? 1 : -1)],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, Math.random() * 0.5 + 1, 1],
          }}
          transition={{
            duration: Math.random() * 8 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      ))}
      
      <div className="container mx-auto">
        <motion.div className="relative mb-16">
          <motion.div 
            className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-[#A3B18A]/50 to-transparent"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          <motion.h2 
            className="text-5xl font-bold text-center text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#DAD7CD] via-[#A3B18A] to-[#588157]">
              Projects
            </span>
          </motion.h2>
          <motion.p
            className="text-white/70 text-center mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A selection of my recent data engineering projects
          </motion.p>
          <motion.div 
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-[#A3B18A]/30 to-transparent"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          />
        </motion.div>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="h-full"
            >
              <Card className="relative h-full overflow-hidden rounded-xl border-0 bg-black/5 backdrop-blur-sm flex flex-col hover:shadow-2xl transition-shadow duration-500">
                {/* Project image with overlay gradient */}
                <div className="relative w-full h-52 overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 z-10" 
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 0.9 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.img
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br ${project.gradient} opacity-40 mix-blend-overlay z-10"/>
                  
                  {/* Animated overlay indicator */}
                  <motion.div
                    className="absolute top-4 right-4 z-20 bg-white/10 backdrop-blur-sm p-2 rounded-full"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Github className="w-5 h-5 text-white" />
                  </motion.div>
                  
                  {/* Project title on the image */}
                  <div className="absolute bottom-0 left-0 w-full p-4 z-20">
                    <motion.h3 
                      className="text-xl font-bold text-white mb-1 drop-shadow-md"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {project.title}
                    </motion.h3>
                  </div>
                </div>
                
                <div className="flex-1 p-5 flex flex-col"> 
                  <CardDescription className="text-white/90 font-medium text-base mb-4">
                    {project.description}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-2 mb-5 mt-auto">
                    {project.tags.map((tag, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + (i * 0.1) }}
                      >
                        <Badge className="bg-[#588157]/20 hover:bg-[#588157]/30 text-white/90 border border-[#588157]/20 font-medium backdrop-blur-sm">
                          {tag}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-white bg-gradient-to-r from-[#588157]/80 to-[#3A5A40]/80 py-2 px-4 rounded-lg mt-2 hover:shadow-lg transition-shadow group w-full"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </motion.a>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-16 mb-8 relative"
        >
          {/* <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 -top-12 text-white/30"
            animate={{ 
              y: [0, 10, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          >
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25 5C13.9543 5 5 13.9543 5 25C5 36.0457 13.9543 45 25 45C36.0457 45 45 36.0457 45 25C45 13.9543 36.0457 5 25 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M25 15V30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18 23L25 30L32 23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div> */}
          <ScrollArrow targetId="certifications" className="relative z-10" />
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;

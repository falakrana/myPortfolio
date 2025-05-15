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
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Disease Prediction using ML",
    description:
      "Disease prediction using machine learning models with Flask framework.",
    link: "https://github.com/falakrana/Disease-Prediction-using-ML.git",
    tags: ["Machine Learning", "Flask", "Healthcare"],
    gradient: "from-[#DAD7CD]/90 to-[#A3B18A]/90",
  },
  {
    title: "Data-Visualization-Analysis",
    description:
      "Comprehensive data analysis and visualization projects using Python and Tableau with real-world datasets and dashboards. Check out my work on github.",
    link: "https://github.com/falakrana/Data-Analysis-Visualization.git",
    tags: ["Python", "Tableau", "Visualization"],
    gradient: "from-[#A3B18A]/90 to-[#588157]/90",
  },
  {
    title: "Virtual mouse using eyes.",
    description:
      "A virtual mouse system that allows users to control their cursor and perform click actions using eye movement and blinking.",
    link: "https://github.com/falakrana/virtualMouseDetectionUsingEyes.git",
    tags: ["OpenCV", "Mediapipe", "pyautogui", "python"],
    gradient: "from-[#588157]/90 to-[#3A5A40]/90",
  },
  {
    title: "Bengaluru House Prediction",
    description:
      "Predicting house prices in Bengaluru using machine learning with Flask backend.",
    link: "https://github.com/falakrana/bengluruHousePrediction.git",
    tags: ["Machine Learning", "Flask", "Real Estate", "Regression"],
    gradient: "from-[#3A5A40]/90 to-[#344E41]/90",
  },
  {
    title: "Vehicle sale price prediction",
    description:
      "ML-based web app that predicts vehicle resale prices using RandomForest with hyperparameter tuning.",
    link: "https://github.com/falakrana/Vehicle-Price-Prediction.git",
    tags: ["RandomForest", "RandomSearchCV", "Flask", "MongoDB"],
    gradient: "from-[#344E41]/90 to-[#588157]/90",
  },
  {
    title: "Car Parking Simulation",
    description:
      "The Car Parking Simulation project, built with Flask, uses DSA concepts to manage parking slots efficiently.",
    link: "https://github.com/falakrana/Car-Parking-Service.git",
    tags: ["DSA", "Flask", "Simulation"],
    gradient: "from-[#588157]/90 to-[#A3B18A]/90",
  },
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

  return (
    <section id="projects" className="py-20 relative">
      {/* Background shapes */}
      <motion.div
        className="absolute top-20 left-10 w-80 h-80 rounded-full bg-[#DAD7CD]/10 blur-3xl -z-10" 
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
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#DAD7CD] to-[#A3B18A]">
          Projects
          </span>
        </motion.h2>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.6,
                    ease: "easeOut",
                  }
                }
              }}
              whileHover={{ 
                y: -8,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <Card className={`bg-gradient-to-br ${project.gradient} text-white h-full flex flex-col backdrop-blur-sm border-none shadow-lg overflow-hidden`}>
                <CardHeader className="pb-2">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-white/20 mb-2"
                  >
                    <span className="text-xl font-bold">{index + 1}</span>
                  </motion.div>
                  <CardTitle className="text-xl font-semibold">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-white/90 font-medium">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex-grow flex flex-col justify-between pt-2">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + (i * 0.1) }}
                      >
                        <Badge className="bg-white/20 hover:bg-white/30 text-white border-none font-medium">
                          {tag}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-white/80 mt-auto group"
                    whileHover={{ x: 5 }}
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </motion.a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <ScrollArrow targetId="certifications" className="mt-12" />
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;

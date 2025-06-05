import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    title: "Disease Prediction using ML",
    description: "Disease prediction using machine learning models with Flask framework.",
    link: "https://github.com/falakrana/Disease-Prediction-using-ML.git",
    tags: ["Machine Learning", "Flask", "Healthcare"],
    // image: "/placeholder.svg?height=200&width=400",
    image: "projects/diseasePrediction.jpeg",
    gradient: "from-[#DAD7CD]/80 to-[#A3B18A]/80",
  },
  {
    title: "Data Visualization Analysis",
    description:
      "Comprehensive data analysis and visualization projects using Python and Tableau with real-world datasets and dashboards.",
    link: "https://github.com/falakrana/Data-Analysis-Visualization.git",
    tags: ["Python", "Tableau", "Visualization"],
    image: "/projects/dataVisualization.png",
    gradient: "from-[#A3B18A]/80 to-[#588157]/80",
  },
  {
    title: "Virtual Mouse Using Eyes",
    description:
      "A virtual mouse system that allows users to control their cursor and perform click actions using eye movement and blinking.",
    link: "https://github.com/falakrana/virtualMouseDetectionUsingEyes.git",
    tags: ["OpenCV", "Mediapipe", "pyautogui", "python"],
    image: "/projects/virtualEyeTracking.png",
    gradient: "from-[#588157]/80 to-[#3A5A40]/80",
  },
  {
    title: "Vehicle Sale Price Prediction",
    description: "ML-based web app that predicts vehicle resale prices using RandomForest with hyperparameter tuning.",
    link: "https://github.com/falakrana/Vehicle-Price-Prediction.git",
    tags: ["RandomForest", "RandomSearchCV", "Flask", "MongoDB"],
    image: "/projects/vehicleSales.jpeg",
    gradient: "from-[#344E41]/80 to-[#588157]/80",
  },
]

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 6 // 2 rows × 3 columns
  const totalPages = Math.ceil(projects.length / itemsPerPage)

  const getCurrentPageItems = () => {
    const startIndex = currentPage * itemsPerPage
    return projects.slice(startIndex, startIndex + itemsPerPage)
  }

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 0.9,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  const ref = useRef(null)
  const { inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

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
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <div className="container mx-auto">
        <motion.div className="relative mb-16">
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
        </motion.div>

        <div className="relative">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "visible"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4"
          >
            {getCurrentPageItems().map((project, index) => (
              <motion.div key={`${currentPage}-${index}`} variants={cardVariants} whileHover="hover" className="h-full">
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
                    <div
                      className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${project.gradient} opacity-40 mix-blend-overlay z-10`}
                    />

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

                  <div className="flex-1 p-6 flex flex-col">
                    <CardDescription className="text-white/90 font-medium text-base mb-4 flex-grow">
                      {project.description}
                    </CardDescription>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
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
                      className="flex items-center justify-center gap-2 text-white bg-gradient-to-r from-[#588157]/80 to-[#3A5A40]/80 py-3 px-4 rounded-lg hover:shadow-lg transition-shadow group w-full"
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
      </div>
    </section>
  )
}

export default Projects

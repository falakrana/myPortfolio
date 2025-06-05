import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Award, ChevronLeft, ChevronRight } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Data Science Certification",
      issuer: "Udemy",
      description: "Machine learning, statistical analysis, and data cleaning",
      link: "https://www.udemy.com/certificate/UC-84202d8d-a010-44d8-917e-5cfd596a6314/",
      gradient: "from-[#dad7cd]/80 to-[#a3b18a]/80",
    },
    {
      title: "Tableau Visualization",
      issuer: "Tableau",
      description: "Data visualization and dashboard creation",
      link: "https://www.udemy.com/certificate/UC-791d7ea3-0890-4753-852a-dd8af11b71ae/",
      gradient: "from-[#a3b18a]/80 to-[#588157]/80",
    },
    {
      title: "MySQL Competency",
      issuer: "Cursa",
      description: "SQL queries, database management, and data manipulation",
      link: "https://cursa.app/en/my-certificate/certf36808b31d88195365aeccdb9dced6cc/ok",
      gradient: "from-[#588157]/80 to-[#3a5a40]/80",
    },
    {
      title: "Excel Proficiency",
      issuer: "Coursera",
      description:
        "Microsoft Excel for data entry, analysis, and visualization",
      link: "https://www.coursera.org/account/accomplishments/verify/RYRYUT3L8EYB",
      gradient: "from-[#3a5a40]/80 to-[#344e41]/80",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const itemsPerPage = 6; // 2 rows × 3 columns
  const totalPages = Math.ceil(certifications.length / itemsPerPage);

  // Use intersection observer with better configuration
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
    rootMargin: "-50px 0px",
  });

  // Update visibility state
  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  const getCurrentPageItems = () => {
    const startIndex = currentPage * itemsPerPage;
    return certifications.slice(startIndex, startIndex + itemsPerPage);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="certifications" className="py-20 relative min-h-screen">
      {/* Background shapes */}
      <motion.div
        className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-[#DAD7CD]/10 blur-3xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#DAD7CD] to-[#A3B18A]">
            Certifications
          </span>
        </motion.h2>

        {/* Debug info - remove in production */}
        <div className="text-center mb-4 text-white/60 text-sm">
          Showing {getCurrentPageItems().length} of {certifications.length}{" "}
          certifications
          {!isVisible && " (Scroll to animate)"}
        </div>

        <div className="relative">
          <motion.div
            ref={sectionRef}
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {getCurrentPageItems().map((cert, index) => (
              <motion.div
                key={`${currentPage}-${index}`}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="h-full"
              >
                <Card
                  className={`bg-gradient-to-br ${cert.gradient} text-white h-[300px] flex flex-col backdrop-blur-sm border-none shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 relative z-20`}
                >
                  
                  <CardHeader className="pb-3">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="w-12 h-12 rounded-full flex items-center justify-center bg-white/20 mb-3 backdrop-blur-sm"
                    >
                      <FaCertificate className="w-6 h-6 " />
                      {/* <Award className="w-6 h-6" /> */}
                    </motion.div>
                    <CardTitle className="text-xl font-semibold leading-tight">
                      {cert.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between pt-2">
                    <div className="flex-grow">
                      <p className="text-sm text-white/90 mb-3 font-medium">
                        {cert.issuer}
                      </p>
                      <p className="mb-4 text-white/90 text-sm leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                    <motion.a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-white/80 mt-auto group bg-white/10 backdrop-blur-sm py-2 px-4 rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>View Certificate</span>
                      <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </motion.a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <motion.div
              className="flex justify-center items-center mt-12 gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                onClick={prevPage}
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors border border-white/20"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                disabled={currentPage === 0}
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
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextPage}
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors border border-white/20"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                disabled={currentPage === totalPages - 1}
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </motion.button>
            </motion.div>
          )}
        </div>

        {/* Fallback content if no certifications */}
        {certifications.length === 0 && (
          <div className="text-center text-white/60 py-20">
            <Award className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p>No certifications to display</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;

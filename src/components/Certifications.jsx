import { useInView } from "react-intersection-observer";
import { FaCertificate } from "react-icons/fa";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ScrollArrow from "./scroll-arrow";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

function Certifications() {
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

  const certifications = [
    {
      title: "Excel Proficiency",
      issuer: "Coursera",
      description:
        "Microsoft Excel for data entry, analysis, and visualization",
      link: "https://www.coursera.org/account/accomplishments/verify/RYRYUT3L8EYB",
      gradient: "from-[#DAD7CD]/90 to-[#A3B18A]/90",
    },
    {
      title: "MySQL Competency",
      issuer: "Cursa",
      description: "SQL queries, database management, and data manipulation",
      link: "https://cursa.app/en/my-certificate/certf36808b31d88195365aeccdb9dced6cc/ok",
      gradient: "from-[#A3B18A]/90 to-[#588157]/90",
    },
    {
      title: "Data Science Certification",
      issuer: "Udemy",
      description: "Machine learning, statistical analysis, and data cleaning",
      link: "https://www.udemy.com/certificate/UC-84202d8d-a010-44d8-917e-5cfd596a6314/",
      gradient: "from-[#588157]/90 to-[#3A5A40]/90",
    },
    {
      title: "Tableau Visualization",
      issuer: "Tableau",
      description: "Data visualization and dashboard creation",
      link: "https://www.udemy.com/certificate/UC-791d7ea3-0890-4753-852a-dd8af11b71ae/",
      gradient: "from-[#3A5A40]/90 to-[#344E41]/90",
    },
  ];

  return (
    <section id="certifications" className="py-20 relative">
      {/* Background shapes */}
      <motion.div
        className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-[#DAD7CD]/10 blur-3xl -z-10" 
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
            Certifications
          </span>
        </motion.h2>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {certifications.map((cert, index) => (
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
              <Card
                className={`bg-gradient-to-br ${cert.gradient} text-white h-full flex flex-col backdrop-blur-sm border-none shadow-lg overflow-hidden`}
              >
                <CardHeader className="pb-2">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-white/20 mb-2"
                  >
                    <FaCertificate className="w-6 h-6" />
                  </motion.div>
                  <CardTitle className="text-xl font-semibold">
                    {cert.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between pt-2">
                  <div>
                    <p className="text-sm text-white/90 mb-2 font-medium">
                      {cert.issuer}
                    </p>
                    <p className="mb-4 text-white/90">{cert.description}</p>
                  </div>
                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-white/80 mt-auto group"
                    whileHover={{ x: 5 }}
                  >
                    <span>View Certificate</span>
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
          <ScrollArrow targetId="resume" className="mt-12" />
        </motion.div>
      </div>
    </section>
  );
}

export default Certifications;

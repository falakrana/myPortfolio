import {
  BarChart2,
  Database,
  TrendingUp,
  Code,
  Cloud,
  BracketsIcon,
  Brain,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ScrollArrow from "./scroll-arrow";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

const skillsData = [
  {
    icon: Brain, // or your preferred AI-related icon
    title: "Generative AI",
    skills: [
      "Large Language Models (LLMs)",
      "LangChain",
      "Vector Database(FAISS, ChromaDB)",
      "Embeddings",
    ],
    gradient: "from-[#dad7cd]/80 to-[#a3b18a]/80",
  },

  {
    icon: TrendingUp,
    title: "Machine Learning",
    skills: ["Scikit-learn", "TensorFlow", "Deep Learning", "Neural Networks"],
    gradient: "from-[#a3b18a]/80 to-[#588157]/80",
  },
  {
    icon: Database,
    title: "Database Management",
    skills: ["MySQL", "MongoDB", "Data Cleaning"],
    gradient: "from-[#588157]/80 to-[#3a5a40]/80",
  },

  {
    icon: BarChart2,
    title: "Data Analysis & Visualization",
    skills: ["Tableau", "Excel", "Power BI"],
    gradient: "from-[#3a5a40]/80 to-[#344e41]/80",
  },
  {
    icon: Code,
    title: "Programming",
    skills: ["Python", "SQL", "JavaScript", "Java"],
    gradient: "from-[#588157]/80 to-[#a3b18a]/80",
  },
];

function Skills() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  // Duplicate skills for infinite carousel effect
  const extendedSkillsData = [...skillsData, ...skillsData];
  
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 8000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: true,
    swipeToSlide: true,
    draggable: true,
    centerMode: true,
    centerPadding: '60px',
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          centerPadding: '40px',
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: '40px',
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '40px',
        }
      }
    ]
  };

  return (
    <section id="skills" className="py-20 relative">
      {/* Background shapes */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#dad7cd]/10 blur-3xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -30, 0],
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
          className="text-4xl font-bold text-center text-white mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#dad7cd] to-[#a3b18a]">
            Skills & Technologies
          </span>
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="carousel-container equal-height-cards"
        >
          {isClient && (
            <Slider {...sliderSettings} className="skills-carousel">
              {extendedSkillsData.map((skill, index) => (
                <div key={index} className="px-3">
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.5,
                          ease: "easeOut",
                        },
                      },
                    }}
                    whileHover={{
                      y: -10,
                      transition: { type: "spring", stiffness: 300 },
                    }}
                  >
              <Card
                className={`${
                  skill.dark
                    ? "bg-black/80"
                    : "bg-gradient-to-br " + skill.gradient
                } text-white h-[270px] flex flex-col backdrop-blur-sm border-none shadow-lg overflow-hidden`}
              >
                <CardHeader className="pb-2">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1, infinite: true }}
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-white/20 mb-2"
                  >
                    <skill.icon className="h-6 w-6" />
                  </motion.div>
                  <CardTitle className="text-xl font-semibold">
                    {skill.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow pt-2">
                  <ul className="space-y-1">
                    {skill.skills.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="flex items-center"
                      >
                        <span className="mr-2 w-1.5 h-1.5 bg-white rounded-full inline-block"></span>
                        <span className="text-white/90">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
                  </motion.div>
                </div>
              ))}
            </Slider>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <ScrollArrow targetId="experience" className="mt-16" />
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;

import React, { useState } from 'react';
import ExpandableSkillCard from './ExpandableSkillCard';

const Skills = () => {
  const [hasExpandedCard, setHasExpandedCard] = useState(false);

  const skillCategories = [
    {
      category: "Backend & Application Development",
      skills: ["Node.js", "Express.js", "Flask", "FastAPI", "REST APIs", "WebSocket", "Microservices"]
    },
    {
      category: "Databases & Data Management",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "FAISS"]
    },
    {
      category: "Full-Stack & Web Technologies",
      skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "MERN stack", "Tailwind CSS", "Responsive Design"]
    },
    {
      category: "Programming Languages",
      skills: ["Python", "JavaScript", "Rust", "SQL", "Java"]
    },
    {
      category: "Cloud, DevOps & Tools",
      skills: ["AWS", "Docker", "Git", "GitHub", "Jenkins", "Linux", "Nginx"]
    },
    {
      category: "AI & Data (Supporting Skills)",
      skills: ["Machine Learning", "LangChain", "Crew AI", "RAG", "LLMs", "Data Analysis", "Scikit-learn", "TensorFlow", "PyTorch"]
    }
  ];

  const handleCardExpand = (isExpanding) => {
    setHasExpandedCard(isExpanding);
  };

  return (
    <section id="skills" className="py-20 px-6 bg-dark-secondary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="mb-12 fade-in">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-neon-purple">#</span>
              <span className="text-white">skills</span>
            </h2>
            <div className="h-px flex-1 max-w-md bg-neon-purple"></div>
          </div>
          <p className="text-gray-400">My technical expertise and proficiencies</p>
        </div>

        {/* Skills Grid - 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <ExpandableSkillCard
              key={index}
              category={category.category}
              skills={category.skills}
              isAnyExpanded={hasExpandedCard}
              onExpand={handleCardExpand}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

import { BarChart2, Database, TrendingUp, Code, Cloud } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ScrollArrow from "./scroll-arrow";

const skillsData = [
  {
    icon: BarChart2,
    title: "Data Analysis & Visualization",
    skills: ["Tableau", "Excel", "Python"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Database,
    title: "Database Management",
    skills: ["MySQL", "MongoDB", "Data Cleaning"],
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: TrendingUp,
    title: "Machine Learning",
    skills: ["Scikit-learn", "Tensorflow", "Deep-learning", "Precitive Models"],
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Code,
    title: "Programming",
    skills: ["Python", "SQL", "JavaScript", "MongoDB queries", "Java"],
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Cloud,
    title: "Cloud Technologies",
    skills: ["AWS", "Google Cloud", "Big Data Processing"],
    gradient: "from-green-500 to-emerald-500",
  },
];

function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {skillsData.map((skill, index) => (
            <Card
              key={index}
              className={`bg-card-to-br ${skill.gradient} text-white h-full flex flex-col`}
            >
              <CardHeader>
                <CardTitle className="flex items-center">
                  <skill.icon className="mr-2 h-6 w-6" />
                  {skill.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="list-disc list-inside">
                  {skill.skills.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        <ScrollArrow targetId="certifications" className="mt-12" />
      </div>
    </section>
  );
}

export default Skills;

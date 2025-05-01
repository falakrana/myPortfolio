import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ScrollArrow from "./scroll-arrow";

const projects = [
  {
    title: "Disease Prediction using ML",
    description:
      "Disease prediction using machine learning models with Flask framework.",
    link: "https://github.com/falakrana/Disease-Prediction-using-ML.git",
    tags: ["Machine Learning", "Flask", "Healthcare"],
  },
  {
    title: "Data-Visualization-Analysis",
    description:
      "Comprehensive data analysis and visualization projects using Python and Tableau with real-world datasets and dashboards. Check out my work on github.",
    link: "https://github.com/falakrana/Data-Analysis-Visualization.git",
    tags: ["Python", "Tableau", "Visualization"],
  },
  {
    title: "Virtual mouse using eyes.",
    description:
      "A virtual mouse system that allows users to control their cursor and perform click actions using eye movement and blinking.",
    link: "https://github.com/falakrana/virtualMouseDetectionUsingEyes.git",
    tags: ["OpenCV", "Mediapipe", "pyautogui", "python"],
  },
  {
    title: "Bengaluru House Prediction",
    description:
      "Predicting house prices in Bengaluru using machine learning with Flask backend.",
    link: "https://github.com/falakrana/bengluruHousePrediction.git",
    tags: ["Machine Learning", "Flask", "Real Estate", "Regression"],
  },
  {
    title: "Vehicle sale price prediction",
    description:
      "ML-based web app that predicts vehicle resale prices using RandomForest with hyperparameter tuning.",
    link: "https://github.com/falakrana/Vehicle-Price-Prediction.git",
    tags: ["RandomForest", "RandomSearchCV", "Flask", "MongoDB"],
  },
  {
    title: "Car Parking Simulation",
    description:
      "The Car Parking Simulation project, built with Flask, uses DSA concepts to manage parking slots efficiently.",
    link: "https://github.com/falakrana/Car-Parking-Service.git",
    tags: ["DSA", "Flask", "Simulation"],
  },
];

function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card-to-br text-card-foreground h-full flex flex-col"
            >
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline mt-auto"
                >
                  View Project
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        <ScrollArrow targetId="certifications" className="mt-12" />
      </div>
    </section>
  );
}

export default Projects;

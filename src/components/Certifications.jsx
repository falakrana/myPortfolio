import { useInView } from "react-intersection-observer";
import { FaCertificate } from "react-icons/fa";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ScrollArrow from "./scroll-arrow";

function Certifications() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const certifications = [
    {
      title: "Excel Proficiency",
      issuer: "Coursera",
      description:
        "Microsoft Excel for data entry, analysis, and visualization",
      link: "https://www.coursera.org/account/accomplishments/verify/RYRYUT3L8EYB",
    },
    {
      title: "MySQL Competency",
      issuer: "Cursa",
      description: "SQL queries, database management, and data manipulation",
      link: "https://cursa.app/en/my-certificate/certf36808b31d88195365aeccdb9dced6cc/ok",
    },
    {
      title: "Data Science Certification",
      issuer: "Udemy",
      description: "Machine learning, statistical analysis, and data cleaning",
      link: "https://www.udemy.com/certificate/UC-84202d8d-a010-44d8-917e-5cfd596a6314/",
    },
    {
      title: "Tableau Visualization",
      issuer: "Tableau",
      description: "Data visualization and dashboard creation",
      link: "https://www.udemy.com/certificate/UC-791d7ea3-0890-4753-852a-dd8af11b71ae/",
    },
  ];

  return (
    <section
      id="certifications"
      ref={ref}
      className={`py-20 ${inView ? "animate-fade-in-up" : "opacity-0"}`}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Certifications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="bg-card-to-br text-card-foreground h-full flex flex-col"
            >
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FaCertificate className="mr-2 text-primary" />
                  {cert.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {cert.issuer}
                  </p>
                  <p className="mb-4">{cert.description}</p>
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline mt-auto"
                >
                  View Certificate
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        <ScrollArrow targetId="contact" className="mt-12" />
      </div>
    </section>
  );
}

export default Certifications;

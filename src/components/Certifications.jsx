import React from "react";

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Cloud Practitioner",
      issuer: "AWS Skill Builder",
      date: "2025",
      description:
        "Demonstrated foundational knowledge of AWS Cloud, covering core services, pricing, architecture, and security best practices. Focused on serverless infrastructure and IAM.",
      link: "/Certifications/AWS-Simulearn_Cloud-Practitioner.pdf",
      headerColor: "bg-[#D1F1F9]", // Pastel Blue
      rotation: "-rotate-1",
    },
    {
      title: "Data Science Specialization",
      issuer: "Udemy Bootcamp",
      date: "2024",
      description:
        "Comprehensive data science bootcamp covering Python, statistics, machine learning, deep learning, and data visualization. Built and deployed multiple predictive models.",
      link: "/Certifications/DataScienceBootcamp.pdf",
      headerColor: "bg-[#FADCF5]", // Pastel Pink
      rotation: "rotate-2",
    },
    {
      title: "Tableau Visualization",
      issuer: "Udemy Mastery",
      date: "2024",
      description:
        "Advanced data visualization skills using Tableau. Mastered dashboard creation, data storytelling, and complex calculated fields for business analytics.",
      link: "/Certifications/Tableau.pdf",
      headerColor: "bg-[#E2F7E1]", // Pastel Green
      rotation: "rotate-0",
    },
    {
      title: "MySQL Competency",
      issuer: "Cursa Platform",
      date: "2023",
      description:
        "Proficiency in MySQL database management, query optimization, and relational database design. Covered subqueries, joins, and indexing strategies.",
      link: "/Certifications/SQL.pdf",
      headerColor: "bg-[#FFF4D1]", // Pastel Yellow
      rotation: "-rotate-2",
    },
    {
      title: "AWS S3 Storage Service",
      issuer: "AWS Skill Builder",
      date: "2026",
      description:
        "Knowledge of AWS S3 storage service, including object storage, storage optimization, and data transfer options.",
      link: "/Certifications/intro-aws-s3.pdf",
      headerColor: "bg-[#FFE4E1]",
      rotation: "rotate-0 hover:rotate-1",
    },
    {
      title: "Fundamental of ML and AI",
      issuer: "AWS",
      date: "2026",
      description:
        "Core concepts of machine learning and artificial intelligence on AWS platform, including foundational ML services and AI implementation.",
      link: "/Certifications/fundamental-of-ml-and-ai-aws.pdf",
      headerColor: "bg-purple-100",
      rotation: "rotate-0 hover:rotate-1",
    },
  ];

  return (
    <section
      id="certifications"
      className="py-24 px-6 relative bg-white overflow-visible"
    >
      <div className="container mx-auto max-w-3xl relative z-10 text-center">
        {/* Section Header */}
        <div className="mb-20 fade-in">
          <h2 className="section-title italic font-serif italic mb-6">
            Certification
          </h2>
          <div className="inline-block px-5 py-2 bg-pastel-blue/20 rounded-full mb-8">
            <p className="text-accent-blue font-bold text-[10px] tracking-widest uppercase">
              Technical Milestones
            </p>
          </div>
        </div>

        {/* Stacking Cards Scroll Effect */}
        <div className="relative space-y-32 md:space-y-48 pb-32">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`sticky transition-all duration-500 transform-gpu hover:scale-[1.02] ${cert.rotation}`}
              style={{
                top: `${index * 40 + 100}px`, // Stacking offset
                zIndex: index + 10,
              }}
            >
              {/* Paper Clip Decoration */}
              <div className="absolute top-[-15px] right-8 z-20 pointer-events-none drop-shadow-md">
                <svg
                  width="70"
                  height="70"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M72.2 26.5L34.2 64.5C31.4 67.3 31.4 71.8 34.2 74.6C37 77.4 41.5 77.4 44.3 74.6L82.3 36.6C86.5 32.4 86.5 25.6 82.3 21.4C78.1 17.2 71.3 17.2 67.1 21.4L23.4 65.1C17.8 70.7 17.8 80.3 23.4 85.9C29 91.5 38.6 91.5 44.2 85.9L80.3 49.8"
                    stroke="#4A4A4A"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Card Container */}
              <div className="bg-white rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden flex flex-col min-h-[220px]">
                {/* Top Colored Header Section */}
                <div
                  className={`${cert.headerColor} px-8 py-8 rounded-t-[2rem]`}
                >
                  <h3 className="text-2xl md:text-4xl font-bold font-serif text-gray-800 text-left italic">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 text-left font-bold mt-2 uppercase text-[10px] tracking-widest opacity-80">
                    {cert.issuer}
                  </p>
                </div>

                {/* Body Content Area */}
                <div className="px-8 py-6 text-left flex flex-col justify-between flex-grow">
                  <p className="text-gray-500 italic text-base leading-relaxed mb-6 font-medium">
                    "{cert.description}"
                  </p>

                  <div className="flex justify-between items-center border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent-blue rounded-full"></div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        {cert.date}
                      </span>
                    </div>
                    <a
                      href={cert.link}
                      target="_blank"
                      className="text-accent-blue font-bold text-xs underline underline-offset-4 hover:text-blue-700 transition-colors"
                    >
                      View Certificate
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

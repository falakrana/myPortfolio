import ScrollArrow from "./scroll-arrow";

function About() {
  return (
    <section id="about" className="py-24 min-h-screen bg-transparent flex items-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12 drop-shadow-lg">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12 max-w-4xl mx-auto bg-transparent">
          <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto mb-8 md:mb-0">
            <img
              src="/myImage.jpg"
              alt="Falak Rana profile"
              className="w-40 h-40 rounded-full border-4 border-indigo-400 shadow-2xl object-cover"
            />
          </div>
          <div className="max-w-2xl w-full">
            <h3 className="text-2xl font-semibold text-white mb-6">Falak Rana</h3>
            <p className="text-lg leading-relaxed text-gray-200 mb-6">
              Hey! I'm Falak Rana, a tech enthusiast with a strong foundation in
              Machine Learning and a growing passion for Full-Stack Development.
              I'm currently pursuing my Bachelor's in Computer Science and
              Engineering, and I enjoy solving real-world problems by combining
              data-driven insights with clean, functional code.
            </p>
            <p className="text-lg leading-relaxed text-gray-200 mb-6">
              My primary focus is on Machine Learning, where I work on projects
              involving deep learning, computer vision, and intelligent systems.
              From handwritten digit recognition to disease prediction, I love
              exploring how AI can improve everyday life.
            </p>
            <p className="text-lg leading-relaxed text-gray-200 mb-6">
              I also explore development side to bring my ML projects to life with
              clean and functional interfaces.
            </p>
            <p className="text-lg leading-relaxed text-gray-200">
              Always eager to learn and build, I'm open to collaborations,
              internships, and exciting new challenges. Let's connect and create
              something impactful!
            </p>
          </div>
        </div>
        <ScrollArrow targetId="skills" className="mt-16" />
      </div>
    </section>
  );
}

export default About;

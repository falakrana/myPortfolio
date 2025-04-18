

import ScrollArrow from "./scroll-arrow"

function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">About Me</h2>
        <div className="max-w-3xl mx-auto bg-card/30 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
          <p className="text-lg leading-relaxed text-gray-200 mb-6">
            Hey! I'm Falak Rana, a tech enthusiast with a strong foundation in Machine Learning and a growing passion
            for Full-Stack Development. I'm currently pursuing my Bachelor's in Computer Science and Engineering, and I
            enjoy solving real-world problems by combining data-driven insights with clean, functional code.
          </p>
          <p className="text-lg leading-relaxed text-gray-200 mb-6">
            My primary focus is on Machine Learning, where I work on projects involving deep learning, computer vision,
            and intelligent systems. From handwritten digit recognition to disease prediction, I love exploring how AI
            can improve everyday life.
          </p>
          <p className="text-lg leading-relaxed text-gray-200 mb-6">
            I also explore development side to bring my ML projects to life with clean and functional interfaces.
          </p>
          <p className="text-lg leading-relaxed text-gray-200">
            Always eager to learn and build, I'm open to collaborations, internships, and exciting new challenges. Let's
            connect and create something impactful!
          </p>
        </div>
        <ScrollArrow targetId="projects" className="mt-12" />
      </div>
    </section>
  )
}

export default About

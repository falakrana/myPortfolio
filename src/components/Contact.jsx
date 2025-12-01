"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Resume-AI-ML.pdf"; // Make sure to add your resume.pdf in the public folder
    link.download = "Falak_Rana_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const socialLinks = [
    { icon: "GitHub", url: "https://github.com/falakrana", label: "GitHub" },
    { icon: "Mail", url: "mailto:ranafalak18@gmail.com", label: "Mail" },
    {
      icon: "LinkedIn",
      url: "https://www.linkedin.com/in/falak-rana-125520221/",
      label: "LinkedIn",
    },
    {
      icon: "Instagram",
      url: "https://instagram.com/falakrana_30",
      label: "Instagram",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-slate-900/20 backdrop-blur-sm"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-amber-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-center text-slate-400 mb-12 text-lg">
            Feel free to reach out through any of these platforms. I'm always
            open to discussing new projects, creative ideas, or opportunities to
            be part of your vision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-slate-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-slate-500 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-slate-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-slate-500 transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-slate-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-slate-500 transition-colors resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(6, 182, 212, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-amber-500 text-slate-950 rounded-lg font-semibold hover:from-cyan-600 hover:to-amber-600 transition-all duration-300"
            >
              {submitted ? "Message Sent!" : "Send Message"}
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-slate-400 text-sm">Email</p>
                  <a
                    href="mailto:falak@example.com"
                    className="text-cyan-400 hover:text-cyan-300 font-semibold"
                  >
                    ranafalak18@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Phone</p>
                  <a
                    href="tel:+919725556991"
                    className="text-cyan-400 hover:text-cyan-300 font-semibold"
                  >
                    +91 9725556991
                  </a>
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Location</p>
                  <p className="text-slate-300 font-semibold">
                    India, Vadodara
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-lg flex items-center justify-center hover:border-cyan-500/50 transition-all duration-300"
                    title={link.label}
                  >
                    {link.label === "GitHub" && (
                      <svg
                        className="w-6 h-6 text-slate-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    )}
                    {link.label === "Mail" && (
                      <svg
                        className="w-6 h-6 text-slate-300"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m3.5 6 7.4 6.16a2.1 2.1 0 0 0 2.2 0L20.5 6"
                        />
                      </svg>
                    )}
                    {link.label === "LinkedIn" && (
                      <svg
                        className="w-6 h-6 text-slate-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.006 1.419-.103.249-.129.597-.129.946v5.44h-3.562v-11h3.417v1.5h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 8.855c-1.144 0-2.063-.931-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.134-.924 2.065-2.064 2.065zm1.782 11.597H3.555V9.452h3.564v10.999zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                      </svg>
                    )}
                    {link.label === "Instagram" && (
                      <svg
                        className="w-6 h-6 text-slate-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-4.358-.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                      </svg>
                    )}
                  </motion.a>
                ))}
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
              className="w-full md:w-auto bg-white/10 backdrop-blur border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 mt-4"
            >
              Download Resume
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

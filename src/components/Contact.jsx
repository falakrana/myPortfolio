"use client";

import React, { useState } from "react";
import { Github, Linkedin, Instagram, Mail, Code, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Contact() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError("");

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormError("Please fill in all fields");
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormError("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    try {
      // Here you would normally send the form data to your backend
      // For now, we'll simulate a successful submission after a delay
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        
        // Reset the success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    } catch (error) {
      setFormError("Something went wrong. Please try again later.");
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/falakrana" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/falak-rana-125520221/",
    },
    // { icon: Twitter, href: "https://twitter.com/yourusername" },
    { icon: Instagram, href: "https://instagram.com/falakrana_30" },
    { icon: Mail, href: "mailto:ranafalak18@gmail.com" },
    { icon: Code, href: "https://leetcode.com/falakrana_30/" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <motion.div
        className="absolute top-20 right-10 w-96 h-96 rounded-full bg-[#dad7cd]/10 blur-3xl -z-10"
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
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#dad7cd] to-[#588157]">
              Get in Touch
            </span>
          </h2>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-xl"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-semibold text-white mb-6"
            >
              Send a Message
            </motion.h3>

            <form onSubmit={handleSubmit}>
              <motion.div variants={itemVariants} className="mb-4">
                <label htmlFor="name" className="block text-white/80 mb-2 text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus-visible:ring-[#588157] focus-visible:ring-offset-0"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="mb-4">
                <label htmlFor="email" className="block text-white/80 mb-2 text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus-visible:ring-[#588157] focus-visible:ring-offset-0"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="mb-6">
                <label htmlFor="message" className="block text-white/80 mb-2 text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows={5}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus-visible:ring-[#588157] focus-visible:ring-offset-0 resize-none"
                />
              </motion.div>

              {formError && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 mb-4 text-sm"
                >
                  {formError}
                </motion.p>
              )}

              <motion.div variants={itemVariants}>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#588157] to-[#3a5a40] hover:from-[#3a5a40] hover:to-[#588157] text-white font-medium transition-all duration-300 border-0"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message <Send className="h-4 w-4" />
                    </span>
                  )}
                </Button>
              </motion.div>
            </form>

            <AnimatePresence>
              {isSubmitted && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-6 p-4 rounded-lg bg-[#588157]/20 border border-[#588157]/30 flex items-center gap-3"
                >
                  <CheckCircle className="text-[#a3b18a] h-5 w-5" />
                  <p className="text-white/90 text-sm">Your message has been sent successfully!</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col justify-between"
          >
            <div>
              <motion.h3 
                variants={itemVariants}
                className="text-2xl font-semibold text-white mb-6"
              >
                Connect With Me
              </motion.h3>

              <motion.div 
                variants={itemVariants}
                className="mb-8"
              >
                <p className="text-white/70 mb-6">
                  Feel free to reach out through any of these platforms. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1, y: -5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Button
                        className="bg-gradient-to-br from-[#dad7cd]/20 to-[#588157]/20 hover:from-[#dad7cd]/30 hover:to-[#588157]/30 text-white border border-white/10"
                        variant="outline"
                        size="icon"
                        asChild
                      >
                        <a href={social.href} target="_blank" rel="noopener noreferrer">
                          <social.icon className="h-5 w-5" />
                        </a>
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-4">
                <h4 className="text-white font-medium mb-2">Email</h4>
                <a 
                  href="mailto:ranafalak18@gmail.com" 
                  className="text-[#a3b18a] hover:text-[#dad7cd] transition-colors duration-300 flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" /> ranafalak18@gmail.com
                </a>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h4 className="text-white font-medium mb-2">Location</h4>
                <p className="text-white/70">Bengaluru, India</p>
              </motion.div>
            </div>

            <motion.div 
              variants={itemVariants}
              className="mt-8 p-6 bg-gradient-to-br from-[#588157]/20 to-[#3a5a40]/20 rounded-xl border border-white/10"
            >
              <p className="text-white/90 italic">
                "Looking forward to bringing your ideas to life with data-driven solutions and creative problem-solving."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

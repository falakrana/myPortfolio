import { Mail, Github, Linkedin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

function Header({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Define navigation links
  const navLinks = [
    { title: "Home", href: "#home", id: "home" },
    { title: "About", href: "#about", id: "about" },
    { title: "Skills", href: "#skills", id: "skills" },
    { title: "Experience", href: "#experience", id: "experience" },
    { title: "Projects", href: "#projects", id: "projects" },
    { title: "Certifications", href: "#certifications", id: "certifications" },
    { title: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "bg-black/70 shadow-lg py-2" : "bg-transparent py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <motion.h1
          className="text-2xl font-poppins font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.a
            href="#home"
            className="font-poppins font-extrabold italic gradient-text"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#dad7cd] to-[#a3b18a]">Hey There!</span>
          </motion.a>
        </motion.h1>

        {/* Desktop Navigation */}
        <motion.nav 
          className="hidden md:flex items-center space-x-6 mr-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className={`nav-link text-white hover:text-[#dad7cd] relative group text-sm font-poppins font-medium outline-none ${activeSection === link.id ? 'active' : ''}`}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {link.title}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#dad7cd] to-[#a3b18a] transition-all duration-300 ${activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </motion.a>
          ))}
        </motion.nav>

        <div className="flex items-center space-x-3">
          <div className="hidden md:flex items-center space-x-3">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() =>
                  window.open("https://github.com/falakrana", "_blank")
                }
                className="text-white hover:text-[#dad7cd] hover:bg-white/10 rounded-full outline-none focus:outline-none focus:ring-0"
              >
                <Github className="h-5 w-5" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/falak-rana-125520221/",
                    "_blank"
                  )
                }
                className="text-white hover:text-[#dad7cd] hover:bg-white/10 rounded-full outline-none focus:outline-none focus:ring-0"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  (window.location.href = "mailto:ranafalak18@gmail.com")
                }
                className="bg-gradient-to-r from-[#588157] to-[#3a5a40] text-white border-0 hover:from-[#3a5a40] hover:to-[#344e41] outline-none focus:outline-none focus:ring-0"
              >
                <Mail className="h-4 w-4 mr-2" />
                Contact Me
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="text-white hover:text-[#dad7cd] hover:bg-white/10 rounded-full outline-none focus:outline-none focus:ring-0"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto py-4 px-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className={`nav-link block py-2 text-white hover:text-[#dad7cd] border-b border-white/10 outline-none font-poppins ${activeSection === link.id ? 'text-[#dad7cd] font-medium' : ''}`}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={toggleMobileMenu}
                >
                  {link.title}
                </motion.a>
              ))}
              <div className="flex items-center space-x-3 pt-3">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() =>
                    window.open("https://github.com/falakrana", "_blank")
                  }
                  className="text-white hover:text-[#dad7cd] hover:bg-white/10 rounded-full outline-none focus:outline-none focus:ring-0"
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/falak-rana-125520221/",
                      "_blank"
                    )
                  }
                  className="text-white hover:text-[#dad7cd] hover:bg-white/10 rounded-full outline-none focus:outline-none focus:ring-0"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    (window.location.href = "mailto:ranafalak18@gmail.com")
                  }
                  className="bg-gradient-to-r from-[#588157] to-[#3a5a40] text-white border-0 hover:from-[#3a5a40] hover:to-[#344e41] outline-none focus:outline-none focus:ring-0"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Contact Me
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;

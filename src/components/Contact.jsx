


"use client"

import { Github, Linkedin, Instagram, Mail, Code } from "lucide-react"
import { Button } from "@/components/ui/button"

function Contact() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/falakrana" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/falak-rana-125520221/" },
    // { icon: Twitter, href: "https://twitter.com/yourusername" },
    { icon: Instagram, href: "https://instagram.com/falakrana_30" },
    { icon: Mail, href: "mailto:ranafalak18@gmail.com" },
    { icon: Code, href: "https://leetcode.com/falakrana_30/" },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-12">Get in Touch</h2>
        <div className="flex justify-center space-x-4">
          {socialLinks.map((social, index) => (
            <Button className="bg-card-to-br text-card-foreground" key={index} variant="outline" size="icon" asChild>
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                <social.icon className="h-6 w-6" />
              </a>
            </Button>
          ))}
        </div>
        <div className="mt-12">
          <button
            onClick={scrollToTop}
            className="animate-pulse w-8 h-8 mx-auto border-2 border-white rounded-full flex items-center justify-center hover:bg-white/10 transition-colors transform rotate-180"
            aria-label="Scroll to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Contact

"use client"

interface ScrollArrowProps {
  targetId: string
  className?: string
}

const ScrollArrow = ({ targetId, className = "" }: ScrollArrowProps) => {
  const scrollToSection = () => {
    const targetSection = document.getElementById(targetId)
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className={`flex justify-center mt-8 ${className}`}>
      <button
        onClick={scrollToSection}
        className="animate-pulse w-8 h-8 mx-auto border-2 border-white rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
        aria-label={`Scroll to ${targetId} section`}
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
  )
}

export default ScrollArrow

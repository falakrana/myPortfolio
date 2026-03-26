import React, { useState, useRef, useEffect } from 'react';

const DraggableSticker = ({ src, initialPos, rotation }) => {
  const [pos, setPos] = useState(initialPos);
  const [isDragging, setIsDragging] = useState(false);
  const ref = useRef(null);
  const offset = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const rect = ref.current.getBoundingClientRect();
    offset.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
    e.preventDefault();
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      // Calculate new position relative to the nearest positioned parent
      const parentRect = ref.current.offsetParent.getBoundingClientRect();
      setPos({
        x: e.clientX - parentRect.left - offset.current.x,
        y: e.clientY - parentRect.top - offset.current.y
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={ref}
      onMouseDown={handleMouseDown}
      className={`absolute cursor-grab active:cursor-grabbing transition-shadow duration-300 z-40 select-none ${isDragging ? 'shadow-2xl scale-105 z-50' : 'hover:scale-105 shadow-lg'}`}
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <img src={src} alt="sticker" className="w-24 md:w-32 h-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" draggable="false" />
    </div>
  );
};

const Hero = () => {
  const interests = [
    "Full-Stack Development", "AI", "Machine Learning", "System Design",
    "Backend Engineering", "REST APIs", "Cloud Computing", "DevOps",
    "LLMs", "RAG", "Microservices", "Database Design",
    "Full-Stack Development", "AI", "Machine Learning", "System Design",
    "Backend Engineering", "REST APIs", "Cloud Computing", "DevOps",
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-24 pb-8 bg-light-bg">
      {/* Decorative Blur Elements */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-blue-200/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] bg-pink-200/20 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Status Badge */}
      <div className="flex items-center gap-3 px-4 py-1.5 bg-white backdrop-blur border border-green-200/50 rounded-full shadow-sm mb-12 fade-in z-10 transition-transform hover:scale-105">
        <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
        <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-500">Currently working in Infodesk India.</span>
      </div>

      {/* Main Name Heading */}
      <h1 className="text-7xl md:text-9xl font-serif font-medium text-text-primary text-center mb-6 fade-in px-4 tracking-tight leading-[0.9]">
        Falak Rana
      </h1>

      {/* Subheading */}
      <p className="text-text-secondary text-base md:text-lg text-center max-w-xl mb-12 fade-in px-6 font-medium leading-relaxed">
        I build products that feel simple, scalable, and effortless to use.
      </p>

      {/* Centered Image Area with Interactive Stickers */}
      <div className="relative mb-20 fade-in w-full max-w-4xl flex justify-center h-[400px]">
        {/* DRAGGABLE STICKERS (Initial positions around the image) */}
        <DraggableSticker 
          src="../public/dumbbell_sticker_1774554588725.png" 
          initialPos={{ x: 100, y: 50 }} 
          rotation={-15}
        />
        <DraggableSticker 
          src="../public/ps5_controller_sticker_1774554539204.png" 
          initialPos={{ x: 650, y: 150 }} 
          rotation={12}
        />

        {/* Central Profile Image */}
        <div className="w-72 h-80 rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl relative z-20 group">
          <img 
            src="../public/myImage/myNewImage.jpg"
            alt="Falak Rana"
            className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
          />
        </div>
      </div>

      {/* Scrolling Text Marquee */}
      <div className="w-full overflow-hidden mt-auto py-10 fade-in">
        <div className="marquee-container">
          <div className="marquee-track">
            {interests.map((interest, index) => (
              <span
                key={index}
                className="text-text-primary text-sm font-bold whitespace-nowrap px-10 uppercase tracking-widest opacity-70 hover:opacity-100 transition-all cursor-default"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .marquee-container {
          width: 100%;
          overflow: hidden;
          position: relative;
        }
        .marquee-container::before, .marquee-container::after {
          content: '';
          position: absolute;
          top: 0;
          width: 200px;
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }
        .marquee-container::before {
          left: 0;
          background: linear-gradient(to right, #E8EDF6, transparent);
        }
        .marquee-container::after {
          right: 0;
          background: linear-gradient(to left, #E8EDF6, transparent);
        }
        .marquee-track {
          display: flex;
          animation: marquee 40s linear infinite;
          width: max-content;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;

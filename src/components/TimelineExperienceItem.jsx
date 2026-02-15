import React from 'react';

const TimelineExperienceItem = ({ experience, index, isLeft }) => {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      {/* Left Column */}
      <div className={`${isLeft ? 'block' : 'md:block hidden'}`}>
        {isLeft && (
          <div 
            className="w-full md:w-11/12 ml-auto fade-in-left"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="group relative overflow-hidden rounded-lg border border-gray-800 bg-dark-secondary/30 backdrop-blur-sm p-6 hover:border-neon-purple hover:shadow-lg hover:shadow-neon-purple/20 transition-all duration-500">
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Period Badge */}
                <div className="mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-neon-purple/10 border border-neon-purple/30 rounded-md backdrop-blur-sm">
                    <svg className="w-4 h-4 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-neon-purple font-mono text-xs font-semibold">{experience.period}</span>
                  </div>
                </div>

                {/* Role */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-purple transition-colors duration-300">
                  {experience.role}
                </h3>

                {/* Company */}
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-5 h-5 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <p className="text-neon-purple font-semibold">{experience.company}</p>
                </div>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                  {experience.description}
                </p>

                {/* Technologies/Skills */}
                <div className="border-t border-gray-700/50 pt-4">
                  <h4 className="text-gray-300 font-semibold text-xs mb-3 uppercase tracking-wider flex items-center gap-2">
                    <svg className="w-4 h-4 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    Key Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1.5 text-xs font-mono border border-gray-700 text-gray-300 rounded-md hover:border-neon-purple hover:text-neon-purple hover:bg-neon-purple/5 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Timeline Center - Dot and Line */}
      <div className="absolute left-0 md:left-1/2 top-8 transform md:-translate-x-1/2 z-20">
        {/* Connecting Line to Card */}
        <div className={`absolute top-0 w-12 md:w-16 h-0.5 ${
          isLeft 
            ? 'md:right-3 md:bg-gradient-to-l hidden md:block' 
            : 'md:left-3 md:bg-gradient-to-r hidden md:block'
        } from-neon-purple/50 to-transparent`}></div>
        
        {/* Timeline Dot */}
        <div className="relative">
          {/* Outer glow ring */}
          <div className="absolute -inset-1 w-7 h-7 bg-neon-purple/30 rounded-full blur-md animate-pulse"></div>
          {/* Main dot */}
          <div className="relative w-5 h-5 bg-neon-purple rounded-full border-4 border-dark-bg shadow-lg shadow-neon-purple/50">
            {/* Inner dot */}
            <div className="absolute inset-1.5 bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className={`${!isLeft ? 'block' : 'md:block hidden'} ${isLeft ? 'md:hidden' : ''}`}>
        {!isLeft && (
          <div 
            className="w-full md:w-11/12 mr-auto fade-in-right"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="group relative overflow-hidden rounded-lg border border-gray-800 bg-dark-secondary/30 backdrop-blur-sm p-6 hover:border-neon-purple hover:shadow-lg hover:shadow-neon-purple/20 transition-all duration-500">
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Period Badge */}
                <div className="mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-neon-purple/10 border border-neon-purple/30 rounded-md backdrop-blur-sm">
                    <svg className="w-4 h-4 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-neon-purple font-mono text-xs font-semibold">{experience.period}</span>
                  </div>
                </div>

                {/* Role */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-purple transition-colors duration-300">
                  {experience.role}
                </h3>

                {/* Company */}
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-5 h-5 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <p className="text-neon-purple font-semibold">{experience.company}</p>
                </div>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                  {experience.description}
                </p>

                {/* Technologies/Skills */}
                <div className="border-t border-gray-700/50 pt-4">
                  <h4 className="text-gray-300 font-semibold text-xs mb-3 uppercase tracking-wider flex items-center gap-2">
                    <svg className="w-4 h-4 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    Key Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1.5 text-xs font-mono border border-gray-700 text-gray-300 rounded-md hover:border-neon-purple hover:text-neon-purple hover:bg-neon-purple/5 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineExperienceItem;

import React from 'react';

const ProjectCard = ({ title, description, techStack, image, liveUrl, githubUrl }) => {
  return (
    <div className="border border-gray-800 hover:border-neon-purple transition-all duration-300 group">
      {/* Project Image */}
      <div className="relative overflow-hidden h-40 bg-gray-900">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 border-t border-gray-800">
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-3">
          {techStack.map((tech, index) => (
            <span 
              key={index}
              className="text-xs text-gray-400 font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-white mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-4">
          {description}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {liveUrl && (
            <a 
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 border border-neon-purple text-neon-purple text-sm hover:bg-neon-purple/10 transition-colors"
            >
              Live &lt;~&gt;
            </a>
          )}
          {githubUrl && (
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 border border-gray-600 text-gray-400 text-sm hover:border-neon-purple hover:text-neon-purple transition-colors"
            >
              Github &gt;=
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

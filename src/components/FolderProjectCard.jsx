import React from 'react';

const FolderProjectCard = ({ title, description, techStack, image, liveUrl, githubUrl }) => {
  const handleClick = () => {
    if (liveUrl) {
      window.open(liveUrl, '_blank');
    } else if (githubUrl) {
      window.open(githubUrl, '_blank');
    }
  };

  return (
    <div 
      onClick={handleClick}
      className="group cursor-pointer transition-all duration-300 hover:-translate-y-2"
    >
      {/* Folder Card */}
      <div className="relative">
        {/* Folder Tab */}
        <div className="absolute -top-3 left-4 w-20 h-6 bg-gray-700 border-t border-l border-r border-gray-600 rounded-t-md group-hover:border-neon-purple/50 transition-colors"></div>
        
        {/* Folder Body */}
        <div className="relative bg-gray-800 border border-gray-700 rounded-md overflow-hidden group-hover:border-neon-purple group-hover:shadow-lg group-hover:shadow-neon-purple/20 transition-all duration-300">
          {/* Lock Icon */}
          <div className="absolute top-3 right-3 w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center border border-gray-600 group-hover:border-neon-purple/50 transition-colors z-10">
            <svg className="w-3 h-3 text-gray-400 group-hover:text-neon-purple transition-colors" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
          </div>

          {/* Project Image/Placeholder */}
          <div className="h-40 bg-gray-900 flex items-center justify-center overflow-hidden">
            {image ? (
              <img 
                src={image} 
                alt={title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
            ) : (
              <div className="text-center p-6">
                <svg className="w-16 h-16 mx-auto text-gray-600 group-hover:text-neon-purple/50 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-500 text-xs mt-2 font-mono">project picture</p>
              </div>
            )}
          </div>

          {/* Tech Stack Tags */}
          <div className="p-4 bg-gray-800/50">
            <div className="flex flex-wrap gap-2">
              {techStack.slice(0, 3).map((tech, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 text-xs font-mono bg-gray-900 border border-gray-700 text-gray-400 rounded"
                >
                  {tech}
                </span>
              ))}
              {techStack.length > 3 && (
                <span className="px-2 py-1 text-xs font-mono text-gray-500">
                  +{techStack.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Open Icon - Bottom Right */}
        <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center border-2 border-gray-600 group-hover:border-neon-purple group-hover:bg-neon-purple/20 transition-all duration-300 z-10">
          <svg className="w-4 h-4 text-gray-400 group-hover:text-neon-purple transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </div>

      {/* Project Title */}
      <h3 className="mt-6 text-gray-400 font-medium text-center group-hover:text-white transition-colors">
        {title}
      </h3>
    </div>
  );
};

export default FolderProjectCard;

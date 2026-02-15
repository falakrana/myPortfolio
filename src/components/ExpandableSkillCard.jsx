import React, { useState } from 'react';

const ExpandableSkillCard = ({ category, skills, isAnyExpanded, onExpand }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleSkills = isExpanded ? skills : skills.slice(0, 4);
  const hasMore = skills.length > 4;

  const handleToggle = () => {
    const newState = !isExpanded;
    setIsExpanded(newState);
    onExpand(newState);
  };

  return (
    <div 
      className={`relative transition-all duration-500 ${
        isAnyExpanded && !isExpanded ? 'opacity-60' : 'opacity-100'
      }`}
    >
      <div 
        className={`group rounded-md border transition-all duration-500 ${
          isExpanded 
            ? 'border-neon-purple shadow-xl shadow-neon-purple/20 bg-dark-secondary/90 scale-[1.02] z-10' 
            : 'border-gray-800 bg-dark-secondary/50 hover:border-neon-purple/50'
        }`}
      >
        {/* Card Header - Very Compact */}
        <div className="px-3 py-2.5 border-b border-gray-800 relative overflow-hidden">
          {/* Glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <h3 className={`text-sm font-bold transition-colors duration-300 leading-tight relative z-10 ${
            isExpanded ? 'text-neon-purple' : 'text-white group-hover:text-neon-purple'
          }`}>
            {category}
          </h3>
          <p className="text-gray-500 text-[10px] mt-0.5 relative z-10 group-hover:text-gray-400 transition-colors duration-300">{skills.length} skills</p>
        </div>

        {/* Skills List - Very Compact */}
        <div className="p-3">
          <div className="space-y-1.5">
            {visibleSkills.map((skill, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded border border-gray-700 bg-dark-bg/50 px-2.5 py-2 hover:border-neon-purple transition-all duration-300 flex items-center"
                style={{
                  animation: isExpanded && index >= 4 ? `fadeInUp 0.3s ease-out ${(index - 4) * 0.05}s both` : 'none'
                }}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Skill content */}
                <div className="relative z-10 flex items-center gap-2 w-full">
                  <div className="w-1 h-1 bg-neon-purple rounded-full group-hover:scale-125 transition-transform duration-300 flex-shrink-0"></div>
                  <span className="text-gray-300 font-medium text-[11px] group-hover:text-white transition-colors duration-300 truncate leading-tight">
                    {skill}
                  </span>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-neon-purple/0 group-hover:border-neon-purple/50 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Expand/Collapse Button - Very Compact */}
        {hasMore && (
          <div className="border-t border-gray-800 px-3 py-2">
            <button
              onClick={handleToggle}
              className="w-full flex items-center justify-center gap-1.5 py-1.5 rounded border border-gray-700 hover:border-neon-purple hover:bg-neon-purple/5 transition-all duration-300 group"
            >
              <span className="text-gray-400 text-[10px] font-medium group-hover:text-neon-purple transition-colors">
                {isExpanded ? 'Less' : `+${skills.length - 4}`}
              </span>
              <svg 
                className={`w-3 h-3 text-gray-400 group-hover:text-neon-purple transition-all duration-300 ${
                  isExpanded ? 'rotate-180' : 'rotate-0'
                }`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ExpandableSkillCard;

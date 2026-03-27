import React from 'react';

const KnowledgeBaseCard = ({ title, description, createdOn }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-shadow duration-200 cursor-pointer relative flex flex-col">
      <div className="absolute top-3 right-3">
        <svg className="w-4 h-4 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
        </svg>
      </div>
      
      <h3 className="text-base font-medium text-gray-900 mb-2 pr-6">{title}</h3>
      
      <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed flex-grow">
        {description}
      </p>
      
      <div className="flex items-center text-xs text-gray-500">
        <span>Created On: {createdOn}</span>
      </div>
    </div>
  );
};

export default KnowledgeBaseCard;

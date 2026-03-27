import React from 'react';

const Pagination = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 py-4 bg-white border-t border-gray-200 space-y-4 sm:space-y-0">
      <div className="text-sm text-gray-700 order-2 sm:order-1">
        6 rows
      </div>
      
      <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 order-1 sm:order-2">
        <div className="flex items-center space-x-2 text-sm text-gray-700 justify-center sm:justify-start">
          <span>Rows per page</span>
          <select className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>10</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </select>
        </div>
        
        <div className="flex items-center space-x-2 text-sm text-gray-700 justify-center sm:justify-start">
          <span>page 1 of 1</span>
        </div>
        
        <div className="flex items-center space-x-1 justify-center sm:justify-start">
          <button className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;

import React from 'react';

const Header = () => {
  return (
    <header className="bg-indigo-900 rounded-none px-6 py-3">
      <div className="flex items-center justify-between">
        {/* Logo and Workspace Dropdown */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-indigo-900 font-bold text-sm">W</span>
            </div>
            <span className="text-white font-semibold text-lg">Worspace</span>
          </div>
          
          <div className="relative">
            <button className="bg-indigo-800 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-indigo-700 transition-colors">
              <span>Worspace 1</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Search Bar */}
        <div className="flex-1 max-w-xl mx-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg className="w-5 h-5 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-indigo-800 text-white placeholder-indigo-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-indigo-700"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <span className="text-indigo-300 text-sm">ЖК</span>
            </div>
          </div>
        </div>
        
        {/* User Icons */}
        <div className="flex items-center space-x-4">
          <button className="p-2 text-indigo-300 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          
          <div className="w-10 h-10 bg-indigo-700 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-medium">3A</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

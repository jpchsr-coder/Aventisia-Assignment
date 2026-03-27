import React, { useState } from 'react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuCategories = [
    {
      title: 'MY PROJECTS',
      items: [
        { icon: '�', label: 'Agents', active: false },
        { icon: '🧠', label: 'AI Models', active: false },
        { icon: '📚', label: 'Library', active: false }
      ]
    },
    {
      title: 'ORCHESTRATOR',
      items: [
        { icon: '📤', label: 'Published', active: false },
        { icon: '�️', label: 'Machines', active: false },
        { icon: '⏳', label: 'Queues', active: false },
        { icon: '🔘', label: 'Triggers', active: false },
        { icon: '💼', label: 'Jobs', active: false },
        { icon: '⚡', label: 'Executions', active: false },
        { icon: '�', label: 'Vault', active: false },
        { icon: '📖', label: 'Knowledge Base', active: true },
        { icon: '�', label: 'Key Store', active: false }
      ]
    }
  ];

  return (
    <>
      {/* Mobile overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden ${isCollapsed ? 'hidden' : 'block'}`}
        onClick={() => setIsCollapsed(true)}
      />
      
      <div className={`fixed lg:relative bg-white border-r border-gray-200 min-h-screen z-50 transition-transform duration-300 ease-in-out ${
        isCollapsed ? '-translate-x-full lg:translate-x-0' : 'translate-x-0'
      } ${isCollapsed ? 'lg:w-20' : 'w-64'}`}>
        <div className="p-4">
          {/* Logo Section */}
          <div className="flex items-center justify-between mb-4">
            
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="lg:hidden p-2 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Navigation Menu */}
          <nav className="space-y-6">
            {menuCategories.map((category) => (
              <div key={category.title}>
                {/* Category Title */}
                {!isCollapsed && (
                  <h3 className="px-1 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    {category.title}
                  </h3>
                )}
                
                {/* Category Items */}
                <div className="space-y-1">
                  {category.items.map((item) => (
                    <button
                      key={item.label}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 flex items-center relative ${
                        item.active
                          ? 'bg-purple-100 text-indigo-700 border-l-4 border-l-indigo-600'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                      }`}
                    >
                      <span className="text-lg flex-shrink-0 w-5 text-center">{item.icon}</span>
                      {!isCollapsed && (
                        <span className="hidden lg:block font-medium text-sm ml-3">{item.label}</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </nav>
          
          {/* Bottom Section */}
          {!isCollapsed && (
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="space-y-2">
                <button className="w-full text-left px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200 flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  <span className="hidden lg:block font-medium">Logout</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Mobile menu button */}
      <button
        onClick={() => setIsCollapsed(false)}
        className="lg:hidden fixed top-4 left-4 z-30 p-2 bg-white rounded-lg shadow-md border border-gray-200"
      >
        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </>
  );
};

export default Sidebar;

import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../store/modalSlice';

const KnowledgeBasePage = () => {
  const dispatch = useDispatch();

  const documents = [
    {
      id: 1,
      title: '2024 Financial Report',
      type: 'PDF',
      size: '2.4 MB',
      modified: '2 hours ago',
      icon: '📄'
    },
    {
      id: 2,
      title: 'Project Proposal Q1',
      type: 'DOCX',
      size: '1.2 MB',
      modified: '5 hours ago',
      icon: '📝'
    },
    {
      id: 3,
      title: 'Meeting Notes - March',
      type: 'TXT',
      size: '156 KB',
      modified: '1 day ago',
      icon: '📋'
    },
    {
      id: 4,
      title: 'Product Specifications',
      type: 'PDF',
      size: '3.8 MB',
      modified: '2 days ago',
      icon: '📄'
    },
    {
      id: 5,
      title: 'Marketing Strategy',
      type: 'PPTX',
      size: '5.1 MB',
      modified: '3 days ago',
      icon: '📊'
    },
    {
      id: 6,
      title: 'User Research Data',
      type: 'XLSX',
      size: '892 KB',
      modified: '1 week ago',
      icon: '📈'
    }
  ];

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="p-6">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Knowledge Base</h1>
          <p className="text-gray-600">Manage your documents and knowledge resources</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button
            onClick={() => dispatch(openModal())}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200 flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span>Add Document</span>
          </button>
          
          <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors duration-200 flex items-center space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <span>Upload Files</span>
          </button>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg p-4 mb-8 border border-gray-200">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search documents..."
                  className="w-full bg-gray-50 text-gray-900 placeholder-gray-500 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-gray-300"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
            
            <select className="bg-gray-50 text-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-gray-300">
              <option>All Types</option>
              <option>PDF</option>
              <option>DOCX</option>
              <option>TXT</option>
              <option>PPTX</option>
              <option>XLSX</option>
            </select>
          </div>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc) => (
            <div key={doc.id} className="bg-white rounded-lg p-6 hover:bg-gray-50 transition-colors duration-200 cursor-pointer border border-gray-200">
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{doc.icon}</div>
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>
              
              <h3 className="text-gray-900 font-medium mb-2">{doc.title}</h3>
              
              <div className="text-gray-600 text-sm space-y-1">
                <div className="flex items-center justify-between">
                  <span>{doc.type}</span>
                  <span>{doc.size}</span>
                </div>
                <div>Modified {doc.modified}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBasePage;

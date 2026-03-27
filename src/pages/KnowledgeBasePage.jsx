import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../store/modalSlice';
import KnowledgeBaseCard from '../components/KnowledgeBaseCard';
import Pagination from '../components/Pagination';

const KnowledgeBasePage = () => {
  const dispatch = useDispatch();
  const knowledgeBaseArticles = useSelector((state) => state.knowledgeBase.knowledgeBases);

  return (
    <div className="flex-1 overflow-y-auto bg-gray-50 flex flex-col">
      <div className="p-6 flex-1 flex flex-col">
        {/* Header with Search and Create New */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Knowledge Base</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
              />
              <svg className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <button
              onClick={() => dispatch(openModal())}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Create New
            </button>
          </div>
        </div>

        {/* Knowledge Base Cards Grid */}
        <div className="grid overflow-y-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
          {knowledgeBaseArticles.map((article) => (
            <KnowledgeBaseCard
              key={article.id}
              title={article.title}
              description={article.description}
              createdOn={article.createdOn}
            />
          ))}
        </div>
      </div>

      {/* Pagination at bottom */}
      <Pagination />
    </div>
  );
};

export default KnowledgeBasePage;

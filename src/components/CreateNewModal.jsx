import React from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../store/modalSlice';

const CreateNewModal = ({ isOpen }) => {
  const dispatch = useDispatch();

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(closeModal());
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex"
      onClick={handleOverlayClick}
    >
      <div className="absolute right-0 top-0 h-full w-full sm:w-full md:max-w-md bg-white shadow-xl transform transition-transform duration-300 ease-out translate-x-0">
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Create New Knowledge Base</h2>
            <button 
              onClick={() => dispatch(closeModal())}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 sm:p-6">
            <form className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter knowledge base name"
                />
              </div>
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter description"
                />
              </div>
              
              <div>
                <label htmlFor="vectorStore" className="block text-sm font-medium text-gray-700 mb-2">
                  Vector Store
                </label>
                <select
                  id="vectorStore"
                  name="vectorStore"
                  defaultValue="Qdrant"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="Qdrant">Qdrant</option>
                  <option value="Pinecone">Pinecone</option>
                  <option value="Weaviate">Weaviate</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="llmModel" className="block text-sm font-medium text-gray-700 mb-2">
                  LLM Embedding Model
                </label>
                <select
                  id="llmModel"
                  name="llmModel"
                  defaultValue="text-embedding-ada-002"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="text-embedding-ada-002">text-embedding-ada-002</option>
                  <option value="text-embedding-3-small">text-embedding-3-small</option>
                  <option value="text-embedding-3-large">text-embedding-3-large</option>
                </select>
              </div>
            </form>
          </div>
          
          <div className="p-4 sm:p-6 border-t border-gray-200">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewModal;

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../store/modalSlice';
import { addKnowledgeBase, updateKnowledgeBase } from '../store/knowledgeBaseSlice';

const KnowledgeBaseForm = ({ knowledgeBase, isOpen, isEdit }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    vectorStore: 'Qdrant',
    llmEmbeddingModel: 'text-embedding-ada-002'
  });

  useEffect(() => {
    if (isEdit && knowledgeBase) {
      setFormData({
        name: knowledgeBase.title,
        description: knowledgeBase.description.replace('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.', ''),
        vectorStore: 'Qdrant',
        llmEmbeddingModel: 'text-embedding-ada-002'
      });
    } else {
      // Reset form for create mode
      setFormData({
        name: '',
        description: '',
        vectorStore: 'Qdrant',
        llmEmbeddingModel: 'text-embedding-ada-002'
      });
    }
  }, [isEdit, knowledgeBase, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isEdit && knowledgeBase) {
      dispatch(updateKnowledgeBase({ id: knowledgeBase.id, ...formData }));
    } else {
      dispatch(addKnowledgeBase(formData));
    }
    
    dispatch(closeModal());
  };

  const handleClose = () => {
    dispatch(closeModal());
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-end z-50">
      <div className="bg-white w-full max-w-2xl h-full overflow-y-auto transform transition-transform duration-300 ease-in-out">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              {isEdit ? 'Edit Knowledge Base' : 'Create New Knowledge Base'}
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              {isEdit ? 'Update your knowledge base information.' : 'Best for quick answers from documents, websites and text files.'}
            </p>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name {!isEdit && <span className="text-red-500">*</span>}
                {!isEdit && <span className="text-xs text-gray-500 ml-2">(Cannot be edited later)</span>}
              </label>
              <input readOnly={isEdit}
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className={`w-full ${isEdit ? 'bg-gray-100' : ''} px-3 py-2 border border-gray-300 rounded-lg focus:outline-none ${isEdit ? '' : 'focus:ring-2 focus:ring-purple-500'} focus:border-transparent`}
              />
            </div>

            {/* Description Field */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
              />
            </div>

            {/* Vector Store Field */}
            <div>
              <label htmlFor="vectorStore" className="block text-sm font-medium text-gray-700 mb-2">
                Vector Store {!isEdit && <span className="text-red-500">*</span>}
              </label>
              <select
                id="vectorStore"
                name="vectorStore"
                value={formData.vectorStore}
                onChange={handleChange}
                required={!isEdit}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
              >
                <option value="Qdrant">Qdrant</option>
                <option value="Pinecone">Pinecone</option>
                <option value="Chroma">Chroma</option>
                <option value="FAISS">FAISS</option>
              </select>
            </div>

            {/* LLM Embedding Model Field */}
            <div>
              <label htmlFor="llmEmbeddingModel" className="block text-sm font-medium text-gray-700 mb-2">
                LLM Embedding Model {!isEdit && <span className="text-red-500">*</span>}
              </label>
              <select
                id="llmEmbeddingModel"
                name="llmEmbeddingModel"
                value={formData.llmEmbeddingModel}
                onChange={handleChange}
                required={!isEdit}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
              >
                <option value="text-embedding-ada-002">text-embedding-ada-002</option>
                <option value="text-embedding-3-small">text-embedding-3-small</option>
                <option value="text-embedding-3-large">text-embedding-3-large</option>
                <option value="sentence-transformers">sentence-transformers</option>
              </select>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-3 mt-8">
            <button
              type="button"
              onClick={handleClose}
              className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              {isEdit ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default KnowledgeBaseForm;

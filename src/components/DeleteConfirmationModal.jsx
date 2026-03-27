import React from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../store/modalSlice';
import { deleteKnowledgeBase } from '../store/knowledgeBaseSlice';

const DeleteConfirmationModal = ({ knowledgeBase, isOpen }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (knowledgeBase) {
      dispatch(deleteKnowledgeBase(knowledgeBase.id));
    }
    dispatch(closeModal());
  };

  const handleCancel = () => {
    dispatch(closeModal());
  };

  if (!isOpen || !knowledgeBase) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md mx-4 p-6">
        {/* Header */}
        <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4">
          <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>

        {/* Content */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Delete Knowledge Base
          </h3>
          <p className="text-sm text-gray-600 mb-6">
            Are you sure you want to delete "{knowledgeBase.title}"? This action cannot be undone.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-3">
          <button
            onClick={handleCancel}
            className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;

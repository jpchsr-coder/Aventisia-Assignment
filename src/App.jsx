import React from 'react';
import { useSelector } from 'react-redux';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import KnowledgeBasePage from './pages/KnowledgeBasePage';
import KnowledgeBaseForm from './components/KnowledgeBaseForm';
import DeleteConfirmationModal from './components/DeleteConfirmationModal';

function App() {
  const modalOpen = useSelector((state) => state.modal.isOpen);
  const modalType = useSelector((state) => state.modal.modalType);
  const modalData = useSelector((state) => state.modal.data);

  return (
    <div className="flex flex-col h-screen bg-gray-50 overflow-hidden">
      <Header />
      <div className="flex flex-1 min-h-0">
        <Sidebar />
        <KnowledgeBasePage />
      </div>
      {modalOpen && (modalType === 'create' || modalType === 'edit') && (
        <KnowledgeBaseForm 
          knowledgeBase={modalData} 
          isOpen={true} 
          isEdit={modalType === 'edit'}
        />
      )}
      {modalOpen && modalType === 'delete' && <DeleteConfirmationModal knowledgeBase={modalData} isOpen={true} />}
    </div>
  );
}

export default App;

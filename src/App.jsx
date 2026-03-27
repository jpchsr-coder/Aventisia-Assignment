import React from 'react';
import { useSelector } from 'react-redux';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import KnowledgeBasePage from './pages/KnowledgeBasePage';
import CreateNewModal from './components/CreateNewModal';

function App() {
  const modalOpen = useSelector((state) => state.modal.isOpen);

  return (
    <div className="flex flex-col h-screen bg-gray-50 overflow-hidden">
      <Header />
      <div className="flex flex-1 min-h-0">
        <Sidebar />
        <KnowledgeBasePage />
      </div>
      <CreateNewModal isOpen={modalOpen} />
    </div>
  );
}

export default App;

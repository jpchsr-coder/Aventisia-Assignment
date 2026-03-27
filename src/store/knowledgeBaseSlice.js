import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  knowledgeBases: [
    {
      id: 1,
      title: 'Test',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
      createdOn: '14/07/2025'
    },
    {
      id: 2,
      title: 'Test',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
      createdOn: '14/07/2025'
    },
    {
      id: 3,
      title: 'Test',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
      createdOn: '14/07/2025'
    },
    {
      id: 4,
      title: 'Test',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
      createdOn: '14/07/2025'
    },
    {
      id: 5,
      title: 'Test',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
      createdOn: '14/07/2025'
    },
    {
      id: 6,
      title: 'Test',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
      createdOn: '14/07/2025'
    }
  ],
  searchTerm: '',
  currentPage: 1,
  rowsPerPage: 10
};

const knowledgeBaseSlice = createSlice({
  name: 'knowledgeBase',
  initialState,
  reducers: {
    addKnowledgeBase: (state, action) => {
      const newKnowledgeBase = {
        id: Date.now(),
        title: action.payload.name,
        description: action.payload.description || 'No description provided',
        createdOn: new Date().toLocaleDateString('en-GB', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        }).replace(/\//g, '/')
      };
      state.knowledgeBases.unshift(newKnowledgeBase);
    },
    updateKnowledgeBase: (state, action) => {
      const { id, ...updateData } = action.payload;
      const index = state.knowledgeBases.findIndex(kb => kb.id === id);
      if (index !== -1) {
        state.knowledgeBases[index] = {
          ...state.knowledgeBases[index],
          title: updateData.name,
          description: updateData.description || state.knowledgeBases[index].description
        };
      }
    },
    deleteKnowledgeBase: (state, action) => {
      const id = action.payload;
      state.knowledgeBases = state.knowledgeBases.filter(kb => kb.id !== id);
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.currentPage = 1; // Reset to first page when searching
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setRowsPerPage: (state, action) => {
      state.rowsPerPage = action.payload;
      state.currentPage = 1; // Reset to first page when changing rows per page
    }
  },
});

export const { addKnowledgeBase, updateKnowledgeBase, deleteKnowledgeBase, setSearchTerm, setCurrentPage, setRowsPerPage } = knowledgeBaseSlice.actions;

// Selectors
export const selectFilteredKnowledgeBases = (state) => {
  const { knowledgeBases, searchTerm } = state.knowledgeBase;
  if (!searchTerm) return knowledgeBases;
  
  return knowledgeBases.filter(kb => 
    kb.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    kb.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export const selectPaginatedKnowledgeBases = (state) => {
  const filtered = selectFilteredKnowledgeBases(state);
  const { currentPage, rowsPerPage } = state.knowledgeBase;
  
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  
  return filtered.slice(startIndex, endIndex);
};

export const selectPaginationInfo = (state) => {
  const filtered = selectFilteredKnowledgeBases(state);
  const { currentPage, rowsPerPage } = state.knowledgeBase;
  
  const totalPages = Math.ceil(filtered.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage + 1;
  const endIndex = Math.min(currentPage * rowsPerPage, filtered.length);
  
  return {
    totalRows: filtered.length,
    currentPage,
    totalPages,
    rowsPerPage,
    startIndex: filtered.length > 0 ? startIndex : 0,
    endIndex: filtered.length > 0 ? endIndex : 0
  };
};

export default knowledgeBaseSlice.reducer;

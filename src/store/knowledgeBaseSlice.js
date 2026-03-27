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
  ]
};

const knowledgeBaseSlice = createSlice({
  name: 'knowledgeBase',
  initialState,
  reducers: {
    addKnowledgeBase: (state, action) => {
      const newKnowledgeBase = {
        id: Date.now(), // Simple unique ID
        title: action.payload.name,
        description: action.payload.description || 'No description provided',
        createdOn: new Date().toLocaleDateString('en-GB', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        }).replace(/\//g, '/')
      };
      state.knowledgeBases.unshift(newKnowledgeBase);
    }
  },
});

export const { addKnowledgeBase } = knowledgeBaseSlice.actions;
export default knowledgeBaseSlice.reducer;

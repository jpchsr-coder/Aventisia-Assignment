import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modalSlice';
import knowledgeBaseReducer from './knowledgeBaseSlice';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    knowledgeBase: knowledgeBaseReducer,
  },
});

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Category } from '../types';

interface CategoriesState {
  categories: Category[];
  selectedCategory: string | null;
}

const initialState: CategoriesState = {
  categories: [
    { id: '1', name: 'Eletrônicos', color: '#007AFF', icon: 'smartphone' },
    { id: '2', name: 'Ferramentas', color: '#FF9500', icon: 'build' },
    { id: '3', name: 'Móveis', color: '#34C759', icon: 'home' },
    { id: '4', name: 'Veículos', color: '#FF3B30', icon: 'car' },
    { id: '5', name: 'Equipamentos', color: '#5856D6', icon: 'construct' },
    { id: '6', name: 'Outros', color: '#8E8E93', icon: 'ellipsis-horizontal' },
  ],
  selectedCategory: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },
    addCategory: (state, action: PayloadAction<Category>) => {
      state.categories.push(action.payload);
    },
    updateCategory: (state, action: PayloadAction<Category>) => {
      const index = state.categories.findIndex(cat => cat.id === action.payload.id);
      if (index !== -1) {
        state.categories[index] = action.payload;
      }
    },
    deleteCategory: (state, action: PayloadAction<string>) => {
      state.categories = state.categories.filter(cat => cat.id !== action.payload);
    },
    setSelectedCategory: (state, action: PayloadAction<string | null>) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const {
  setCategories,
  addCategory,
  updateCategory,
  deleteCategory,
  setSelectedCategory,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
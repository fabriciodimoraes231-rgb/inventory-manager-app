import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InventoryItem, SearchFilters } from '../types';

interface InventoryState {
  items: InventoryItem[];
  searchQuery: string;
  filters: SearchFilters;
  isLoading: boolean;
  error: string | null;
}

const initialState: InventoryState = {
  items: [],
  searchQuery: '',
  filters: {},
  isLoading: false,
  error: null,
};

const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<InventoryItem[]>) => {
      state.items = action.payload;
    },
    addItem: (state, action: PayloadAction<InventoryItem>) => {
      state.items.push(action.payload);
    },
    updateItem: (state, action: PayloadAction<InventoryItem>) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setFilters: (state, action: PayloadAction<SearchFilters>) => {
      state.filters = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  setItems,
  addItem,
  updateItem,
  deleteItem,
  setSearchQuery,
  setFilters,
  setLoading,
  setError,
  clearError,
} = inventorySlice.actions;

export default inventorySlice.reducer;
import { configureStore } from '@reduxjs/toolkit';
import inventorySlice from './inventorySlice';
import categoriesSlice from './categoriesSlice';
import settingsSlice from './settingsSlice';

export const store = configureStore({
  reducer: {
    inventory: inventorySlice,
    categories: categoriesSlice,
    settings: settingsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
        ignoredPaths: ['inventory.items.createdAt', 'inventory.items.updatedAt'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
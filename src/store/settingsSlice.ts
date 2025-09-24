import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SettingsState {
  darkMode: boolean;
  language: string;
  defaultLocation: string;
  autoBackup: boolean;
  backupFrequency: 'daily' | 'weekly' | 'monthly';
  notifications: boolean;
}

const initialState: SettingsState = {
  darkMode: false,
  language: 'pt-BR',
  defaultLocation: '',
  autoBackup: true,
  backupFrequency: 'weekly',
  notifications: true,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
    setDefaultLocation: (state, action: PayloadAction<string>) => {
      state.defaultLocation = action.payload;
    },
    toggleAutoBackup: (state) => {
      state.autoBackup = !state.autoBackup;
    },
    setBackupFrequency: (state, action: PayloadAction<'daily' | 'weekly' | 'monthly'>) => {
      state.backupFrequency = action.payload;
    },
    toggleNotifications: (state) => {
      state.notifications = !state.notifications;
    },
  },
});

export const {
  toggleDarkMode,
  setLanguage,
  setDefaultLocation,
  toggleAutoBackup,
  setBackupFrequency,
  toggleNotifications,
} = settingsSlice.actions;

export default settingsSlice.reducer;
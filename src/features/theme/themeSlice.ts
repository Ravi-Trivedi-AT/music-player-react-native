import {createSlice} from '@reduxjs/toolkit';
import {Appearance} from 'react-native';

const initialColorScheme = Appearance.getColorScheme() || 'dark';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    isDarkMode: initialColorScheme === 'light',
  },
  reducers: {
    toggleTheme: state => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const {toggleTheme} = themeSlice.actions;

export default themeSlice.reducer;

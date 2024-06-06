import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';

import { Theme } from '@constants/theme';

type ThemeState = {
  theme: string;
};

const themeData = localStorage.getItem('theme') || Theme.DARK;

const initialState: ThemeState = {
  theme: themeData,
};

const themeSlice = createSlice<ThemeState, SliceCaseReducers<ThemeState>>({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      const newTheme = action.payload;
      localStorage.setItem('theme', JSON.stringify(newTheme));
      state.theme = newTheme;
    },
  },
});

export const themeSelector = (state) => state.theme.theme;

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;

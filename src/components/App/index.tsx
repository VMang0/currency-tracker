import { FC } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Notification from '@components/Notification';
import { Theme } from '@constants/theme';
import { themeSelector } from '@redux/slices/themeSlice';
import { Routes } from '@routes/routes';
import { GlobalStyles } from '@styled/global';
import { darkTheme, lightTheme } from '@styled/theme';

export const App: FC = () => {
  const theme = useSelector(themeSelector);
  const isDarkTheme = theme === Theme.DARK;

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Notification />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
};

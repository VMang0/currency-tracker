import { DefaultTheme } from 'styled-components';

import { ThemeType } from '@styled/types';

export const theme: ThemeType = {
  colors: {
    green: {
      DEFAULT: '#00BC4F',
      100: '#aedf23',
      200: '#a3dc00',
      300: '#00ce2c',
      400: '#00BC4F4D',
    },
    gray: {
      DEFAULT: '#fcfcfc',
      200: '#f1f1f1',
      300: '#e0e0e5',
      400: '#d9d9dd',
      500: '#898989',
      600: '#737373',
      700: '#4f4f4f',
      800: '#474747',
    },
    white: {
      DEFAULT: '#fff',
    },
    black: {
      DEFAULT: '#030304',
      50: '#a7b2c3',
      100: '#6c7a89',
      200: '#383842',
      900: '#202025',
    },
  },
  gap: {
    xxs: '10px',
    xs: '20px',
    s: '24px',
    m: '40px',
    l: '50px',
    xl: '60px',
    xxl: '110px',
  },
  fontSize: {
    xxxs: '16px',
    xxs: '20px',
    xs: '25px',
    s: '28px',
    m: '32px',
    l: '35px',
    xl: '38px',
    xxl: '60px',
    xxxl: '76px',
    exl: '90px',
  },
  width: {
    max: '1440px',
  },
  fonts: {
    main: 'Poppins, sans-serif',
    secondary: 'Inter, sans-serif',
  },
  logo: {
    s: '45px',
    xl: '345px',
  },
  lineHeight: {
    xs: '100%',
    s: '120%',
    m: '150%',
    l: '187%',
  },
  spaces: {
    xxxs: '10px',
    xxs: '15px',
    xs: '25px',
    s: '30px',
    m: '33px',
    l: '40px',
    xl: '45px',
    xxl: '50px',
    xxxl: '90px',
    exl: '100px',
  },
};

export const lightTheme: DefaultTheme = {
  ...theme,
  themeColors: {
    DEFAULT: theme.colors.gray.DEFAULT,
    100: theme.colors.gray[300],
    200: theme.colors.gray.DEFAULT,
    300: theme.colors.gray[400],
    400: theme.colors.gray[600],
    500: theme.colors.black[100],
    600: theme.colors.gray[700],
    700: theme.colors.black.DEFAULT,
  },
  gradient: {
    100: 'linear-gradient(45deg, #fcfcfc 9%, rgba(0,188,79,0.1803571770505077) 50%, #fcfcfc 89%)',
  },
};

export const darkTheme: DefaultTheme = {
  ...theme,
  themeColors: {
    DEFAULT: '#030304',
    100: theme.colors.black[900],
    200: theme.colors.black[200],
    300: theme.colors.gray[800],
    400: theme.colors.gray[500],
    500: theme.colors.black[50],
    600: theme.colors.gray[400],
    700: theme.colors.white.DEFAULT,
  },
  gradient: {
    100: 'linear-gradient(50deg, rgba(3,3,4,1) 9%, rgba(0,188,79,0.1803571770505077) 50%, rgba(3,3,4,1) 89%)',
  },
};

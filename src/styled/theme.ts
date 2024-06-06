import { DefaultTheme } from 'styled-components';

const mainTheme: DefaultTheme = {
  colors: {
    greenMain: '#00BC4F',
    greenSecondary: '#00BC4F4D',
    gradientText: 'linear-gradient(92deg, #00ce2c 0%, #aedf23 49.26%, #a3dc00 100%)',
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
    ex: '90px',
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
    s: '120%',
    m: '187%',
  },
};

export const lightTheme: DefaultTheme = {
  ...mainTheme,
  body: '#f1f1f1',
  text: {
    main: '#030304',
    secondary: '#4f4f4f',
    dark: '#737373',
    percent: '#6c7a89',
  },
  gradientBg: 'linear-gradient(45deg, rgba(241,241,241,1) 9%, rgba(0,188,79,0.1803571770505077) 50%, rgba(241,241,241,1) 89%);',
};

export const darkTheme: DefaultTheme = {
  ...mainTheme,
  body: '#030304',
  text: {
    main: '#fff',
    secondary: '#d9d9d9',
    dark: '#898989',
    percent: '#a7b2c3',
  },
  gradientBg: 'linear-gradient(50deg, rgba(3,3,4,1) 9%, rgba(0,188,79,0.1803571770505077) 50%, rgba(3,3,4,1) 89%)',
};

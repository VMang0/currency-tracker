import { createGlobalStyle } from 'styled-components';

import InterRegular from '@assets/fonts/inter/Inter-Regular.ttf';
import PoppinsLight from '@assets/fonts/poppins/Poppins-Light.ttf';
import PoppinsMedium from '@assets/fonts/poppins/Poppins-Medium.ttf';
import PoppinsRegular from '@assets/fonts/poppins/Poppins-Regular.ttf';
import PoppinsSemiBold from '@assets/fonts/poppins/Poppins-SemiBold.ttf';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-display: swap;
    src: url(${InterRegular});
    font-weight: 400;
  }
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-display: swap;
    src: url(${PoppinsLight});
    font-weight: 300;
  }
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-display: swap;
    src: url(${PoppinsMedium});
    font-weight: 500;
  }
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-display: swap;
    src: url(${PoppinsRegular});
    font-weight: 400;
  }
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-display: swap;
    src: url(${PoppinsSemiBold});
    font-weight: 600;
  }
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    font-weight: 300;
    text-rendering: optimizeSpeed;
    color: ${({ theme }) => theme.text.main};
    background: ${({ theme }) => theme.body};
    font-family: ${({ theme }) => `${theme.fonts.main}`};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  #root {
    min-height: 100vh;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  li,
  figure,
  blockquote,
  dl,
  dd {
    padding: 0;
    margin: 0;
  }
  ul,
  li,
  dl {
    list-style-type: none;
  }
  a {
    text-decoration: none;
    display: inline-block;
    transition: color 0.2s ease-in;
    color: ${({ theme }) => theme.text.main};
    &:hover {
      color: ${({ theme }) => theme.colors.greenMain};
      text-decoration: none;
    }
  }
  input[type="text"] {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    margin: 0;
  }
`;

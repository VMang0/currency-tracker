type ColorsType = {
  green: {
    DEFAULT: '#00BC4F';
    100: '#aedf23';
    200: '#a3dc00';
    300: '#00ce2c';
    400: '#00BC4F4D';
  };
  gray: {
    DEFAULT: '#fcfcfc';
    200: '#f1f1f1';
    300: '#e0e0e5';
    400: '#d9d9dd';
    500: '#898989';
    600: '#737373';
    700: '#4f4f4f';
    800: '#474747';
  };
  white: {
    DEFAULT: '#fff';
  };
  black: {
    DEFAULT: '#030304';
    50: '#a7b2c3';
    100: '#6c7a89';
    200: '#383842';
    900: '#202025';
  };
};

type GapsType = {
  xxs: '10px';
  xs: '20px';
  s: '24px';
  m: '40px';
  l: '50px';
  xl: '60px';
  xxl: '110px';
};

type FontSizesType = {
  xxxs: '16px';
  xxs: '20px';
  xs: '25px';
  s: '28px';
  m: '32px';
  l: '35px';
  xl: '38px';
  xxl: '60px';
  xxxl: '76px';
  exl: '90px';
};

type WidthType = {
  max: '1440px';
};

type FontType = {
  main: 'Poppins, sans-serif';
  secondary: 'Inter, sans-serif';
};

type LogoSize = {
  s: '45px';
  xl: '345px';
};

type LineHeightType = {
  xs: '100%';
  s: '120%';
  m: '150%';
  l: '187%';
};

type SpacesType = {
  xxxs: '10px';
  xxs: '15px';
  xs: '25px';
  s: '30px';
  m: '33px';
  l: '40px';
  xl: '45px';
  xxl: '50px';
  xxxl: '90px';
  exl: '100px';
};

export type ThemeColorsType = {
  themeColors: {
    DEFAULT: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
  };
  gradient: {
    100: string;
  };
};

export type ThemeType = {
  colors: ColorsType;
  fonts: FontType;
  fontSize: FontSizesType;
  logo: LogoSize;
  gap: GapsType;
  width: WidthType;
  lineHeight: LineHeightType;
  spaces: SpacesType;
};

export type MainThemeType = ThemeType & ThemeColorsType;

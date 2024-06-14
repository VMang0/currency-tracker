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
  xxs: string;
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
};

type FontSizesType = {
  xxxs: string;
  xxs: string;
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
  xxxl: string;
  exl: string;
};

type WidthType = {
  max: string;
};

type FontType = {
  main: string;
  secondary: string;
};

type LogoSize = {
  s: string;
  xl: string;
};

type LineHeightType = {
  xs: string;
  s: string;
  m: string;
  l: string;
};

type SpacesType = {
  xxxs: string;
  xxs: string;
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
  xxxl: string;
  exl: string;
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

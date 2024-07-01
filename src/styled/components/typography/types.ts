import { lightTheme, theme } from '@styled/theme';

export type TextType = {
  isLeftAlign?: boolean;
  color?: keyof typeof lightTheme.themeColors;
  size?: keyof typeof theme.fontSize;
  lineHeight?: keyof typeof theme.lineHeight;
  mediumSize?: keyof typeof theme.fontSize;
  smallSize?: keyof typeof theme.fontSize;
};

export type TitleType = {
  size?: keyof typeof theme.fontSize;
};

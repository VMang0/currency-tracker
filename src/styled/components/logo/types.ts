import { theme } from '@styled/theme';

export type LogoType = {
  size?: keyof typeof theme.logo;
  isSmallHidden?: boolean;
};

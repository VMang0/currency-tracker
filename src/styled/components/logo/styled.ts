import styled from 'styled-components';

import LogoIcon from '@assets/icons/favicon.svg';
import { device } from '@styled/breakPoints';
import { LogoType } from '@styled/components/logo/types';

export const Logo = styled(LogoIcon)<LogoType>`
  height: ${({ theme, size }) => (size ? theme.logo[size] : theme.logo.s)};
  @media (${device.sm}) {
    display: ${({ isSmallHidden }) => (isSmallHidden ? 'none' : 'block')};
  }
`;

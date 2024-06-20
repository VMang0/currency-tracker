import styled from 'styled-components';

import Logo from '@assets/icons/favicon.svg';
import { device } from '@styled/breakPoints';

export const LogoStyled = styled(Logo)`
  height: ${({ theme, size }) => theme.logo[size] || theme.logo.s};
  @media (${device.sm}) {
    display: ${({ $isSmallHidden }) => ($isSmallHidden ? 'none' : 'block')};
  }
`;

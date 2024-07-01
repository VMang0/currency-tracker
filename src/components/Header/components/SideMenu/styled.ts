import styled from 'styled-components';

import { SideMenuWrapperType } from '@components/Header/components/SideMenu/types';
import { device } from '@styled/breakPoints';

export const SideMenuWrapper = styled.div<SideMenuWrapperType>`
  top: 0;
  right: 0;
  z-index: 100;
  position: fixed;
  transition: all 0.4s;
  width: 100%;
  height: 100vh;
  transform: ${({ isMenuOpen }) => (isMenuOpen ? 'translateX(0)' : 'translateX(100%)')};
`;

export const Blur = styled.div`
  position: absolute;
  backdrop-filter: blur(2px);
  width: 100%;
  height: 100vh;
`;

export const SideMenuContent = styled.div`
  right: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.xs};
  width: 50%;
  height: 100%;
  padding: ${({ theme }) => theme.spaces.l};
  background-color: ${({ theme }) => theme.themeColors[300]};
  @media (${device.xs}) {
    width: 60%;
  }
`;

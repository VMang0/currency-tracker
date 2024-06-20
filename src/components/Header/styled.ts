import styled from 'styled-components';

import BurgerIcon from '@assets/icons/burger-icon.svg';
import { device } from '@styled/breakPoints';

export const HeaderStyled = styled.header`
  top: 0;
  width: 100%;
  position: sticky;
  z-index: 3;
  background-color: ${({ theme }) => theme.themeColors.DEFAULT};
`;

export const HeaderContentStyled = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.width.max};
  padding: ${({ theme }) => `${theme.spaces.s} ${theme.spaces.exl}`};
  @media (${device.md}) {
    padding: ${({ theme }) => `${theme.spaces.s} ${theme.spaces.xxl}`};
  }
  @media (${device.sm}) {
    padding: ${({ theme }) => `${theme.spaces.xxs} ${theme.spaces.xxs}`};
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.gap.xs};
`;

export const BurgerIconStyled = styled(BurgerIcon)`
  cursor: pointer;
  path {
    stroke: ${({ theme }) => theme.themeColors[700]};
  }
`;

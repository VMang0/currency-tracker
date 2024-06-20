import styled from 'styled-components';

import { device } from '@styled/breakPoints';

export const FooterNavigationStyled = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  gap: ${({ theme }) => theme.gap.xxl};
  @media (${device.md}) {
    gap: ${({ theme }) => theme.gap.xl};
    flex-wrap: wrap;
  }
  @media (${device.xs}) {
    justify-content: center;
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.xxs};
`;

export const NavigationItem = styled.li`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.xs};
  a {
    color: ${({ theme }) => theme.themeColors[400]};
  }
`;

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { device } from '@styled/breakPoints';

export const NavBarStyled = styled.nav``;

export const LinkGroupStyled = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: ${({ theme }) => theme.gap.xxl};
  @media (${device.md}) {
    gap: ${({ theme }) => theme.gap.xl};
  }
  @media (${device.sm}) {
    flex-direction: column;
  }
`;

export const LinkItemStyled = styled.li`
  text-align: center;
`;

export const LinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  flex-direction: row;
  font-size: ${({ theme }) => theme.fontSize.xxs};
`;

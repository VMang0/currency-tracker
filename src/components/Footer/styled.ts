import styled from 'styled-components';

import { device } from '@styled/breakPoints';

export const FooterStyled = styled.footer`
  display: flex;
  margin: auto;
  flex-direction: column;
  width: 100%;
  max-width: ${({ theme }) => theme.width.max};
  padding: 40px 30px;
  box-sizing: border-box;
  gap: ${({ theme }) => theme.gap.l};
`;

export const FooterContentStyled = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gap.xxl};
  @media (${device.md}) {
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.gap.xl};
  }
`;

export const LogoWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.gap.xs};
  @media (${device.xs}) {
    justify-content: center;
  }
`;

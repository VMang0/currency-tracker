import styled from 'styled-components';

import { device } from '@styled/breakPoints';

export const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  margin: auto;
  flex-direction: column;
  box-sizing: border-box;
  gap: ${({ theme }) => theme.gap.l};
  max-width: ${({ theme }) => theme.width.max};
  padding: ${({ theme }) => `${theme.spaces.l} ${theme.spaces.exl}`};
  @media (${device.md}) {
    padding: 0 ${({ theme }) => theme.spaces.xxl};
  }
  @media (${device.sm}) {
    padding: 0 ${({ theme }) => theme.spaces.xxs};
  }
`;

export const FooterContent = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gap.xl};
  @media (${device.lg}) {
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.gap.l};
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.gap.xs};
  @media (${device.xs}) {
    justify-content: center;
  }
`;

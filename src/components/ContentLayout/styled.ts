import styled from 'styled-components';

import { device } from '@styled/breakPoints';

export const ContentLayoutWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.l};
  & > *:first-child {
    margin-bottom: ${({ theme }) => `-${theme.gap.l}`};
  }
`;

export const PageWrapper = styled.main`
  width: 100%;
  display: flex;
  margin: 0 auto;
  align-items: center;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  max-width: ${({ theme }) => theme.width.max};
  padding: 0 ${({ theme }) => theme.spaces.exl};
  @media (${device.md}) {
    padding: 0 ${({ theme }) => theme.spaces.xxl};
  }
  @media (${device.sm}) {
    padding: 0 ${({ theme }) => theme.spaces.xxxs};
  }
`;

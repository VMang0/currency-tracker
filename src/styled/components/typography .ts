import styled from 'styled-components';

import { device } from '@styled/breakPoints';

export const Title = styled.h1`
  text-align: end;
  font-weight: 600;
  margin-right: ${({ theme }) => theme.spaces.xxl};
  line-height: ${({ theme }) => theme.lineHeight.xs};
  background: ${({ theme }) =>
    `linear-gradient(92deg, ${theme.colors.green[300]} 0%, ${theme.colors.green[100]} 49.26%, ${theme.colors.green[200]} 100%)`};
  font-size: ${({ theme, size }) => theme.fontSize[size] || theme.fontSize.xxxl};
  color: transparent;
  text-transform: capitalize;
  -webkit-background-clip: text;
  @media (${device.lg}) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
  @media (${device.md}) {
    margin-right: 0;
    text-align: center;
  }
`;

export const SubTitle = styled(Title)`
  margin-right: 0;
  @media (${device.lg}) {
    font-size: ${({ theme }) => theme.fontSize.xxs};
  }
`;

export const Text = styled.span`
  font-weight: 300;
  display: inline-block;
  color: ${({ theme, color }) => theme.themeColors[color] || theme.themeColors[700]};
  text-align: ${({ $isLeftAlign }) => ($isLeftAlign ? 'start' : 'center')};
  font-size: ${({ theme, size }) => theme.fontSize[size] || theme.fontSize.m};
  line-height: ${({ theme, $lineHeight }) => theme.lineHeight[$lineHeight] || theme.lineHeight.m};
  @media (${device.md}) {
    font-size: ${({ theme, mediumSize }) => theme.fontSize[mediumSize] || theme.fontSize.xs};
  }
  @media (${device.xs}) {
    font-size: ${({ theme, smallSize }) => theme.fontSize[smallSize] || theme.fontSize.xxs};
  }
`;

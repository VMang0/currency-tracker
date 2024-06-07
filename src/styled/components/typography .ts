import styled from 'styled-components';

import { device } from '@styled/breakPoints';

export const Title = styled.h1`
  font-weight: 600;
  text-transform: capitalize;
  background: ${({ theme }) => theme.colors.gradientText};
  font-size: ${({ theme, size }) => theme.fontSize[size] || theme.fontSize.xxxl};
  -webkit-background-clip: text;
  color: transparent;
  line-height: 100%;
  text-align: end;
  margin-right: 50px;
  @media (${device.lg}) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
  @media (${device.md}) {
    text-align: center;
    margin-right: 0;
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
  text-align: ${({ $isLeftAlign }) => ($isLeftAlign ? 'start' : 'center')};
  display: inline-block;
  color: ${({ theme, color }) => theme.text[color] || theme.text.main};
  font-size: ${({ theme, size }) => theme.fontSize[size] || theme.fontSize.m};
  line-height: ${({ theme, $lineHeight }) => theme.lineHeight[$lineHeight] || theme.lineHeight.m};
  @media (${device.md}) {
    font-size: ${({ theme, mediumSize }) => theme.fontSize[mediumSize] || theme.fontSize.xs};
  }
  @media (${device.xs}) {
    font-size: ${({ theme, smallSize }) => theme.fontSize[smallSize] || theme.fontSize.xxs};
  }
`;

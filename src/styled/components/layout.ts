import styled from 'styled-components';

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme, $gap }) => theme.gap[$gap] || theme.gap.m};
`;

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme, $gap }) => theme.gap[$gap] || 0};
`;

import styled from 'styled-components';

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme, $gap }) => theme.gap[$gap] || theme.gap.m};
`;

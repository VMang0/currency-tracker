import styled from 'styled-components';

export const ContentLayoutStyled = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.l};
  & > *:first-child {
    margin-bottom: ${({ theme }) => `-${theme.gap.l}`};
  }
`;

export const PageWrapperStyled = styled.main`
  display: flex;
  margin: 0 auto;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  max-width: ${({ theme }) => theme.width.max};
  padding: 0 30px;
  width: 100%;
  box-sizing: border-box;
`;

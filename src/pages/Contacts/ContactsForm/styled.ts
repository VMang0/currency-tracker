import styled from 'styled-components';

export const FormContainer = styled.div`
  padding: ${({ theme }) => theme.spaces.l};
  background: ${({ theme }) => theme.gradient[100]};
  border: 1px solid ${({ theme }) => theme.themeColors[300]};
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  box-sizing: border-box;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.xxs};
`;

export const Input = styled.input`
  padding: ${({ theme }) => theme.spaces.xxs};
  font-size: ${({ theme }) => theme.fontSize.xxxs};
  border: 1px solid ${({ theme }) => theme.themeColors[300]};
  border-radius: 4px;
  outline: none;
  &:focus {
    border-color: ${({ theme }) => theme.colors.green.DEFAULT};
  }
`;

export const Textarea = styled.textarea`
  padding: ${({ theme }) => theme.spaces.xxs};
  font-size: ${({ theme }) => theme.fontSize.xxxs};
  border: 1px solid ${({ theme }) => theme.themeColors[300]};
  border-radius: 4px;
  outline: none;
  resize: vertical;
  min-height: 60px;
  max-height: 200px;
  &:focus {
    border-color: ${({ theme }) => theme.colors.green.DEFAULT};
  }
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  color: ${({ theme }) => theme.themeColors[700]};
  margin-bottom: ${({ theme }) => theme.spaces.xxs};
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  padding: ${({ theme }) => theme.spaces.xxxs};
  font-size: ${({ theme }) => theme.fontSize.xxs};
  color: #fff;
  background: ${({ theme }) => theme.colors.green.DEFAULT};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s ease-in;
  &:disabled {
    background: ${({ theme }) => theme.colors.green[400]};
  }
  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors.green[400]};
  }
`;

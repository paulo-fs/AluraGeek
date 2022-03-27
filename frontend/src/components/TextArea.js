import styled from 'styled-components';

export const TextArea = styled.textarea`
  width: 560px;
  padding: 28px 12px 8px;

  resize: none;
  outline: none;

  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.grayDark};

  &::placeholder{
    color: ${({ theme }) => theme.colors.grayDark};

    position: absolute;
    top: 8px;
  }
`;

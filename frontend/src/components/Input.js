import styled from 'styled-components';

export const Input = styled.input`
  width: 560px;
  padding: 28px 12px 8px;

  outline: none;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.grayDark};

  &::placeholder{
    color: ${({ theme }) => theme.colors.grayDark};

    position: absolute;
    top: 8px;
  }
`;

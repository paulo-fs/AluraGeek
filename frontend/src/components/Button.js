import styled, { css } from 'styled-components';

export default styled.button`
  width: 182px;
  height: 51px;
  padding: 0 16px;

  background-color: ${({ theme }) => theme.colors.main};
  color: #fff;
  border: 1px solid transparent;
  font-weight: normal;
  font-size: 16px;

  transition: .2s ease-in;
  &:hover{
    background-color: ${({ theme }) => theme.colors.mainLight1};
  }

  &:active{
    background-color: ${({ theme }) => theme.colors.black};
  }

  &[disabled] {
    background-color: ${({ theme }) => theme.colors.gray};
  }

  ${({ theme, secondary }) => secondary && css`
    color: ${theme.colors.main};
    background: #fff;
    border: 1px solid ${theme.colors.main};

    &:hover{
    background: ${theme.colors.mainLight2};
  }

  &:active{
    background: ${theme.colors.main};
    color: #fff;
  }
  `}

`;

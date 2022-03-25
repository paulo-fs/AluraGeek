import styled from 'styled-components';

export const Container = styled.form`
  width: 100%;
  height: 100%;

  padding: calc(91px - 64px) calc(508px - 152px);

  display: flex;
  flex-direction: column;
  gap: 24px;

  align-items: center;

  h3{
    font-size: 18px;
  }

  .login-input{
    width: 100%;

    appearance: none;
    outline: none;
    padding: 22px 12px;

    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.grayDark};

    background-color: #fff;

    &:focus{
      border: none;
    }

    &:active{
      border: none;
    }
  }

  button{
      width: 100%;
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
    }
`;

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
  }

  body{
    background-color: #fff;
    color: ${({ theme }) => theme.colors.black};

    p{
      font-size: 16px;
      line-height: 24px;
    }

    h1{
      font-size: 52px;
      font-weight: normal;
    }

  }

  button{
    cursor: pointer;
  }

  .content-component{
    width: 100%;
    padding: 64px 152px;
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

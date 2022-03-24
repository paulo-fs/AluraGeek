import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
  }

  body{
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.black};

  }

  button{
    cursor: pointer;
  }

  .content-component{
    width: 100%;
    padding: 64px 152px;
  }
`;

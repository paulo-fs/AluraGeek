import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;

  .site-map{
    height: 368px;
    padding: 64px 152px;

    background: ${({ theme }) => theme.colors.mainLight3};

    display: flex;
    justify-content: space-between;

    .logo{
      img{
        height: 50px;
      }
    }

    .links{
      ul{
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 24px;
      }
    }

    form{
      display: flex;
      flex-direction: column;

      h3{
        font-size: 16px;
      }

      input, textarea{
        width: 560px;
        padding: 28px 12px 8px;
        margin: 8px 0px;

        resize: none;

        border: none;
        border-bottom: 2px solid ${({ theme }) => theme.colors.grayDark};

        &::placeholder{
          color: ${({ theme }) => theme.colors.grayDark};

          position: absolute;
          top: 8px;
        }
      }
    }
  }

  .author{
    padding: 32px 152px;
    display: flex;
    gap: 8px;
    justify-content: center;
  }
`;

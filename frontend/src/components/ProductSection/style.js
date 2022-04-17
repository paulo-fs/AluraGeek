import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  margin: 0 auto;

  .title{
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2{
      font-size: 32px;
      margin-bottom: 16px;
    }

    a{
      text-decoration: none;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.main};

      transition: .2s ease;
      &:hover{
        color: ${({ theme }) => theme.colors.mainLight1};
      }

      img{
        margin-left: 12px;
        transform: scale(1.4);
      }
    }
  }

  .products{
    display: flex;
    justify-content: center;
    gap: 16px;
  }

  & + & {
    margin: 64px 0;
  }

  @media screen and (min-width: 768px) and (max-width: 1460px){
    width: 100%;

    .title{
      max-width: 1150px;
      margin: 0 auto;
      align-items: center;
      justify-content: space-between;
    }
  }

  @media screen and (max-width: 767px) {
    .products{
      flex-wrap: wrap;
    }
  }

`;

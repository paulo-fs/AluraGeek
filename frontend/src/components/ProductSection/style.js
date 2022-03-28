import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;

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
    gap: 16px;
  }

  & + & {
    margin: 64px 0;
  }

`;

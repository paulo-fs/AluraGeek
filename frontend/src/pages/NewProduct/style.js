import styled from 'styled-components';

export const Container = styled.form`
  width: 100%;
  height: 100%;

  padding: 0 288px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  h2{
    font-size: 32px;
  }

  .submit-button{
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

  .add-file{

    display: flex;
    gap: 16px;
    align-items: center;

    span{
      color: ${({ theme }) => theme.colors.main};
      font-weight: bold;
    }

    .drop-zone{
      width: 100%;
      padding: 40px 148px;

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;

      background: #fff;
      border: 1px dashed ${({ theme }) => theme.colors.grayDark};


      p{
        text-align: center;
        font-size: 14px;
      }

      img{
        width: 32px;
      }
    }


  }
`;

import styled from 'styled-components';

export const Card = styled.div`

a{
    width: 176px;

    display: flex;
    flex-direction: column;
    align-items: space-between;
    gap: 6px;

    text-decoration: none;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.main};

    transition: .2s ease;
    &:hover{
      color: ${({ theme }) => theme.colors.mainLight1};
    }

    p{
      font-size: 14px;
      font-weight: normal;
      color: ${({ theme }) => theme.colors.black};
    }

    span{
      font-weight: bold;
      color: ${({ theme }) => theme.colors.black};
    }

  }
`;

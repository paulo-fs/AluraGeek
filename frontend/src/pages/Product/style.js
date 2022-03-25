import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  div{
    width: 50%;

    display: flex;
    flex-direction: column;
    gap: 8px;

    img{
      width: 100%;
    }

    span{
      font-weight: bold;
    }
  }
`;

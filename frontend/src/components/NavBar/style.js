import styled from 'styled-components';

import searchIcon from '../../assets/icons/search.svg';

export const Container = styled.header`
  width: 100%;
  height: 115px;
  margin: 0 auto;
  background-color: #fff;

  .nav-items{
    max-width: 1136px;
    height: 100%;
    display: flex;
    gap: 32px;

    align-items: center;
    margin: 0 auto;

    div{
      img{
        height: 50px;
      }
    }
  }
`;

export const Logo = styled.div`
`;

export const SearchForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;

  input{
    width: 393px;
    height: 40px;
    padding: 0 16px;

    border: none;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.grayLight};
    color: ${({ theme }) => theme.colors.grayDark};

  }
`;

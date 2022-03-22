import styled from 'styled-components';

import banner from '../../assets/images/banner.jpg';

export const Container = styled.div`
  width: 100%;
  height: 352px;

  background-image: url(${banner});
  background-position: center -300px;
  background-repeat: no-repeat;
  background-size: 100%;

  .gradient{
    width: 100%;
    height: 100%;

    position: relative;
    top: 0;
    left: 0;

    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 41.15%, rgba(0, 0, 0, 0.8) 100%);
  }
`;

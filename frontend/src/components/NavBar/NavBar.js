import PropTypes from 'prop-types';

import { Logo, Container, SearchForm } from './style';

import logo from '../../assets/images/logo.svg';
import Button from '../Button';

export default function NavBar({ secondary }) {
  return (
    <Container secondary={secondary}>
      <div className="nav-items">
        <Logo>
          <img src={logo} alt="Logo AluraGeek" />
        </Logo>
        <SearchForm>
          <input placeholder="O que deseja encontrar?" />
          <Button type="button" secondary={secondary}>
            Login
          </Button>
        </SearchForm>
      </div>
    </Container>
  );
}

NavBar.propTypes = {
  secondary: PropTypes.bool,
};

NavBar.defaultProps = {
  secondary: false,
};

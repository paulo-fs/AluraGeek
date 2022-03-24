import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Logo, Container, SearchForm } from './style';

import logo from '../../assets/images/logo.svg';
import Button from '../Button';

export default function Header({ secondary }) {
  return (
    <Container secondary={secondary}>
      <div className="nav-items">
        <Logo>
          <Link to="/">
            <img src={logo} alt="Logo AluraGeek" />
          </Link>
        </Logo>
        <SearchForm secondary={secondary}>
          <input placeholder="O que deseja encontrar?" />
          <Link to="/login">
            <Button type="button" secondary={secondary}>
              Login
            </Button>
          </Link>
        </SearchForm>
      </div>
    </Container>
  );
}

Header.propTypes = {
  secondary: PropTypes.bool,
};

Header.defaultProps = {
  secondary: false,
};

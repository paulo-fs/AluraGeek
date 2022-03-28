import { PropTypes } from 'prop-types';

import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';

import { Container } from './style';

import Arrow from '../../assets/icons/arrow.svg';

export default function ProductSection({ category }) {
  return (
    <Container>
      <div className="title">
        <h2>{category}</h2>
        <Link to="/">
          Ver tudo
          <img src={Arrow} alt="ver tudo" />
        </Link>
      </div>
      <div className="products">

        <ProductCard
          name="Produto X"
          price="R$55,00"
          link="/product/1"
          photo={'src="../../assets/images/sw-01.jpg"'}
        />

        <ProductCard
          name="Produto Y"
          price="R$75,00"
          link="/product/2"
        />

        <ProductCard
          name="Produto Z"
          price="R$95,00"
          link="/product/3"
        />

        <ProductCard
          name="Produto W"
          price="R$15,00"
          link="/product/4"
        />

        <ProductCard
          name="Produto A"
          price="R$35,00"
          link="/product/5"
        />

        <ProductCard
          name="Produto B"
          price="R$65,00"
          link="/product/6"
        />

      </div>
    </Container>
  );
}

ProductSection.propTypes = {
  category: PropTypes.string,
};

ProductSection.defaultProps = {
  category: 'Categoria',
};

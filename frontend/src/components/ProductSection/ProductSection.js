import { PropTypes } from 'prop-types';

import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';

import { Container } from './style';

import Arrow from '../../assets/icons/arrow.svg';

export default function ProductSection({ categoryTitle, category }) {
  return (
    <Container>
      <div className="title">
        <h2>{categoryTitle}</h2>
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
          photo={`/images/${category}/01.jpg`}
        />

        <ProductCard
          name="Produto Y"
          price="R$75,00"
          link="/product/2"
          photo={`/images/${category}/02.jpg`}
        />

        <ProductCard
          name="Produto Z"
          price="R$95,00"
          link="/product/3"
          photo={`/images/${category}/03.jpg`}
        />

        <ProductCard
          name="Produto W"
          price="R$15,00"
          link="/product/4"
          photo={`/images/${category}/04.jpg`}
        />

        <ProductCard
          name="Produto A"
          price="R$35,00"
          link="/product/5"
          photo={`/images/${category}/05.jpg`}
        />

        <ProductCard
          name="Produto B"
          price="R$65,00"
          link="/product/6"
          photo={`/images/${category}/06.jpg`}
        />

      </div>
    </Container>
  );
}

ProductSection.propTypes = {
  categoryTitle: PropTypes.string,
  category: PropTypes.string,
};

ProductSection.defaultProps = {
  categoryTitle: 'Categoria',
  category: 'category',
};

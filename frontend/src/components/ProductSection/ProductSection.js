import { PropTypes } from 'prop-types';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';

import { Container } from './style';

import Arrow from '../../assets/icons/arrow.svg';

export default function ProductSection({ categoryTitle, category }) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then(async (response) => {
        const json = await response.json();
        setProduct(json);
      })
      .catch((error) => {
        console.log('erro', error);
      });
  }, []);

  // console.log(product[0].photo);

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

        {
          product.map((products) => (
            <ProductCard
              key={products.id}
              name={products.name}
              price={products.price}
              link={`/product/${products.id}`}
              photo={products.photo}
            />
          ))
        }

        {/* <ProductCard
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
        /> */}

      </div>
    </Container>
  );
}

ProductSection.propTypes = {
  categoryTitle: PropTypes.string,
  category: PropTypes.string,
};

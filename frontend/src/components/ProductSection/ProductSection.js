import { PropTypes } from 'prop-types';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';

import { Container } from './style';
import Arrow from '../../assets/icons/arrow.svg';

import ProductService from '../../services/ProductService';

export default function ProductSection({ categoryTitle }) {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [limitItems, setLimitItems] = useState(6);
  const [pageWidth, setPageWidth] = useState(window.innerWidth);

  useEffect(() => {
    async function loadProducts(){
      try{
        setIsLoading(true);
        setLimitItems(window.innerWidth)

        const productList = await ProductService.listProducts();
        setProduct(productList);

        if(pageWidth < 1220){
          setLimitItems(4);
        }

      } catch(error){
        console.log('error', error);
      }
    }

    loadProducts();
  }, []);

  const listProductByCategory = product.filter((product) => {
    return product.category_name === categoryTitle;
  })


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
          listProductByCategory.map((products, i) => {
            if(i < limitItems){
              return <ProductCard
              key={products.id}
              name={products.name}
              price={products.price}
              link={`/product/${products.id}`}
              photo={products.photo}
            />
            }
          })
        }

      </div>
    </Container>
  );
}

ProductSection.propTypes = {
  categoryTitle: PropTypes.string,
};

import { PropTypes, string } from 'prop-types';

import { Link } from 'react-router-dom';
import { Card } from './style';

export default function ProductCard({
  name, price, link, photo,
}) {
  return (
    <Card>
      <Link to={link}>
        <img src={photo} alt="produto" />
        <p>{name}</p>
        <span>{price}</span>
        Ver produto
      </Link>
    </Card>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  link: PropTypes.string,
  photo: PropTypes.string,
};

ProductCard.defaultProps = {
  name: 'Produto',
  price: 'R$-',
  link: '/',
  photo: '',
};

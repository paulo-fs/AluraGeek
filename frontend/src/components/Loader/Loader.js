import ReactDOM from 'react-dom';
import { Overlay } from './style';
import PropTypes from 'prop-types';

export default function Loader({isLoading}){
  if(!isLoading){
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay>
      <div className="Loader" />
    </Overlay>,
    document.getElementById('loader-root'),
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

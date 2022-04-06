import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import NewProduct from './pages/NewProduct/NewProduct';
import Login from './pages/Login/Login';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/:category/:id" component={Product} />
      <Route path="/newproduct" component={NewProduct} />
      <Route path="/login" component={Login} />
    </Switch>
  );
}

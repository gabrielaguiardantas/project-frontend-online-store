import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import ProductList from './pages/ProductList';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ ProductList } />
        <Route path="/shopping-cart" component={ ShoppingCart } />
      </Switch>
    </div>
  );
}

export default App;

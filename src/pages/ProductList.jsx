import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CategoryList from '../components/CategoryList';

export default class ProductList extends Component {
  state = {
    productsLoaded: false,
  };

  render() {
    const { productsLoaded } = this.state;

    return (
      <div className="home-sections">
        <CategoryList />
        { !productsLoaded
          && (
            <div>
              <p
                data-testid="home-initial-message"
              >
                Digite algum termo de pesquisa ou escolha uma categoria.
              </p>
              <Link to="/shopping-cart" data-testid="shopping-cart-button">
                <button type="button">Buscar</button>
              </Link>
            </div>
          )}
      </div>
    );
  }
}

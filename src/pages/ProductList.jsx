import React, { Component } from 'react';
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
            <p
              data-testid="home-initial-message"
            >
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>)}
      </div>
    );
  }
}

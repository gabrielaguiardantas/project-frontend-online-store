import React, { Component } from 'react';

export default class ProductList extends Component {
  state = {
    productsLoaded: false,
  };

  render() {
    const { productsLoaded } = this.state;

    return (
      <div>
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

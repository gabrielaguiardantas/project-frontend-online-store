import React, { Component } from 'react';

class ShoppingCart extends Component {
  state = {
    cartEmpty: true,
  };

  render() {
    const { cartEmpty } = this.state;
    return (
      <div>

        {cartEmpty
          ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          : null}

      </div>
    );
  }
}

export default ShoppingCart;

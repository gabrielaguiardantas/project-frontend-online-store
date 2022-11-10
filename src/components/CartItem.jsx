import React, { Component } from 'react';

export default class CartItem extends Component {
  render() {
    const {
      title,
      price,
      quantity,
      thumbnail,
    } = this.props;

    return (
      <div>
        <img
          src={ thumbnail }
          alt={ title }
        />
        <span
          data-testid="shopping-cart-product-name"
        >
          { title }
        </span>
        <span>{ price }</span>
        <span
          data-testid="shopping-cart-product-quantity"
        >
          { quantity }
        </span>
      </div>
    );
  }
}

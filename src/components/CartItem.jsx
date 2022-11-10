import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartItem extends Component {
  render() {
    const {
      title,
      price,
      quantity,
      thumbnail,
    } = this.props;

    return (
      <div className="shopping-cart-item">
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
        <div className="quantity-controls">
          <button
            data-testid="product-decrease-quantity"
            type="button"
          >
            -
          </button>
          <span>{ quantity }</span>
          <button
            data-testid="product-increase-quantity"
            type="button"
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

CartItem.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

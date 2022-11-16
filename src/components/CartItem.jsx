import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getAvailableQuantity, sumCartQuantity } from '../services/shoppingCart';

export default class CartItem extends Component {
  // obrigado grupo do alan pela ajuda
  buttonClick = (e) => {
    const { id, updateCart } = this.props;
    const storageItems = JSON.parse(localStorage.getItem('cartItems'));
    const { target: { name } } = e;

    if (name === 'remove') {
      const filteredItems = storageItems.filter((item) => item.id !== id);
      localStorage.setItem('cartItems', JSON.stringify(filteredItems));
    } else {
      const currItem = storageItems.findIndex((item) => item.id === id);
      const availableQuantity = getAvailableQuantity(e)
      > storageItems[currItem].quantity;
      if (name === 'increase' && availableQuantity) storageItems[currItem].quantity += 1;
      if (name === 'decrease' && storageItems[currItem].quantity > 1) {
        storageItems[currItem].quantity -= 1;
      }
      localStorage.setItem('cartItems', JSON.stringify(storageItems));
    }
    // isso vai obrigar a atualização do componente sem bagunça com props
    updateCart();
    sumCartQuantity();
  };

  render() {
    const {
      title,
      price,
      quantity,
      thumbnail, id,
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
            name="decrease"
            onClick={ this.buttonClick }
            id={ id }

          >
            -
          </button>
          <span>{ quantity }</span>
          <button
            data-testid="product-increase-quantity"
            type="button"
            name="increase"
            onClick={ this.buttonClick }
            id={ id }
          >
            +
          </button>
          <button
            data-testid="remove-product"
            type="button"
            name="remove"
            onClick={ this.buttonClick }
          >
            Excluir
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
  id: PropTypes.string.isRequired,
  updateCart: PropTypes.func.isRequired,
};

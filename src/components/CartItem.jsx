import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as cart from '../services/shoppingCart';

export default class CartItem extends Component {
  // state = {
  //   quantity: 1,
  // };

  // componentDidMount() {
  //   this.updateQuantity();
  // }

  // updateQuantity = () => {
  //   const { id } = this.props;
  //   this.setState({ quantity: cart.getQuantity(id) });
  // };

  // increaseAndUpdate = (e) => {
  //   const { target: { id } } = e;
  //   cart.increaseQuantity(id);
  //   this.setState({ quantity: cart.getQuantity(id) });
  // };

  // decreaseAndUpdate = (e) => {
  //   const { target: { id } } = e;
  //   cart.decreaseQuantity(id);
  //   this.setState({ quantity: cart.getQuantity(id) });
  // };

  // removeAndUpdate = (e) => {
  //   const { target: { id } } = e;
  //   cart.removeItem(id);
  //   // window.location.reload();
  //   this.forceUpdate();
  // };

  render() {
    const {
      title,
      price,
      quantity,
      thumbnail,
      id,
      increase,
      decrease,
      remove,
    } = this.props;

    // const { quantity } = this.state;

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
            id={ id }
            onClick={ decrease }

          >
            -
          </button>
          <span>{ quantity }</span>
          <button
            data-testid="product-increase-quantity"
            type="button"
            id={ id }
            onClick={ increase }
          >
            +
          </button>
          <button
            data-testid="remove-product"
            type="button"
            id={ id }
            onClick={ remove }
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
};

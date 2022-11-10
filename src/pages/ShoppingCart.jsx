import React, { Component } from 'react';
import CartItem from '../components/CartItem';
import Loading from '../components/Loading';
import * as cart from '../services/shoppingCart';

class ShoppingCart extends Component {
  state = {
    cartEmpty: true,
    loading: false,
    cartItems: [],
  };

  componentDidMount() {
    this.loadShoppingCart();
  }

  loadShoppingCart = () => {
    this.setState({ loading: true });
    const items = cart.getCartItems();
    this.setState({
      cartItems: items,
      loading: false,
      cartEmpty: items.length < 1,
    });
  };

  // getCartItems = () => {
  //   this.setState({ loading: true });
  //   const cartItems = localStorage.getItem('cartItems');
  //   if (!cartItems) return;
  //   const parseCartItems = JSON.parse(cartItems);
  //   this.setState({
  //     cartEmpty: false,
  //     cartItems: parseCartItems,
  //     loading: false,
  //   });
  // };

  render() {
    const { cartEmpty, loading, cartItems } = this.state;
    return (
      <div>
        { loading && <Loading /> }
        { !cartEmpty && (
          cartItems
            .map((item) => (
              <CartItem
                title={ item.title }
                key={ item.id }
                price={ item.price }
                thumbnail={ item.thumbnail }
                quantity={ 1 }
              />))
        )}
        { cartEmpty
        && <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>}

      </div>
    );
  }
}

export default ShoppingCart;

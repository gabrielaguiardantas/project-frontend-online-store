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

  updateQuantity = () => {
    const { id } = this.props;
    this.setState({ quantity: cart.getQuantity(id) });
  };

  increaseAndUpdate = (e) => {
    const { target: { id } } = e;
    cart.increaseQuantity(id);
    this.forceUpdate();
    // this.setState({ quantity: cart.getQuantity(id) });
  };

  decreaseAndUpdate = (e) => {
    const { target: { id } } = e;
    cart.decreaseQuantity(id);
    // this.setState({ quantity: cart.getQuantity(id) });
  };

  removeAndUpdate = (e) => {
    const { target: { id } } = e;
    cart.removeItem(id);
    // window.location.reload();
    // this.forceUpdate();
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
                quantity={ item.quantity }
                id={ item.id }
                increase={ this.increaseAndUpdate }
                decrease={ this.decreaseAndUpdate }
                remove={ this.removeAndUpdate }
              />))
        )}
        { cartEmpty
        && <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>}

      </div>
    );
  }
}

export default ShoppingCart;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductById } from '../services/api';
import Loading from '../components/Loading';
import * as cart from '../services/shoppingCart';
import ProductReview from '../components/ProductReview';

export default class ProductPage extends Component {
  state = {
    loading: false,
    productLoaded: false,
    product: {},
    cartSize: 0,
  };

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.fetchItem(id);
    this.getQuantity();
  }

  fetchItem = async (id) => {
    this.setState({
      loading: true,
    });
    const fetchedItem = await getProductById(id);
    this.setState({
      loading: false,
      productLoaded: true,
      product: fetchedItem,
    });
  };

  getQuantity = () => {
    if (localStorage.getItem('cartSize')) {
      const quantity = JSON.parse(localStorage.getItem('cartSize'));
      if (quantity === null) this.setState({ cartSize: 0 });
      else this.setState({ cartSize: quantity });
    }
  };

  sendToCart = () => {
    const { product } = this.state;
    cart.addToCart(product);
    this.getQuantity();
  };

  render() {
    const { loading, product, productLoaded, cartSize } = this.state;
    return (
      <div
        className="product-container"
      >
        { loading && <Loading />}
        <div>
          <Link
            to="/shopping-cart"
          >
            <button
              data-testid="shopping-cart-button"
              type="button"
            >
              {
                cartSize === 0 ? <span>Carrinho</span>
                  : (
                    <span
                      data-testid="shopping-cart-size"
                    >
                      {`Carrinho (${cartSize})`}
                    </span>
                  )
              }
            </button>

          </Link>

        </div>
        { productLoaded && (
          <div className="product-details">
            <img
              src={ product.thumbnail }
              alt={ product.title }
              data-testid="product-detail-image"
            />
            <span
              data-testid="product-detail-name"
            >
              { product.title }
            </span>
            <span
              data-testid="product-detail-price"
            >
              { product.price }
            </span>
            <button
              type="button"
              data-testid="product-detail-add-to-cart"
              onClick={ this.sendToCart }
            >
              Adicionar ao carrinho
            </button>
            <ProductReview id={ product.id } />
          </div>
        )}
      </div>
    );
  }
}

ProductPage.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
};

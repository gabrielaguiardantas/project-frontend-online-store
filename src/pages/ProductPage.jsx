import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductById } from '../services/api';
import Loading from '../components/Loading';
import * as cart from '../services/shoppingCart';

export default class ProductPage extends Component {
  state = {
    loading: false,
    productLoaded: false,
    product: {},
  };

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.fetchItem(id);
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

  sendToCart = () => {
    const { product } = this.state;
    cart.addToCart(product);
  };

  render() {
    const { loading, product, productLoaded } = this.state;
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
              Carrinho de Compras
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
          </div>
        )}
      </div>
    );
  }
}

ProductPage.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
};

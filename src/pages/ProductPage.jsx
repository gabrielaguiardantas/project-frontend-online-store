import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductById } from '../services/api';
import Loading from '../components/Loading';

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

  render() {
    const { loading, product, productLoaded } = this.state;
    return (
      <div
        className="product-container"
      >
        { loading && <Loading />}
        <div>
          <button
            data-testid="shopping-cart-button"
            type="button"
          >
            Carrinho de Compras
          </button>

        </div>
        { productLoaded && (
          <div>
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

          </div>
        )}
      </div>
    );
  }
}

ProductPage.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
};

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ItemCard extends Component {
  render() {
    const { product: { title, price, thumbnail, id } } = this.props;
    return (
      <div data-testid="product">
        <Link
          to={ `/product/${id}` }
          data-testid="product-detail-link"
          className="product-card"
        >
          <img
            src={ thumbnail }
            alt={ `Imagem de ${title}` }
            className="product-img"
          />
          <div>
            <p className="product-title">{title}</p>
            <p className="product-price">{`R$${price}`}</p>
          </div>
        </Link>
      </div>

    );
  }
}

ItemCard.propTypes = {
  product: PropTypes.shape(PropTypes.any.isRequired).isRequired,
};

export default ItemCard;

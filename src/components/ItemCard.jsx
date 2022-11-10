import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemCard extends Component {
  render() {
    const { product: { title, price, thumbnail } } = this.props;
    return (
      <div
        data-testid="product"
        className="product-card"
      >
        <img
          src={ thumbnail }
          alt={ `Imagem de ${title}` }
        />
        <div>
          <p className="product-title">{title}</p>
          <p className="product-price">{`R$${price}`}</p>
        </div>
      </div>
    );
  }
}

ItemCard.propTypes = {
  product: PropTypes.shape(PropTypes.any.isRequired).isRequired,
};

export default ItemCard;

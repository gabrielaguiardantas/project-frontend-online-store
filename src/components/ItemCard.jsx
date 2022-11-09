import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemCard extends Component {
  render() {
    const { product: { title, price, thumbnail } } = this.props;
    return (
      <div data-testid="product">
        <img
          src={ thumbnail }
          alt={ `Imagem de ${title}` }
        />
        <div>
          <span>{title}</span>
          <span>{price}</span>
        </div>
      </div>
    );
  }
}

ItemCard.propTypes = {
  product: PropTypes.shape(PropTypes.any.isRequired).isRequired,
};

export default ItemCard;

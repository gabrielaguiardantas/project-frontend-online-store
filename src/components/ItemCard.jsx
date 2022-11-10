import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemCard extends Component {
  render() {
    const { product: { title, price, thumbnail,
      id }, handleClickCartButton } = this.props;
    return (
      <div
        data-testid="product"
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
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ handleClickCartButton }
          id={ id }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

ItemCard.propTypes = {
  product: PropTypes.shape(PropTypes.any.isRequired).isRequired,
  handleClickCartButton: PropTypes.func.isRequired,
};

export default ItemCard;

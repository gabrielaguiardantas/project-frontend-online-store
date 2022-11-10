import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ItemCard extends Component {
  render() {
    const { product: { title, price, thumbnail,
      id }, handleClickCartButton } = this.props;
    return (
      <div
        data-testid="product"
        className="product-card"
      >
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

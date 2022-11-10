import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CategoryCard extends Component {
  render() {
    const {
      name,
      categoryId,
      fetchCategoryProducts,
    } = this.props;

    return (
      <div data-testid="category">
        <button
          type="button"
          onClick={ fetchCategoryProducts }
          id={ categoryId }
        >
          {name}
        </button>
      </div>
    );
  }
}

CategoryCard.propTypes = {
  name: PropTypes.string.isRequired,
  categoryId: PropTypes.string.isRequired,
  fetchCategoryProducts: PropTypes.func.isRequired,
};

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
      <div>
        <button
          type="button"
          onClick={ fetchCategoryProducts }
          id={ categoryId }
          data-testid="category"
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

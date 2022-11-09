import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CategoryCard extends Component {
  render() {
    const {
      name,
    } = this.props;

    return (
      <div data-testid="category">
        <span className="category-name">{name}</span>
      </div>
    );
  }
}

CategoryCard.propTypes = {
  name: PropTypes.string.isRequired,
};

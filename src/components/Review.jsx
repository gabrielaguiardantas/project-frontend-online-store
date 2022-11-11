import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Review extends Component {
  render() {
    const { email, text, rating } = this.props;
    return (
      <div>
        <span data-testid="review-card-email">{ email }</span>
        <span data-testid="review-card-rating">{ rating }</span>
        <span data-testid="review-card-evaluation">{ text }</span>
      </div>
    );
  }
}

Review.propTypes = {
  email: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
};

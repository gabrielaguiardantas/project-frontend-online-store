import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as review from '../services/review';

export default class ProductReview extends Component {
  state = {
    btnDisabled: true,
    emailInput: '',
    reviewInput: '',
    rating: 0,
    id: '',
  };

  componentDidMount() {
    const { id } = this.props;
    this.setState({ id });
    // review.createKey(id);
  }

  validateInputs = () => {
    const { emailInput, rating } = this.state;

    // https://regexr.com/3e48o
    const emailValidated = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailInput);

    const ratingMin = 1;
    const ratingMax = 5;
    const ratingValidated = rating >= ratingMin && rating <= ratingMax;

    this.setState({ btnDisabled: !(emailValidated && ratingValidated) });
  };

  handleChange = (e) => {
    const { target: { value, name } } = e;
    if (name === 'email-input') this.setState({ emailInput: value }, this.validateInputs);
    if (name === 'rating') this.setState({ rating: value }, this.validateInputs);
    if (name === 'text-area-input') this.setState({ reviewInput: value });
  };

  sendReviewToStorage = () => {
    const { id, emailInput, reviewInput, rating } = this.state;
    const thisReview = { id, email: emailInput, text: reviewInput, rating };
    review.sendReview(thisReview);

    this.setState({
      emailInput: '',
      reviewInput: '',
      rating: 0,
    }, this.validateInputs);
  };

  defaultSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const { btnDisabled } = this.state;
    return (
      <div>
        <form
          onSubmit={ this.defaultSubmit }
          onChange={ this.handleChange }
        >
          <label htmlFor="email-input">
            <input
              type="email"
              name="email-input"
              id="email-input"
              data-testid="product-detail-email"
              placeholder="Email"
            />
          </label>
          <div>
            <label htmlFor="rating-01">
              <input
                type="radio"
                name="rating"
                id="rating-01"
                value={ 1 }
                data-testid="1-rating"
              />
              <span>1</span>
            </label>
            <label htmlFor="rating-02">
              <input
                type="radio"
                name="rating"
                id="rating-02"
                value={ 2 }
                data-testid="2-rating"
              />
              <span>2</span>
            </label>
            <label htmlFor="rating-03">
              <input
                type="radio"
                name="rating"
                id="rating-03"
                value={ 3 }
                data-testid="3-rating"
              />
              <span>3</span>
            </label>
            <label htmlFor="rating-04">
              <input
                type="radio"
                name="rating"
                id="rating-04"
                value={ 4 }
                data-testid="4-rating"
              />
              <span>4</span>
            </label>
            <label htmlFor="rating-05">
              <input
                type="radio"
                name="rating"
                id="rating-05"
                value={ 5 }
                data-testid="5-rating"
              />
              <span>5</span>
            </label>
          </div>
          <label htmlFor="text-area-input">
            <input
              type="text-area"
              name="text-area-input"
              id="text-area-input"
              data-testid="product-detail-evaluation"
              placeholder="Mensagem (opcional)"
            />
          </label>
          <button
            type="button"
            data-testid="submit-review-btn"
            disabled={ btnDisabled }
            onClick={ this.sendReviewToStorage }
          >
            Enviar
          </button>
        </form>
        { btnDisabled && <span data-testid="error-msg">Campos inválidos</span>}
      </div>
    );
  }
}

ProductReview.propTypes = {
  id: PropTypes.string.isRequired,
};

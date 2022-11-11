import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as review from '../services/review';

export default class ProductReview extends Component {
  state = {
    btnDisabled: true,
    id: '',
    errMsg: false,
    email: '',
    text: '',
    rating: 0,
  };

  componentDidMount() {
    const { id } = this.props;
    this.setState({ id });
    // review.createKey(id);
  }

  validateInputs = () => {
    const { email, rating } = this.state;

    // https://regexr.com/3e48o
    const emailValidated = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

    const ratingMin = 1;
    const ratingMax = 5;
    const ratingValidated = rating >= ratingMin && rating <= ratingMax;

    this.setState({
      btnDisabled: !(emailValidated && ratingValidated),
      errMsg: !emailValidated || !ratingValidated,
    });
  };

  handleChange = (e) => {
    const { target: { value, name } } = e;
    this.setState({ [name]: value }, this.validateInputs);
  };

  sendReviewToStorage = () => {
    const { id, email, text, rating } = this.state;
    const thisReview = { id, email, text, rating };
    review.sendReview(thisReview);

    this.setState({
      email: '',
      text: '',
      rating: 0,
      btnDisabled: true,
      errMsg: false,
    });
  };

  // defaultSubmit = (e) => {
  //   e.preventDefault();
  // };

  render() {
    const { btnDisabled, email, text, errMsg } = this.state;
    return (
      <div>
        <form>
          <input
            type="email"
            name="email"
            data-testid="product-detail-email"
            placeholder="Email"
            value={ email }
            onChange={ this.handleChange }
          />
          <div onChange={ this.handleChange }>
            <input
              type="radio"
              name="rating"
              value={ 1 }
              data-testid="1-rating"
            />
            <input
              type="radio"
              name="rating"
              value={ 2 }
              data-testid="2-rating"
            />
            <input
              type="radio"
              name="rating"
              value={ 3 }
              data-testid="3-rating"
            />
            <input
              type="radio"
              name="rating"
              value={ 4 }
              data-testid="4-rating"
            />
            <input
              type="radio"
              name="rating"
              value={ 5 }
              data-testid="5-rating"
            />
          </div>
          <input
            type="text-area"
            name="text"
            data-testid="product-detail-evaluation"
            placeholder="Mensagem (opcional)"
            onChange={ this.handleChange }
            value={ text }
          />
          <button
            type="button"
            data-testid="submit-review-btn"
            disabled={ btnDisabled }
            onClick={ this.sendReviewToStorage }
            // onChange={ this.handleChange }
          >
            Enviar
          </button>
        </form>
        { errMsg && <span data-testid="error-msg">Campos inválidos</span>}
      </div>
    );
  }
}

ProductReview.propTypes = {
  id: PropTypes.string.isRequired,
};

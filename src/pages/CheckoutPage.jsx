import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class CheckoutPage extends Component {
  state = {
    cartItems: [],
    isFormValid: false,
    wasClicked: false,
    fullName: '',
    cpf: '',
    email: '',
    phone: '',
    cep: '',
    address: '',
    paymentsMethods: '',
    redirect: false,
  };

  componentDidMount() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    this.setState({
      cartItems,
      redirect: false,
    });
  }

  handleFormChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleClickFormButton = () => {
    const stateValues = Object.values(this.state);
    const formKeysValidation = stateValues.some((value) => value === '');
    if (!formKeysValidation) {
      this.setState({
        isFormValid: true,
        wasClicked: true,
        redirect: true,
      });
    } else {
      this.setState({
        isFormValid: false,
        wasClicked: true,
      });
    }
    localStorage.setItem('cartItems', '');
  };

  render() {
    const { cartItems, fullName, cpf,
      email, phone, cep, address, isFormValid, wasClicked, redirect } = this.state;
    return (
      <div>
        <fieldset>
          <h1>Revise seus produtos</h1>
          {
            cartItems.map((item) => (

              <div key={ item.id }>
                <img src={ item.thumbnail } alt={ item.title } />
                <span>{item.title}</span>
                <span>
                  {` R$: ${item.price}`}
                </span>
                <br />
                <span>{'Total: R$ '}</span>
              </div>
            ))
          }
        </fieldset>
        <fieldset>
          <h1>Informações ao comprador</h1>
          <form>
            <label htmlFor="checkout-fullname">
              <input
                type="text"
                name="fullName"
                id="fullName"
                data-testid="checkout-fullname"
                placeholder="Nome Completo"
                required
                onChange={ this.handleFormChange }
                value={ fullName }
              />
            </label>
            <label htmlFor="checkout-cpf">
              <input
                type="text"
                name="cpf"
                id="checkout-cpf"
                data-testid="checkout-cpf"
                placeholder="CPF"
                required
                onChange={ this.handleFormChange }
                value={ cpf }
              />
            </label>
            <label htmlFor="checkout-email">
              <input
                type="text"
                name="email"
                id="checkout-email"
                data-testid="checkout-email"
                placeholder="Email"
                required
                onChange={ this.handleFormChange }
                value={ email }
              />
            </label>
            <label htmlFor="checkout-phone">
              <input
                type="tel"
                name="phone"
                id="checkout-phone"
                data-testid="checkout-phone"
                placeholder="Telefone"
                required
                onChange={ this.handleFormChange }
                value={ phone }
              />
            </label>
            <label htmlFor="checkout-cep">
              <input
                type="text"
                name="cep"
                id="checkout-cep"
                data-testid="checkout-cep"
                placeholder="CEP"
                required
                onChange={ this.handleFormChange }
                value={ cep }
              />
            </label>
            <label htmlFor="checkout-address">
              <br />
              <input
                type="text"
                name="address"
                id="checkout-address"
                data-testid="checkout-address"
                placeholder="Endereço"
                required
                onChange={ this.handleFormChange }
                value={ address }
              />
            </label>
            <label htmlFor="ticket-payment">
              Boleto
              <input
                type="radio"
                value="boleto"
                data-testid="ticket-payment"
                name="paymentsMethods"
                id="ticket-payment"
                onClick={ this.handleFormChange }
              />
            </label>
            <label htmlFor="visa-payment">
              Visa
              <input
                type="radio"
                value="visa"
                data-testid="visa-payment"
                name="paymentsMethods"
                id="visa-payment"
                onClick={ this.handleFormChange }
              />
            </label>
            <label htmlFor="master-payment">
              Mastercard
              <input
                type="radio"
                value="mastercard"
                data-testid="master-payment"
                name="paymentsMethods"
                id="master-payment"
                onClick={ this.handleFormChange }
              />
            </label>
            <label htmlFor="elo-payment">
              Elo
              <input
                type="radio"
                value="elo"
                data-testid="elo-payment"
                name="paymentsMethods"
                id="elo-payment"
                onClick={ this.handleFormChange }
              />
            </label>
          </form>
        </fieldset>
        <button
          type="button"
          data-testid="checkout-btn"
          onClick={ this.handleClickFormButton }
        >
          Comprar
        </button>
        {
          (!isFormValid && wasClicked) && <p data-testid="error-msg">Campos inválidos</p>
        }
        {
          redirect && <Redirect to="/" />
        }
      </div>
    );
  }
}

export default CheckoutPage;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ItemCard from '../components/ItemCard';
import { getProductsFromCategoryAndQuery } from '../services/api';
import CategoryList from '../components/CategoryList';

class ProductList extends Component {
  state = {
    productsLoaded: false,
    searchInputText: '',
    requestedInfo: {},
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  };

  validateFetchProducts = () => {
    const { requestedInfo } = this.state;
    const validation = requestedInfo.results.length > 1;
    if (validation) {
      this.setState({
        productsLoaded: true,
        hasProducts: true,
      }); return;
    }

    this.setState({
      productsLoaded: true,
      hasProducts: false,
    });
  };

  handleClickButton = async () => {
    const { searchInputText } = this.state;
    if (!searchInputText) {
      this.setState({ productsLoaded: true });
      return;
    }
    const response = await getProductsFromCategoryAndQuery('', searchInputText);
    this.setState({
      requestedInfo: response,
    }, this.validateFetchProducts);
  };

  render() {
    const { productsLoaded,
      searchInputText, requestedInfo: { results }, hasProducts } = this.state;

    return (
      <div className="home-sections">
        <CategoryList />
        <input
          type="text"
          name="searchInputText"
          id="searchInputText"
          data-testid="query-input"
          placeholder="exemplo"
          value={ searchInputText }
          onChange={ this.handleChange }
        />
        <label htmlFor="query-button">
          <input
            type="button"
            id="query-button"
            data-testid="query-button"
            value="pesquisar"
            onClick={ this.handleClickButton }
          />
        </label>
        { !productsLoaded
          && (
            <div>
              <p
                data-testid="home-initial-message"
              >
                Digite algum termo de pesquisa ou escolha uma categoria.
              </p>
              <Link to="/shopping-cart" data-testid="shopping-cart-button">
                <button type="button">Buscar</button>
              </Link>
            </div>
          )}
        {
          productsLoaded && (
            hasProducts && (results.map((product) => (<ItemCard
              product={ product }
              key={ product.id }
            />))))
        }
        { (productsLoaded && !hasProducts)
          && <span>Nenhum produto foi encontrado</span> }
      </div>
    );
  }
}

export default ProductList;

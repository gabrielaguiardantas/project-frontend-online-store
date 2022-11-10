import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';
import CategoryCard from './CategoryCard';
import Loading from './Loading';

export default class CategoryList extends Component {
  state = {
    loading: false,
    categories: [],
  };

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    this.setState({ loading: true });
    const fetchedCategories = await getCategories();
    this.setState({
      loading: false,
      categories: fetchedCategories,
    });
  };

  render() {
    const { loading, categories } = this.state;
    const { fetchCategoryProducts } = this.props;

    return (
      <div
        className="categories"
      >
        <h3>Categorias:</h3>
        { loading && <Loading />}
        <div className="category-list">
          { categories.map((cat) => (
            <CategoryCard
              name={ cat.name }
              categoryId={ cat.id }
              fetchCategoryProducts={ fetchCategoryProducts }
              key={ cat.id }
            />
          )) }
        </div>
      </div>
    );
  }
}

CategoryList.propTypes = {
  fetchCategoryProducts: PropTypes.func.isRequired,
};

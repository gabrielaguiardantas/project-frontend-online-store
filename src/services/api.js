// export async function getCategories() {
//   // https://api.mercadolibre.com/sites/MLB/categories
//   fetch('https://api.mercadolibre.com/sites/MLB/categories')
//     .then((response) => response.json())
//     .then((category) => console.log(category));
// }

export async function getCategories() {
  // https://api.mercadolibre.com/sites/MLB/categories
  const fetchCategories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categories = await fetchCategories.json();
  // console.log(categories);
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId = '', query = '') {
  // /sites/$SITE_ID/search?category=$CATEGORY_ID
  // MLB5672 = acessorios de carros (id de categoria)
  // /sites/$SITE_ID/search?q=Motorola%20G6
  if (!categoryId && !query) return;

  if (categoryId.toLowerCase().includes('mlb')) {
    const fetchProducts = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
    const productsResponse = await fetchProducts.json();
    const products = productsResponse.results;
    console.log(products);
    return products;
  }

  const fetchQuery = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  const queryResponse = await fetchQuery.json();
  console.log(queryResponse);
  return queryResponse;
}

// export async function getProductById(itemId) {
//   // https://api.mercadolibre.com/sites/MLB/items?id=$ITEM_ID1
//   // MLB-2039042225
//   const fetchItem = await fetch(`https://api.mercadolibre.com/sites/MLB/items?id=${itemId}`);
//   const item = await fetchItem.json();
//   console.log(item);
// }

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
  console.log(categories);
  return categories;
}

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
  //
}

export async function getProductById() {
  //
}

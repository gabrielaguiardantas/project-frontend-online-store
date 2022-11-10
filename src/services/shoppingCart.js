getCartItems = () => {
  const cartItems = localStorage.getItem('cartItems');
  if (!cartItems) return [];
  const parsedCartItems = JSON.parse(cartItems);
  // const cartItemsQtd = parsedCartItems.map((item) => ({ ...item, quantity: 1 }));
  return parsedCartItems;
};

addToCart = (product) => {
  const cartItems = getCartItems();
  cartItems.push(product);
  const cartItemsString = JSON.stringify(cartItems);
  localStorage.setItem('cartItems', cartItemsString);
};

module.exports = { getCartItems, addToCart };

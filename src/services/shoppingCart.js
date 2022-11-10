getCartItems = () => {
  const cartItems = localStorage.getItem('cartItems');
  if (!cartItems) return [];
  const parsedCartItems = JSON.parse(cartItems);
  parsedCartItems.map((item) => ({ ...item, quantity: 1 }));
};

addToCart = () => {
  const cartItems = this.getCartItems();
  const { product } = this.state;
  cartItems.push(product);
  const cartItemsString = JSON.stringify(cartItems);
  localStorage.setItem('cartItems', cartItemsString);
};

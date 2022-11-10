export const getCartItems = () => {
  const cartItems = localStorage.getItem('cartItems');
  // console.log(cartItems)
  if (!cartItems) return [];
  const parsedCartItems = JSON.parse(cartItems);
  // const cartItemsQtd = parsedCartItems.map((item) => ({ ...item, quantity: 1 }));
  return parsedCartItems;
};

export const addToCart = (product) => {
  const cartItems = getCartItems();
  cartItems.push(product);
  const cartItemsString = JSON.stringify(cartItems);
  localStorage.setItem('cartItems', cartItemsString);
};

export const getCartItems = () => {
  const cartItems = localStorage.getItem('cartItems');
  if (!cartItems) return [];
  const parsedCartItems = JSON.parse(cartItems);
  return parsedCartItems;
};

export const getQuantity = (id) => {
  const cartItems = JSON.parse(localStorage.getItem('cartItems'));
  const item = cartItems.find((i) => i.id === id);
  return item.quantity;
};

export const sumCartQuantity = () => {
  const cartItems = JSON.parse(localStorage.getItem('cartItems'));
  const totalQuantity = cartItems.reduce((acc, cur) => acc + cur.quantity, 0);
  localStorage.setItem('cartSize', totalQuantity);
};

// export const increaseQuantity = (id) => {
//   const cartItems = JSON.parse(localStorage.getItem('cartItems'));
//   const item = cartItems.find((i) => i.id === id);
//   item.quantity += 1;
//   const cartItemsString = JSON.stringify(cartItems);
//   localStorage.setItem('cartItems', cartItemsString);
// };

// export const decreaseQuantity = (id) => {
//   const cartItems = JSON.parse(localStorage.getItem('cartItems'));
//   const item = cartItems.find((i) => i.id === id);
//   if (item.quantity > 1) item.quantity -= 1;
//   const cartItemsString = JSON.stringify(cartItems);
//   localStorage.setItem('cartItems', cartItemsString);
// };

// export const removeItem = (id) => {
//   const cartItems = JSON.parse(localStorage.getItem('cartItems'));
//   const filteredItems = cartItems.filter((i) => i.id !== id);
//   const cartItemsString = JSON.stringify(filteredItems);
//   localStorage.setItem('cartItems', cartItemsString);
// };

export const addToCart = (product) => {
  const cartItems = getCartItems();
  const productWithQtt = { ...product, quantity: 1 };
  cartItems.push(productWithQtt);
  const cartItemsString = JSON.stringify(cartItems);
  localStorage.setItem('cartItems', cartItemsString);
  sumCartQuantity();
};

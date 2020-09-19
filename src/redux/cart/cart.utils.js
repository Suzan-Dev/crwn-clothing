export const addItemToCart = (cartItem, itemToAdd) => {
  const existingItem = cartItem.find((item) => item.id === itemToAdd.id);

  if (existingItem) {
    return cartItem.map((item) =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else {
    return [...cartItem, { ...itemToAdd, quantity: 1 }];
  }
};

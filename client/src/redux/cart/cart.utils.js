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

export const removeItemFromCart = (cartItem, itemToRemove) => {
  const existingItem = cartItem.find((item) => item.id === itemToRemove.id);

  if (existingItem.quantity === 1) {
    return cartItem.filter((item) => item.id !== itemToRemove.id);
  } else {
    return cartItem.map((item) =>
      item.id === itemToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  }
};

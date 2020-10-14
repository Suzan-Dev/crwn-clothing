import CartActionType from './cart.type';

export const ToggleHiddenCart = () => ({
  type: CartActionType.TOGGLE_HIDDEN_CART,
});

export const addItem = (item) => ({
  type: CartActionType.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: CartActionType.REMOVE_ITEM,
  payload: item,
});

export const removeItemFromCart = (item) => ({
  type: CartActionType.REMOVE_ITEM_FROM_CART,
  payload: item,
});

export const clearCart = () => ({
  type: CartActionType.CLEAR_CART,
});

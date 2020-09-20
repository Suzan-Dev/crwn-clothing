import { createSelector } from 'reselect';

const selectItem = (state) => state.cart;

export const selectCartItem = createSelector(
  [selectItem],
  (cart) => cart.cartItem
);

export const selectCartItemCount = createSelector(
  [selectCartItem],
  (cartItem) => cartItem.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);

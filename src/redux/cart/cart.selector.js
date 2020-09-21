import { createSelector } from 'reselect';

const selectItem = (state) => state.cart;

export const selectCartItem = createSelector(
  [selectItem],
  (cart) => cart.cartItem
);

export const selectHidden = createSelector([selectItem], (cart) => cart.hidden);

export const selectCartItemCount = createSelector(
  [selectCartItem],
  (cartItem) => cartItem.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItem], (cartItem) =>
  cartItem.reduce(
    (acc, cartItem) => acc + cartItem.quantity * cartItem.price,
    0
  )
);

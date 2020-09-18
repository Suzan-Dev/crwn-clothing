import CartActionType from './cart.type';

const INITIAL_STATE = {
  hidden: true,
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionType.TOGGLE_HIDDEN_CART:
      return {
        ...state,
        hidden: !state.hidden,
      };

    default:
      return state;
  }
};

export default CartReducer;

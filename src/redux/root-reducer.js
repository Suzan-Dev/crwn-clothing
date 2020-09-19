import { combineReducers } from 'redux';

import UserReducer from './user/user.reducer';
import CartReducer from './cart/cart.reducer';

// this is Redux Store -> which is an object
export default combineReducers({
  user: UserReducer,
  cart: CartReducer,
});

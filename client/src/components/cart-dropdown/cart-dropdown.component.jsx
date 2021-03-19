import React from 'react';

import './cart-dropdown.style.scss';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import { ToggleHiddenCart } from '../../redux/cart/cart.action';

const CartDropdown = ({ cartItem, history, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItem.length ? (
        cartItem.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <span className='empty-message'>Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push('/checkout');
        dispatch(ToggleHiddenCart());
      }}
    >
      <span className='btn-text'>Go To Checkout</span>
    </CustomButton>
  </div>
);

export default CartDropdown;

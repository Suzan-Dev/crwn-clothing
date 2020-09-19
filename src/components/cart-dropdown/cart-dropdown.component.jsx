import React from 'react';
import { connect } from 'react-redux';

import './cart-dropdown.style.scss';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({ cartItem }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItem.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
    <CustomButton>
      <span className='btn-text'>Go To Checkout</span>
    </CustomButton>
  </div>
);

const mapStateToProps = ({ cart: { cartItem } }) => ({
  cartItem,
});

export default connect(mapStateToProps)(CartDropdown);

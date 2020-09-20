import React from 'react';
import { connect } from 'react-redux';

import './cart-dropdown.style.scss';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItem } from '../../redux/cart/cart.selector';

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

const mapStateToProps = (state) => ({
  cartItem: selectCartItem(state),
});

export default connect(mapStateToProps)(CartDropdown);

import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import './cart-dropdown.style.scss';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItem } from '../../redux/cart/cart.selector';
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

const mapStateToProps = createStructuredSelector({
  cartItem: selectCartItem,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));

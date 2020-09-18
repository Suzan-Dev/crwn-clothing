import React from 'react';

import './cart-icon.style.scss';

import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import ToggleHiddenCart from '../../redux/cart/cart.action';

const CartIcon = ({ toggleHiddenCart }) => (
  <div className='cart-icon' onClick={toggleHiddenCart}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleHiddenCart: () => dispatch(ToggleHiddenCart()),
});

export default connect(null, mapDispatchToProps)(CartIcon);

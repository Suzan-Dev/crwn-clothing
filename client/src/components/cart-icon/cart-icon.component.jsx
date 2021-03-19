import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './cart-icon.style.scss';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { ToggleHiddenCart } from '../../redux/cart/cart.action';
import { selectCartItemCount } from '../../redux/cart/cart.selector';

export const CartIcon = ({ itemCount, dispatch }) => (
  <div className='cart-icon' onClick={() => dispatch(ToggleHiddenCart())}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemCount,
});

export default connect(mapStateToProps)(CartIcon);

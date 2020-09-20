import React from 'react';
import { connect } from 'react-redux';

import './cart-icon.style.scss';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { ToggleHiddenCart } from '../../redux/cart/cart.action';
import { selectCartItemCount } from '../../redux/cart/cart.selector';

const CartIcon = ({ toggleHiddenCart, itemCount }) => (
  <div className='cart-icon' onClick={toggleHiddenCart}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);

const mapStateToProps = (state) => ({
  itemCount: selectCartItemCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleHiddenCart: () => dispatch(ToggleHiddenCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

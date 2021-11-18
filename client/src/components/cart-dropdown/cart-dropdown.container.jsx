import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItem } from '../../redux/cart/cart.selector';
import CartDropdown from './cart-dropdown.component';

const CartDropdownContainer = (props) => <CartDropdown {...props} />;

const mapStateToProps = createStructuredSelector({
  cartItem: selectCartItem,
});

export default connect(mapStateToProps)(CartDropdownContainer);

import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { selectCartItem } from '../../redux/cart/cart.selector';
import CartDropdown from './cart-dropdown.component';

const CartDropdownContainer = (props) => <CartDropdown {...props} />;

const mapStateToProps = createStructuredSelector({
  cartItem: selectCartItem,
});

export default withRouter(connect(mapStateToProps)(CartDropdownContainer));

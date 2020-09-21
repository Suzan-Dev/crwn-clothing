import React from 'react';
import { connect } from 'react-redux';

import './checkout-item.style.scss';

import {
  removeItemFromCart,
  addItem,
  removeItem,
} from '../../redux/cart/cart.action';

const CheckoutItem = ({ cartItem, removeItem, increaseItem, decreaseItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => decreaseItem(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => increaseItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <span className='remove-btn' onClick={() => removeItem(cartItem)}>
        &#10005;
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItemFromCart(item)),
  increaseItem: (item) => dispatch(addItem(item)),
  decreaseItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);

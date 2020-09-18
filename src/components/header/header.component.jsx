import React from 'react';
import './header.style.scss';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        Shop
      </Link>
      <Link className='option' to='/contact'>
        Contact
      </Link>
      {currentUser ? (
        <div className='option link' onClick={() => auth.signOut()}>
          Sign Out
        </div>
      ) : (
        <Link className='option' to='/signin'>
          Sign In
        </Link>
      )}
      <CartIcon className='option' />
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);

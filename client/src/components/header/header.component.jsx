import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdownContainer from '../cart-dropdown/cart-dropdown.container';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectHidden } from '../../redux/cart/cart.selector';
import { signOutStart } from '../../redux/user/user.action';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionDiv,
  OptionLink,
} from './header.style';

export const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="shop">Shop</OptionLink>
      <OptionDiv event="none">Contact</OptionDiv>
      {currentUser ? (
        <OptionDiv className="sign-out" onClick={signOutStart}>
          Sign Out
        </OptionDiv>
      ) : (
        <OptionLink className="sign-in" to="signin">
          Sign In
        </OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdownContainer />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

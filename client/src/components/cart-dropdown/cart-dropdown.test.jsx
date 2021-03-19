import React from 'react';
import { shallow } from '../../setupTests';
import CartDropdown from './cart-dropdown.component';
import { ToggleHiddenCart } from '../../redux/cart/cart.action';

describe('Testing: CartDropdown component!', () => {
  const mockDispatch = jest.fn();
  const mockHistory = {
    push: jest.fn(),
  };
  const mockCartItem = [{ id: 1 }, { id: 2 }];

  const mockProps = {
    cartItem: mockCartItem,
    history: mockHistory,
    dispatch: mockDispatch,
  };

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CartDropdown {...mockProps} />);
  });

  test('should render CartDropdown component.', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  test('should call history.push & dispatch ToggleHiddenCart action when button is clicked.', () => {
    wrapper.find('CustomButton').simulate('click');
    expect(mockHistory.push).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith(ToggleHiddenCart());
  });

  test('should render equal number of CartItem components as the cartItem props length.', () => {
    expect(wrapper.find('CartItem').length).toBe(mockCartItem.length);
  });

  test('should render empty message if cartItem is empty.', () => {
    const mockCartItem = [];
    const mockProps = {
      cartItem: mockCartItem,
      history: mockHistory,
      dispatch: mockDispatch,
    };
    const wrapper2 = shallow(<CartDropdown {...mockProps} />);
    expect(wrapper2.exists('.empty-message')).toBeTruthy();
  });
});

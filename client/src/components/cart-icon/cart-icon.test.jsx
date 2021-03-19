import React from 'react';
import { shallow } from '../../setupTests';
import { CartIcon } from './cart-icon.component';
import { ToggleHiddenCart } from '../../redux/cart/cart.action';

describe('Testing: CartIcon component!', () => {
  const mockItemCount = 1;
  const mockDispatch = jest.fn();

  const mockProps = {
    itemCount: mockItemCount,
    dispatch: mockDispatch,
  };

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CartIcon {...mockProps} />);
  });

  test('should render CartIcon component.', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  test('should dispatch ToggleHiddenCart action when clicked on icon.', () => {
    wrapper.find('.cart-icon').simulate('click');
    expect(mockDispatch).toHaveBeenCalledWith(ToggleHiddenCart());
  });

  test('should render itemCount properly.', () => {
    expect(wrapper.find('.item-count').text()).toBe('1');
  });
});

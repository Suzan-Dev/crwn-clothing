import React from 'react';
import { shallow } from '../../setupTests';
import { CheckoutItem } from './checkout-item.component';

describe('Testing: CheckoutItem component!', () => {
  const mockCartItem = {
    imageUrl: 'www.testImage.com',
    price: 9,
    name: 'PS5',
    quantity: 2,
  };
  const mockRemoveItem = jest.fn();
  const mockIncreaseItem = jest.fn();
  const mockDecreaseItem = jest.fn();

  const mockProps = {
    cartItem: mockCartItem,
    removeItem: mockRemoveItem,
    increaseItem: mockIncreaseItem,
    decreaseItem: mockDecreaseItem,
  };

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CheckoutItem {...mockProps} />);
  });

  test('should render CheckoutItem component.', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  test('should dispatch decreaseItem action when left arrow is clicked.', () => {
    wrapper.find('.quantity').childAt(0).simulate('click');
    expect(mockDecreaseItem).toHaveBeenCalledWith(mockCartItem);
  });

  test('should dispatch increaseItem action when right arrow is clicked.', () => {
    wrapper.find('.quantity').childAt(2).simulate('click');
    expect(mockIncreaseItem).toHaveBeenCalledWith(mockCartItem);
  });

  test('should dispatch removeItem action when remove button is clicked.', () => {
    wrapper.find('.remove-btn').simulate('click');
    expect(mockRemoveItem).toHaveBeenCalledWith(mockCartItem);
  });
});

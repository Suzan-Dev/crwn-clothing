import React from 'react';
import { shallow } from '../../setupTests';
import { CheckoutPage } from './checkout.component';

describe('Testing: CheckoutPage component!', () => {
  const mockCartItems = [{ id: 1 }, { id: 2 }];
  const mockCartTotal = 100;

  const mockProps = {
    cartItems: mockCartItems,
    cartTotal: mockCartTotal,
  };

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CheckoutPage {...mockProps} />);
  });

  test('should render CheckoutPage component.', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  test('should have equal num of CheckoutItem component as objects in cartItems.', () => {
    expect(wrapper.find('Connect(CheckoutItem)').length).toBe(mockCartItems.length);
  });

  test('should pass cartTotal prop to StripeButton component.', () => {
    expect(wrapper.find('StripeButton').prop('price')).toBe(100);
  });
});

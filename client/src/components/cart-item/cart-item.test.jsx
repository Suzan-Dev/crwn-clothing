import React from 'react';
import { shallow } from '../../setupTests';
import CartItem from './cart-item.component';

const mockProps = {
  imageUrl: 'www.testImage.com',
  price: 9,
  name: 'PS5',
  quantity: 2,
};
const wrapper = shallow(<CartItem item={mockProps} />);

test('should render CartItem component.', () => {
  expect(wrapper.debug()).toMatchSnapshot();
});

import React from 'react';
import { shallow } from '../../setupTests';
import { CollectionItem } from './collection-item.component';

describe('Testing: CollectionItem component!', () => {
  const mockItem = {
    imageUrl: 'www.testImage.com',
    price: 9,
    name: 'PS5',
  };
  const mockAddItem = jest.fn();

  const mockProps = {
    item: mockItem,
    addItem: mockAddItem,
  };

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CollectionItem {...mockProps} />);
  });

  test('should render CollectionItem component.', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  test('should dispatch addItem action when add to cart button is clicked.', () => {
    wrapper.find('CustomButton').simulate('click');
    expect(mockAddItem).toHaveBeenCalledWith(mockItem);
  });

  test('should render name & price prop correctly.', () => {
    expect(wrapper.find('.name').text()).toBe(mockItem.name);
    expect(+wrapper.find('.price').text()).toBe(mockItem.price);
  });
});

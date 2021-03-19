import React from 'react';
import { shallow } from '../../setupTests';
import CollectionPreview from './collection-preview.component';

describe('Testing: CollectionPreview component!', () => {
  const mockTitle = 'Hello World';
  const mockItems = [{ id: 1 }, { id: 2 }];

  const mockProps = {
    title: mockTitle,
    items: mockItems,
  };

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CollectionPreview {...mockProps} />);
  });

  test('should render CollectionPreview component.', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  test('should render title prop correctly.', () => {
    expect(wrapper.find('.title').text()).toBe(mockTitle);
  });

  test('should render num of connected CollectionItem component as in items array.', () => {
    expect(wrapper.find('Connect(CollectionItem)').length).toBe(mockItems.length);
  });
});

import React from 'react';
import { shallow } from '../../setupTests';
import { CollectionPage } from './collection.component';

describe('Testing: CollectionPage component!', () => {
  const mockCollection = {
    title: 'Test',
    items: [{ id: 1 }, { id: 2 }],
  };

  const mockProps = {
    collection: mockCollection,
  };

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CollectionPage {...mockProps} />);
  });

  test('should render CollectionPage component.', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  test('should render title prop correctly.', () => {
    expect(wrapper.find('.title').text()).toBe(mockCollection.title);
  });

  test('should render the same number of CollectionItems as in collection array.', () => {
    expect(wrapper.find('Styled(Connect(CollectionItem))').length).toBe(mockCollection.items.length);
  });
});

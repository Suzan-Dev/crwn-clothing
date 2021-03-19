import React from 'react';
import { shallow } from '../../setupTests';
import { CollectionOverview } from './collection-overview.component';

describe('Testing: CollectionOverview component!', () => {
  const mockCollections = [{ id: 1 }, { id: 2 }];

  const mockProps = {
    collections: mockCollections,
  };

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CollectionOverview {...mockProps} />);
  });

  test('should render CollectionOverview component.', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  test('should render equal num of CollectionPreview component as in collections array.', () => {
    expect(wrapper.find('CollectionPreview').length).toBe(mockCollections.length);
  });
});

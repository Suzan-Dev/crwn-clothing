import React from 'react';
import { shallow } from '../../setupTests';
import { Directory } from './directory.component';

describe('Testing: Directory component!', () => {
  const mockSections = [{ id: 1 }, { id: 2 }];

  const mockProps = {
    sections: mockSections,
  };

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Directory {...mockProps} />);
  });

  test('should render Directory component.', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  test('should render num of withRouter Directory component as in sections array.', () => {
    expect(wrapper.find('MenuItem').length).toBe(mockSections.length);
  });
});

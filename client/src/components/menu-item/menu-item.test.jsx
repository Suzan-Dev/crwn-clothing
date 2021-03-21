import React from 'react';
import { shallow } from '../../setupTests';
import { MenuItem } from './menu-item.component';

describe('Testing: MenuItem component!', () => {
  const mockTitle = 'hats';
  const mockImageUrl = 'testImage';
  const mockSize = 'large';
  const mockLinkUrl = '/hats';
  const mockHistory = {
    push: jest.fn(),
  };
  const mockMatch = {
    path: '/shop',
  };

  const mockProps = {
    title: mockTitle,
    imageUrl: mockImageUrl,
    size: mockSize,
    linkUrl: mockLinkUrl,
    history: mockHistory,
    match: mockMatch,
  };

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MenuItem {...mockProps} />);
  });

  test('should render MenuItem component.', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  test('should render title correctly.', () => {
    expect(wrapper.find('.title').text()).toBe(mockTitle);
  });

  test('should call history.push with the right string when MenuItem is clicked.', () => {
    wrapper.find('.menu-item').simulate('click');
    expect(mockHistory.push).toHaveBeenCalledWith(`${mockMatch.path}${mockLinkUrl}`);
  });
});

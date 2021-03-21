import React from 'react';
import { shallow } from '../../setupTests';
import { Header } from './header.component';

describe('Testing: Header component!', () => {
  const mockSignOutStart = jest.fn();
  const mockCurrentUser = {
    uid: '1',
  };
  const mockHidden = true;

  const mockProps = {
    signOutStart: mockSignOutStart,
    currentUser: mockCurrentUser,
    hidden: mockHidden,
  };

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header {...mockProps} />);
  });

  test('should render Header component.', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  test('should not render CartDropdownContainer component.', () => {
    expect(wrapper.exists('CartDropdownContainer')).toBeFalsy();
  });

  describe('If currentUser is present!', () => {
    test('should render Sign Out text.', () => {
      expect(wrapper.find('.sign-out').text()).toBe('Sign Out');
    });

    test('should call signOutStart method when Sign Out is clicked', () => {
      wrapper.find('.sign-out').simulate('click');
      expect(mockSignOutStart).toHaveBeenCalled();
    });
  });

  describe('If currentUser is null!', () => {
    const mockProps2 = {
      signOutStart: mockSignOutStart,
      currentUser: null,
      hidden: mockHidden,
    };
    const wrapper2 = shallow(<Header {...mockProps2} />);

    test('should render Sign In text.', () => {
      expect(wrapper2.find('.sign-in').text()).toBe('Sign In');
    });
  });
});

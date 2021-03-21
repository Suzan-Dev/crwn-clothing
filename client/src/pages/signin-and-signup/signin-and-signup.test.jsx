import React from 'react';
import { shallow } from '../../setupTests';
import SignInAndSignUpPage from './signin-and-signup.component';

test('should render SignInAndSignUpPage component', () => {
  expect(shallow(<SignInAndSignUpPage />).debug()).toMatchSnapshot();
});

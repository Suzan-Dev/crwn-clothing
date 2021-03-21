import React from 'react';
import { shallow } from '../../setupTests';
import HomePage from './homepage.component';

test('should render Homepage component', () => {
  expect(shallow(<HomePage />).debug()).toMatchSnapshot();
});

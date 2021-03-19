import React from 'react';
import { shallow } from '../../setupTests';
import CustomButton from './custom-button.component';

describe('Testing: CustomButton component!', () => {
  const wrapper = shallow(<CustomButton />);

  test('should render CustomButton component.', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });
});

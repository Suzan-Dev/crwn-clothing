import React from 'react';
import { shallow } from '../../setupTests';
import FormInput from './form-input.component';

describe('Testing: FormInput component!', () => {
  const mockHandleChange = jest.fn();
  const mockLabel = 'Email';
  const mockValue = 'test@gmail.com';

  const mockProps = {
    handleChange: mockHandleChange,
    label: mockLabel,
    value: mockValue,
  };

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<FormInput {...mockProps} />);
  });

  test('should render FormInput component.', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  test('should call handleChange method when input changes.', () => {
    wrapper.find('.form-input').simulate('change');
    expect(mockHandleChange).toHaveBeenCalled();
  });

  test('should render label if there is a label.', () => {
    expect(wrapper.exists('.form-input-label')).toBeTruthy();
  });

  test('should not render label if there is no label.', () => {
    const mockProps2 = {
      ...mockProps,
      label: '',
    };
    const wrapper2 = shallow(<FormInput {...mockProps2} />);

    expect(wrapper2.exists('.form-input-label')).not.toBeTruthy();
  });
});

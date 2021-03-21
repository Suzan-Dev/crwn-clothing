import React from 'react';
import { shallow } from '../../setupTests';
import WithSpinner from './with-spinner.component';
import Spinner from '../spinner/spinner.component';

describe('Testing: WithSpinner higher order component!', () => {
  const TestComponent = () => <div className='test' />;
  const WrappedComponent = WithSpinner(TestComponent);

  describe('is isLoading prop is true.', () => {
    test('should render Spinner component.', () => {
      const wrapper = shallow(<WrappedComponent isLoading />);
      expect(wrapper.exists(Spinner)).toBeTruthy();
    });

    test('should not render other component.', () => {
      const wrapper = shallow(<WrappedComponent isLoading />);
      expect(wrapper.exists(TestComponent)).toBeFalsy();
    });
  });

  describe('is isLoading prop is false.', () => {
    test('should not render Spinner component.', () => {
      const wrapper = shallow(<WrappedComponent isLoading={false} />);
      expect(wrapper.exists(Spinner)).toBeFalsy();
    });

    test('should render other component.', () => {
      const wrapper = shallow(<WrappedComponent isLoading={false} />);
      expect(wrapper.exists(TestComponent)).toBeTruthy();
    });
  });
});

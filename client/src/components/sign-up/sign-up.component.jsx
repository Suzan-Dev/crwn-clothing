import React, { useState } from 'react';
import { connect } from 'react-redux';

import './sign-up.style.scss';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import { signUpStart } from '../../redux/user/user.action';

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords didn't match.");
      return;
    } else {
      signUpStart(email, password, displayName);
    }
  };

  return (
    <div className='sign-up'>
      <p className='title'>I don't have an account</p>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          handleChange={handleChange}
          value={displayName}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          handleChange={handleChange}
          value={email}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          handleChange={handleChange}
          value={password}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          handleChange={handleChange}
          value={confirmPassword}
          label='Confirm Password'
          required
        />

        <div className='btn'>
          <CustomButton type='submit'>Sign up</CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (email, password, displayName) =>
    dispatch(signUpStart({ email, password, displayName })),
});

export default connect(null, mapDispatchToProps)(SignUp);

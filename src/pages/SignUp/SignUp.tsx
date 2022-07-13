import React, { useState } from 'react';

import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';

import CustomButton from '../../shared/components/CustomButton/CustomButton';
import { LOGIN_INPUTS } from '../../shared/constants/auth';
import { LOGIN_ROUTE } from '../../shared/constants/routes';
import { useAuth } from '../../shared/contexts/AuthContext/AuthContext';
import useForm from '../../shared/hooks/useForm/useForm';

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const { sessionSignUp } = useAuth();

  const onSubmit = async () => {
    setLoading(true);
    await sessionSignUp(inputs?.email, inputs?.password);
    setLoading(false);
  };

  const { inputs, handleInputChange, handleSubmit } = useForm(LOGIN_INPUTS, onSubmit);

  return (
    <div className='auth-page'>
      <div className='auth-page__form'>
        <div className='auth-page__form__title'>GymTrack - SignUp</div>
        <div className='auth-page__form__inputs'>
          <TextField
            id='login-email-input'
            name='email'
            label='Email'
            variant='standard'
            onChange={handleInputChange}
            value={inputs.email}
            required
          />
          <TextField
            id='login-password-input'
            label='Password'
            name='password'
            variant='standard'
            type='password'
            onChange={handleInputChange}
            value={inputs.password}
            required
          />
          <TextField
            id='login-password-input'
            label='Confirm password'
            name='password-confirm'
            variant='standard'
            type='password'
            onChange={handleInputChange}
            value={inputs.passwordConfirm}
            required
          />
        </div>

        <div className='auth-page__form__link'>
          Already have an account?
          <Link className='link' to={LOGIN_ROUTE}>
            Sign In.
          </Link>
        </div>

        <CustomButton buttonType='primary' action={handleSubmit} loading={loading}>
          Sign Up
        </CustomButton>
      </div>
    </div>
  );
};

export default SignUp;

import React, { useState } from 'react';

import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';

import CustomButton from '../../shared/components/CustomButton/CustomButton';
import { LOGIN_INPUTS } from '../../shared/constants/auth';
import { SIGN_UP_ROUTE } from '../../shared/constants/routes';
import { useAuth } from '../../shared/contexts/AuthContext/AuthContext';
import useForm from '../../shared/hooks/useForm/useForm';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { sessionLogin } = useAuth();

  const onSubmit = async () => {
    setLoading(true);
    await sessionLogin(inputs?.email, inputs?.password);
    setLoading(false);
  };

  const { inputs, handleInputChange, handleSubmit } = useForm(LOGIN_INPUTS, onSubmit);

  const validInputs = () => inputs?.email && inputs?.password;

  return (
    <div className='auth-page'>
      <div className='auth-page__form'>
        <div className='auth-page__form__title'>GymTrack - Sign In</div>
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
        </div>

        <div className='auth-page__form__link'>
          New to GymTrack?
          <Link className='link' to={SIGN_UP_ROUTE}>
            Create an account.
          </Link>
        </div>

        <CustomButton
          buttonType='primary'
          action={handleSubmit}
          loading={loading}
          disabled={!validInputs()}
        >
          Sign In
        </CustomButton>
      </div>
    </div>
  );
};

export default Login;

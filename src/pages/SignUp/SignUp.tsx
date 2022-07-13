import React, { useState } from 'react';

import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';

import CustomButton from '../../shared/components/CustomButton/CustomButton';
import { LOGIN_INPUTS, SIGN_UP_ERRORS } from '../../shared/constants/auth';
import { LOGIN_ROUTE } from '../../shared/constants/routes';
import { useAuth } from '../../shared/contexts/AuthContext/AuthContext';
import useForm from '../../shared/hooks/useForm/useForm';
import { usePasswordValidation } from '../../shared/hooks/usePasswordValidation/usePasswordValidation';

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const { sessionSignUp } = useAuth();

  const onSubmit = async () => {
    setLoading(true);
    await sessionSignUp(inputs?.email, inputs?.password);
    setLoading(false);
  };

  const { inputs, handleInputChange, handleSubmit } = useForm(LOGIN_INPUTS, onSubmit);

  const validation = usePasswordValidation({
    password: inputs?.password,
    passwordConfirm: inputs?.passwordConfirm,
  });

  const hasError = () => {
    return !validation.match || !validation.confirmPassIsFill || !validation.validLength;
  };

  const displayError = () => {
    if (!validation.match) return SIGN_UP_ERRORS['match'];
    if (!validation.validLength) return SIGN_UP_ERRORS['length'];
    if (!validation.confirmPassIsFill) return SIGN_UP_ERRORS['required'];
  };

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
            error={hasError()}
            id='login-password-confirm-input'
            label='Confirm password'
            name='passwordConfirm'
            variant='standard'
            type='password'
            onChange={handleInputChange}
            value={inputs.passwordConfirm}
            helperText={displayError()}
            required
          />
        </div>

        <div className='auth-page__form__link'>
          Already have an account?
          <Link className='link' to={LOGIN_ROUTE}>
            Sign In.
          </Link>
        </div>

        <CustomButton
          buttonType='primary'
          action={handleSubmit}
          loading={loading}
          disabled={!validation.isValidPassword()}
        >
          Sign Up
        </CustomButton>
      </div>
    </div>
  );
};

export default SignUp;

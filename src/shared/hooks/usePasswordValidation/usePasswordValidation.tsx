import { useState, useEffect } from 'react';

export const usePasswordValidation = ({ password = '', passwordConfirm = '' }) => {
  const [validLength, setValidLength] = useState(false);
  const [match, setMatch] = useState(false);
  const [confirmPassIsFill, setConfirmIsFill] = useState(false);

  const isValidPassword = () => match && validLength && confirmPassIsFill;

  useEffect(() => {
    setValidLength(password.length >= 8 ? true : false);
    setMatch(password && password === passwordConfirm ? true : false);
    setConfirmIsFill(passwordConfirm !== '' ? true : false);
  }, [password, passwordConfirm]);

  return {
    validLength,
    match,
    confirmPassIsFill,
    isValidPassword,
  };
};

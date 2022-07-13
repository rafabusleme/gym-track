import React from 'react';

import { CircularProgress } from '@mui/material';

import { GenericVoidFunction } from '../../types/genericTypes';

import './CustomButton.scss';

interface CustomButtonProps {
  buttonType: 'primary' | 'secondary';
  action?: GenericVoidFunction;
  loading?: boolean;
  disabled?: boolean;
  classes?: string;
  children: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  loading,
  buttonType,
  action,
  disabled,
  children,
}) => {
  return (
    <button
      disabled={loading || disabled}
      className={`custom-button custom-button--${buttonType}`}
      onClick={action}
    >
      {loading && (
        <CircularProgress
          className={
            buttonType === 'primary'
              ? 'custom-button__loading--primary'
              : 'custom-button__loading--secondary'
          }
          size={20}
        />
      )}
      {!loading && children}
    </button>
  );
};

export default CustomButton;

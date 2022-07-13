import React from 'react';

import './AuthLayout.scss';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className='auth-layout'>
      <div className='auth-layout__content'>
        <div className='auth-layout__content__main'>{children}</div>
        <footer className='auth-layout__content__footer'>
          @GymTrack - A new way to check your progress
        </footer>
      </div>
    </div>
  );
};

export default AuthLayout;

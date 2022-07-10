import React from 'react';

import Navbar from '../../components/Navbar/Navbar';

import './AppLayout.scss';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className='app-layout'>
      <div className='app-layout__navbar'>
        <Navbar />
      </div>
      <div className='app-layout__content'>
        <div className='app-layout__content__main'>{children}</div>
        <footer className='app-layout__content__footer'>
          @GymTrack - A new way to check your progress
        </footer>
      </div>
    </div>
  );
};

export default AppLayout;

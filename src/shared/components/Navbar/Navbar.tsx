import React from 'react';

import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

import { NAVBAR_MENU_ITEMS } from '../../constants/navbar';
import { useAuth } from '../../contexts/AuthContext/AuthContext';

import './Navbar.scss';

const Navbar = () => {
  const { sessionLogout } = useAuth();
  const navigate = useNavigate();

  const renderNavbarMenu = () =>
    NAVBAR_MENU_ITEMS.map((item) => (
      <div className='navbar__menu__item' key={item.id} onClick={() => item.action(navigate)}>
        {item.title}
      </div>
    ));

  return (
    <div className='navbar'>
      <div className='navbar__header'>
        <FitnessCenterIcon />
        GymTrack
      </div>
      <div className='navbar__menu'>{renderNavbarMenu()}</div>
      <div className='navbar__footer' onClick={sessionLogout}>
        <div className='navbar__icon'>
          <LogoutIcon />
        </div>
        Logout
      </div>
    </div>
  );
};

export default Navbar;

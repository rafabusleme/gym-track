import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Metrics from '../pages/Metrics/Metrics';
import SignUp from '../pages/SignUp/SignUp';
import Trainings from '../pages/Trainings/Trainings';
import {
  HOME_ROUTE,
  LOGIN_ROUTE,
  METRICS_ROUTE,
  SIGN_UP_ROUTE,
  TRAININGS_ROUTE,
} from '../shared/constants/routes';
import AppLayout from '../shared/layouts/AppLayout/AppLayout';
import AuthLayout from '../shared/layouts/AuthLayout/AuthLayout';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path={HOME_ROUTE}
        element={
          <AppLayout>
            <Home />
          </AppLayout>
        }
      />
      <Route
        path={TRAININGS_ROUTE}
        element={
          <AppLayout>
            <Trainings />
          </AppLayout>
        }
      />
      <Route
        path={METRICS_ROUTE}
        element={
          <AppLayout>
            <Metrics />
          </AppLayout>
        }
      />
      <Route
        path={LOGIN_ROUTE}
        element={
          <AuthLayout>
            <Login />
          </AuthLayout>
        }
      />
      <Route
        path={SIGN_UP_ROUTE}
        element={
          <AuthLayout>
            <SignUp />
          </AuthLayout>
        }
      />
      <Route
        path='*'
        element={
          <AuthLayout>
            <Login />
          </AuthLayout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;

import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Metrics from '../pages/Metrics/Metrics';
import Trainings from '../pages/Trainings/Trainings';
import { HOME_ROUTE, METRICS_ROUTE, TRAININGS_ROUTE } from '../shared/constants/routes';
import AppLayout from '../shared/layouts/AppLayout/AppLayout';

const AppRoutes = () => {
  return (
    <AppLayout>
      <Routes>
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route path={TRAININGS_ROUTE} element={<Trainings />} />
        <Route path={METRICS_ROUTE} element={<Metrics />} />
        <Route index element={<Home />} />
      </Routes>
    </AppLayout>
  );
};

export default AppRoutes;

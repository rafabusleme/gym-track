import { NavigateFunction } from 'react-router-dom';

import { INavbarMenuItem } from '../interfaces/layouts';
import { HOME_ROUTE, METRICS_ROUTE, TRAININGS_ROUTE } from './routes';

export const NAVBAR_MENU_ITEMS: INavbarMenuItem[] = [
  {
    id: 1,
    title: 'Home',
    actionPath: HOME_ROUTE,
    action: (navigate: NavigateFunction) => {
      navigate(HOME_ROUTE);
    },
  },
  {
    id: 2,
    title: 'Trainings',
    actionPath: TRAININGS_ROUTE,
    action: (navigate: NavigateFunction) => {
      navigate(TRAININGS_ROUTE);
    },
  },
  {
    id: 3,
    title: 'Metrics',
    actionPath: METRICS_ROUTE,
    action: (navigate: NavigateFunction) => {
      navigate(METRICS_ROUTE);
    },
  },
];

import { GenericVoidFunction } from '../types/genericTypes';

export interface INavbarMenuItem {
  id: number;
  title: string;
  activeIcon?: string;
  disableIcon?: string;
  tabletIcon?: string;
  actionPath: string;
  action: GenericVoidFunction;
}
